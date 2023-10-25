 /* eslint-disable jsx-a11y/anchor-is-valid */   
 /* eslint-disable jsx-a11y/anchor-has-content */
 import React from "react";
 // import Aside from "../components/Aside1";
 import Header from "../components/HeaderSample";
 import Layout from "./Layout1";
 import Footer from "../components/footer";
//import { BASE_URL } from "../utils/utils";


export default function Dashboard() {
  // const [mainSession, setMainSession] = useState(false);
  // setMainSession(JSON.parse(localStorage.getItem('mainSession')))
let mainSession = (JSON.parse(localStorage.getItem('mainSession')))

return (
  <Layout
       header={<Header />}
       content={
        <div className="uk-container uk-margin-top ">
            <div className="uk-card uk-margin uk-card-body" uk-margin>  
                <p class="">
                    <h4 className="uk-text-bold uk-margin uk-card-title">REPOSITÓRIO DO CONHECIMENTO DA EDM</h4>
                    <p class="uk-text-justify">
                         O <o class="uk-text-bold">Repositório do Conhecimento da Electricidade de Moçambique, E. P. (EDM),</o> é um Repositório Digital para a captura, o armazenamento e a preservação do conhecimento produzido na Empresa.
                         
                         Actualmente, o conhecimento encontra-se disperso, o que tornar difícil o seu acesso e, em algumas vezes o mesmo não é encontrado, para além de em alguns casos, o armazenamento estar fora dos padrões, acarretando a deterioração e a perda de informações.
                        <p class="uk-margin uk-text-bold uk-text-meta">Assim, com a implantação do Repositório do Conhecimento da EDM, espera-se: </p>  
                            <ul class="uk-list uk-list-bullet">
                                <li>1)	Assegurar o fácil acesso de documentos relevantes do processo de certificação em meio digital;</li>
                                <li>2)	Recuperar informações de forma eficaz, por meio de sistema de busca; e</li>
                                <li>3)	Preservar a memória organizacional.</li>
                            </ul> 
                            <p class="uk-margin uk-text-bold uk-text-meta">Os principais indicadores para avaliar a efectividade da implementação do Repositório do Conhecimento da EDM são:</p>  
                            <ul class="uk-list uk-list-bullet">
                                <li>i)	Índice de consultas realizadas com êxito; e </li>
                                <li>ii)	Tempo médio de obtenção da informação desejada.</li>
                            </ul>
                        </p> 
                    </p>   
                <br />                                                              
            </div>              
        </div> 
     }
    footer={<Footer />}
   />      
      );
}
