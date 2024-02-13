"use server";

import { CheckoutOrderParams } from "@/types";

export const checkoutOrder = async (order: CheckoutOrderParams) => {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: '{{PRICE_ID}}',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,

  } catch (error) {
    throw error;
  }
};
