import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
// import "./CheckoutForm.css";

export default function CheckoutForm({ price, selectedCourses }) {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  // console.log(selectedCourses);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    if (price > 0) {
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setClientSecret(data.clientSecret);
        });
    }
  }, [price]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error);
      setError(error.message);
    } else {
      console.log(paymentMethod, "payment");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.name || "unknown",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    console.log("payment intent", paymentIntent);

    setProcessing(false);
    if (paymentIntent?.status === "succeeded") {
      // const transactionId = paymentIntent.id;
      setTransactionId(paymentIntent.id);
      const coursesName = await selectedCourses.map(
        (course) => course.course_name
      );
      const coursesId = await selectedCourses.map((course) => course._id);
      const selectedCoursesId = await selectedCourses.map(
        (course) => course.course_id
      );
      // console.log(selectedCoursesId, coursesId); 

      const paymentHistory = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: selectedCourses.length,
        selected_courses_id: selectedCoursesId,
        courses_id: coursesId,
        orderStatus: "pending",
        courses_name: coursesName,
      };

      const payment = {
        selected_courses_id: selectedCoursesId,
      };
      // payment
      fetch("http://localhost:5000/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));

      // payment history
      fetch("http://localhost:5000/paymentsHistory", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(paymentHistory),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <>
      <form className="w-2/4" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary mt-8"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {error ? <p className="text-red-500 text-left">{error}</p> : ""}
      {transactionId && (
        <p className="text-green-500">
          Transaction complete with transactionId: {transactionId}
        </p>
      )}
    </>
  );
}
