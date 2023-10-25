import { useEffect } from "react";
import { useState } from "react";
import MessageAlert from "../components/Alert";
import Aside from "../components/Aside";
import { BASE_URL } from "../utils/utils";
import Header from "../components/HeaderSample";
import Layout from "./Layout1";
import Footer from "../components/footer";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
//import {Link, } from 'react-router-dom';



function ListProjectos() {
  const [projecto, setProjectos] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getProjectos = async () => {
      try {
        const response = await fetch(`${BASE_URL}projectos/`);
        const data = await response.json();
        setProjectos(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProjectos();
  }, []);

  return (
    <Layout
      header={<Header />}
      content={
        <div className="uk-padding">
            <div className="uk-visible@m">
              <div className="uk-card uk-card-small uk-padding-small uk-card-hover uk-card-body uk-border-rounded" style={{ width:250}}>  
              <p className="uk-text-bolder uk-h4">                  
                  <span uk-icon="icon:  list; ratio: 1.2 "></span> 
                    </p>
                    <p className="uk-text-default uk-text-center uk-text-bold  uk-margin-remove" style={{ color:"#fa7f22" }}>
	      		<span className="uk-text-light uk-margin-remove"></span>Projectos em execução</p>
  			<a onClick={() => navigate(-1)} uk-icon="icon: arrow-left; ratio: 1 " 
	      		className="uk-text-normal uk-button-link uk-align-right uk-margin-remove">voltar</a>        
              </div>
            </div>
            
	      <div className="uk-hidden@m">
                <h3 className="uk-heading-bullet uk-text-bolder" style={{ color:"#fa7f22" }}>
	      		<span className="uk-text-light uk-margin-remove"></span>Projectos em execução</h3>
               	 <a onClick={() => navigate(-1)} className="uk-text-normal uk-button-link uk-align-left uk-margin-remove uk-text-bold">	
	      	<span uk-icon="icon: arrow-left; ratio: 1 "></span>Voltar</a>        
              </div>
          {/* <h4 className="h3 mb-3 font-weight-normal uk-margin-medium-top  uk-text-bold">
            projectos
          </h4> */}
          <MessageAlert  />
          
          <table
            className="uk-table uk-table-hover uk-table-striped"
            id="generic-table"
          >
            <thead>
              <th className="uk-text-left uk-visible@m uk-text-uppercase">Nr</th>
              <th className="uk-text-left uk-text-uppercase">Nome</th>
              <th className="uk-text-left uk-visible@m uk-text-uppercase">Nivel de desempenho</th>
	      <th className="uk-text-left uk-visible@m uk-text-uppercase">Ponto de Situação</th>
              <th className="uk-text-left uk-visible@m uk-text-uppercase">constrangimentos</th>
              {/* <th
                className="uk-text-left uk-table-shrink uk-text-uppercase"
                colSpan="2"
              >
                ::
              </th> */}
            </thead>
            <tbody>
              {projecto &&
                projecto.map((projectos, key) => (
                  <tr key={key}>
                    <td className="uk-visible@m">{projectos.nr}</td>
                    <td>{projectos.name}</td>
                    <td className="uk-visible@m">{projectos.nivel_desempenho}</td>
                    <td className="uk-visible@m uk-text-justify">{projectos.ponto_de_situacao}</td>
                    <td className="uk-visible@m uk-text-justify">{projectos.constrangimentos}</td>
                    {/*<td>

                    {   
                        <p>
                          <p uk-margin>
                               <a class="uk-button uk-button-default" href="/projectos" style={{ borderRadius:20 }}>
                               <Link
                                    className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                                    to="/viewPdf4"
                                    state={projectos}
                                    >
                                    <span>visualizar</span>
                                    </Link>
                                </a>
                            </p>
                         
                        </p>
                      }                      
                    </td>*/}
                  </tr>
                ))}
            </tbody>
          </table>
		<br />
        </div>
      }
      footer={<Footer />}
    />
  );
}

export default ListProjectos;
