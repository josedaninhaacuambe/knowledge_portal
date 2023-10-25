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
       content={        <div className="uk-container uk-margin-top ">
            <div className="uk-card uk-margin uk-card-body" uk-margin>  
                <p class="">
                    <h4 className="uk-text-bold uk-margin uk-card-title">GESTÃO DO CONHECIMENTO NA EDM </h4>
                    <p class="uk-text-justify">
                         Um dos factores de sucesso para uma organização alcançar os seus Objectivos Estratégicos é a criação da capacidade para descobrir, mapear, classificar, captar, distribuir, criar, multiplicar e reter o conhecimento com eficiência, eficácia e efectividade. Isto é, fazer a Gestão do Conhecimento gerado na organização. 
                         <br />
                         <p class="uk-margin">A Gestão do Conhecimento na EDM pode ser entendida como: </p>   
                         <span class="uk-label uk-label-warning">•</span><i>    O mecanismo de criação, partilha e utilização do conhecimento para a excelência na execução dos processos de negócio e na prestação de serviços aos clientes; e  </i>
                         <br /><span class="uk-label uk-label-warning">•</span><i>  A identificação, o mapeamento e a divulgação dos activos do conhecimento e melhores práticas da organização, bem como a geração de novos conhecimentos e o desenvolvimento de competências para a melhoria de produtividade, aprendizado organizacional e colaboração entre as equipas.</i>
                    </p> 
                </p>    
                <br />
                <div>
                   <h5 class="uk-card-title uk-margin">Missão, Visão e Objectivo da Gestão do Conhecimento na EDM</h5>
                        <div class=" uk-padding-small uk-padding-left uk-grid-match" uk-grid="uk-grid" >
                            <div class="uk-width-1-3 uk-visible@m uk-padding-remove-horizontal uk-margin-remove-right uk-margin-remove-left">
                                <img src="https://i.pinimg.com/originals/6d/f8/79/6df879327ae61d8a56f886630a7c23c9.jpg" width="100%" height="200" alt=""/>
                            </div>
                            <div class="uk-width-3-5 uk-visible@m uk-margin-remove">
                                <div class="uk-card uk-card-body">
                                    <h5 class="uk-card-title uk-margin-remove">Missão</h5>
                                    <p class="uk-text-justify uk-text-secondary">Facilitar a disseminação do conhecimento, disponibilizando-o para toda a Empresa, e estimular soluções e estratégias criativas de forma colaborativa, para o sucesso do negócio da EDM.</p>
                                    <h5 class="uk-card-title  uk-margin-remove">Visão</h5>
                                    <p class="uk-text-justify uk-text-secondary" >Ser reconhecida na EDM como área que apoia os Pelouros e uma referência em soluções para os seus desafios relacionados aos activos de conhecimento.</p>
                                    <h5 class="uk-card-title  uk-margin-remove">Objectivo Estratégico</h5>
                                    <p class="uk-text-justify uk-text-secondary" >Estimular o aprendizado organizacional e promover um ambiente propício à disseminação do conhecimento da EDM por meio da implementação de ferramentas, metodologias, rotinas e políticas de Gestão do Conhecimento.</p>
                                </div>
                            </div>

                            <div class="uk-width-1-1 uk-hidden@m uk-margin-remove">
                                <div class="uk-card uk-card-body">
                                    <h5 class="uk-card-title uk-hidden@m uk-text-bold uk-margin">Missão</h5>
                                    <p class="uk-text-justify uk-text-secondary" >Facilitar a disseminação do conhecimento, disponibilizando-o para toda a empresa e, estimular soluções e estratégias criativas de forma colaborativa tendo em vista o sucesso do negócio da EDM.</p>
                                    <h5 class="uk-card-title uk-hidden@m uk-text-bold uk-margin">Visão</h5>
                                    <p class="uk-text-justify uk-text-secondary" >Ser reconhecida na EDM como área que apoia os Pelouros e uma referência em soluções para os seus desafios relacionados aos activos de conhecimento.</p>
                                    <h5 class="uk-card-title uk-hidden@m uk-text-bold uk-margin">Objectivo Estrategico</h5>
                                    <p class="uk-text-justify uk-text-secondary" >Estimular o aprendizado organizacional e promover um ambiente propício à disseminação do conhecimento da EDM por meio da implementação de ferramentas, metodologias, rotinas e políticas de Gestão do Conhecimento.</p>
                                </div>
                            </div>
                        </div>
                        <h5 class="uk-card-title uk-margin">Objectivos Estratégicos de Gestão do Conhecimento na EDM</h5>
                        <div class="uk-card uk-card-body">
                            <p class="uk-text-justify uk-text-secondary" ><a class="uk-link-reset" href="/purpose">1.    Criar políticas e modelo de governação de Gestão do Conhecimento para que os Colaboradores tenham clareza de seus papéis e responsabilidades relacionados à esta matéria;</a></p>
                            <p class="uk-text-justify uk-text-secondary" ><a class="uk-link-reset" href="/purpose">2.    Estabelecer direccionamento estratégico para a Gestão do Conhecimento essencial para o funcionamento da Empresa, incluindo o aprendizado nas actividades dos profissionais da EDM, visando à continuidade de negócios;</a></p>
                            <p class="uk-text-justify uk-text-secondary" ><a class="uk-link-reset" href="/purpose">3.    Sistematizar os processos de armazenamento e indexação da documentação da EDM, para que a informação certa esteja acessível aos interessados, sempre que necessário; e </a></p>
                            <p class="uk-text-justify uk-text-secondary" ><a class="uk-link-reset" href="/purpose">3.    4.	Inventariar, preservar e divulgar o Património Eléctrico com valor histórico. </a></p>
                        </div>
                        <div>
                            <p class="" type="button" uk-toggle="target: #toggle-usage"><h5 class=" uk-text-bold uk-margin">ESTRUTURA DE GOVERNAÇÃO DE GESTÃO DO CONHECIMENTO</h5></p>
                            <p>A Estrutura de Governação para as Práticas de Gestão do Conhecimento da EDM é constituída por três (3) níveis: <span class="uk-text-bold">Estratégico, Táctico e Operacional.</span></p>
                                
                                <div class="uk-card-footer uk-margin-remove">
                                    <a class="uk-button uk-button-text" href="" uk-toggle="target: #toggle-usage">Leia mais</a>
                                </div>
                                <hr />
                            <p id="toggle-usage" hidden>
                                <div class="uk-card uk-card-body">
                                   <p>No Nível Estratégico será criado o Comité Estratégico de Gestão do Conhecimento; o Nível Táctico corresponderá ao Departamento de Gestão do Conhecimento; e o Nível Operacional será constituído pelas equipas de Gestão do Conhecimento nas Unidades Orgânicas.</p>
				      <h6 class="uk-text-title uk-text-bold uk-flex uk-flex-center">Estrutura da Governação de Gestão do Conhecimento da EDM</h6><br />
                                   <div class="uk-width-1-1 uk-flex uk-flex-center">
                                      <img src="https://i.pinimg.com/originals/77/9d/6b/779d6ba306468e8658a87f820ac82d49.jpg" width="800" height="200" alt=""/>
                                   </div>
				<p><i class="uk-flex uk-flex-center">Estrutura da Direcção da Academia - Governação de Práticas de Gestão do Conhecimento</i></p>
                                </div>
                                <div class="uk-card-footer">
                                    <a class="uk-button uk-text-bold uk-link-reset uk-button-text" href="../../file/Responsabilidade.pdf" >Responsabilidades de Cada Nível de Governação de Gestão do Conhecimento</a>
                                </div>
                                <hr />
                                <>

                                    <div id="modal5" className="uk-flex-top" uk-modal="">
                                        <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                            <button className="uk-modal-close-outside" type="button" uk-close="" />
                                            
                                            <div class="uk-modal-header">
                                                <h6 class="uk-text-bold">Responsabilidades de Cada Nível de Governação de Gestão do Conhecimento</h6>
                                            </div>
                                            <div class="uk-modal-body">
                                                <img src="https://i.pinimg.com/originals/4b/a0/07/4ba007a213c5f0b6340d3a1f13a5c371.jpg" width="500" height="200" alt=""/>
                                            </div>
                                            <div class="uk-modal-footer uk-text-right">
                                                <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                                                <a href="#modal-group-2" class="uk-button uk-button-primary" uk-toggle>Save</a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            </p>
                        </div>
                </div>                                                  
            </div>              
        </div> 
     }
    footer={<Footer />}
   />      
  	);
}
