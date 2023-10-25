import React from "react";
import Header from "../components/HeaderSample";
import MessageAlert from "../components/Alert";
import Layout from "./Layout1";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { BASE_URL } from "../utils/utils";
import Spinner from "../components/Spinner";
import { booksHeader } from "../utils/datatable/config1";
import Footer from "../components/footer";
import { Routes, Switch, useLocation, useParams, Link, Route, useNavigate, useSearchParams } from "react-router-dom";


function useQuery() {
  const { search } = useLocation();
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

  let [category, setType] = React.useState(
    searchParams.get("category")
  );

  function handleSubmit() {
    setSearchParams({ category });
  }

  // useEffect(() => {
  //   const getcategory = getcategory() {
  //     setcategory(category.get("category"))
  //     console.log(category)
  // }   
  // }, [])


  function getType() {
    setType(query.get("category"))
    console.log(category);
    clearTimeout(getType);    
  }
  useEffect(() => {
    const getSectores = async () => {
      try {
        setIsLoading(true);
        //const response = await fetch(`${BASE_URL}books/`);
	const response = await fetch(`${BASE_URL}books`);
        const data = await response.json();
        setDocuments(data["body"]);

        for (const Books of data["body"]) {
          if(category == 'undefined' || category==null){
            normaData.push({
              id:    Books.id,
              author: `${Books.author} `,
              subject: `${Books.subject} `,
              category: `${Books.category} `,
              published: `${Books.published}`,
              description: `${Books.description}`,
              file_name: `${Books.file_name}`,
            });
          }else{
            if (Books.category == category){
              console.log(Books)
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
          }
        }
        setTableData({
          columns: booksHeader,
          data: normaData,
        });
        setIsLoading(false);

      } catch (error) {
        //console.error(error);
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
                {/* <div className="uk-visible@m">
                  <div className="uk-card uk-card-small uk-padding-small uk-card-hover uk-card-body uk-border-rounded" style={{ width:250}}>  
                  <p className="uk-text-bolder uk-h4">
                      
                      <span uk-icon="icon:  list; ratio: 1.2 "></span> 
                        </p>
                        <p className="uk-text-default uk-text-center uk-text-bold  uk-margin-remove" style={{ color:"#fa7f22" }}><span className="uk-text-light uk-margin-remove"></span>Lista das Normas de Padronização</p>
                        <a onClick={() => navigate(-1)} uk-icon="icon: arrow-left; ratio: 1 " className="uk-text-normal uk-button-link uk-align-right uk-margin-remove">voltar</a>        
                  </div>
                </div> */}
                

                <div className="uk-visible@m">
                  <div className="grid">
                      <div className="col-12 md:col-6 lg:col-3">
                          <div className="surface-card shadow-2 uk-card-small uk-card p-3 border-round">
                              <div className="flex justify-content-between mb-3">
                                  <div>
                                      <li className="block text-500 font-medium mb-3"><Link name="category" type="search" onClick={getType} to="/books?category=Publicacoes">Publicações</Link></li>
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
                                  <li className="block text-500 font-medium mb-3"><Link name="category" type="search" onClick={getType} to="/books?category=artigo">Artigo cientifico</Link></li>
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
                                  <li className="block text-500 font-medium mb-3"><Link name="category" type="search" onClick={getType} to="/books?category=relatorio">Relatórios Científicos</Link></li>
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
                                  <li className="block text-500 font-medium mb-3"><Link name="category" type="search" onClick={getType} to="/books?category=aperiodico">Documentos orientadores</Link></li>
                                  </div>
                                  <div className="flex align-items-center justify-content-center border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                      <i className="pi pi-file-pdf text-xl"></i>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>

                 {/* <div className="uk-visible@m">
                    <h3 className="uk-heading-bullet uk-text-bolder" style={{ color:"#fa7f22" }}><span className="uk-text-light uk-margin-remove"></span>Normas de Padronização</h3>
                    <a onClick={() => navigate(-1)} className="uk-text-normal uk-button-link uk-align-left uk-margin-remove uk-text-bold"><span uk-icon="icon: arrow-left; ratio: 1 "></span>Voltar</a>        
                </div> */} 

                <div className="uk-visible@m">
                  <div className="grid">
                      <div className="col-12 md:col-6 lg:col-9">
                          <div className="surface-card shadow-2 uk-card-small uk-card p-3 border-round">
                              <div className="flex justify-content-between mb-3">
                                  <div>
                                      <span className="block text-500 font-medium mb-3">Livros</span>
                                      <div className="">
                                      <MessageAlert />

                                      <DataTableExtensions {...tableData}>
                                        <DataTable
                                          columns={booksHeader}
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

                                              <table class="uk-table uk-table-striped">
                                                <tbody>
                                                    <tr>                      
                                                        <td><li><a href="/normas">Normas de Padronização</a></li></td>
                                                        <td><span class="uk-badge">350</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><li><a href="/serviceorders">Ordens de serviço</a></li></td>
                                                        <td><span class="uk-badge">36</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><li><a href="/legislation">Legislações</a></li></td>
                                                        <td><span class="uk-badge">04</span></td>
                                                    </tr>
						{/*
                                                    <tr>
                                                        <td><li><a href="/legislation">Eventos</a></li></td>
                                                        <td><span class="uk-badge">04</span></td>
                                                    </tr>
						*/}
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
                    <h3 className="uk-heading-bullet uk-text-bolder" style={{ color:"#fa7f22" }}><span className="uk-text-light uk-margin-remove"></span>Normas de Padronização</h3>
                    <a onClick={() => navigate(-1)} className="uk-text-normal uk-button-link uk-align-left uk-margin-remove uk-text-bold"><span uk-icon="icon: arrow-left; ratio: 1 "></span>Voltar</a>        
                </div>
              <div className="uk-hidden@m">
              <MessageAlert />

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
