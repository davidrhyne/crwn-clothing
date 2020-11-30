import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    // stripe wants price in US cents
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HtGXoCPw7EaN00SR7yeH5A9r4WpFOvbHDaak3OfiYnHFxuZOYZNvrJrshN0I62z55wpmfnW3zjQll0YuReip1wJ00VVYTrZUa'
    
    const onToken = token => {
        // token is the on success callback, normally passed  to backend
        console.log("token = ", token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton; 