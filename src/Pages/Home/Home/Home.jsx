import Container from "../../../components/Container";
import AboutSchool from "./AboutSchool/AboutSchool";
import Banner from "./Banner";
import PopularCourses from "./PopularCourses/PopularCourses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import Subscribe from "./PopularInstructors/Subscribe/Subscribe";
import Testimonials from "./Testimonials/Testimonials";

export default function Home() {
  return (
    <Container>
      <Banner />
      <AboutSchool />
      <PopularCourses />
      <Testimonials />
      <PopularInstructors />
      <Subscribe />
    </Container>
  );
}

// [
//   {
//     course_name:
//       "Advanced Techniques in Football: Mastering Skills and Strategies.",
//     instructor_name: " Emma Thompson",
//     available_seats: 0,
//     price: 99.99,
//     enrolled_students: 0,
//     image:
//       "https://media.istockphoto.com/id/1215231417/photo/swimming-with-wild-spinner-dolphins.webp?b=1&s=612x612&w=0&k=20&c=CAcLmXsMVNkQxqQ6hjQP21Bae-inLDIRzF31sEK9x6Q=",
//     category: "Football",
//     status: "approved",
//   },
//   {
//     course_name:
//       "Advanced Techniques in Football: Mastering Skills and Strategies.",
//     instructor_name: " Emma Thompson",
//     available_seats: 0,
//     price: 99.99,
//     enrolled_students: 0,
//     image:
//       "https://media.istockphoto.com/id/1462918815/photo/golf-clubs-and-golf-balls-on-a-green-lawn-in-a-beautiful-golf-course-with-morning-sunshine.webp?b=1&s=612x612&w=0&k=20&c=qXqFjPt9LlQNNurcaUZVTmZN3ATTxUF2GL6y9SeDG5o=",
//     category: "Football",
//     status: "approved",
//   },
//   {
//     course_name:
//       "Advanced Techniques in Football: Mastering Skills and Strategies.",
//     instructor_name: " Emma Thompson",
//     available_seats: 0,
//     price: 99.99,
//     enrolled_students: 0,
//     image:
//       "https://cdn.pixabay.com/photo/2019/04/19/10/13/badminton-4139024_1280.jpg",
//     category: "Football",
//     status: "approved",
//   },
//   {
//     course_name:
//       "Advanced Techniques in Football: Mastering Skills and Strategies.",
//     instructor_name: " Emma Thompson",
//     available_seats: 0,
//     price: 99.99,
//     enrolled_students: 0,
//     image:
//       "https://media.istockphoto.com/id/1425158165/photo/table-tennis-ping-pong-paddles-and-white-ball-on-blue-board.webp?b=1&s=612x612&w=0&k=20&c=V6kn7CcKj1p2mv94RdoEskSamJWH8ig4QZKV27YVISQ=",
//     category: "Football",
//     status: "approved",
//   },
//   {
//     course_name:
//       "Advanced Techniques in Football: Mastering Skills and Strategies.",
//     instructor_name: " Emma Thompson",
//     available_seats: 0,
//     price: 99.99,
//     enrolled_students: 0,
//     image:
//       "https://media.istockphoto.com/id/152177232/photo/sunset-surfer.webp?b=1&s=612x612&w=0&k=20&c=2m99eivm7laSS0fydEKHiWrLvFDp9ontXy8WmOeF36k=",
//     category: "Football",
//     status: "approved",
//   },
//   {
//     course_name:
//       "Advanced Techniques in Football: Mastering Skills and Strategies.",
//     instructor_name: " Emma Thompson",
//     available_seats: 0,
//     price: 99.99,
//     enrolled_students: 0,
//     image:
//       "https://cdn.pixabay.com/photo/2016/07/24/02/55/cyclist-1537843_1280.jpg",
//     category: "Football",
//     status: "approved",
//   },
// ];
