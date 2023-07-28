import Stripe from "stripe"

export default defineEventHandler(async (event) => {
    const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY!, { apiVersion: '2022-11-15' })
    const priceId = await readBody(event)
    const url = event.node.req.headers.origin
    const paymentData = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: priceId,
                quantity: 1
            }
        ],
        mode: 'subscription',
        payment_method_types: ['card', 'sepa_debit'],
        allow_promotion_codes: true,
        success_url: `${url}/checkout/success`,
        cancel_url: `${url}/checkout/cancel`,
        automatic_tax: { enabled: true }
    })
    return paymentData
})
