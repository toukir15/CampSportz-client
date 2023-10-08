import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Banner() {
  return (
    <div className="">
      <Carousel autoPlay>
        <div className="h-[70vh] object-fill" style={{ overflow: "hidden" }}>
          <img
            src="https://cdn.pixabay.com/photo/2016/07/21/18/40/cycling-1533270_1280.jpg"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="h-[70vh] object-fill" style={{ overflow: "hidden" }}>
          <img
            src="https://img.freepik.com/free-photo/male-swimmer-swimming-butterfly-stroke_171337-7613.jpg?w=1480&t=st=1691418254~exp=1691418854~hmac=b44a880c279032534e88d0ee147698b60fe91729534434e7b9cc3d0695973a9b"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="h-[70vh] object-fill" style={{ overflow: "hidden" }}>
          <img
            src="https://media.istockphoto.com/id/513444905/photo/surfing-a-wave.webp?b=1&s=612x612&w=0&k=20&c=0PuiD1kxmhSKqcj9dpejPNqSZxFC6Ee7OpksrZt4C3Y="
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </Carousel>
    </div>
  );
}
