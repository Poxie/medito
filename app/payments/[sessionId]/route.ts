import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(request: Request, { params }: { params: { sessionId: string } }) {
    try {
        const session = await stripe.checkout.sessions.retrieve(params.sessionId);
        return Response.json({
            name: session.customer_details?.name,
            amount: (session.amount_total || 0) / 100,
            currency: session.currency,
            timestamp: session.created * 1000,
        });
    } catch(error: any) {
        if(error.statusCode === 404) {
            return new Response('Session not found.', { status: 404 });
        }
        return new Response(`Internal server error: ${error.message}`, { status: 500 });
    }
}

export const runtime = 'edge';