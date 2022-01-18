import { useForm, FormProvider } from "react-hook-form";
import { BsCheckLg } from "react-icons/bs";
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
import { CREATE_AUTHOR } from "../../services";

export const CreateShowcase = ({
  textfields,
  title,
  illustration,
  refreshData,
}) => {
  const methods = useForm();

  const [image, setImage] = useState();
  const { showAlert } = useAlertContext();

  const onSubmit = (data) => postRequest({ ...data, image });

  const success_submit = () => {
    methods.reset();
    refreshData();
    setImage("");
    showAlert("author has been submitted");
  };
  const { postRequest, serverErrors, postLoading } = usePost(
    CREATE_AUTHOR,
    success_submit
  );

  return (
    <Showcase contrast center text="add new author" icon={<BsCheckLg />}>
      <div className={s.wrapper}>
        <img src={illustration} alt={title} className={s.img} />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className={s.form}>
            <Heading center bold>
              {title}
            </Heading>
            <RenderTextfields grid textfields={textfields} />
            <ImageUploader image={image} setImage={setImage} />
            {serverErrors && <RenderErrors errors={serverErrors} />}
            <Button
              active
              center
              text="submit author"
              icon={<BsCheckLg />}
              disabled={postLoading}
            />
          </form>
        </FormProvider>
      </div>
    </Showcase>
  );
};
