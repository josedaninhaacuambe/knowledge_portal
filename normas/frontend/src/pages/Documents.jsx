/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
// import Aside from "../components/Aside1";
 import Header from "../components/HeaderDocuments";
 import Layout from "./Layout1";
 import Footer from "../components/footer"
//import { BASE_URL } from "../utils/utils";


export default function Dashboard() {
  // const [mainSession, setMainSession] = useState(false);
  // setMainSession(JSON.parse(localStorage.getItem('mainSession')))
let mainSession = (JSON.parse(localStorage.getItem('mainSession')))

return (
  <Layout
       header={<Header />}
       content={
        
        <div className="uk-slider-container-offset uk-padding" uk-slider="">
        <div
          className="uk-position-relative"
          tabIndex={-1}
        >
          <div className="uk-slider-items uk-child-width-1-4@s uk-grid" uk-grid>
            <li>

            <div>
              <div className="uk-card uk-card-small  uk-card-hover uk-card-body uk-border-rounded">  
              <p className="uk-text-bolder uk-h4">
                  
                  <span uk-icon="icon:  list; ratio: 1.2 "></span> 
                    </p>
                    <p className="uk-text-default uk-text-center uk-text-bold  uk-margin-remove" style={{ color:"#fa7f22" }}><span className="uk-text-light uk-margin-remove"></span>Normas Padronização</p>
                    <a href="/Normas" uk-icon="icon: arrow-right; ratio: 1 " className="uk-text-normal uk-button-link uk-align-right uk-margin-remove">Ver</a>        
              </div>
            </div>
              {/* <div className="uk-card uk-card-default uk-padding-remove" style={{borderRadius:20}}>
              <a href="/Normas">
                <div className="uk-card-media-top uk-text-center uk-padding uk-padding-remove-bottom" style={{ borderRadius:20 }}>
                  <img src="https://i.pinimg.com/originals/c5/af/23/c5af23dc63a7589617deb56132b4ecdd.jpg" width={50} height={50} alt="" />
                </div>
                <div className="uk-card-body uk-text-center">
                  <p className="uk-card-title uk-text-bold">Normas</p>
                  <span className="uk-margin-remove uk-padding-remove">
                    (254 Arquivos)
                  </span>
                </div>
                </a>
              </div> */}
            </li>
            <li>
              <div>
                  <div className="uk-card uk-card-small  uk-card-hover uk-card-body uk-border-rounded">  
                  <p className="uk-text-bolder uk-h4">
                      
                      <span uk-icon="icon:   info; ratio: 1.2 "></span> 
                        </p>
                        <p className="uk-text-default uk-text-center uk-text-bold  uk-margin-remove" style={{ color:"#fa7f22" }}><span className="uk-text-light uk-margin-remove"></span>Legislação</p>
                        <a href="/legislation" uk-icon="icon: arrow-right; ratio: 1 " className="uk-text-normal uk-button-link uk-align-right uk-margin-remove">Ver</a>        
                  </div>
                </div>
              {/* <div className="uk-card uk-card-default uk-padding-remove" style={{borderRadius:20}}>
                <a href="/legislation">
                <div className="uk-card-media-top uk-text-center uk-padding uk-padding-remove-bottom" style={{ borderRadius:20 }}>
                  <img src="https://i.pinimg.com/originals/ce/48/de/ce48de01ecd8c1ccb20e1a8eaa9db178.jpg" width={50} height={50} alt="" style={{ borderRadius:"10 10 0 0"}} />
                </div>
                <div className="uk-card-body uk-text-center">
                    <p className="uk-card-title uk-text-bold">Legislações</p>
                    <span className="uk-margin-remove uk-padding-remove">
                      (254 Arquivos)
                  </span>
                </div>
                </a>
              </div> */}
            </li>
            <li>
              <div>
                <div className="uk-card uk-card-small uk-card-hover uk-card-body uk-border-rounded">
                  <p className="uk-text-bolder uk-h4">
                  <span uk-icon="icon:  git-branch; ratio: 1.2 "></span> 
                      </p>
                      <p className="uk-text-default uk-text-center uk-text-bold  uk-margin-remove" style={{ color:"#fa7f22" }}><span className="uk-text-light uk-margin-remove"></span>Projecto</p>
                      <a href="/Projecto" uk-icon="icon: arrow-right; ratio: 1 " className="uk-text-normal uk-button-link uk-align-right uk-margin-remove">Ver</a>
                      {/* <p className="uk-text-center uk-text-bolder"><span className="uk-text-light"></span><a className="" href="/Projecto">Projecto</a></p> */}
                </div>
              </div>
              {/* <div className="uk-card uk-card-default uk-padding-remove" style={{borderRadius:20}}>
                <a href="/Projecto">
                <div className="uk-card-media-top uk-text-center uk-padding uk-padding-remove-bottom" style={{ borderRadius:20 }}>
                  <img src="https://i.pinimg.com/originals/97/d3/06/97d306e5b448dc13c683142ef99c3dbe.jpg" width={80} height={80} alt="" style={{ borderRadius:"10 10 0 0"}} />
                </div>
                <div className="uk-card-body uk-text-center">
                  <p className="uk-card-title uk-text-bold">Projecto</p>
                  <span className="uk-margin-remove uk-padding-remove">
                    (254 Arquivos)
                  </span>
                </div>
                </a>
              </div> */}
            </li>
            <li>
              <div>
                <div className="uk-card uk-card-small  uk-card-hover uk-card-body uk-border-rounded">
                  <p className="uk-text-bolder uk-h4">
                    <span uk-icon="icon: file-text; ratio: 1.5 "></span> 
                  </p>

                  <p className="uk-text-default uk-text-center uk-text-bold  uk-margin-remove" style={{ color:"#fa7f22" }}><span className="uk-text-light uk-margin-remove"></span> Ordens de Serviço </p>
                  <a href="/pesquisa/ordens" uk-icon="icon: arrow-right; ratio: 1 " className="uk-text-normal uk-button-link uk-align-right uk-margin-remove">Ver</a>
                  {/* <p className="uk-text-center uk-text-bolder"><span className="uk-text-light"> </span><a className="" href="/OrdenSs"> Ordens de Serviço </a></p> */}
                </div>
              </div>
              {/* <div className="uk-card uk-card-default uk-padding-remove" style={{borderRadius:20}}>
                <a href="/OrdensS">
                <div className="uk-card-media-top uk-text-center uk-padding uk-padding-remove-bottom" style={{ borderRadius:20 }}>
                  <img src="https://i.pinimg.com/originals/49/3a/3f/493a3fc8d0183b22b46bb52c842fa582.jpg" width={80} height={80} alt="" style={{ borderRadius:"10 10 0 0"}} />
                </div>
                <div className="uk-card-body uk-text-center">
                  <p className="uk-card-title uk-text-bold">Ordens</p>
                  <span className="uk-margin-remove uk-padding-remove">
                    (254 Arquivos)
                  </span>
                </div>
                </a>
              </div> */}
            </li>
            <li>
              <div>
                <div className="uk-card uk-card-small  uk-card-hover uk-card-body uk-border-rounded">
                <p className="uk-text-bolder uk-h4">
                  <span uk-icon="icon: copy; ratio: 1.2 "></span> 
                </p>
                <p className="uk-text-default uk-text-center uk-text-bold  uk-margin-remove" style={{ color:"#fa7f22" }}><span className="uk-text-light uk-margin-remove"></span> Processos de Negocio </p>
                <a href="/Normas" uk-icon="icon: arrow-right; ratio: 1 " className="uk-text-normal uk-button-link uk-align-right uk-margin-remove">Ver</a> 
                </div>
              </div>
            
            </li>
          </div>
      
        </div>
	                    
                    

      </div>

     }
      //aside={<Aside1 />}
     footer={<Footer />}

   />
      
      );
}
