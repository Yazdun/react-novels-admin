import { Review } from "../../components";
import { Container } from "../../ui";
import { useGet } from "../../hooks";
import { GET_ALL_REVIEWS } from "../../services";
import { useEffect, useState } from "react";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const success = (data) => setReviews(data.reviews);
  const { getRequest, serverErrors, getLoading } = useGet(
    GET_ALL_REVIEWS,
    success
  );

  useEffect(() => {
    getRequest();
  }, []);
  return (
    <Container>
      {reviews.map((review) => {
        return <Review review={review} />;
      })}
    </Container>
  );
};
