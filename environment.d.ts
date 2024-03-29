declare global {
    namespace NodeJS {
        interface ProcessEnv {
            STRIPE_SECRET_KEY: string;
            STRIPE_PRODUCT_ID: string;
            STRIPE_SUCCESS_URL: string;
            STRIPE_CANCEL_URL: string;
            CF_PAGES_URL: string | undefined;
            CURRENCY_API_URL: string;
            CURRENCY_API_KEY: string;
        }
    }
}

export {}