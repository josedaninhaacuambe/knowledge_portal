import Aside from "../../components/Aside";
import Header from "../../components/Header";
import MessageAlert from "../../components/Alert";
import Layout from "../Layout";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { BASE_URL } from "../../utils/utils";
import Spinner from "../../components/Spinner";
import { booksHeader } from "../../utils/datatable/config";

function ListDocuments() {
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState();
  let normaData = [];
  useEffect(() => {
    const getSectores = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}books`);
        const data = await response.json();
        setDocuments(data["body"]);

        for (const Books of data["body"]) {
          normaData.push({
            id:    Books.id,
            author: `${Books.author} `,
            subject: `${Books.subject} `,
            category: `${Books.category} `,
            published: `${Books.published}`,
            description: `${Books.description}`,
            file_name: `${Books.file_name}`,
          });
        }
        setTableData({
          columns: booksHeader,
          data: normaData,
        });
        setIsLoading(false);

      } catch (error) {
        console.error(error);
      }
    };
    getSectores();
  }, []);

  return (
    <Layout
      header={<Header />}
      content={
        <>
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="uk-padding">
              <h3 className="uk-text-upper uk-margin-medium-top uk-text-bold">
                Publicações
              </h3>
              <MessageAlert />
		          <a class="uk-link-heading" href="/books/create">Adicionar</a> 
              <DataTableExtensions {...tableData}>
                <DataTable
                  columns={booksHeader}
                  data={normaData}
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

export default ListDocuments;
