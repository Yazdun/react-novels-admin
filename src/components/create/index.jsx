import { useForm, FormProvider } from "react-hook-form";
import { BsPlusLg, BsCheckLg } from "react-icons/bs";
import {
  Showcase,
  Button,
  Heading,
  RenderErrors,
  RenderTextfields,
} from "../../ui";
import { ImageUploader } from "..";
import { usePost } from "../../hooks/usePost";
import { useAlertContext } from "../../context/alert";
import s from "./styles.module.scss";
import { useState } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

export const CreateShowcase = ({
  textfields,
  title,
  illustration,
  largeImg,
  refreshData,
  url,
}) => {
  const methods = useForm();

  const [image, setImage] = useState();
  const { showAlert } = useAlertContext();

  const onSubmit = (data) => postRequest({ ...data, image });

  const success_submit = () => {
    methods.reset();
    refreshData();
    setImage("");
    showAlert(`${title} has been submitted`);
  };
  const { postRequest, serverErrors, postLoading } = usePost(
    url,
    success_submit
  );

  return (
    <Showcase contrast center text={`add new ${title}`} icon={<BsPlusLg />}>
      <div className={s.wrapper}>
        <img
          src={illustration}
          alt={title}
          className={classnames(s.img, largeImg && s.largeImg)}
        />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className={s.form}>
            <Heading center bold>
              Create new {title}
            </Heading>
            <RenderTextfields grid textfields={textfields} />
            <ImageUploader image={image} setImage={setImage} />
            {serverErrors && <RenderErrors errors={serverErrors} />}
            <Button
              active
              center
              text={`submit ${title}`}
              icon={<BsCheckLg />}
              disabled={postLoading}
            />
          </form>
        </FormProvider>
      </div>
    </Showcase>
  );
};

CreateShowcase.propTypes = {
  textfields: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  illustration: PropTypes.string,
  largeImg: PropTypes.bool,
  refreshData: PropTypes.func,
  url: PropTypes.string.isRequired,
};
