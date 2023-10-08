import { BsFillRocketTakeoffFill } from "react-icons/bs";

export default function Feature() {
  return (
    <div className="md:flex my-20 hidden md:visible">
      {/* left feature  */}
      <div className="flex flex-col justify-center md:gap-16 gap-6 md:mb-0 mb-4 w-full ">
        <div data-aos="fade-right" className="flex">
          {/* text  */}
          <div className="text-right">
            <h2 className="text-2xl font-bold mb-2">THE LEADERS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
              ullamcorper
            </p>
          </div>
          {/* icon  */}
          <div className="pl-8">
            <BsFillRocketTakeoffFill className="text-4xl mt-4" />
          </div>
        </div>
        <div data-aos="fade-right" className="flex">
          {/* text  */}
          <div className="text-right">
            <h2 className="text-2xl font-bold mb-2">THE LEADERS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
              ullamcorper
            </p>
          </div>
          {/* icon  */}
          <div className="pl-8">
            <BsFillRocketTakeoffFill className="text-4xl mt-4" />
          </div>
        </div>
        <div data-aos="fade-right" className="flex">
          {/* text  */}
          <div className="text-right">
            <h2 className="text-2xl font-bold mb-2">THE LEADERS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
              ullamcorper
            </p>
          </div>
          {/* icon  */}
          <div className="pl-8">
            <BsFillRocketTakeoffFill className="text-4xl mt-4" />
          </div>
        </div>
      </div>
      {/* img  */}
      <div data-aos="fade-down" className="w-full flex justify-center">
        <img
          src="https://klippe.qodeinteractive.com/wp-content/uploads/2018/02/h2-img-3.jpg"
          alt=""
        />
      </div>
      {/* right feature  */}
      <div className="flex flex-col justify-center md:gap-16 gap-4 md-mt-0 mt-4 w-full">
        <div data-aos="fade-left" className="flex">
          {/* icon  */}
          <div className="pr-8">
            <BsFillRocketTakeoffFill className="text-4xl mt-4" />
          </div>
          {/* text  */}
          <div className="">
            <h2 className="text-2xl font-bold mb-2">THE LEADERS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
              ullamcorper
            </p>
          </div>
        </div>
        <div data-aos="fade-left" className="flex">
          {/* icon  */}
          <div className="pr-8">
            <BsFillRocketTakeoffFill className="text-4xl mt-4" />
          </div>
          {/* text  */}
          <div className="">
            <h2 className="text-2xl font-bold mb-2">THE LEADERS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
              ullamcorper
            </p>
          </div>
        </div>
        <div data-aos="fade-left" className="flex">
          {/* icon  */}
          <div className="pr-8">
            <BsFillRocketTakeoffFill className="text-4xl mt-4" />
          </div>
          {/* text  */}
          <div className="">
            <h2 className="text-2xl font-bold mb-2">THE LEADERS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
              ullamcorper
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
