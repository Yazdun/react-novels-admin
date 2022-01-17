import { Container, Input } from "../../ui";
import { Datagrid } from "../../components";
import { useGet } from "../../hooks/useGet";
import { useEffect, useState } from "react";
import { columns } from "./columns";
import { CreateShowcase } from "../../showcases";
import { AuthorTextfields } from "../../utils";
import { man_one } from "../../assets/";

export const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [filteredAuthors, setFilteredAuthors] = useState(undefined);
  const handleAuthors = (data) => setAuthors(data.authors);

  const search = (searchTerm) => {
    const filter = authors.filter((author) => {
      return author.name.includes(searchTerm);
    });
    setFilteredAuthors(filter);
  };

  const { execute, loading } = useGet("/admin/author/", handleAuthors);

  useEffect(() => {
    execute();
  }, []);
  return (
    <Container>
      <Input
        type="text"
        id="search"
        name="search"
        placeholder="search"
        label="search"
        onChange={search}
      />
      <Datagrid
        loading={loading}
        data={filteredAuthors ? filteredAuthors : authors}
        columns={columns}
        gridStyle={{ minHeight: 550 }}
        limit={20}
      />
      <CreateShowcase
        textfields={AuthorTextfields}
        title="Create new author"
        illustration={man_one}
        refreshData={execute}
      />
    </Container>
  );
};
