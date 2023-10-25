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
import { projectoHeader } from "../../utils/datatable/config";

function ListDocuments() {
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState();
  let normaData = [];
  useEffect(() => {
    const getSectores = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}projectos/`);
        const data = await response.json();
        setDocuments(data["body"]);

        for (const projecto of data["body"]) {
          normaData.push({
            nr: `${projecto.nr} `,
            name: `${projecto.name} `,
            status: `${projecto.status} `,
            file_name: `${projecto.file_name} `,
            // financiador: `${projecto.financiador}`,
            // financiamento: `${projecto.financiamento}`,
            // tipo_pagamento: `${projecto.tipo_pagamento}`,
            // valor_financiando: `${projecto.valor_financiando}`,
            nivel_desempenho: `${projecto.nivel_desempenho}`,
            ponto_de_situacao: `${projecto.ponto_de_situacao}`,
            constrangimentos: `${projecto.constrangimentos}`,
            
          });
        }
        setTableData({
          columns: projectoHeader,
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
                Painel dos Projetos
              </h3>
              <MessageAlert />
		          <a class="uk-link-heading" href="/projectos/create">Adicionar</a> 
              <DataTableExtensions {...tableData}>
                <DataTable
                  columns={projectoHeader}
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
