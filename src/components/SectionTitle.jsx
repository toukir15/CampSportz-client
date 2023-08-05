export default function SectionTitle({ heading }) {
  return (
    <div data-aos="fade-up">
      <div className=" flex justify-center">
        <div className="relative">
          <h1 className="text-2xl md:text-4xl font-medium uppercase text-center my-10 md:my-20 ">
            {heading}
          </h1>
          <div className="w-[500px] h-[2px] bg-[#36d7b7]  absolute top-[65%] left-[50%] transform translate-x-[-50%] "></div>
        </div>
      </div>
    </div>
  );
}
