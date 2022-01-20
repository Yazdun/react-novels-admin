import { Container, Input } from "../../ui";
import { Datagrid, CreateShowcase } from "../../components";
import { useGet } from "../../hooks/useGet";
import { useEffect, useState } from "react";
import { columns } from "./columns";
import { NovelTextfields } from "../../utils";
import { book_one } from "../../assets/";
import { CREATE_NOVEL, GET_ALL_NOVELS } from "../../services";

export const Novels = () => {
  const [novels, setNovels] = useState([]);
  const [filteredNovels, setFilteredNovels] = useState(undefined);
  const handleNovels = (data) => setNovels(data.novels);

  const search = (searchTerm) => {
    const searchedNovels = novels.filter((novel) => {
      const j = novel.title + novel.author;
      const novels = j.includes(searchTerm);
      return novels;
    });

    if (!searchTerm) return setFilteredNovels(undefined);

    setFilteredNovels(searchedNovels);
  };

  const { getRequest, getLoading } = useGet(GET_ALL_NOVELS, handleNovels);

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
        data={filteredNovels ? filteredNovels : novels}
        columns={columns}
        gridStyle={{ minHeight: 550 }}
        limit={20}
      />
      <CreateShowcase
        textfields={NovelTextfields}
        title="novel"
        illustration={book_one}
        refreshData={getRequest}
        url={CREATE_NOVEL}
        largeImg
      />
    </Container>
  );
};
