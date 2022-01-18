import s from "./styles.module.scss";
import classnames from "classnames";
import { Button, Container, RenderTextfields } from "../../ui";
import { DeleteModal } from "../../components";
import { AuthorTextfields } from "../../utils";
import { useForm, FormProvider } from "react-hook-form";
import { useGet } from "../../hooks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SiCloudsmith } from "react-icons/si";
import { GET_SINGLE_AUTHOR } from "../../services";

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

  const { execute, getLoading } = useGet(GET_SINGLE_AUTHOR(id), handleAuthor);

  useEffect(() => {
    execute();
  }, [id]);

  return (
    <Container>
      <FormProvider {...methods}>
        <RenderTextfields textfields={AuthorTextfields} loading={getLoading} />
        <Button
          active
          icon={<SiCloudsmith />}
          text="update"
          disabled={getLoading}
        />
      </FormProvider>
      <DeleteModal />
    </Container>
  );
};
