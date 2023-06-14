import Container from "../../Container";

export default function Footer() {
  return (
    <div className="bg-base-200">
      <Container>
        <footer className="footer p-10 bg-base-200 text-base-content">
          <div>
            <img
              className="w-[100px] h-[100px]"
              src="https://www.logodesign.net/logo/abstract-acrobat-man-and-woman-3709ld.png?nwm=1&nws=1&industry=sports-fitness&sf="
              alt=""
            />
            <p>
              CampSports.comm
              <br />
              Providing reliable tech since 1992
            </p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
      </Container>
    </div>
  );
}
