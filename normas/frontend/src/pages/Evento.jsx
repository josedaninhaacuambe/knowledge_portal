/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
// import Aside from "../components/Aside1";
import Header from "../components/Header1";
import Layout from "./Layout1";
import Footer from "../components/footer";
//import { BASE_URL } from "../utils/utils";
import {useNavigate} from 'react-router-dom';
export default function Dashboard() {
  const navigate = useNavigate();
  // const [mainSession, setMainSession] = useState(false);
  // setMainSession(JSON.parse(localStorage.getItem('mainSession')))
let mainSession = (JSON.parse(localStorage.getItem('mainSession')))

return (
  <Layout
       header={<Header />}
       content={


        <div className="uk-slider-container-offset uk-padding" uk-slider="">
        <div
          className="uk-position-relative uk-visible-toggle uk-light"
          tabIndex={-1}
        ><ul className="uk-slider-items uk-child-width-1-3@s uk-grid">
            <li>
		<div className="card uk-card card-cover h-150 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <iframe width="100%" height="280" src="https://www.youtube.com/embed/YYfVFmvbO0s?disablekb=1&rel=0&showinfo=0" title="Os desafios da implementaÃ§Ã£o do plano de ClassificaÃ§Ã£o de documentos  na EDM 2022 06 10 01 58 GMT 7" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
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
              {/*<div className="uk-card uk-card-default uk-border-rounded">
                <div className="uk-card-media-top">
		    <iframe width="100%" height="240" src="https://www.youtube.com/embed/YYfVFmvbO0s?disablekb=1&rel=0&showinfo=0" title="Apresentacao do programa de gestao do conhecimento" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" ></iframe>
                </div>
		<div className="uk-card-body uk-padding-small uk-margin-remove-top">
                  <p className="uk-text-lead " style={{color:"#000"}}>I PARTE </p>
                  <p className="uk-margin-remove uk-text-uppercase">
                      Apresentação do programa de gestão de conhecimento
                  </p>
                </div>
                <div class="uk-card-footer">
                    <a href="#" class="uk-button uk-button-text" style={{color:"#000"}}>Leia mais</a>
                </div>
              </div>*/}
            </li>

            <li>
	      <div className="card uk-card card-cover h-150 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <iframe width="100%" height="280" src="https://www.youtube.com/embed/olWrXZeadq8?disablekb=1&rel=0&showinfo=0" title="Os desafios da implementaÃ§Ã£o do plano de ClassificaÃ§Ã£o de documentos  na EDM 2022 06 10 01 58 GMT 7" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" ></iframe>
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

              {/*<div className="uk-card uk-card-default uk-border-rounded">
                <div className="uk-card-media-top">
		       <iframe width="100%" height="240" src="https://www.youtube.com/embed/olWrXZeadq8?disablekb=1&rel=0&showinfo=0" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" ></iframe>
                </div>
		<div className="uk-card-body uk-padding-small uk-margin-remove-top">
                  <p className="uk-text-lead " style={{color:"#000"}}>II PARTE</p>
                  <p className="uk-margin-remove uk-text-uppercase">
                      Preservação e valorização do património
                  </p>
                </div>
                <div class="uk-card-footer">
                      <a href="#" class="uk-button uk-button-text" style={{color:"#000"}}>Leia mais</a>
                </div>
              </div>*/}
            </li>

            <li>
		<div className="card uk-card  card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                  <iframe width="100%" height="280" src="https://www.youtube.com/embed/UxrRE7OnulU?disablekb=1&rel=0&showinfo=0" title="Os desafios da implementação do plano de Classificação de documentos na EDM 2022 06 10 01 58 GMT 7" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
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

              {/*<div className="uk-card uk-card-default uk-border-rounded">
                <div className="uk-card-media-top">
		       <iframe width="100%" height="240" src="https://www.youtube.com/embed/UxrRE7OnulU" title="Os desafios da implementação do plano de Classificação de documentos  na EDM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" ></iframe>
                </div>
                <div className="uk-card-body uk-padding-small uk-margin-remove-top">
                  <p className="uk-text-lead " style={{color:"#000"}}>I PARTE</p>
                  <p className="uk-margin-remove uk-text-uppercase">
                      Os desafios da implementação do plano de Classificação de documentos na EDM
                  </p>
                </div>
                <div class="uk-card-footer">
                      <a href="#" class="uk-button uk-button-text" style={{color:"#000"}}>Leia mais</a>
                 </div>
              </div>*/}
            </li>

             <li>
		<div className="card uk-card  card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                  <iframe width="100%" height="280" src="https://www.youtube.com/embed/c7IQmOzRcNQ?disablekb=1&rel=0&showinfo=0" title="II parte - Os desafios da implementação do plano de Classificação de documentos na EDM 2022 06 10 01 58 GMT 7" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                <div className="d-flex flex-column uk-margin-remove-top uk-padding-remove-top h-10 p-5 pb-3 text-shadow-1">
                  <h6 className="pt-5 text-margem mt-5 mb-4 uk-margin-small uk-padding-small uk-text-light display-6 lh-1 fw-bold" style={{fontSize:"1.2rem", margin:"0px", marginTop: "20px !important", color: "#fff !important", padding:"0px",  marginTop:"0.2rem", paddingTop:"0.2rem" }}>
                    II parte - Os desafios da implementação do plano de Classificação de documentos na EDM
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

              {/*<div className="uk-card uk-card-default">
                <div className="uk-card-media-top">       
		   <iframe width="100%" height="240" src="https://www.youtube.com/embed/c7IQmOzRcNQ" title="II parte - Os desafios da implementação do plano de Classificação de documentos  na EDM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                </div>

                <div className="uk-card-body uk-padding-small uk-margin-remove-top">
                  <p className="uk-text-lead " style={{color:"#000"}}>II PARTE</p>
                  <p className="uk-margin-remove uk-text-uppercase">
                      Os desafios da implementação do plano de Classificação de documentos na EDM
                  </p>
                </div>
                <div class="uk-card-footer">
                    <a href="#" class="uk-button uk-button-text" style={{color:"#000"}}>Leia mais</a>
                </div>                
              </div>*/}
            </li>
	    {/*<li>
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
          </ul>


	   {/* <ul className="uk-slider-items uk-child-width-1-3@s uk-grid">
            <li>
              <div className="uk-card uk-card-default uk-border-rounded">
                <div className="uk-card-media-top">
                  <img src="https://i.pinimg.com/originals/20/f7/02/20f702d96c8b0811f555356b7814b0ac.jpg" alt="" style={{opacity: 1}} />
             	 </div>
                <div className="uk-card-body">
                  <h3 className="uk-card-title uk-text-truncate">Webinar - Analise de Perturbações no Sistema</h3>
                  <p className="uk-text-truncate">
                  <button onClick={() => navigate(-1)}>Go back</button>
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
          </ul>*/}
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
	
	<br />  
                 


      </div>
     }
      footer={<Footer />}
   />      
      );
}
