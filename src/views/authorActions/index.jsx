import s from "./styles.module.scss";
import { Button, Container, Heading, RenderTextfields } from "../../ui";
import { DeleteModal } from "../../components";
import { AuthorTextfields } from "../../utils";
import { useForm, FormProvider } from "react-hook-form";
import { useGet, usePatch } from "../../hooks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SiCloudsmith } from "react-icons/si";
import { GET_SINGLE_AUTHOR, DELETE_AUTHOR, EDIT_AUTHOR } from "../../services";
import { planet_one } from "../../assets";
import { GiFeatheredWing } from "react-icons/gi";
export const AuthorActions = () => {
  const methods = useForm();
  const { id } = useParams();

  const [name, setName] = useState(null);

  const handleAuthor = (data) => {
    const { name, birth, death, nationality, bio } = data.author;
    setName(name);
    const inputs = [
      { name: "name", value: name },
      { name: "birth", value: birth.split("T")[0] },
      { name: "death", value: death ? death.split("T")[0] : null },
      { name: "nationality", value: nationality },
      { name: "bio", value: bio },
    ];

    inputs.map((input) => {
      const { name, value } = input;
      return methods.setValue(name, value);
    });
  };

  const { patch, patchLoading } = usePatch(EDIT_AUTHOR(id), handleAuthor);
  const { execute, getLoading } = useGet(GET_SINGLE_AUTHOR(id), handleAuthor);

  const onSubmit = (data) => patch(data);

  useEffect(() => {
    execute();
  }, [id]);

  return (
    <Container customClass={s.customContainer}>
      <img
        src={planet_one}
        className={s.img}
        alt="a girl standing with glasses"
      />
      <div className={s.form}>
        <div className={s.header}>
          {patchLoading || getLoading ? null : (
            <>
              <Heading center bold capitalize>
                <GiFeatheredWing />
                {name}
              </Heading>

              <DeleteModal
                item="author"
                question="Delete This Author ?"
                loading={getLoading}
                url={DELETE_AUTHOR(id)}
              />
            </>
          )}
        </div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <RenderTextfields
              textfields={AuthorTextfields}
              loading={getLoading || patchLoading}
              loadingHeight={520}
              grid
            />

            <Button
              active
              icon={<SiCloudsmith />}
              text="update author"
              disabled={getLoading || patchLoading}
              center
              customClass={s.btn}
            />
          </form>
        </FormProvider>
      </div>
    </Container>
  );
};
