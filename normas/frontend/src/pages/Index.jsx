/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
// import Aside from "../components/Aside1";
 import Header from "../components/Header1";
 import Layout from "./Layout1";
//import { BASE_URL } from "../utils/utils";


export default function Dashboard() {
  // const [mainSession, setMainSession] = useState(false);
  // setMainSession(JSON.parse(localStorage.getItem('mainSession')))
let mainSession = (JSON.parse(localStorage.getItem('mainSession')))

return (
     <Layout
       header={<Header />}
       content={
//   return (

  
    <div className="uk-background-default uk-padding">
      {/* <h3 className="uk-margin-medium-left uk-text-bold uk-margin-large-top">
              Portal do Corporativo do Conhecimento
      </h3> */}
      <div className="uk-child-width-1-3@s uk-grid-match" uk-grid="uk-grid">
        <div>
          <div className="uk-card uk-card-small uk-card-hover uk-card-body uk-border-rounded">
           
          <div class="uk-card uk-card-body">
            <ul class="uk-nav-default uk-nav-parent-icon" uk-nav>
                <li class="uk-active"><a href="#">Menu</a></li>
                <li class="uk-parent">
                    <a href="#">Legislacoes</a>
                    <ul class="uk-nav-sub">
                        <li><a href="/legislacao">Diplomas</a></li>
                        <li><a href="/legislacao">Decreto</a></li>
                    </ul>
                </li>
                <li class="uk-parent">
                    <a href="#">Ordens de Servicos</a>
                    <ul class="uk-nav-sub">
                        <li><a href="/ordens">2022</a></li>
                        <li><a href="/ordens">2021</a></li>
                    </ul>
                </li>

                <li class="uk-parent">
                    <a href="#">Processos de negocio</a>
                    <ul class="uk-nav-sub">
                        <li><span class="uk-margin-small-right" uk-icon="icon: table"></span><a href="/processos">DTS</a></li>
                        <li><span class="uk-margin-small-right" uk-icon="icon: table"></span><a href="/processos">DTC</a></li>
                        {/* <li><a href="/processos">DDS</a></li>
                        <li><a href="/processos">DDC</a></li> */}
                    </ul>
                </li>

                <li class="uk-nav-header">Eventos</li>
                <li><a href="/webinars"><span class="uk-margin-small-right" uk-icon="icon: table"></span> Webinar</a></li>
                <li><a href="/webinars"><span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> conferencias</a></li>
                {/* <li class="uk-nav-divider"></li> */}

            </ul>
        </div>
           
          </div>
        </div>
        <div>
          <div className="uk-card uk-card-small  uk-card-hover uk-card-body uk-border-rounded">
            <p className="uk-text-bolder uk-h4">
              {" "}
              <span uk-icon="icon: album; ratio: 1.5 "></span> 
            </p>

            <h3 class="uk-margin-large-top  uk-margin-auto-top ">Portal de Conhecimento
                <p class="uk-text-small uk-text-justify uk-margin-top uk-text-light uk-text-center ">
                  Canal criado pela ACADEMIA da EDM para facil acesso e partilha de conteúdo de interresse dos colaboradoes, clientes e publico no geral
                    <div class="uk-container">
                        <div class="uk-child-width-1-1@s">
                            <div class="uk-padding uk-flex uk-flex-center"><a class="uk-button-yellow uk-text-white uk-button uk-text-capitalize" href="/accounts/login">Continuar</a></div>
                        </div>
                    </div>
                </p>
            </h3>
            {/* <p className="uk-text-large uk-text-bolder"><span className="uk-text-light"> {mainSession.sectors}</span> Sectores</p> */}
          </div>
        </div>
        <div>
          <div className="uk-card uk-card-small uk-card-hover uk-card-body uk-border-rounded">
            <p className="uk-text-bolder uk-h4">
              {" "}
              <span uk-icon="icon: file-pdf; ratio: 1.5 "></span> 
            </p>
            {/* <p className="uk-text-large uk-text-bolder"><span className="uk-text-light"> {mainSession.documents}</span> Normas ISO</p> */}
          </div>
        </div>
      </div>
    </div>
     }
//     aside={<Aside />}
   />
      
      );
}
