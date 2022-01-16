import s from "./styles.module.scss";
import classnames from "classnames";
import { Container } from "../../ui";
import { Datagrid, Showcase } from "../../components";
import { useGet } from "../../hooks/useGet";
import { useEffect, useState } from "react";
import { columns } from "./columns";
import { CreateShowcase } from "../../showcases";
import { AuthorTextfields } from "../../utils";
import { planet_one } from "../../assets/";

export const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const handleAuthors = (data) => setAuthors(data.authors);

  const { execute, serverErrors, loading } = useGet(
    "/admin/author/",
    handleAuthors
  );

  useEffect(() => {
    execute();
  }, []);
  return (
    <Container>
      <Datagrid
        loading={loading}
        data={authors}
        columns={columns}
        gridStyle={{ minHeight: 550 }}
        limit={20}
      />
      <CreateShowcase
        textfields={AuthorTextfields}
        title="Create new author"
        illustration={planet_one}
      />
    </Container>
  );
};
