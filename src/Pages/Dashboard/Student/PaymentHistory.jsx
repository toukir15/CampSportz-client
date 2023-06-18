import { useContext, useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import axios from "axios";
import { AuthContext } from "../../../Provider/AuthProvider";

export default function PaymentHistory() {
  const [payments, setPayments] = useState([]);
  const { isNight } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_livesite_url}/paymentsHistory`)
      .then((response) => {
        const data = response.data;
        setPayments(data);
      })
      .catch((error) => {
        console.error("Error retrieving data:", error);
      });
  }, []);
  console.log(payments);

  return (
    <div>
      <SectionTitle heading={"Payment History"}></SectionTitle>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          className={`text-xs ${
            isNight ? "text-white" : "text-gray-900 dark:text-gray-400"
          }  uppercase `}
        >
          <tr>
            <th scope="col" className="px-6 py-3">
              Courses Name
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
          {payments.map((payment) => (
            <tr
              key={payment._id}
              className={`${
                isNight ? "text-white" : "text-gray-900 dark:text-white"
              }`}
            >
              <td
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap "
              >
                <div className="grid gap-4">
                  {payment?.courses_name?.map((name, index) => (
                    <p key={index}>
                      {index + 1}. {name}
                    </p>
                  ))}
                </div>
              </td>
              <td className="px-6 py-4  ">$ {payment?.email}</td>
              <td className="px-6 py-4  ">$ {payment?.price}</td>
              <td className="px-6 py-4">{payment?.transactionId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
