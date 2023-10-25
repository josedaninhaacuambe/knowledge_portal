import Aside from "../components/Aside";
import Header from "../components/HeaderSample";
import MessageAlert from "../components/Alert";
import Layout from "./Layout1";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { BASE_URL } from "../utils/utils";
import Spinner from "../components/Spinner";
import Footer from "../components/footer";
import { normaHeader } from "../utils/datatable/config1";
import { Routes, Route, useNavigate } from "react-router-dom";

function ListDocuments() {
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState();
  const navigate = useNavigate();
  let normaData = [];
  useEffect(() => {
    const getSectores = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}documentos`);
        const data = await response.json();
        setDocuments(data["body"]);

        for (const norma of data["body"]) {
          normaData.push({
            id: norma.id,
            name: `${norma.name} `,
            // type: `${norma.type} `,
            description: `${norma.description}`,
            published: `${norma.published}`,
            code: `${norma.code}`,
          });
        }
        setTableData({
          columns: normaHeader,
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
            <div className="uk-padding-small">
              {/* <button className="uk-margin" style={{borderRadius:100}} onClick={() => navigate(-1)}>Voltar</button> */}
              {/* <a className="uk-inline" href="/Documents"><button className="uk-inline uk-padding-remove uk-margin-remove" style={{borderRadius:100, backgroundColor:"#fff", color:"#000" }}><span uk-icon="arrow-left"></span></button></a> */}
                {/*<div className="uk-visible@m">
                  <div className="uk-card uk-card-small uk-padding-small uk-card-hover uk-card-body uk-border-rounded" style={{ width:250}}>  
                  <p className="uk-text-bolder uk-h4">
                      
                      <span uk-icon="icon:  list; ratio: 1.2 "></span> 
                        </p>
                        <p className="uk-text-default uk-text-center uk-text-bold  uk-margin-remove" style={{ color:"#fa7f22" }}><span className="uk-text-light uk-margin-remove"></span>Normas de Padronização</p>
                        <a onClick={() => navigate(-1)} uk-icon="icon: arrow-left; ratio: 1 " className="uk-text-normal uk-button-link uk-align-right uk-margin-remove">voltar</a>        
                  </div>
                </div>*/}

		<div className="uk-visible@m">
                	<h3 className="uk-heading-bullet uk-text-bolder" style={{ color:"#fa7f22" }}><span className="uk-text-light uk-margin-remove"></span>Normas de Padronização</h3>
                	<a onClick={() => navigate(-1)} className="uk-text-normal uk-button-link uk-align-left uk-margin-remove uk-text-bold"><span uk-icon="icon: arrow-left; ratio: 1 "></span>Voltar</a>        
            	</div>

		<div className="uk-hidden@m">
                	<h3 className="uk-heading-bullet uk-text-bolder" style={{ color:"#fa7f22" }}><span className="uk-text-light uk-margin-remove"></span>Normas de Padronização</h3>
                	<a onClick={() => navigate(-1)} className="uk-text-normal uk-button-link uk-align-left uk-margin-remove uk-text-bold"><span uk-icon="icon: arrow-left; ratio: 1 "></span>Voltar</a>        
            	</div>
              <MessageAlert />

              <DataTableExtensions {...tableData}>
                <DataTable
                  columns={normaHeader}
                  data={normaData}
                  noHeader
                  defaultSortField="id"
                  defaultSortAsc={false}
                  // onRowClicked={onRowClicked}
                  pagination
                  highlightOnHover
                />
              </DataTableExtensions>

                <br/>  

            </div>
          )}
        </>
      }
       footer={<Footer />}
    />
  );
}

export default ListDocuments;
