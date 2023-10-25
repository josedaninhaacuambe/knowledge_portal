/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
 import React, { useState } from "react";
// import Aside from "../components/Aside1";
 import Footer from "../components/footer";
 import Header from "../components/Header22";
 import Layout from "./Layout1";
 import Spinner from "../utils/Spinner";
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
                  {/* <img src="https://lh3.googleusercontent.com/pw/AL9nZEXGOYmaCVkcXsXXwTyX-N2cjmbAwNoCjnwJ1exNY-eBZQBHfOa9_mRC6i_mh04rPlNmPPlwis0aqOSlkjht72H5CgwCAyU4Q87LqMae9Bj8aVW5znGIJ9fcKD9PS0azZV9oXpjLPfrq5FTqy7FUBtZI=w936-h1004-no" width={1800} height={1200} alt="" /> */}
                  {/* <img src="/images/AnaliseDePerturbacoes.jpeg" width={1800} height={1200} alt="" style={{ height:400 }} /> */}
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
                {/* <img src="https://lh3.googleusercontent.com/pw/AL9nZEWkNaknse8tSuS5r0mhXbTYShm_9q-kWkkefUVsyu_8qOpX8hobsziFES9s_2aS2jSXh8OPkj_uwqcpbnsDIUckaLzz5UwzuiasHNZRvrc7FaV0rqVeqlyjseOuQgHXrSYoKBariHtTG67zh39dSCy2=w369-h521-no" width={1800} height={600} alt="" style={{opacity: 1}} /> */}
                  {/* <img src="https://lh3.googleusercontent.com/pw/AL9nZEWkNaknse8tSuS5r0mhXbTYShm_9q-kWkkefUVsyu_8qOpX8hobsziFES9s_2aS2jSXh8OPkj_uwqcpbnsDIUckaLzz5UwzuiasHNZRvrc7FaV0rqVeqlyjseOuQgHXrSYoKBariHtTG67zh39dSCy2=w459-h649-no?authuser=0" width={1800} height={600} alt="" style={{ height:400 }} /> */}
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

                  {/* <img src="/images/PatrimonioEDM.png" width={1800} height={1200} alt="" style={{ height:400 }} /> */}
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
      </div>

    </div>
     }
     //aside={<Footer />}
   />
      
      );
}
