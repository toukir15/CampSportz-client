import { Children } from "react";

export default function Container({ Children }) {
  return <div className="w-[1500px] mx-auto">{Children}</div>;
}
