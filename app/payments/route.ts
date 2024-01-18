import { Nunito } from 'next/font/google';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const MAX_AMOUNT = 10000;
export async function POST(request: Request) {
    let body;
    try {
        body = await request.json();
    } catch {
        return new Response('Invalid body.', { status: 400 });
    }

    const amount = body.amount;
    if(!amount) {
        return new Response('Invalid amount', { status: 400 });
    }
    if(Number(amount) > MAX_AMOUNT) {
        return new Response('Amount must be 10000 or less.', { status: 400 });
    }

    const price = await stripe.prices.create({
        currency: 'usd',
        product: process.env.STRIPE_PRODUCT_ID,
        custom_unit_amount: {
            enabled: true,
            preset: Number(amount) * 100,
        }
    })

    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: price.id,
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${process.env.STRIPE_SUCCESS_URL}?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: process.env.STRIPE_CANCEL_URL,
    });
    
    return Response.json({ url: session.url });
}