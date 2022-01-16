import { useForm, FormProvider } from "react-hook-form";
import { BsCheckLg } from "react-icons/bs";
import { Button, Heading, RenderTextfields } from "../../ui";
import { Showcase, ImageUploader } from "../../components";

import s from "./styles.module.scss";
import { useState } from "react";

export const CreateShowcase = ({ textfields, title, url, illustration }) => {
  const methods = useForm();

  const [image, setImage] = useState();

  const onSubmit = (data) => {
    console.log({ ...data, image });
  };

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
            <Button active center text="submit author" icon={<BsCheckLg />} />
          </form>
        </FormProvider>
      </div>
    </Showcase>
  );
};
