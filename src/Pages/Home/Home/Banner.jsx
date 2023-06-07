import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Banner() {
  return (
    <div className="mt-10">
      <Carousel autoPlay>
        <div>
          <img src="https://d19gb5k9ejx8w0.cloudfront.net/uploads/2022/02/20223041/Carousel_Banner_Summer_Camp_2022_Call_Out.jpg" />
        </div>
        <div>
          <img src="https://d19gb5k9ejx8w0.cloudfront.net/uploads/2022/02/20223041/Carousel_Banner_Summer_Camp_2022_Call_Out.jpg" />
        </div>
        <div>
          <img src="https://d19gb5k9ejx8w0.cloudfront.net/uploads/2022/02/20223041/Carousel_Banner_Summer_Camp_2022_Call_Out.jpg" />
        </div>
      </Carousel>
    </div>
  );
}
