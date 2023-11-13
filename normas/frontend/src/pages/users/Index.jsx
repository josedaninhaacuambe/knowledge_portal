import React, { useEffect, useState } from "react";
import Aside from "../../components/Aside";
import Header from "../../components/Header";
import { BASE_URL } from "../../utils/utils";
import Layout from "../Layout";
import formatDate, { usersHeader } from "../../utils/datatable/config";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import Spinner from "../../components/Spinner";
import MessageAlert from "../../components/Alert";
import { NavLink } from "react-router-dom";

function ListUsers() {
  // const [users, setUsers] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [tableData, setTableData] = useState();
  let userData = [];

  useEffect(() => {
    const getUsers = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(`${BASE_URL}account/`);
        const data = await response.json();
        for (const user of data) {
          userData.push({
            id: user.id,
            name: `${user.first_name} ${user.last_name} `,
            username: `${user.username} `,
            role: `${user.role}`,
            last_login: `${
              user.last_login ? formatDate(user.last_login) : "NA"
            }`,
          });
        }
        setTableData({
          columns: usersHeader,
          data: userData,
        });
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      }
    };
    getUsers();
    setIsLoading(false);
  }, []);

  return (
    <Layout
      header={<Header />}
      content={
        <>
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="pt-28 px-10">
              <div className="flex justify-between items-center pb-5">
                <h3 className="">Lista de usuários</h3>
                <NavLink
                  to={"/accounts/create"}
                  className="bg-orange-400 px-5 py-3 rounded-lg text-white font-bold no-underline"
                >
                  Criar usuario
                </NavLink>
                {/* <MessageAlert /> */}
              </div>

              <DataTableExtensions {...tableData}>
                <DataTable
                  columns={usersHeader}
                  data={userData}
                  noHeader
                  defaultSortField="id"
                  defaultSortAsc={false}
                  // onRowClicked={onRowClicked}
                  pagination
                  highlightOnHover
                />
              </DataTableExtensions>
            </div>
          )}
        </>
      }
      aside={<Aside />}
    />
  );
}

export default ListUsers;
