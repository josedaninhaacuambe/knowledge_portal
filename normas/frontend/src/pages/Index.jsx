/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
 import React, { useState } from "react";
// import Aside from "../components/Aside1";
 import Header from "../components/Header22";
// import Layout from "./Layout";
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

      {/*<div className="uk-card uk-card-small uk-margin uk-card-primary uk-card-body">
          <h3 className="">Repositório do Conhecimento da EDM</h3 >
      </div>

      <div className="uk-card uk-card-small uk-margin uk-padding-remove-top uk-margin-remove-top uk-margin-remove-bottom uk-card-body uk-border-rounded">
          <div class="uk-card uk-card-body">
              <p class="uk-text-small uk-text-justify">O Repositório do Conhecimento da EDM tem como objectivo armazenar, preservar, divulgar e promover o acesso ao conhecimento produzido na organização, de tal forma que este conhecimento contribua para a geração de valor para os colaboradores e ao público interessado.
              </p>
          </div>
      </div>


<div className="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
    <div className="mb-3 font-bold text-2xl">
        <span className="text-900">Os pilares</span>
        <span className="" style={{color:"#fa7f22"}}> da gestão do conhecimento</span>
    </div>
     <div className="grid">
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
            <i className="pi pi-check-circle text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 mb-3 font-medium">Gestão de Competências.</div>
            <span className="text-700 text-sm line-height-3"> A gestão de competências visa desenvolver e potencializar os colaboradores de habilidades e conhecimentos requeridos no seu campo de atuação.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
            <i className="pi pi-check-circle text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 mb-3 font-medium">Gestão do Capital Intelectual</div>
            <span className="text-700 text-sm line-height-3">O pilar da gestão intelectual visa a partilha de livros, narrativas, boas práticas e outros documentos que compõem o capital intelectual produzido na organização.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
                <i className="pi pi-check-circle text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 mb-3 font-medium">Gestão da informação</div>
            <span className="text-700 text-sm line-height-3">O pilar da gestação da informação cinge-se ao armazenamento, classificação, identificação e partilha de registos, podendo estes ser digitais.</span>
        </div>
    </div>
</div>*/} <br/><br/><br/>

    {/*<div className="uk-background-default uk-padding uk-padding-remove-top">
      <div className="uk-child-width-1-1@s uk-grid-match" uk-grid="uk-grid">
       <div>
          <div className="uk-card uk-card-small  uk-card-hover uk-card-body uk-border-rounded5">
            <p className="uk-text-bolder uk-h4">
              <span uk-icon="">Documentos</span> 
            </p>

              <table class="uk-table uk-table-striped">
                <tbody>
                    <tr>                      
                        <td><li><a href="/normas">Normas de Padronização</a></li></td>
                        <td><span class="uk-badge">416</span></td>
                    </tr>
                    <tr>
                        <td><li><a href="/serviceorders">Ordens de Serviço</a></li></td>
                        <td><span class="uk-badge">36</span></td>
                    </tr>
                    <tr>
                        <td><li><a href="/legislation">Legislações</a></li></td>
                        <td><span class="uk-badge">03</span></td>
                    </tr>

                    <tr>
                        <td><li><a href="/ClassificationPlan">Gestão dos arquivos</a></li></td>
                        <td><span class="uk-badge">02</span></td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>*/}



    <div className="uk-background-default uk-padding uk-padding-remove-top">
      <div className="uk-child-width-1-4@s uk-grid-match" uk-grid="uk-grid">
        <div>
          <div className="uk-card uk-card-small  uk-card-hover uk-card-body uk-border-rounded5">
            <p className="uk-text-bolder uk-h4">
              <span uk-icon="">Documentos</span> 
            </p>

              <table class="uk-table uk-table-striped">
                <tbody>
                    <tr>                      
                        <td><li><a href="/normas">Normas de Padronização</a></li></td>
                        <td><span class="uk-badge">416</span></td>
                    </tr>
                    <tr>
                        <td><li><a href="/serviceorders">Ordens de Serviço</a></li></td>
                        <td><span class="uk-badge">36</span></td>
                    </tr>
                    <tr>
                        <td><li><a href="/legislation">Legislação</a></li></td>
                        <td><span class="uk-badge">06</span></td>
                    </tr>

                    <tr>
                        <td><li><a href="/ClassificationPlan">Gestão dos Arquivos</a></li></td>
                        <td><span class="uk-badge">00</span></td>
                    </tr>

		    <tr>
                        <td><li><a href="/books">Publicações</a></li></td>
                        <td><span class="uk-badge">03</span></td>
                    </tr>

                </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="uk-card uk-card-small  uk-card-hover uk-card-body uk-border-rounded5">
            <p className="uk-text-bolder uk-h4">
              <span uk-icon="">Projectos</span> 
            </p>

            <table class="uk-table uk-table-striped">
              <tbody>
                  <tr>                      
                      <td><li><a href="/Projecto?status=planificado">Planificados</a></li></td>
                      <td><span class="uk-badge">00</span></td>
                  </tr>
                  <tr>
                      <td><li><a href="/Projecto?status=emcurso">Em Curso</a></li></td>
                      <td><span class="uk-badge">30</span></td>
                  </tr>
                  <tr>
                      <td><li><a href="/Projecto?status=concluido">Concluídos</a></li></td>
                      <td><span class="uk-badge">00</span></td>

                  </tr>
                  
                  <tr>                  
                      <td><li><a href="/Projecto?status=licoes">Lições apreendidas</a></li></td>
                      <td><span class="uk-badge">00</span></td>

                  </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="uk-card uk-card-small uk-card-hover uk-card-body uk-border-rounded5">
            <p className="uk-text-bolder uk-h4">
              <span className="">Gestão de Conhecimento</span> 
            </p>
            <table class="uk-table uk-table-striped">
              <tbody>
                  <tr>                      
                      <td><li><a href="/PageNotFound">Base de Dados de Especialistas</a></li></td>
                      <td><span class="uk-badge">01</span></td>
                  </tr>
                  <tr>
                      <td><li><a href="/PageNotFound">Comunidades de Práticas</a></li></td>
                      <td><span class="uk-badge">00</span></td>
                  </tr>
                  <tr>
                      <td><li><a href="/hability">Boas Práticas</a></li></td>
                      <td><span class="uk-badge">02</span></td>
                  </tr>
                  
                  <tr>                  
                      <td><li><a href="/PageNotFound">Narrativas</a></li></td>
                      <td><span class="uk-badge">00</span></td>
                  </tr>

                  {/*<tr>                  
                      <td><li><a href=""></a></li></td>
                      <td><span class="uk-badge">00</span></td>
                  </tr>*/}

              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="uk-card uk-card-small uk-card-hover uk-card-body uk-border-rounded5">
            <p className="uk-text-bolder uk-h4">
              <span uk-icon=""><span className="uk-visible@m">Eventos</span></span> 
            </p>
            <table class="uk-table uk-table-striped">
              <tbody>
                  <tr>                      
                      <td><li><a href="/Evento">Webinar</a></li></td>
                      <td><span class="uk-badge">04</span></td>
                  </tr>
                  <tr>
                      <td><li><a href="">Jornadas</a></li></td>
                      <td><span class="uk-badge">00</span></td>
                  </tr>
                  <tr>
                      <td><li><a href="">Exposições</a></li></td>
                      <td><span class="uk-badge">00</span></td>

                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

       {/* <div className="uk-card uk-card-small uk-card-body uk-border-rounded">
        <div class="uk-card uk-card-body">
          <h3 className="uk-text-center ">Eventos
            <p class="uk-text-small uk-text-center uk-margin-top uk-text-light uk-text-center "> 
              Encontre os eventos de maior destaque que marcaram a empresa nas ultimas semanas
            </p>
            
          </h3 >
        </div>
      </div>*/}


	
        <>
        <div className="b-example-divider uk-visible@m uk-column-divider" />
        <div className="container px-4 py-5" id="custom-cards">
          <h2 className="pb-2 border-bottom uk-text-bold">Eventos de destaque</h2>
          <div className="row row-cols-1y uk-margin-large row-cols-lg-3 uk-column-1-2@s uk-column-1-3@m uk-column-1-3@l uk-margin-remove uk-margin align-items-stretch g-4 py-5" >
          <div className="col">
              <div className="card uk-card card-cover h-150 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <iframe width="100%" height="280" src="https://www.youtube.com/embed/YYfVFmvbO0s?disablekb=1&rel=0&showinfo=0" title="Os desafios da implementação do plano de Classificação de documentos  na EDM 2022 06 10 01 58 GMT 7" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h6 className="pt-5 text-margem mt-5 mb-4 uk-text-light display-6 lh-1 fw-bold" style={{fontSize:"1.2rem",margin:"0px", color: "#fff !important", padding:"0px",  marginTop:"1rem !important", paddingTop:"1rem" }}>
                      Apresentação do programa de gestão de conhecimento
                  </h6>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src="/images/LogoTransparente.png"
                        alt="Bootstrap"
                        width={32}
                        height={32}
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use xlinkHref="#geo-fill" />
                      </svg>
                      <small>Webinar</small>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use xlinkHref="#calendar3" />
                      </svg>
                      <small>Data: 2022-07-06</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card uk-card card-cover h-150 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <iframe width="100%" height="280" src="https://www.youtube.com/embed/olWrXZeadq8?disablekb=1&rel=0&showinfo=0" title="Os desafios da implementação do plano de Classificação de documentos  na EDM 2022 06 10 01 58 GMT 7" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" ></iframe>
                <div className="d-flex flex-column uk-margin-remove-top uk-padding-remove-top h-100 p-5 pb-3 text-white text-shadow-1">
                  <h6 className="pt-5 text-margem mt-5 mb-4 uk-text-light display-6 lh-1 fw-bold" style={{fontSize:"1.2rem", margin:"20px 0px 10px 0px !important", marginTop: "20px !important", color: "#fff !important", padding:"0px",  marginTop:"0.2rem", paddingTop:"0.2rem" }}>
                    Parte 2: Preservação e valorização do património
                  </h6>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src="/images/LogoTransparente.png"
                        alt="Bootstrap"
                        width={32}
                        height={32}
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use xlinkHref="#geo-fill" />
                      </svg>
                      <small>Webinar</small>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use xlinkHref="#calendar3" />
                      </svg>
                      <small>Data: 2022-07-06</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card uk-card  card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                  <iframe width="100%" height="280" src="https://www.youtube.com/embed/UxrRE7OnulU?disablekb=1&rel=0&showinfo=0" title="Os desafios da implementação do plano de Classificação de documentos  na EDM 2022 06 10 01 58 GMT 7" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                <div className="d-flex flex-column uk-margin-remove-top uk-padding-remove-top h-10 p-5 pb-3 text-shadow-1">
                  <h6 className="pt-5 text-margem mt-5 mb-4 uk-margin-small uk-padding-small uk-text-light display-6 lh-1 fw-bold" style={{fontSize:"1.2rem", margin:"0px", marginTop: "20px !important", color: "#fff !important", padding:"0px",  marginTop:"0.2rem", paddingTop:"0.2rem" }}>
                      Os desafios da implementação do plano de Classificação de documentos na EDM
                  </h6>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src="/images/LogoTransparente.png"
                        alt="Bootstrap"
                        width={32}
                        height={32}
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use xlinkHref="#geo-fill" />
                      </svg>
                      <small>Webinar</small>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use xlinkHref="#calendar3" />
                      </svg>
                      <small>Data: 2022-06-10</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
	



