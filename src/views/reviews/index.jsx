import { Review, Loading } from "../../components";
import { Container, Typography } from "../../ui";
import { useGet } from "../../hooks";
import { GET_ALL_REVIEWS, GET_REVIEWS_BY_STATUS } from "../../services";
import { useEffect, useState } from "react";
import s from "./styles.module.scss";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import { buttons } from "./data";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const success = (data) => setReviews(data.reviews);
  const { getRequest, serverErrors, getLoading } = useGet();

  useEffect(() => {
    getRequest(GET_ALL_REVIEWS, success);
  }, []);

  return (
    <Container customClass={s.customContainer}>
      <div className={s.items}>
        <RadioGroup
          onChange={(value) =>
            getRequest(GET_REVIEWS_BY_STATUS(value), success)
          }
          className={s.buttons}
        >
          {buttons.map((button) => {
            return (
              <RadioButton
                iconSize={20}
                iconInnerSize={10}
                value={button.value}
                pointColor="#4a4e69"
                rootColor="#ced4da"
              >
                {button.text}
              </RadioButton>
            );
          })}
        </RadioGroup>
      </div>
      <div className={s.reviews}>
        {getLoading ? (
          <Loading height={263} count={4} customClassname={s.loading} />
        ) : (
          <RenderReviews reviews={reviews} />
        )}
      </div>
    </Container>
  );
};

const RenderReviews = ({ reviews }) => {
  if (reviews.length < 1) {
    return <Typography bold>Found no reviews</Typography>;
  }
  return (
    <>
      {reviews.map((review, index) => {
        return <Review key={index} review={review} />;
      })}
    </>
  );
};
