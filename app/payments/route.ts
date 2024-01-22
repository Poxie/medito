import { isValidCurrency } from '@/utils';
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

    const { amount, interval, currency='usd' } = body;

    try {
        const amountData = interval ? {
            recurring: interval ? { interval } : undefined,
            unit_amount: Number(amount) * 100,
        } : {
            custom_unit_amount: {
                enabled: true,
                preset: Number(amount) * 100,
            },
        }

        const price = await stripe.prices.create({
            product: process.env.STRIPE_PRODUCT_ID,
            currency,
            ...amountData,
        })
    
        const mode = interval ? 'subscription' : 'payment';
        const session = await stripe.checkout.sessions.create({
            mode,
            line_items: [
                {
                    price: price.id,
                    quantity: 1,
                },
            ],
            success_url: `${process.env.CF_PAGES_URL || process.env.STRIPE_SUCCESS_URL}?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: process.env.CF_PAGES_URL || process.env.STRIPE_CANCEL_URL,
        });

        return Response.json({ url: session.url });
    } catch(error: any) {
        return Response.json({ message: error.message }, { status: 500 });
    }
    
}

export const runtime = 'edge';