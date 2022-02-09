import React from "react";
import { Container, Input } from "../../ui";
import { GET_ALL_USERS } from "../../services";
import { useEffect, useState } from "react";
import { useGet } from "../../hooks";
import { Datagrid } from "../../components";
import { columns } from "./columns";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(undefined);
  const handleUsers = (data) => setUsers(data.users);

  const search = (searchTerm) => {
    const filter = users.filter((user) => {
      return user.username.includes(searchTerm);
    });
    if (!searchTerm) return setFilteredUsers(undefined);

    setFilteredUsers(filter);
  };

  const { getRequest, getLoading } = useGet();

  useEffect(() => {
    getRequest(GET_ALL_USERS, handleUsers);
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
        data={filteredUsers ? filteredUsers : users}
        columns={columns}
        gridStyle={{ minHeight: 550 }}
        limit={20}
      />
    </Container>
  );
};
