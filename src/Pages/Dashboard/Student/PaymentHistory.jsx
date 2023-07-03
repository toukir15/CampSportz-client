import { useContext, useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import axios from "axios";
import { AuthContext } from "../../../Provider/AuthProvider";
import moment from "moment/moment";

export default function PaymentHistory() {
  const [payments, setPayments] = useState([]);
  const { isNight } = useContext(AuthContext);

  // payment history api req
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_livesite_url}/paymentsHistory`)
      .then((response) => {
        const data = response?.data;
        setPayments(data);
      })
      .catch((error) => {
        console.error("Error retrieving data:", error);
      });
  }, []);
  console.log(payments);

  return (
    <div className="w-full">
      <SectionTitle heading={"Payment History"}></SectionTitle>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-900 dark:text-white uppercase">
          <tr>
            <th scope="col" className="px-6 py-3 dark:text-white">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              user email
            </th>

            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Transaction Id
            </th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr
              key={payment?._id}
              className={`${
                isNight ? "text-white" : "text-gray-900 dark:text-white"
              }`}
            >
              <td className="px-6 py-4  ">{index + 1}</td>

              <td className="px-6 py-4  ">
                {moment(payment.date).format("YYYY-MM-DD")}
              </td>
              <td className="px-6 py-4  "> {payment?.email}</td>
              <td className="px-6 py-4  ">$ {Math.floor(payment?.price)}</td>
              <td className="px-6 py-4">{payment?.transactionId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
