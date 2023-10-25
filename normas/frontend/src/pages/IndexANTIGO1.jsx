/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
 import React, { useState } from "react";
 import Header from "../components/Header22";
 import Layout from "./Layout1";
 import Spinner from "../utils/Spinner";
 import Footer from "../components/footer"
//import { BASE_URL } from "../utils/utils";


export default function Index() {
  const [isLoading, setIsLoading] = useState(false);
  // const [mainSession, setMainSession] = useState(false);
  // setMainSession(JSON.parse(localStorage.getItem('mainSession')))
let mainSession = (JSON.parse(localStorage.getItem('mainSession')))

return (
  <Layout
       header={<Header />}
       content={
//   return (  
    <div className="uk-background-default">
    <div class=""></div>
    {isLoading ? <Spinner /> : ""}
      <div className="uk-card uk-card-small uk-card-body uk-border-rounded">
          <div class="uk-card uk-card-body">
            {/*  */}  
            <h3 className="uk-text-center ">Portal do Conhecimento da EDM
              <p class="uk-text-small uk-text-center uk-margin-top uk-text-light uk-text-center "> 
                É o mecanismo de criação, compartilha e uso do conhecimento, para prestação de serviço com qualidade e excelência aos clientes.
              </p>
            </h3 >
          </div>
      </div>

      {/* <div class="uk-child-width-1-4@m uk-grid-small uk-grid-match" uk-grid>
        <div>
            <div class="uk-card uk-card-default uk-card-body">
                <h3 class="uk-card-title">Default</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
        </div>
        <div>
            <div class="uk-card uk-card-primary uk-card-body">
                <h3 class="uk-card-title">Primary</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
        </div>
        <div>
            <div class="uk-card uk-card-secondary uk-card-body">
                <h3 class="uk-card-title">Secondary</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
        </div>
        <div>
            <div class="uk-card uk-card-primary uk-card-body">
                <h3 class="uk-card-title">Secondary</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
        </div>
    </div> */}

    <div className="uk-background-default uk-padding uk-padding-remove-top">
      <div className="uk-child-width-1-3@s uk-grid-match" uk-grid="uk-grid">
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
        <div>
          <div className="uk-card uk-card-small  uk-card-hover uk-card-body uk-border-rounded">  
          <p className="uk-text-bolder uk-h4">
              
              <span uk-icon="icon:  list; ratio: 1.2 "></span> 
                </p>
                <p className="uk-text-default uk-text-center uk-text-bold  uk-margin-remove" style={{ color:"#fa7f22" }}><span className="uk-text-light uk-margin-remove"></span>Normas Padronização</p>
                <a href="/Normas" uk-icon="icon: arrow-right; ratio: 1 " className="uk-text-normal uk-button-link uk-align-right uk-margin-remove">Ver</a>        
          </div>
        </div>

        <div>

          <div className="uk-card uk-card-small  uk-card-hover uk-card-body uk-border-rounded">
            
            <p className="uk-text-bolder uk-h4">
              <span uk-icon="icon: copy; ratio: 1.2 "></span> 
            </p>
            <p className="uk-text-default uk-text-center uk-text-bold  uk-margin-remove" style={{ color:"#fa7f22" }}><span className="uk-text-light uk-margin-remove"></span> Base de Dados de Especialistas </p>
            <a href="/specialist" uk-icon="icon: arrow-right; ratio: 1 " className="uk-text-normal uk-button-link uk-align-right uk-margin-remove">Ver</a> 

            {/* <p className="uk-text-center uk-text-bolder"><span className="uk-text-light"> </span><a className="" href="/Normas">Processos de Negocio</a></p> */}
           
          </div>
        </div>

        <div>
          <div className="uk-card uk-card-small  uk-card-hover uk-card-body uk-border-rounded">
            <p className="uk-text-bolder uk-h4">
              <span uk-icon="icon: file-text; ratio: 1.5 "></span> 
            </p>

            <p className="uk-text-default uk-text-center uk-text-bold  uk-margin-remove" style={{ color:"#fa7f22" }}><span className="uk-text-light uk-margin-remove"></span> Ordens de Serviço </p>
            <a href="/OrdenSs" uk-icon="icon: arrow-right; ratio: 1 " className="uk-text-normal uk-button-link uk-align-right uk-margin-remove">Ver</a>
            {/* <p className="uk-text-center uk-text-bolder"><span className="uk-text-light"> </span><a className="" href="/OrdenSs"> Ordens de Serviço </a></p> */}
          </div>
        </div>

        <div>
          <div className="uk-card uk-card-small  uk-card-hover uk-card-body uk-border-rounded">
            <p className="uk-text-bolder uk-h4">
              <span uk-icon="icon: video-camera; ratio: 1.5 "></span> 
            </p>

            <p className="uk-text-default uk-text-center uk-text-bold  uk-margin-remove" style={{ color:"#fa7f22" }}><span className="uk-text-light uk-margin-remove"></span> Eventos </p>
            <a href="/Evento" uk-icon="icon: arrow-right; ratio: 1 " className="uk-text-normal uk-button-link uk-align-right uk-margin-remove">Ver</a>
            {/* <p className="uk-text-center uk-text-bolder"><span className="uk-text-light"> </span><a className="" href="/Evento"> Eventos </a></p> */}
          </div>
        </div>

        <div>
          <div className="uk-card uk-card-small uk-card-hover uk-card-body uk-border-rounded">
            <p className="uk-text-bolder uk-h4">
              <span uk-icon="icon: settings; ratio: 1.5 "></span> 
            </p>
            <p className="uk-text-default uk-text-center uk-text-bold  uk-margin-remove" style={{ color:"#fa7f22" }}><span className="uk-text-light uk-margin-remove"></span> Outros... </p>
            <a href="" uk-icon="icon: arrow-right; ratio: 1 " className="uk-text-normal uk-button-link uk-align-right uk-margin-remove">Ver</a>
            {/* <p className="uk-text-center uk-text-bolder"><span className="uk-text-light"> </span> <a className="" href="/Projecto"> Projecto </a></p> */}
          </div>
        </div>
      </div>
    </div>
	       {/*
    <div className="uk-card uk-card-small uk-card-body uk-border-rounded">
        <div class="uk-card uk-card-body">
            
          <h3 className="uk-text-center ">Eventos
            <p class="uk-text-small uk-text-center uk-margin-top uk-text-light uk-text-center "> 
              Encontre os eventos de maior destaque que marcaram a empresa nas ultimas semanas
            </p>
          </h3 >
        </div>
      </div>

      <div className="uk-slider-container-offset" uk-slider="">
        <div
          className="uk-position-relative uk-visible-toggle uk-light"
          tabIndex={-1}
        >
          <ul className="uk-slider-items uk-child-width-1-3@s uk-grid">
            <li>
              <div className="uk-card uk-card-default uk-border-rounded">
                <div className="uk-card-media-top">
                  <img src="https://i.pinimg.com/originals/20/f7/02/20f702d96c8b0811f555356b7814b0ac.jpg" alt="" style={{opacity: 1}} />

              
                </div>
                <div className="uk-card-body">
                  <h3 className="uk-card-title uk-text-truncate">Webinar - Analise de Perturbações no Sistema</h3>
                  <p className="uk-text-truncate">
                    Os arquivos Ordem sao relativos a constituicao da Republica Segundo o decreto....
                  </p>
                  <p className="uk-text-justify uk-text-truncate">
                    Ler Mais ...
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                  <img src="https://i.pinimg.com/originals/08/53/4f/08534f9a48bf287961a1cbe293112d6a.jpg" alt="" style={{opacity: 1}} />
                </div>
                <div className="uk-card-body">
                  <h3 className="uk-card-title uk-text-truncate">Exposição alusiva aos 45 anos da EDM</h3>
                  <p className="uk-text-justify uk-text-truncate">
                    Por ocasião da celebração do quadragésimo quinto aniversario da Electrecidade de Moçambique, esta previsto a realização de uma exposição que terá lugar no dia 26/08/2022 no centro Cultural do BCI, que contara com a participação do PCA e os demais membros bem como Estudantes e publico no geral...
                  </p>
                  <p className="uk-text-justify uk-text-truncate">
                    Ler Mais ...
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                  <img src="https://i.pinimg.com/originals/a6/95/c4/a695c478078a17ff47e6a8b29bfd5314.jpg" width={1800} height={1200} alt="" style={{ height:400 }} />

                </div>
                <div className="uk-card-body">
                  <h3 className="uk-card-title uk-text-truncate">Webinar - Apresentacao do Programa de Gestao do Conhecimento</h3>
                  <p>
                    Assistir o webinar.
                  </p>
                  <p className="uk-text-justify uk-text-truncate">
                    Ler Mais ...
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                  <img src="/images/EDM.jpg" width={1800} height={1200} alt="" style={{ height:400 }} />
                </div>
                <div className="uk-card-body">
                  <h3 className="uk-card-title">Headline</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                  <img src="/images/EDM.jpg" width={1800} height={1200} alt="" style={{ height:400 }} />
                </div>
                <div className="uk-card-body">
                  <h3 className="uk-card-title">Headline</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <a
            className="uk-position-center-left uk-position-small uk-hidden-hover"
            href="#"
            uk-slidenav-previous=""
            uk-slider-item="previous"
          />
          <a
            className="uk-position-center-right uk-position-small uk-hidden-hover"
            href="#"
            uk-slidenav-next=""
            uk-slider-item="next"
          />
        </div>
        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin" />
      </div> */}

{/*	       
      <div class="uk-section uk-section-default uk-margin-remove-top uk-text-light uk-padding-remove-top"
	       style={{
        		backgroundImage: "linear-gradient(#fa7f22cc, #fa7f2200), url(images/BannerDocuments.png)",
        		backgroundRepeat: "no-repeat",
        		backgroundSize: "cover",
        		//background: "linear-gradient(#844718cc, #fa7f22cc)",
    		}}>
	       <img width={ 150 } height={ 150 } src="/images/LogoEDM45AnosFull.png" alt="" />
       
          <div class="uk-grid-match uk-child-width-1-3@m" uk-grid="uk-grid" style={{ color:"#fff"}}>
              <div className="uk-divider-vertical">
                <h6 style={{ color: "#fff" }}>Contact Us</h6>
                <ul class="uk-thumbnav" uk-margin>
                <a href="" class="uk-icon-button uk-margin-small-right" uk-icon="twitter"></a>
                <a href="" class="uk-icon-button  uk-margin-small-right" uk-icon="facebook"></a>
                <a href="" class="uk-icon-button" uk-icon="youtube"></a>
                </ul>
                
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p> */}
{/*           </div>
              <div>
                  
                <a href="" class="uk-margin-small-right uk-link-reset" style={{ color:"#fff" }}>Politicas</a>
                <a href="" class=" uk-margin-small-right uk-link-reset" style={{ color:"#fff" }}>Termos</a>
                <a href="" class="uk-link-reset" style={{ color:"#fff" }}>Procedimentos</a>
  
              </div>
              <div>
                <a href="" class="uk-margin-small-right uk-link-reset" style={{ color:"#fff" }}><span uk-icon="phone"></span> +258 21 30 60</a>
                <a href="" class=" uk-margin-small-right uk-link-reset" style={{ color:"#fff" }}><span uk-icon="mail"></span> academy@edm.co.mz</a>
                <a href="" class="uk-link-reset" style={{ color:"#fff" }} ><span uk-icon="location"></span> Av.Eduardo Mondlane 1352, <br /> 2° Andar, Maputo</a>
                  
              </div>
          </div>
          <hr></hr>
          <h3 className="uk-text-small uk-text-bold uk-text-center" style={{ color:"#fa7f22" }} >
	       EDM HÁ 45 ANOS ILUMINANDO A TRANSFORMAÇÃO DE <a href="/dashboard" className="uk-link-reset">MOÇAMBIQUE</a></h3>
      </div> */}

    </div>
     }
     //aside={<Footer />}
     footer={<Footer />}
   />
      
      );
}
