import { Link } from "react-router-dom";
import Container from "../../Container";
import { BiRightArrow } from "react-icons/bi";

export default function Footer() {
  return (
    <div data-aos="zoom-in" className="bg-base-200 ">
      <Container>
        <footer className="footer p-10 bg-base-200 text-base-content pt-32">
          <div>
            <Link className="text-2xl font-medium" to="">
              <span className="text-[#36d7b7] ">Camp</span>Sports
            </Link>
            <p>
              CampSports.com
              <br />
              Providing reliable tech since 1992
            </p>
          </div>
          <div>
            <span className="footer-title">Services</span>

            <div className="flex items-center gap-1">
              <BiRightArrow />
              <a className="link link-hover">Branding</a>
            </div>
            <div className="flex items-center gap-1">
              <BiRightArrow />
              <a className="link link-hover">Design</a>
            </div>
            <div className="flex items-center gap-1">
              <BiRightArrow />
              <a className="link link-hover">Marketing</a>
            </div>
            <div className="flex items-center gap-1">
              <BiRightArrow />
              <a className="link link-hover">Advertisement</a>
            </div>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <div className="flex items-center gap-1">
              <BiRightArrow />
              <a className="link link-hover">About us</a>
            </div>
            <div className="flex items-center gap-1">
              <BiRightArrow />
              <a className="link link-hover">Contact</a>
            </div>
            <div className="flex items-center gap-1">
              <BiRightArrow />
              <a className="link link-hover">Jobs</a>
            </div>
            <div className="flex items-center gap-1">
              <BiRightArrow />
              <a className="link link-hover">Press kit</a>
            </div>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <div className="flex items-center gap-1">
              <BiRightArrow />
              <a className="link link-hover">Terms of use</a>
            </div>
            <div className="flex items-center gap-1">
              <BiRightArrow />
              <a className="link link-hover">Privacy policy</a>
            </div>
            <div className="flex items-center gap-1">
              <BiRightArrow />
              <a className="link link-hover">Cookie policy</a>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
}
