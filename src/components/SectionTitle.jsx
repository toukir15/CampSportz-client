export default function SectionTitle({ heading }) {
  return (
    <div>
      <div className=" flex justify-center">
        <div className="relative">
          <h1 className="text-4xl font-medium uppercase text-center my-20 ">
            {heading}
          </h1>
          <div className="w-40 h-1 bg-pink-500  absolute bottom-[46%]  left-[103%]"></div>
          <div className="w-40 h-1 bg-pink-500  absolute bottom-[46%]  right-[103%]"></div>
        </div>
      </div>
    </div>
  );
}
