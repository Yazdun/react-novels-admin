import { Review } from "../../components";
import { Container, Input } from "../../ui";
import { useGet } from "../../hooks";
import { GET_ALL_REVIEWS } from "../../services";
import { useEffect, useState } from "react";
import s from "./styles.module.scss";
import { RadioGroup, RadioButton } from "react-radio-buttons";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [filtered, setFiltered] = useState(undefined);
  const success = (data) => setReviews(data.reviews);
  const { getRequest, serverErrors, getLoading } = useGet(
    GET_ALL_REVIEWS,
    success
  );

  useEffect(() => {
    getRequest();
  }, []);

  const inputs = [
    {
      value: "all",
    },
    {
      value: "pending",
    },
    {
      value: "approved",
    },
    {
      value: "disapproved",
    },
  ];
  return (
    <Container customClass={s.customContainer}>
      <div className={s.items}>
        <RadioGroup className={s.buttons}>
          {inputs.map((input) => {
            return (
              <RadioButton
                iconSize={20}
                iconInnerSize={10}
                value={input.value}
                pointColor="#4a4e69"
                rootColor="#ced4da"
              >
                {input.value}
              </RadioButton>
            );
          })}
        </RadioGroup>
      </div>
      <div className={s.reviews}>
        {reviews.map((review) => {
          return <Review review={review} />;
        })}
      </div>
    </Container>
  );
};
