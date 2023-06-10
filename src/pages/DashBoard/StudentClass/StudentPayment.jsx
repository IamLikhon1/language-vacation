import { loadStripe } from "@stripe/stripe-js";
import CheckOutFrom from "./CheckOutFrom";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise=loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const StudentPayment = () => {
    return (
        <div>
            <h2 className="text-4xl uppercase text-center my-10 text-orange-500 font-serif">---Complete Your payment---</h2>
            <Elements stripe={stripePromise}><CheckOutFrom></CheckOutFrom></Elements>
            
        </div>
    );
};

export default StudentPayment;