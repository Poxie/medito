# Medito Fundraiser App
**The site is live [here](https://medito.pages.dev/).**

This is a fundraiser single page application for [Medito Foundation](https://meditofoundation.org) created by [Poxen](https://poxen.dev).<br/>
The goal with this site is to provide a customizable and flexible experience, allowing for any type of campaign.

Use these credentials to test the Stripe integration and the success callback after payment:
- Card number: 4242 4242 4242 4242
- MM/YY: 12/26
- CVV: 222

## How can I customize the content of the site?
All text content on the site can be configured in the [/assets/data/](/assets/data) directory. In here, different sections of the site can be changed, like the campaign info, rewards, frequently asked questions, etc.
- Title and description of the current fundraiser campaign: [/assets/data/campaign/index.json](/assets/data/campaign/index.json).
- Reward tiers and their associated rewards: [/assets/data/tiers/index.json](/assets/data/tiers/index.json).
- Frequently asked questions: [/assets/data/faq/index.json](/assets/data/faq/index.json).

## How can I change the metadata for the site?
Metadata like title and description, as well as opengraph and twitter metadata, can all easily be configured in [/assets/data/metadata/index.json](/assets/data/metadata/index.json).
- Changing the title and description properties will change the title and description of the metadata for the site, duh..
- All opengraph metatags are available. You can just add it to the `openGraph` property, even if it's not currently in the file. It will be automatically added.
- Same goes for the twitter property. All twitter metatags can be added. Just add them to the `twitter` object as a new property.

## Can I change the appearance of the site?
Yes. All colors, widths, and heights of elements are variables and can be customized in [/app/globals.css](/app/globals.css).
- All colors on the site can be adjusted [here](https://github.com/Poxie/medito/blob/ed13b050b243de45c87b651ae7b3cf23f14235fa/app/globals.css#L6-L15).
- Widths and heights of the site, donation sections, modals, etc, can be adjusted [here](https://github.com/Poxie/medito/blob/ed13b050b243de45c87b651ae7b3cf23f14235fa/app/globals.css#L18-L22).

## How do I replace the dummy data on the site?
There are a few things that have to be changed and replaced with an actual API. Those can all be found in the [/utils/requests.ts](/utils/requests.ts) file.
- **The [`getDonationProgress`](https://github.com/Poxie/medito/blob/b8a9ad35620fd145da1b2ed73cd321e6fc6432c6/utils/requests.ts#L6-L16) function.**
    - This function is used to get the current amount donated and the current goal.
    - It takes no arguments.
    - It should return a [DonationProgress](https://github.com/Poxie/medito/blob/23ce5307a1c412cc22b52aca0882cdc20c68dac7/types.ts#L1-L4) object.
- **The [`getDonators`](https://github.com/Poxie/medito/blob/b8a9ad35620fd145da1b2ed73cd321e6fc6432c6/utils/requests.ts#L20-L29) function.**
    - This function is used to get the initial list of recent donators.
    - It takes no arguments.
    - It should return an array of [Donator](https://github.com/Poxie/medito/blob/23ce5307a1c412cc22b52aca0882cdc20c68dac7/types.ts#L5C1-L9).
- **The [`sendMessage`](https://github.com/Poxie/medito/blob/b8a9ad35620fd145da1b2ed73cd321e6fc6432c6/utils/requests.ts#L55-L62) function.**
    - This function is used to send a message from the contact form.
    - It takes a [`MessageProps`](https://github.com/Poxie/medito/blob/6caf2a47550928d65a7798456e3125222815026f/types.ts#L10C1-L14C2) object as an argument.
    - It should return the raw http response object.

Now for the Stripe functions I have implemented that are fully integrated with the Stripe API. These functions currently make fetch requests to Next13's app directory route handlers, which intereact with the Stripe API.
- **The [`getStripeLink`](https://github.com/Poxie/medito/blob/b8a9ad35620fd145da1b2ed73cd321e6fc6432c6/utils/requests.ts#L40-L51) function.**
    - This function is used in [/components/donate-form/index.tsx](https://github.com/Poxie/medito/blob/b8a9ad35620fd145da1b2ed73cd321e6fc6432c6/components/donate-form/index.tsx#L65) when the donate button is clicked.
    - It takes an amount of type string or number as an argument.
    - It returns a Stripe checkout URL.
- **The [`getDonationSession`](https://github.com/Poxie/medito/blob/b8a9ad35620fd145da1b2ed73cd321e6fc6432c6/utils/requests.ts#L32-L37) function.**
    - This function is used in [/modals/success/index.tsx](https://github.com/Poxie/medito/blob/b8a9ad35620fd145da1b2ed73cd321e6fc6432c6/modals/success/index.tsx#L20) after the user has been redirected back to the site to confirm the donation.
    - It takes a sessionId of type string as an argument.
    - It should return a [Donator](https://github.com/Poxie/medito/blob/23ce5307a1c412cc22b52aca0882cdc20c68dac7/types.ts#L5C1-L9) object.

  
## The recent donators list
Currently, a random person is fetched from an API every 12 seconds, and added to the recent donation list. This happens in [/components/donators/DonationList.tsx](https://github.com/Poxie/medito/blob/42a6de89c92379fc6805ea7a4494626e08268065/components/donators/DonationList.tsx#L34-L51). This needs to be replaced with some sort of Webhook/WebSockets implementation to listen for Stripe payments.
 
## Environment variables
Environment variables have to be declared in order for the application to work properly. Variables should be in a file called `.env.production`, or for development purposes `.env.development`, and located in the root directory.
- **STRIPE_SECRET_KEY**: Your Stripe API key.
- **STRIPE_PRODUCT_ID**: The Product ID of the 'product' used to send payments in Stripe.
- **STRIPE_SUCCESS_URL** *(not necessary if deployed to Cloudflare)*: The URL Stripe should redirect to upon a successful payment (should just be the domain of the site).
- **STRIPE_CANCEL_URL** *(not necessary if deployed to Cloudflare)*: The URL Stripe should redirect to upon a canceled payment (should just be the domain of the site).
- **CF_PAGES_URL** *(not necessary if not used with Cloudflare)*: DO NOT ADD THIS MANUALLY. CLOUDFLARE AUTOMATICALLY ADDS THIS.

## Things I would add
- An optional campaign image to give the site a little more life.
- Auto-selecting rewards if a user manually enters an amount that is greater than the reward threshold.

## Final words
If there is anything that is unclear, or not properly covered, don't hesitate to reach out and I will happily give a better explanation. I have had a lot of fun with this site, and I would gladly work with you to integrate the above.

## Fun links
- [Figma design](https://www.figma.com/file/XJLLyttYk2sUvSMcYEgj01/Untitled?type=design&node-id=0%3A1&mode=design&t=rnRytYMPQRzNdHrw-1)
