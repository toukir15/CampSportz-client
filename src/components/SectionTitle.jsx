export default function SectionTitle({ heading }) {
  return (
    <div data-aos="fade-up">
      <div className=" flex justify-center">
        <div className="relative">
          <h1 className="text-2xl md:text-4xl font-medium uppercase text-center my-10 md:my-20 ">
            {heading}
          </h1>
          <div className="md:w-[500px] w-[200px] h-[4px] bg-[#DBFC00]  absolute top-[65%] left-[50%] transform translate-x-[-50%] "></div>
        </div>
      </div>
    </div>
  );
}
