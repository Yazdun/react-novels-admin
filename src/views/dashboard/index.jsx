import { Container } from "../../ui";
import { ReviewChart, UserChart, Widgets } from "../../components";

export const Dashboard = () => {
  return (
    <Container>
      <Widgets />
      <UserChart />
      <ReviewChart />
    </Container>
  );
};