<div className="px-4 py-5 my-5 text-center">
{/* <link className="d-block mx-auto mb-4" rel="stylesheet" width={72} height={57} href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /> */}
  {/* <img
    className="d-block mx-auto mb-4"
    src="https://images.app.goo.gl/PUAbihmp3dWs4S477"
    alt=""
    width={72}
    height={57}
  /> */}
  <h1 className="display-5 fw-bold">Partilhar o conhecimento</h1>
  <div className="col-lg-6 mx-auto">
    <p className="lead mb-4">
      Um dos pressupostos do Repositório do Conhecimento da EDM é a partilha e 
      o armazenamento do conhecimento, que consistem num processo de gerar e repartir 
      informações e habilidades com quem está ao seu redor. Essa forma de interacção e 
      troca de aprendizados entre as pessoas permite o desenvolvimento profissional e 
      pessoal de ambas as partes. A partilha de conhecimento pode ocorrer através de 
      debates, formações, palestras, webinars, treinamentos, entre outros, pelo que 
      este Repositório incorporará informações de todos estes eventos.
    </p>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" className="btn btn-primary uk-button uk-button-primary btn-lg px-4 gap-3">
        <a className="uk-link-reset" href="https://meet.google.com/">Criar evento</a>
      </button>
      {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">
        Secondary
      </button> */}
    </div>
  </div>
