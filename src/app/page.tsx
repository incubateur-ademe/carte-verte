import { config } from "@/config";
import { Container } from "@/dsfr";

const Home = () => {
  if (config.env === "prod") {
    return (
      <Container my="2w">
        <h1>{config.name} est toujours en construction.</h1>
      </Container>
    );
  }

  return (
    <Container my="2w">
      <h1>{config.name} dev mode.</h1>
    </Container>
  );
};

export default Home;
