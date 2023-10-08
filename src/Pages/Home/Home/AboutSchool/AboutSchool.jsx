import schoolImg from "../../../../assets/1000_F_310621281_foEqKBGtGlNWFQRePgdF5BpLghOFyTsnzO.jpg";
export default function AboutSchool() {
  return (
    <div className="md:my-20 mt-20 md:flex">
      {/* left side  */}
      <div data-aos="fade-up-right" className="flex-1">
        <img src={schoolImg} alt="schoolImg" />
      </div>
      {/* right side  */}
      <div
        data-aos="fade-up-left"
        className="flex-1 flex flex-col justify-center md:ml-12 mx-4 md:mx-0 mt-4 md:mt-0"
      >
        <h1 className="text-4xl font-medium mb-4 md:text-left text-center">
          About campSports
        </h1>
        <p className="mb-4 font-medium md:text-left text-center">
          I must explain to you how all this mistaken idea
        </p>
        <p className="text-justify">
          Nor again is there anyone who loves or pursues or desires to obtain
          pain of itself, because it is pain, but because occasionally
          circumstances occur in which toil and pain can procure him some great
          pleasure. Nor again is there anyone who loves or pursues or desires to
          obtain pain of itself, because it is pain, but because occasionally
          circumstances occur in which toil and pain can procure him some great
          pleasure. Nor again is there anyone who loves or pursues or desires to
          obtain pain of itself, because it is pain, but because occasionally
          circumstances occur in which toil and pain can procure him some great
          pleasure.
        </p>
      </div>
    </div>
  );
}
