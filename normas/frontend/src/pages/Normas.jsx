import React from "react";
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
import { normaHeader } from "../utils/datatable/config1";
import Footer from "../components/footer";
import { Routes, Switch, useLocation, useParams, Link, Route, useNavigate, useSearchParams } from "react-router-dom";


function useQuery() {
  const { search } = useLocation();
  // return React.useMemo(() => new URLSearchParams(search), [search]);
}

function ListDocuments() {
  const [documents, setDocuments] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState();
  const navigate = useNavigate();
  
  let checkedItems = ['location1', 'location2']
  let url = `/api/search?checkedItems=${checkedItems.join(',')}`
  let query = useQuery();  
  let normaData = [];

  let [type, setType] = React.useState(
    searchParams.get("type")
  );

  function handleSubmit() {
    setSearchParams({ type });
  }

  // useEffect(() => {
  //   const getType = getType() {
  //     setType(type.get("type"))
  //     console.log(type)
  // }   
  // }, [])


  function getType() {
    setType(query.get("type"))
    console.log(type);
    clearTimeout(getType);    
  }
  useEffect(() => {
    const getSectores = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}documentos`);
        const data = await response.json();
        setDocuments(data["body"]);

        for (const norma of data["body"]) {
          if(type == 'undefined' || type==null){
            normaData.push({
              id: norma.id,
              name: `${norma.name} `,
              type: `${norma.type} `,
              description: `${norma.description}`,
              published: `${norma.published}`,
              code: `${norma.code}`,
            });
          }else{
            if (norma.type == type){
              console.log(norma)
              normaData.push({
                id: norma.id,
                name: `${norma.name} `,
                type: `${norma.type} `,
                description: `${norma.description}`,
                published: `${norma.published}`,
                code: `${norma.code}`,
              });
            }
          }
         
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

              <div className="uk-visible@m">
                {/* <div className="grid"> */}
                <ul className="grid">
                  <div className="col-12 md:col-6 lg:col-3">
                    <div className="surface-card shadow-2 uk-card-small uk-card p-3 border-round">
                      <div className="flex justify-content-between mb-3">
                        <div>
                          {/* <span className="block text-500 font-medium mb-3"> */}
                            <li className="block text-500 font-medium mb-3"><Link name="type" type="search" onClick={getType} to="/normas?type=ISO">Normas ISO</Link></li>
                          {/* </span> */}
                        </div>
                        <div className="flex align-items-center justify-content-center border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                          <i className="pi pi-file-pdf text-xl"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 md:col-6 lg:col-3">
                    <div className="surface-card shadow-2 p-3 border-round">
                      <div className="flex justify-content-between mb-3">
                        <div>
                          <li className="block text-500 font-medium mb-3"><Link name="type" type="search" onClick={getType} to="/normas?type=DIN">Normas DIN</Link></li>
                        </div>
                        <div className="flex align-items-center justify-content-center border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                          <i className="pi pi-file-pdf text-xl"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 md:col-6 lg:col-3">
                    <div className="surface-card shadow-2 p-3 border-round">
                      <div className="flex justify-content-between mb-3">
                        <div>
                          <li className="block text-500 font-medium mb-3"><Link name="type" type="type"  onClick={getType} to="/normas?type=BS">Normas Britânicas</Link></li>
                        </div>
                        <div className="flex align-items-center justify-content-center border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                          <i className="pi pi-file-pdf text-xl"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 md:col-6 lg:col-3">
                    <div className="surface-card shadow-2 p-3 border-round">
                      <div className="flex justify-content-between mb-3">
                        <div>
                          <li className="block text-500 font-medium mb-3" ><Link name="type" type="type"  onClick={getType} to="/normas?type=IEEE">IEEE</Link></li>
                        </div>
                        <div className="flex align-items-center justify-content-center border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                          <i className="pi pi-file-pdf text-xl"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>


              <div className="uk-visible@m">
                <div className="grid">
                  <div className="col-12 md:col-6 lg:col-9">
                    <div className="surface-card shadow-2 uk-card-small uk-card p-3 border-round">
                      <div className="flex justify-content-between mb-3">
                        <div>
                          <h3 className="block uk-text-border font-medium mb-3">Normas de Padronização</h3>
                          <div className="">
                            <MessageAlert />

                            <DataTableExtensions {...tableData}>
                              <DataTable
                                columns={normaHeader}
                                data={normaData}
                                noHeader
                                defaultSortField="id"
                                defaultSortAsc={false}
                                fixedHeader
                                // onRowClicked={onRowClicked}
                                pagination
                                highlightOnHover
                                persistTableHead
                              />
                            </DataTableExtensions>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 md:col-6 lg:col-3 uk-visible@m">
                    <div className="surface-card shadow-2 p-3 border-round">
                      <div className="flex justify-content-between mb-3">
                        <div>
                          <span className="block text-500 font-medium mb-3">Outros documentos</span>
                          <div className="">
                            <div>
                              <div className="uk-card uk-card-small uk-card-body uk-border-rounded5">
                                <p className="uk-text-bolder uk-h4">
                                  <span uk-icon="">Documentos</span>
                                </p>

                                <table className="uk-table uk-table-striped">
                                  <tbody>
                                    <tr>
                                      <td><li><a href="/normas">Normas de Padronização</a></li></td>
                                      <td><span className="uk-badge">416</span></td>
                                    </tr>
                                    <tr>
                                      <td><li><a href="/serviceorders">Ordens de serviço</a></li></td>
                                      <td><span className="uk-badge">36</span></td>
                                    </tr>
                                    <tr>
                                      <td><li><a href="/legislation">Legislações</a></li></td>
                                      <td><span className="uk-badge">06</span></td>
                                    </tr>
				{/*
                                    <tr>
                                      <td><li><a href="/legislation">Eventos</a></li></td>
                                      <td><span className="uk-badge">04</span></td>
                                    </tr>
				*/}
			  	    <tr>
                         	      <td><li><a href="/books">Publicações</a></li></td>
                        	      <td><span class="uk-badge">03</span></td>
                   	 	    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <h3 className="uk-text-upper uk-margin-medium-top uk-text-bold">
                Lista de Normas
              </h3> */}
              <div className="uk-hidden@m">
                <h3 className="uk-heading-bullet uk-text-bolder" style={{ color: "#fa7f22" }}><span className="uk-text-light uk-margin-remove"></span>Normas de Padronização</h3>
                <a onClick={() => navigate(-1)} className="uk-text-normal uk-button-link uk-align-left uk-margin-remove uk-text-bold"><span uk-icon="icon: arrow-left; ratio: 1 "></span>Voltar</a>
              </div>
              <div className="uk-hidden@m">
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
              </div>
            </div>
          )}
        </>
      }
      //   aside={<Aside />}
      footer={<Footer />}
    />
  );
}

export default ListDocuments;
