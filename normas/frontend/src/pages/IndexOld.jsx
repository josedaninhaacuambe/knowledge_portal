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
    <div className="uk-background-default">
    {/* <h3 className="uk-margin-medium-left uk-text-bold uk-margin-large-top">
          #_Portal do Corporativo do Conhecimento
    </h3>

    <div class="uk-cover-container uk-height-large">
        <video src="https://yootheme.com/site/images/media/yootheme-pro.mp4" autoplay loop muted playsinline uk-cover></video>
    </div> */}

    <div class=""></div>

      <div className="uk-child-width-1-3@s uk-grid-match uk-padding" uk-grid="uk-grid">
        <div>
          <div className="uk-card uk-card-small uk-card-hover uk-card-body uk-border-rounded">
           
          <div class="uk-card uk-card-body">
            {/*  */}  
            <h3 className="uk-margin-large-top  uk-margin-auto-top">Gestão do Conhecimento
              <p class="uk-text-small uk-text-justify uk-margin-top uk-text-light uk-text-center "> 
                É o mecanismo de criação, compartilha e uso do conhecimento, para prestação de serviço com qualidade e excelência aos clientes.
              </p>
            </h3 >
          </div>
           
          </div>
        </div>
        <div>
          <div className="uk-card uk-card-small  uk-card-hover uk-card-body uk-border-rounded">
            <p className="uk-text-bolder uk-h4">
              {" "}
              {/* <span uk-icon="icon: album; ratio: 1.5 "></span>  */}
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
              {/* <span uk-icon="icon: file-pdf; ratio: 1.5 "></span>  */}
            </p>
            <h3 className="uk-margin-large-top  uk-margin-auto-top">Por que fazer a Gestão do Conhecimento?
              <p class="uk-text-small uk-text-justify uk-margin-top uk-text-light uk-text-center "> 
                Gestão do Conhecimento possibilita aplicar o conhecimento de forma a proporcionar a evolução profissional dos colaboradores e a qualidade de serviços prestados; facilitar a percepção dos serviços da EDM.
                Para Proteger o conhecimento, como sendo o núcleo patrimonial da prestação de serviços e do atendimento aos clientes em consonância com as políticas da EDM.
              </p>
            </h3 >
          </div>
        </div>
      </div>
    </div>
     }
//     aside={<Aside />}
   />
      
      );
}
