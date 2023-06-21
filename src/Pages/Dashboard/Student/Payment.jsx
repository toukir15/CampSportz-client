import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import useSelectedCourses from "../../../components/Hooks/useSelectedCourses";

const stripePromise = loadStripe(
  "pk_test_51NEr7SA8JnQBN0GYGrZbhk9uc6UqfKMEVpFAdMydgpUpafSESu74sTxK0b25xttgmeW6tawn6DsofvvIXTasu10w00veXCd5gX"
);
export default function Payment() {
  const [selectedCourses] = useSelectedCourses();
  const total = selectedCourses.reduce((sum, course) => course?.price + sum, 0);
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm selectedCourses={selectedCourses} price={total} />
    </Elements>
  );
}
