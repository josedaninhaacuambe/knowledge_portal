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

        <div className="uk-container">

            <div className="uk-padding-top uk-margin-top-large">

                <div class="bg-body rounded uk-margin-large" style={{ marginTop: "10% !important", marginBottom: "15% !important", marginLeft: "20% !important",  marginRight: "20% !important" }}>
                    <h2 class="border-bottom pb-2 mb-0 uk-margin-medium">Arquivos dos projectos</h2>
                    
                    <div class="d-flex text-muted pt-3">
                        <a class="d-flex uk-link-reset" href="#modal9" uk-toggle="">
                            <span class="uk-label uk-button uk-label-success uk-rounded" style={{minWidth:"32px", margin: "10px", paddingTop: "5px", height:"32px", background:"rgb(250 127 34 / 90%)", color:"#007bff"}}><span class="uk-light" uk-icon="icon: file-pdf"></span></span>
                            <p class="uk-margin-remove">
                            <strong class="d-block text-gray-dark">1_LIONDE MAPAI AS BUILT_2016</strong>
                            </p>
                        </a>

                        <>                          
                            <div id="modal9" className="uk-flex-top" uk-modal="">
                                <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                    <button className="uk-modal-close-outside" type="button" uk-close="" />
                                    
                                    <div class="uk-modal-header">
                                        <h6 class="uk-text-bold">Contacto para aceder ao arquivo</h6>
                                    </div>
                                    <div class="uk-modal-body">
                                        <div class="uk-card uk-card-default">
                                            <div class="uk-card-header">
                                                <div class="uk-grid-small uk-flex-middle" uk-grid>
                                                    <div class="uk-width-auto">
                                                        <img class="uk-border-circle" width="40" height="40" src="https://i.pinimg.com/originals/d3/fe/cd/d3fecdbbc87dac9d8280183d4d754832.jpg" alt="Avatar"/>
                                                    </div>
                                                    <div class="uk-width-expand">
                                                        <h3 class="uk-card-title uk-margin-remove-bottom">ACADEMIA EDM</h3>
                                                        <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00"><span class="uk-text-bold">Contacto:</span> +258 21 30 60</time></p>
                                                        <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00"><span class="uk-text-bold">Email:</span> academy@edm.co.mz</time></p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div class="uk-card-body uk-width-medium">
                                                <p>Email: <span><i>JeronimoNhusi@edm.co.mz</i></span></p>
                                            </div> */}
                                            <div class="uk-card-body">
                                                <p>O acerco acima citado contem os modelos e as etapas levadas a cada para a materialização do projecto da linha 100kv, porem essa informação apenas pode ser usada para fins de estudo e melhoria do mesmo, para o seu acesso por favor entre em contacto com o responsável.</p>
                                            </div>
                                            <div class="uk-card-footer">
                                                <a href="https://drive.google.com/drive/folders/1vQyNZvj2cJIttIJM_eUnfmhYkCowdglg" class="uk-button uk-button-text">Faca o seu pedido para aceder ao drive</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div class="uk-modal-footer uk-text-right">
                                        <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                                        <a href="#modal-group-2" class="uk-button uk-button-primary" uk-toggle>Save</a>
                                    </div> */}
                                </div>
                            </div>
                        </>


                    </div>

                    <div class="d-flex text-muted pt-3">
                        <a class="d-flex uk-link-reset" href="/chat">
                            <span class="uk-label uk-button uk-label-success uk-rounded" style={{minWidth:"32px", margin: "10px", paddingTop: "5px", height:"32px", background:"rgb(250 127 34 / 90%)", color:"#007bff"}}><span class="uk-light" uk-icon="icon: file-pdf"></span></span>
                            <p class="uk-margin-remove">
                            <strong class="d-block text-gray-dark">2_linha 110kV Macomia-Auasse_2009</strong><br/>
                            Clique aqui para falar com o responsavel do arquivo
                            </p>
                        </a>
                    </div>

                    <div class="d-flex text-muted pt-3">
                        <a class="d-flex uk-link-reset" href="/accounts/login">
                            <span class="uk-label uk-button uk-label-success uk-rounded" style={{minWidth:"32px", margin: "10px", paddingTop: "5px", height:"32px", background:"rgb(250 127 34 / 90%)", color:"#e83e8c"}}><span class="uk-light" uk-icon="icon: file-pdf"></span></span>
                            <p class="uk-margin-remove">
                            <strong class="d-block text-gray-dark">3_AS BUILT DOCS CHIBATA - DONDO_2018</strong><br/>
                            Clique aqui para falar com o responsavel do arquivo
                            </p>
                        </a>
                    </div>

                    <div class="d-flex text-muted pt-3">
                        <a class="d-flex uk-link-reset" href="/accounts/login">
                            <span class="uk-label uk-button uk-label-success uk-rounded" style={{minWidth:"32px", margin: "10px", paddingTop: "5px", height:"32px", background:"rgb(250 127 34 / 90%)", color:"#6f42c1"}}><span class="uk-light" uk-icon="icon: file-pdf"></span></span>
                            <p class="uk-margin-remove">
                            <strong class="d-block text-gray-dark">4_LINDELA & MASSINGA_2019</strong><br/>
                            Clique aqui para falar com o responsavel do arquivo
                            </p>
                        </a>
                    </div>

                    <div class="d-flex text-muted pt-3">
                        <a class="d-flex uk-link-reset" href="/accounts/login">
                            <span class="uk-label uk-button uk-label-success uk-rounded" style={{minWidth:"32px", margin: "10px", paddingTop: "5px", height:"32px", background:"rgb(250 127 34 / 90%)", color:"#6f42c1"}}><span class="uk-light" uk-icon="icon: file-pdf"></span></span>
                            <p class="uk-margin-remove">
                            <strong class="d-block text-gray-dark">5_As Built Massinga</strong><br/>
                            Clique aqui para falar com o responsavel do arquivo
                            </p>
                        </a>
                    </div>

                    <div class="d-flex text-muted pt-3">
                        <a class="d-flex uk-link-reset" href="/accounts/login">
                            <span class="uk-label uk-button uk-label-success uk-rounded" style={{minWidth:"32px", margin: "10px", paddingTop: "5px", height:"32px", background:"rgb(250 127 34 / 90%)", color:"#6f42c1"}}><span class="uk-light" uk-icon="icon: file-pdf"></span></span>
                            <p class="uk-margin-remove">
                            <strong class="d-block text-gray-dark">6_Zimpeto</strong><br/>
                            </p>
                        </a>
                    </div>

                    <small class="d-block text-end mt-3">
                    <a href="#">All updates</a>
                    </small>
                </div>

             </div>
        </div> 
     }
    footer={<Footer />}
   />      
      );
}
