import s from "./styles.module.scss";
import classnames from "classnames";
import { Button, Container, Heading, RenderTextfields } from "../../ui";
import { DeleteModal } from "../../components";
import { AuthorTextfields } from "../../utils";
import { useForm, FormProvider } from "react-hook-form";
import { useGet } from "../../hooks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SiCloudsmith } from "react-icons/si";
import { GET_SINGLE_AUTHOR } from "../../services";
import { girl_one } from "../../assets";
export const AuthorActions = () => {
  const methods = useForm();

  const { id } = useParams();

  const [author, setAuthor] = useState(undefined);

  const handleAuthor = (data) => {
    const { name, birth, death, nationality, bio } = data.author;
    const inputs = [
      { name: "name", value: name },
      { name: "birth", value: birth.split("T")[0] },
      { name: "death", value: death ? birth.split("T")[0] : null },
      { name: "nationality", value: nationality },
      { name: "bio", value: bio },
    ];

    inputs.map((input) => {
      const { name, value } = input;
      return methods.setValue(name, value);
    });
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const { execute, getLoading } = useGet(GET_SINGLE_AUTHOR(id), handleAuthor);

  useEffect(() => {
    execute();
  }, [id]);

  return (
    <Container customClass={s.customContainer}>
      {/* <img
        src={girl_one}
        className={s.img}
        alt="a girl standing with glasses"
      /> */}
      <div className={s.form}>
        <FormProvider {...methods}>
          <form className={s.test} onSubmit={methods.handleSubmit(onSubmit)}>
            <Heading center bold>
              Edit author
            </Heading>
            <RenderTextfields
              textfields={AuthorTextfields}
              loading={getLoading}
            />
            <Button
              active
              icon={<SiCloudsmith />}
              text="update"
              disabled={getLoading}
              customClass={s.customBtn}
              center
            />
          </form>
        </FormProvider>
        <div className={s.danger}>
          <Heading center bold danger>
            Delete author
          </Heading>
          <DeleteModal />
        </div>
      </div>
    </Container>
  );
};
