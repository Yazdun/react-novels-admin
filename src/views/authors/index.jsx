import { Container, Input } from "../../ui";
import { Datagrid, CreateShowcase } from "../../components";
import { useGet } from "../../hooks/useGet";
import { useEffect, useState } from "react";
import { columns } from "./columns";
import { AuthorTextfields } from "../../utils";
import { man_one } from "../../assets/";
import { GET_ALL_AUTHORS } from "../../services";
import { CREATE_AUTHOR } from "../../services";

export const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [filteredAuthors, setFilteredAuthors] = useState(undefined);
  const handleAuthors = (data) => setAuthors(data.authors);

  const search = (searchTerm) => {
    const filter = authors.filter((author) => {
      return author.name.includes(searchTerm);
    });
    if (!searchTerm) return setFilteredAuthors(undefined);

    setFilteredAuthors(filter);
  };

  const { getRequest, getLoading } = useGet(GET_ALL_AUTHORS, handleAuthors);

  useEffect(() => {
    getRequest();
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
        loading={getLoading}
        data={filteredAuthors ? filteredAuthors : authors}
        columns={columns}
        gridStyle={{ minHeight: 550 }}
        limit={20}
      />
      <CreateShowcase
        textfields={AuthorTextfields}
        title="author"
        illustration={man_one}
        refreshData={getRequest}
        url={CREATE_AUTHOR}
      />
    </Container>
  );
};
