import s from "./styles.module.scss";
import {
  Button,
  Container,
  Heading,
  RenderErrors,
  RenderTextfields,
} from "../../ui";
import { DeleteModal } from "../../components";
import { NovelTextfields } from "../../utils";
import { useForm, FormProvider } from "react-hook-form";
import { useGet, usePatch } from "../../hooks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SiCloudsmith } from "react-icons/si";
import { GET_SINGLE_NOVEL, DELETE_NOVEL, EDIT_NOVEL } from "../../services";
import { book_two } from "../../assets";
import { GiFeatheredWing } from "react-icons/gi";

export const NovelActions = () => {
  const methods = useForm();
  const { id } = useParams();

  const [title, setTitle] = useState(null);

  const handleNovel = (data) => {
    const { title, author, pages, publish, description } = data.novel;
    setTitle(title);
    const inputs = [
      { name: "title", value: title },
      { name: "author", value: author },
      { name: "pages", value: pages },
      { name: "publish", value: publish },
      { name: "description", value: description },
    ];

    inputs.map((input) => {
      const { name, value } = input;
      return methods.setValue(name, value);
    });
  };

  const { patchRequest, serverErrors, patchLoading } = usePatch(
    EDIT_NOVEL(id),
    handleNovel
  );

  const { getRequest, getLoading } = useGet(GET_SINGLE_NOVEL(id), handleNovel);

  const onSubmit = (data) => patchRequest(data);

  useEffect(() => {
    getRequest();
  }, [id]);

  return (
    <Container customClass={s.customContainer}>
      <img
        src={book_two}
        className={s.img}
        alt="a yellow open book illustration"
      />
      <div className={s.form}>
        <div className={s.header}>
          {patchLoading || getLoading ? null : (
            <>
              <Heading center bold capitalize small>
                <GiFeatheredWing />
                {title}
              </Heading>

              <DeleteModal
                item="novel"
                question="Delete This Novel ?"
                loading={getLoading}
                url={DELETE_NOVEL(id)}
              />
            </>
          )}
        </div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <RenderTextfields
              textfields={NovelTextfields}
              loading={getLoading || patchLoading}
              loadingHeight={501}
              grid
            />
            {serverErrors && <RenderErrors errors={serverErrors} />}
            <Button
              active
              icon={<SiCloudsmith />}
              text="update novel"
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
