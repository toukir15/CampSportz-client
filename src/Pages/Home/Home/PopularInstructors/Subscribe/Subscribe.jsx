import { motion } from "framer-motion";
export default function Subscribe() {
  return (
    <div className="w-3/4 mx-auto md:h-72 h-84 p-4 bg-[#36d7b7] flex flex-col items-center justify-center space-y-5 mb-12">
      <h1 className="text-4xl text-center">
        Subscribe Now Forget <br /> 20% Discount Every Courses
      </h1>
      <p className="text-center">
        Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed
        magna purus, fermentum eu
      </p>
      <div>
        <div className="flex gap-4">
          <motion.input
            drag="x"
            dragConstraints={{ right: 50, left: 50 }}
            type="text"
            placeholder="Type here"
            className="input input-bordered border-black border-2 w-full max-w-xs"
          />
          <motion.input
            drag="x"
            dragConstraints={{ right: 50, left: 50 }}
            className="bg-black text-white px-4 rounded"
            type="submit"
            value={"Submit"}
          ></motion.input>
        </div>
      </div>
    </div>
  );
}
