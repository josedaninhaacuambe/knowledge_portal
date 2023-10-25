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
                    <h4 className="uk-text-bold uk-margin uk-card-title">PRÁTICAS DE GESTÃO DO CONECIMENTO A SEREM IMPLENTADAS</h4>
                                Para cada um dos Objectivos Estratégicos da Gestão do Conhecimento, foram identificadas as Práticas de Gestão do Conhecimento a serem priorizadas, por impactar a implementação das outras práticas ou iniciativas de Gestão do Conhecimento.
                            </p>
                            <div class="uk-alert-success uk-padding-small uk-padding-left uk-grid-match" uk-grid="uk-grid" uk-alert style={{border: "1px solid"}}>
                                <div class=""><h6 class="uk-text-bolder">Objectivo Estratégico:</h6>
                                <p class="uk-text-justify uk-text-secondary" >Criar políticas e modelo de governação de Gestão do Conhecimento para que os Colaboradores tenham clareza de seus papéis e responsabilidades relacionados à Gestão do Conhecimento.</p>
                                </div>                                
                            </div>
                            
                            <a href class="uk-display-block uk-margin-remove-top uk-card uk-card-body uk-link-toggle">
                                <p class="uk-text-justify">Será implantada a Estrutura Operacional de Gestão do Conhecimento, constituída por um Comité Estratégico de Gestão do Conhecimento, para garantir que a implementação das práticas de Gestão do Conhecimento sejam na perspectiva sistémica, visando definir as suas políticas e os seus modelos de governação, criar e capacitar as equipas de Gestão do Conhecimento das Unidades Orgânicas (UO’s) nas quais serão implementadas, isto é, estabelecer a Estrutura Operacional de Gestão do Conhecimento.</p>
                            </a>

                            <div>
                                <div class="uk-alert-success uk-padding-small uk-grid-match" uk-grid="uk-grid" uk-alert style={{border: "1px solid"}}>
                                    <div class=""><h6 class="uk-text-bolder">Objectivo Estratégico:</h6>
                                    <p class="uk-text-justify uk-text-secondary" >Estabelecer o direccionamento estratégico para a Gestão do Conhecimento essencial para o funcionamento da Empresa, incluindo o aprendizado nas actividades dos profissionais da EDM, visando à continuidade de negócios. </p>
                                    </div>
                                </div>

                                <a href class="uk-display-block uk-margin-remove-top uk-card uk-card-body uk-link-toggle">
                                    <p class="uk-text-justify">
                                        As <i>Práticas de Gestão do Conhecimento</i> a serem implantadas com base neste Objectivo Estratégico são as que permitirão que o conhecimento seja organizado de tal forma que a aprendizagem seja possível, pois facilitará “saber o que sabem” os Colaboradores da EDM. 
                                        <br />
                                        Ou seja, permitirá saber que a Empresa possui conhecimento a ser usado efectivamente, visando aumentar o desempenho empresarial. Para o efeito, serão implementadas as seguintes práticas de Gestão do Conhecimento:
                                    </p>
                                </a>

                                <p class="uk-margin uk-margin-remove-top" uk-margin>                        
                                    <>
                                        <a class="uk-link-reset uk-text-left uk-text-bold uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom" href="#modal-media-vimeo" uk-toggle="" style={{ color: "#fff"}}>
                                            1.   Mapeamento de competências e identificação dos gaps
                                        </a>

                                        <div id="modal-media-vimeo" className="uk-flex-top" uk-modal="">
                                            <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                                <button className="uk-modal-close-outside" type="button" uk-close="" />
                                                
                                                <div class="uk-modal-header">
                                                    <h6 class="uk-text-bold">Mapeamento de competências e identificação dos gaps</h6>
                                                </div>
                                                <div class="uk-modal-body">
                                                    <img src="https://i.pinimg.com/originals/29/1c/88/291c88a2ad438bb9401129d80e59d925.jpg" alt=""/>
                                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                                                </div>
                                                <div class="uk-modal-footer uk-text-right">
                                                    <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                                                    <a href="#modal-group-2" class="uk-button uk-button-primary" uk-toggle>Save</a>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                    
                                    {/* <a class="uk-link-reset" href="">2.	Programa de Mentoring;</a>                                                  <br /><hr /> */}
                                    <>
                                        <a class="uk-link-reset uk-text-left uk-button uk-button-default uk-text-bold uk-width-1-1 uk-margin-small-bottom" href="#modal2" uk-toggle="" style={{ color: "#fff"}}>
                                            2.	Programa de Mentoring
                                        </a>

                                        <div id="modal2" className="uk-flex-top" uk-modal="">
                                            <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                                <button className="uk-modal-close-outside" type="button" uk-close="" />
                                                
                                                <div class="uk-modal-header">
                                                    <h6 class="uk-text-bold">Programa de Mentoring;</h6>
                                                </div>
                                                <div class="uk-modal-body">
                                                    <img src="https://i.pinimg.com/originals/11/22/00/11220084da81e2f3710a636f2073cac2.jpg" alt=""/>
                                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                                                </div>
                                                <div class="uk-modal-footer uk-text-right">
                                                    <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                                                    <a href="#modal-group-2" class="uk-button uk-button-primary" uk-toggle>Save</a>
                                                </div>
                                            </div>
                                        </div>
                                    </>

                                    {/* <a class="uk-link-reset" href="">3.	Criação da Base de Dados de Competências/Especialistas; e L4</a>            <br /><hr /> */}
                                    <>
                                        <a class="uk-link-reset uk-text-left uk-button uk-button-default uk-text-bold uk-width-1-1 uk-margin-small-bottom" href="#modal3" uk-toggle="" style={{ color: "#fff"}}>
                                            3.	Criação da Base de Dados de Competências/Especialistas; e
                                        </a>

                                        <div id="modal3" className="uk-flex-top" uk-modal="">
                                            <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                                <button className="uk-modal-close-outside" type="button" uk-close="" />
                                                
                                                <div class="uk-modal-header">
                                                    <h6 class="uk-text-bold">Criação da Base de Dados de Competências/Especialistas</h6>
                                                </div>
                                                <div class="uk-modal-body">
                                                    <img src="https://i.pinimg.com/originals/97/1f/58/971f582e61f8f213290f8766f189a5b3.jpg" alt=""/>
                                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                                                </div>
                                                <div class="uk-modal-footer uk-text-right">
                                                    <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                                                    <a href="#modal-group-2" class="uk-button uk-button-primary" uk-toggle>Save</a>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    {/* <a class="uk-link-reset" href="">4.	Registo do Conhecimento pelos Especialistas, através de Narrativas. L5</a>  <br /><hr /> */}
                                    <>
                                        <a class="uk-link-reset uk-text-left uk-button uk-button-default uk-text-bold uk-width-1-1 uk-margin-small-bottom" href="#modal4" uk-toggle="" style={{ color: "#fff"}}>
                                            4.	Registo do Conhecimento pelos Especialistas, através de Narrativas
                                        </a>

                                        <div id="modal4" className="uk-flex-top" uk-modal="">
                                            <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                                <button className="uk-modal-close-outside" type="button" uk-close="" />
                                                
                                                <div class="uk-modal-header">
                                                    <h6 class="uk-text-bold">Registo do Conhecimento pelos Especialistas, através de Narrativas</h6>
                                                </div>
                                                <div class="uk-modal-body">
                                                    <img src="https://i.pinimg.com/originals/2d/4d/03/2d4d03735e49d03981221e12ed1d6e2d.jpg" alt=""/>
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


                            <div>
                                <div id="my-id" class="uk-alert-success uk-padding-small uk-grid-match" uk-grid="uk-grid" uk-alert style={{border: "1px solid"}}>
                                    <div class=""><h6 class="uk-text-bolder">Objectivo Estratégico:</h6>
                                    <p class="uk-text-justify uk-text-secondary" >Sistematizar os processos de armazenamento e indexação da documentação da EDM, para que a informação certa esteja acessível aos interessados, sempre que necessário. </p>
                                    </div>
                                </div>

                                <a href class="uk-display-block uk-margin-remove-top uk-card uk-card-body uk-link-toggle">
                                    <p class="uk-text-justify">
                                        Pretende-se garantir uma gestão documental que terá por missão a preservação e disponibilização dos documentos, assegurando as tarefas de organização, sistematização, catalogação e digitalização, além de serem disponibilizadas ferramentas e canais que facilitam a partilha do conhecimento entre colaboradores e apoie o aprendizado. 
                                            <br />
                                        Para o efeito, serão implementadas as seguintes práticas de Gestão do Conhecimento:
                                    </p>
                                </a>

                                <p class="uk-margin uk-margin-remove-top uk-card uk-card-body">
                                    {/* <a class="uk-link-reset" href="">1.	Organização do Sistema do Arquivo e Digitalização de Documentos em Arquivo; L6</a><br /><hr /> */}
                                    <>
                                        <a class="uk-link-reset uk-text-left uk-button uk-button-default uk-text-bold uk-width-1-1 uk-margin-small-bottom" href="#modal5" uk-toggle="" style={{ color: "#fff"}}>
                                            1.	Organização do Sistema do Arquivo e Digitalização de Documentos em Arquivo
                                        </a>

                                        <div id="modal5" className="uk-flex-top" uk-modal="">
                                            <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                                <button className="uk-modal-close-outside" type="button" uk-close="" />
                                                
                                                <div class="uk-modal-header">
                                                    <h6 class="uk-text-bold">Organização do Sistema do Arquivo e Digitalização de Documentos em Arquivo</h6>
                                                </div>
                                                <div class="uk-modal-body">
                                                    <img src="https://i.pinimg.com/originals/6e/24/af/6e24af8d3855de89b8c226419af5172e.jpg" alt=""/>
                                                </div>
                                                <div class="uk-modal-footer uk-text-right">
                                                    <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                                                    <a href="#modal-group-2" class="uk-button uk-button-primary" uk-toggle>Save</a>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    {/* <a class="uk-link-reset" href="">2. Registo de Lições Aprendidas nos Projectos e nas actividades específicas; L7</a> <br /><hr /> */}
                                    <>
                                        <a class="uk-link-reset uk-text-left uk-button uk-button-default uk-text-bold uk-width-1-1 uk-margin-small-bottom" href="#modal6" uk-toggle="" style={{ color: "#fff"}}>
                                            2.	Registo de Lições Aprendidas nos Projectos e nas actividades específicas
                                        </a>

                                        <div id="modal6" className="uk-flex-top" uk-modal="">
                                            <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                                <button className="uk-modal-close-outside" type="button" uk-close="" />
                                                
                                                <div class="uk-modal-header">
                                                    <h6 class="uk-text-bold">Registo de Lições Aprendidas nos Projectos e nas actividades específicas</h6>
                                                </div>
                                                <div class="uk-modal-body">
                                                    <img src="https://i.pinimg.com/originals/90/67/ce/9067ced695493d04251c052b165216c3.jpg" alt=""/>
                                                </div>
                                                <div class="uk-modal-footer uk-text-right">
                                                    <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                                                    <a href="#modal-group-2" class="uk-button uk-button-primary" uk-toggle>Save</a>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    {/* <a class="uk-link-reset" href="">3.	Criação de Comunidades de Prática; L8</a>            <br /><hr /> */}
                                    <>
                                        <a class="uk-link-reset uk-text-left uk-button uk-button-default uk-text-bold uk-width-1-1 uk-margin-small-bottom" href="#modal7" uk-toggle="" style={{ color: "#fff"}}>
                                            3.	Criação de Comunidades de Prática
                                        </a>

                                        <div id="modal7" className="uk-flex-top" uk-modal="">
                                            <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                                <button className="uk-modal-close-outside" type="button" uk-close="" />
                                                
                                                <div class="uk-modal-header">
                                                    <h6 class="uk-text-bold">Criação de Comunidades de Prática</h6>
                                                </div>
                                                <div class="uk-modal-body">
                                                    <img src="https://i.pinimg.com/originals/ee/7f/fe/ee7ffe5218bc14a9724f00b3223a5023.jpg" alt=""/>
                                                </div>
                                                <div class="uk-modal-footer uk-text-right">
                                                    <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                                                    <a href="#modal-group-2" class="uk-button uk-button-primary" uk-toggle>Save</a>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    {/* <a class="uk-link-reset" href="">4.	Programa de Geração de Ideias e Inovação; L9</a>  <br /><hr /> */}
                                    <>
                                        <a class="uk-link-reset uk-text-left uk-button uk-button-default uk-text-bold uk-width-1-1 uk-margin-small-bottom" href="#modal8" uk-toggle="" style={{ color: "#fff"}}>
                                            4.	Programa de Geração de Ideias e Inovação
                                        </a>

                                        <div id="modal8" className="uk-flex-top" uk-modal="">
                                            <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                                <button className="uk-modal-close-outside" type="button" uk-close="" />
                                                
                                                <div class="uk-modal-header">
                                                    <h6 class="uk-text-bold">Programa de Geração de Ideias e Inovação</h6>
                                                </div>
                                                <div class="uk-modal-body">
                                                    <img src="https://i.pinimg.com/originals/27/2e/cc/272ecc8d9b2259646108e7c2426f350f.jpg" alt=""/>
                                                </div>
                                                <div class="uk-modal-footer uk-text-right">
                                                    <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                                                    <a href="#modal-group-2" class="uk-button uk-button-primary" uk-toggle>Save</a>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    {/* <a class="uk-link-reset" href="">5.	Mapeamento e Divulgação das Boas Práticas; e L10</a>  <br /><hr /> */}
                                    <>
                                        <a class="uk-link-reset uk-text-left uk-button uk-button-default uk-text-bold uk-width-1-1 uk-margin-small-bottom" href="#modal9" uk-toggle="" style={{ color: "#fff"}}>
                                            5.	Mapeamento e Divulgação das Boas Práticas; e
                                        </a>

                                        <div id="modal9" className="uk-flex-top" uk-modal="">
                                            <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                                <button className="uk-modal-close-outside" type="button" uk-close="" />
                                                
                                                <div class="uk-modal-header">
                                                    <h6 class="uk-text-bold">Mapeamento e Divulgação das Boas Práticas</h6>
                                                </div>
                                                <div class="uk-modal-body">
                                                    <img src="https://i.pinimg.com/originals/92/fa/88/92fa886524fcb983ce9fc4417e39efba.jpg" alt=""/>
                                                </div>
                                                <div class="uk-modal-footer uk-text-right">
                                                    <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                                                    <a href="#modal-group-2" class="uk-button uk-button-primary" uk-toggle>Save</a>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    {/* <a class="uk-link-reset" href="">6.	Criação de Repositório de Conhecimentos. L11</a>  <br /><hr /> */}
                                    <>
                                        <a class="uk-link-reset uk-text-left uk-button uk-button-default uk-text-bold uk-width-1-1 uk-margin-small-bottom" href="#modal10" uk-toggle="" style={{ color: "#fff"}}>
                                            6.	Criação do Repositório de Conhecimento
                                        </a>

                                        <div id="modal10" className="uk-flex-top" uk-modal="">
                                            <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                                <button className="uk-modal-close-outside" type="button" uk-close="" />
                                                
                                                <div class="uk-modal-header">
                                                    <h6 class="uk-text-bold">Criação de Repositório de Conhecimentos</h6>
                                                </div>
                                                <div class="uk-modal-body">
                                                    <img src="https://i.pinimg.com/originals/06/9f/3d/069f3dc8c45f052baefb3b007a106a27.jpg" alt=""/>
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
                           
                            <div>
                                <div class="uk-alert-success uk-padding-small uk-grid-match" uk-grid="uk-grid" uk-alert style={{border: "1px solid"}}>
                                    <div class=""><h6 class="uk-text-bolder">Objectivo Estratégico:</h6>
                                    <p class="uk-text-justify uk-text-secondary" >Inventariar, preservar e divulgar o Património Eléctrico com valor histórico.</p>
                                    </div>
                                </div>

                                <a href class="uk-display-block uk-margin-remove-top uk-card uk-card-body uk-link-toggle">
                                    <p class="uk-text-justify">
                                            <p>Este Objectivo Estratégico de Gestão do Conhecimento visa pesquisar a história da electrificação de Moçambique e identificar, recolher e catalogar o acervo energético com valor histórico, disperso, dentro e fora das instalações da EDM, e culminará com a criação do Museu de Electricidade, que manterá uma exposição permanente de fotografias, vídeos e modelos interactivos de Sistemas Eléctricos.</p>
                                        <br />
                                            <p>Para o efeito, serão estabelecidas                                              
                                            <><a href="#modal11" uk-toggle=""> Normas de Inventariação, Preservação e Divulgação do Património Eléctrico com valor histórico.</a>
                                                
                                                    {/* <a class="uk-link-reset uk-text-left uk-text-capitalize uk-button uk-button-default uk-text-bold uk-width-1-1 uk-margin-small-bottom" href="#modal10" uk-toggle="" style={{ color: "#fff"}}>
                                                        6.	Criação de Repositório de Conhecimentos
                                                    </a> */}

                                                    <div id="modal11" className="uk-flex-top" uk-modal="">
                                                        <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                                            <button className="uk-modal-close-outside" type="button" uk-close="" />
                                                            
                                                            <div class="uk-modal-header">
                                                                <h6 class="uk-text-bold">Preservação e Divulgação do Património Eléctrico com valor histórico</h6>
                                                            </div>
                                                            <div class="uk-modal-body">
                                                                <img src="https://i.pinimg.com/originals/8e/e7/7b/8ee77b9029ff519649824ec71fe7e902.jpg" alt=""/>
                                                            </div>
                                                            <div class="uk-modal-footer uk-text-right">
                                                                <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                                                                <a href="#modal-group-2" class="uk-button uk-button-primary" uk-toggle>Save</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            </p>
                                        <br />
                                            <p>Nos anexos apresentam-se as descrições de todas as Práticas de Gestão do Conhecimento a serem implementadas, incluindo as justificativas, os objectivos, os indicadores e as acções a serem executadas para cada Prática.</p>
                                    </p>
                                </a>
                            </div>
                                                  
                    </div>              
        </div> 
     }
        footer={<Footer />}
   />      
      );
}
