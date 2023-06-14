export default function SectionTitle({ heading }) {
  return (
    <div>
      <div className=" flex justify-center">
        <div className="relative">
          <h1 className="text-4xl font-medium uppercase text-center my-20 ">
            {heading}
          </h1>
          <div className="w-20 h-1 bg-yellow-500  absolute top-[65%] left-[50%] transform translate-x-[-50%] "></div>
        </div>
      </div>
    </div>
  );
}
