import { useForm, FormProvider } from "react-hook-form";
import { BsCheckLg } from "react-icons/bs";
import { Button, Heading, RenderTextfields } from "../../ui";
import { Showcase, ImageUploader, Alert } from "../../components";
import { usePost } from "../../hooks/usePost";

import s from "./styles.module.scss";
import { useState } from "react";

export const CreateShowcase = ({ textfields, title, url, illustration }) => {
  const methods = useForm();

  const [image, setImage] = useState();

  const onSubmit = (data) => {
    execute({ ...data, image });
  };

  const success_submit = () => {
    methods.reset();
  };
  const { execute, serverErrors, loading, success } = usePost(
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
            <Button
              active
              center
              text="submit author"
              icon={<BsCheckLg />}
              disabled={loading}
            />
          </form>
        </FormProvider>
      </div>
    </Showcase>
  );
};
