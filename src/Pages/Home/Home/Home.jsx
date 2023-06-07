import Container from "../../../components/Container";
import Banner from "./Banner";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";

export default function Home() {
  return (
    <Container>
      <Banner />
      <PopularClasses />
      <PopularInstructors />
    </Container>
  );
}
