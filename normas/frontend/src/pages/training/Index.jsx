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
import { TrainingHeader } from "../../utils/datatable/config";

function ListTraining() {
  const [documents, setTraining] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState();
  let normaData = [];
  useEffect(() => {
    const getTraining = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}training`);
        const data = await response.json();
        setTraining(data["body"]);

        for (const Training of data["body"]) {
          normaData.push({
            id:    Training.id,
            nome: `${Training.nome} `,
            email: `${Training.email} `,
            telefone: `${Training.telefone} `,
            published: `${Training.published}`,
            endereco: `${Training.endereco}`
          });
        }
        setTableData({
          columns: TrainingHeader,
          data: normaData,
        });
        setIsLoading(false);

      } catch (error) {
        console.error(error);
      }
    };
    getTraining();
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
                Treinamento
              </h3>
              <MessageAlert />
		          <a class="uk-link-heading" href="/Training/create">Adicionar</a> 
              <DataTableExtensions {...tableData}>
                <DataTable
                  columns={TrainingHeader}
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

export default ListTraining;
