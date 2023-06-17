import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import axios from "axios";

export default function PaymentHistory() {
  const [payments, setPayments] = useState([]);

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
        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
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
            <tr key={payment._id} className="  dark:bg-gray-800 ">
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
