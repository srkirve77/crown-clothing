import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const StripeCheckoutButton = ({price}) => {
    const priceForStrip = price*100;
    const publishableKey = 'pk_test_WUBwsKExCGACLqyyuTNjp5Ob00x9qp8ZPv'
    const onToken = token => {
        alert('Payment Successful');
    }
    return (
        <StripeCheckout
            label = 'Pay Now'
            name= 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStrip}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};
export default StripeCheckoutButton;
