import Container from "../../../components/Container";
import Banner from "./Banner";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import Subscribe from "./PopularInstructors/Subscribe/Subscribe";

export default function Home() {
  return (
    <Container>
      <Banner />
      <PopularClasses />
      <PopularInstructors />
      <Subscribe />
    </Container>
  );
}
