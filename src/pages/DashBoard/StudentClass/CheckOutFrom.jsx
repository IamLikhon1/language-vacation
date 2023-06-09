import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckOutFrom = () => {
    const stripe=useStripe()
    const elements=useElements()
    const [cardError,setCardError]=useState('')


    const handleSubmit= async (event)=>{
        event.preventDefault()
        if(!stripe||!elements){
            return
        }
        const card=elements.getElement(CardElement)
        if(card===null){
            return
        }
      const {error,paymentMethod}=await stripe.createPaymentMethod({
        type:'card',
        card
      })
      if(error){
        console.log('error',error)
        setCardError(error.message)
      }
      else{
        setCardError('')
        console.log('payment',paymentMethod)
      }
    }
    

    return (
        <div>
            <form className="w-2/3" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <div className="text-center">
      <button className="btn btn-info mt-5 " type="submit" disabled={!stripe}>
        Pay
      </button>
      </div>
    </form>
    {cardError&& <p className="text-red-500">{cardError}</p>}
            
        </div>
    );
};

export default CheckOutFrom;