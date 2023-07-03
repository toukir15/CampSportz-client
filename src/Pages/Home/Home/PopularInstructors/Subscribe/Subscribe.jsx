import { motion } from "framer-motion";
export default function Subscribe() {
  return (
    <div className=" md:w-3/4  md:mx-auto mx-6 md:h-72 h-84 p-4 bg-[#36d7b7] flex flex-col items-center justify-center space-y-5 mb-12">
      <h1 className="text-2xl md:text-4xl text-center">
        Subscribe Now Forget <br /> 20% Discount Every Courses
      </h1>
      <p className="text-center">
        Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed
        magna purus, fermentum eu
      </p>
      <div>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered border-black border-2 w-full max-w-xs"
          />
          <input
            className="bg-black text-white px-3 md:px-4 rounded"
            type="submit"
            value={"Submit"}
          ></input>
        </div>
      </div>
    </div>
  );
}
