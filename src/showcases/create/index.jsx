import { useForm, FormProvider } from "react-hook-form";
import { BsCheckLg } from "react-icons/bs";
import { Button, Heading, RenderErrors, RenderTextfields } from "../../ui";
import { Showcase, ImageUploader, Alert } from "../../components";
import { usePost } from "../../hooks/usePost";
import { useAlertContext } from "../../context/alert";
import s from "./styles.module.scss";
import { useState } from "react";
// import { DeleteModal } from "../../modals";

export const CreateShowcase = ({
  textfields,
  title,
  url,
  illustration,
  refreshData,
}) => {
  const methods = useForm();

  const [image, setImage] = useState();
  const { showAlert } = useAlertContext();

  const onSubmit = (data) => {
    execute({ ...data, image });
  };

  const success_submit = () => {
    methods.reset();
    refreshData();
    setImage("");
    showAlert("author has been submitted");
  };
  const { execute, serverErrors, loading } = usePost(
    "/admin/author/create",
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
            <RenderTextfields textfields={textfields} />
            <ImageUploader image={image} setImage={setImage} />
            {serverErrors && <RenderErrors errors={serverErrors} />}
            <Button
              active
              center
              text="submit author"
              icon={<BsCheckLg />}
              disabled={loading}
            />
          </form>
        </FormProvider>
        {/* <DeleteModal /> */}
      </div>
    </Showcase>
  );
};
