import { useEffect } from "react";
import { useState } from "react";
import MessageAlert from "../components/Alert";
import Aside from "../components/Aside";
import { BASE_URL } from "../utils/utils";
import Header from "../components/HeaderSample";
import Layout from "./Layout";
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
          {/* <a className="uk-inline" href="/Documents"><button className="uk-inline uk-padding-remove uk-margin-remove" style={{borderRadius:100, backgroundColor:"#fff", color:"#000" }}><span uk-icon="arrow-left"></span></button></a> */}
          {/* <button className="uk-margin" style={{borderRadius:100}} onClick={() => navigate(-1)}>Voltar</button> */}
            <div>
              <div className="uk-card uk-card-small uk-padding-small uk-card-hover uk-card-body uk-border-rounded" style={{ width:250}}>  
              <p className="uk-text-bolder uk-h4">
                  
                  <span uk-icon="icon:  list; ratio: 1.2 "></span> 
                    </p>
                    <p className="uk-text-default uk-text-center uk-text-bold  uk-margin-remove" style={{ color:"#fa7f22" }}><span className="uk-text-light uk-margin-remove"></span>Projectos em execuÃ§Ã£o</p>
                    <a onClick={() => navigate(-1)} uk-icon="icon: arrow-left; ratio: 1 " className="uk-text-normal uk-button-link uk-align-right uk-margin-remove">voltar</a>        
              </div>
            </div>
            {/* <div className="uk-card-default uk-padding-small uk-padding-remove-right uk-margin-remove-right" style={{ width:250, borderRadius: 10}}>
                <div className="uk-align-left uk-inline uk-padding-remove">
                <img src="https://i.pinimg.com/originals/97/d3/06/97d306e5b448dc13c683142ef99c3dbe.jpg" width={50} height={50} alt="" />
                </div>
                <div className="uk-margin-remove-right uk-padding-remove">
                        <p className="uk-text-bold uk-padding-remove">Projectos</p>
                        (53 Arquivos)
                </div>
            </div> */}
          {/* <h4 className="h3 mb-3 font-weight-normal uk-margin-medium-top  uk-text-bold">
            projectos
          </h4> */}
          <MessageAlert  />
          
          <table
            className="uk-table uk-table-hover uk-table-striped"
            id="generic-table"
          >
            <thead>
              <th className="uk-text-left uk-text-uppercase">Ambito</th>
              <th className="uk-text-left uk-text-uppercase">Nome</th>
              <th className="uk-text-left uk-text-uppercase">Ponto de situaÃ§Ã£o</th>
              <th
                className="uk-text-left uk-table-shrink uk-text-uppercase"
                colSpan="2"
              >
                ::
              </th>
            </thead>
            <tbody>
              {projecto &&
                projecto.map((projectos, key) => (
                  <tr key={key}>
                    <td>{projectos.ambito}</td>
                    <td>{projectos.name}</td>
                    <td>{projectos.description}</td>
                    <td>

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
                                    {/* visualizar */}
                                </a>
                            </p>
                          {/* <a
                            className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                            href="/projectos"
                          >
                            <span uk-icon="icon: file-text; ratio: 1.2 "></span>
                          </a>

                          <Link
                            className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                            to="/viewPdf4"
                            state={projectos}
                          >
                            <span uk-icon="icon: file-pdf; ratio: 1.2"></span>
                          </Link> */}
                        </p>
                      }

                      {" "}
                      {/* <a
                        className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                        href="/sectores/edit/1"
                      >
                    {" "}
                    <span
                      href="#"
                      uk-icon="icon:  file-text; ratio: 1.2"
                      ></span>
                    </a> */}
                      {/* <Link
                        className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                        to="/sectores/edit"
                        state={ordems}
                      >
                        <span
                          href="#"
                          uk-icon="icon: file-text; ratio: 1.2"
                        ></span>
                      </Link>
                      <a
                        className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                        href="/sectores/show/1"
                      >
                        <span
                          href="#"
                          uk-icon="icon:  chevron-right; ratio: 1.2"
                        >
                          {" "} 
                        </span>
                      </a> */}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
		<br />
              <div class="uk-section uk-section-default uk-margin-remove-top uk-padding-remove-top"style={{
        		backgroundImage: "linear-gradient(#fa7f22cc, #fa7f2200), url(images/BannerDocuments.png)",
        		backgroundRepeat: "no-repeat",
        		backgroundSize: "cover",
        		//background: "linear-gradient(#844718cc, #fa7f22cc)",
    		}}>
	       <img width={ 150 } height={ 150 } src="/images/LogoEDM45AnosFull.png" alt="" />
              
              {/* <hr></hr>*/}
              <div class="uk-grid-match uk-child-width-1-3@m" uk-grid="uk-grid" style={{ color: "#fff" }}> 
                  <div className="uk-divider-vertical">
                    <h6 style={{ color: "#fff" }}>Contact Us</h6>
                    <ul class="uk-thumbnav" uk-margin>
                    <a href="" class="uk-icon-button uk-margin-small-right" uk-icon="twitter"></a>
                    <a href="" class="uk-icon-button  uk-margin-small-right" uk-icon="facebook"></a>
                    <a href="" class="uk-icon-button" uk-icon="youtube"></a>
                    </ul>
                    
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p> */}
                  </div>
                  <div>
                      
                    <a href="" class="uk-margin-small-right uk-link-reset" style={{ color: "#fff" }}>Politicas</a>
                    <a href="" class=" uk-margin-small-right uk-link-reset" style={{ color: "#fff" }}>Termos</a>
                    <a href="" class="uk-link-reset" style={{ color: "#fff" }} >Procedimentos</a>
      
                  </div>
                  <div>
                    <a href="" class="uk-margin-small-right uk-link-reset" style={{ color: "#fff" }}><span uk-icon="phone"></span> +258 21 30 60</a>
                    <a href="" class=" uk-margin-small-right uk-link-reset" style={{ color: "#fff" }}><span uk-icon="mail"></span> academy@edm.co.mz</a>
                    <a href="" class=" uk-link-reset" style={{ color: "#fff" }} ><span uk-icon="location"></span> Av.Eduardo Mondlane 1352, 2Ã‚Â° Andar, Maputo</a>
                      
                  </div>
              </div>
              <hr></hr>
              <h3 className="uk-text-small uk-text-bold uk-text-center" style={{ color:"#fa7f22" }} >
	       		EDM HÃƒ 45 ANOS ILUMINANDO A TRANSFORMAÃƒâ€¡ÃƒÆ’O DE MOÃƒâ€¡AMBIQUE</h3>
          </div>


        </div>
      }
    //   aside={<Aside />}
    />
  );
}

export default ListProjectos;
