import Container from "../../../components/Container";
import Banner from "./Banner";
import PopularCourses from "./PopularCourses/PopularCourses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import Subscribe from "./PopularInstructors/Subscribe/Subscribe";

export default function Home() {
  return (
    <Container>
      <Banner />
      <PopularCourses />
      <PopularInstructors />
      <Subscribe />
    </Container>
  );
}
