import PaymentHeader from "./components/PaymentHeader";
import PaymentChanel from "./components/PaymentChanel";

const Payment = () => {
    return (
        <main className="min-h-screen bg-white">
            <PaymentHeader />
            <PaymentChanel />
        </main>
    );
};

export default Payment;