</div>



      {/* <div className="uk-slider-container-offset" uk-slider="">
        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex={-1}>
          <ul className="uk-slider-items uk-child-width-1-3@s uk-grid">
            <li>
              <div className="uk-card uk-card-default uk-border-rounded">
                <div className="uk-card-media-top">
                <iframe width="100%" height="280" src="https://www.youtube.com/embed/vvqUd7c2zng" title="Apresentação do programa de gestão de conhecimento 2022 07 06 04 59 GMT 7"></iframe>
                </div>
                <div className="uk-card-body">
                  <h6 className="uk-card-title uk-text-truncate">Apresentação do programa de gestão de conhecimento</h6>
                  <p className="uk-text-truncate">
                  </p>
                  <p className="uk-text-justify uk-text-truncate">
                    Ler Mais ...
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="uk-card uk-card-default uk-border-rounded">
                <div className="uk-card-media-top">
                <iframe width="100%" height="280" src="https://www.youtube.com/embed/HVhMygcyeg0" title="Os desafios da implementação do plano de Classificação de documentos  na EDM 2022 06 10 01 58 GMT 7" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="uk-card-body">
                  <h6 className="uk-card-title uk-text-truncate">Os desafios da implementação do plano de Classificação de documentos na EDM</h6>
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
              <div className="uk-card uk-card-default uk-border-rounded">
                <div className="uk-card-media-top">
                <iframe width="100%" height="280" src="https://www.youtube.com/embed/UxrRE7OnulU" title="Os desafios da implementação do plano de Classificação de documentos  na EDM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="uk-card-body">
                  <h6 className="uk-card-title uk-text-truncate">Os desafios da implementação do plano de Classificação de documentos na EDM</h6>
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
              <div className="uk-card uk-card-default uk-border-rounded">
                <div className="uk-card-media-top">
                <iframe width="100%" height="280" src="https://www.youtube.com/embed/c7IQmOzRcNQ" title="Os desafios da implementação do plano de Classificação de documentos  na EDM 2022 06 10 01 58 GMT 7" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="uk-card-body">
                  <h3 className="uk-card-title uk-text-truncate">Os desafios da implementação do plano de Classificação de documentos na EDM</h3>
                  <p className="uk-text-truncate">
                  </p>
                  <p className="uk-text-justify uk-text-truncate">
                    Ler Mais ...
                  </p>
                </div>
              </div>
            </li> */}

            {/* <li>
              <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                  <img src="/images/EDM.jpg" width="357" height="280" alt="" />
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
                  <img src="/images/EDM.jpg" width="357" height="280" alt="" />
                </div>
                <div className="uk-card-body">
                  <h3 className="uk-card-title">Headline</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </li> */}
          {/* </ul>
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

    </div>
     }

     footer={<Footer />}
     //aside={<Footer />}
   />
      
      );
}
