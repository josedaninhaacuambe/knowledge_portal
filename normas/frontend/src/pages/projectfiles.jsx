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

                <div class="bg-body rounded uk-margin-medium-top uk-margin-large" style={{ marginTop: "10% !important", marginBottom: "15% !important", marginLeft: "20% !important",  marginRight: "20% !important" }}>
                    <h2 class="border-bottom pb-2 mb-0 uk-margin-medium">Arquivos dos projectos</h2>

                    <ul class="uk-list uk-list-striped">
                        <li class="uk-padding-remove">
                            <a class="d-flex uk-link-reset" href="#modal1" uk-toggle="">
                                <span class="uk-label uk-button uk-label-success uk-rounded" style={{minWidth:"32px", margin: "10px", paddingTop: "5px", paddingBottom: "30px", height:"32px", background:"rgb(250 127 34 / 90%)", color:"#007bff"}}><span class="uk-light" uk-icon="icon: file-pdf"></span></span>
                                <p class="uk-margin-small-top" style={{marginBottom: "10px !important"}} >1_LIONDE MAPAI AS BUILT_2016
                                </p>
                            </a>

                            <>                          
                                <div id="modal1" className="uk-flex-top" uk-modal="">
                                    <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                        <button className="uk-modal-close-outside" type="button" uk-close="" />
                                        
                                        <div class="uk-modal-header">
                                            <h6 class="uk-text-bold">ARQUIVO LIONDE MAPAI AS BUILT_2016</h6>
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
                                                <div class="uk-card-body uk-alert-warning">
                                                    <p class="uk-text-secondary">O acervo selecionado contém os arquivos <o class="uk-text-bold">LIONDE MAPAI AS BUILD 2016.</o> Para acessar esses arquivos, por favor <a href="https://drive.google.com/drive/folders/1e0eLHf8tZwCz-CkElPqoP6b89OYCSeGa" class="uk-text-uppercase ">clique aqui, </a>e faça sua solicitação de acesso, justificando para que fins deseja consultar. Sua solicitação será analisada e uma resposta será enviada para seu e-mail dentro de 24 horas.</p>
                                                </div>
                                                <div class="uk-card-footer">
                                                    <a href="https://drive.google.com/drive/folders/1e0eLHf8tZwCz-CkElPqoP6b89OYCSeGa" class="uk-button uk-button-text">Aceder ao drive</a>
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
                        </li>

                        <li class="uk-padding-remove">
                            <a class="d-flex uk-link-reset" href="#modal2" uk-toggle="">
                                <span class="uk-label uk-button uk-label-success uk-rounded" style={{minWidth:"32px", margin: "10px", paddingTop: "5px", paddingBottom: "30px", height:"32px", background:"rgb(250 127 34 / 90%)", color:"#007bff"}}><span class="uk-light" uk-icon="icon: file-pdf"></span></span>
                                <p class="uk-margin-small-top" style={{ marginTop: "15px !important;" }}>2_linha 110kV Macomia-Auasse_2009</p>
                            </a>

                            <>                          
                                <div id="modal2" className="uk-flex-top" uk-modal="">
                                    <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                        <button className="uk-modal-close-outside" type="button" uk-close="" />
                                        
                                        <div class="uk-modal-header">
                                            <h6 class="uk-text-bold">ARQUIVO linha 110kV Macomia-Auasse_2009</h6>
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
                                                <div class="uk-card-body uk-alert-warning">
                                                    <p class="uk-text-secondary">O acervo selecionado contém os arquivos da <o class="uk-text-bold">linha 110kV Macomia-Auasse_2009.</o> Para acessar esses arquivos, por favor <a href="https://drive.google.com/drive/folders/1vQyNZvj2cJIttIJM_eUnfmhYkCowdglg" class="uk-text-uppercase ">clique aqui, </a>e faça sua solicitação de acesso, justificando para que fins deseja consultar. Sua solicitação será analisada e uma resposta será enviada para seu e-mail dentro de 24 horas.</p>
                                                </div>
                                                <div class="uk-card-footer">
                                                    <a href="https://drive.google.com/drive/folders/1vQyNZvj2cJIttIJM_eUnfmhYkCowdglg" class="uk-button uk-button-text">Aceder ao drive</a>
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
                        </li>

                        <li class="uk-padding-remove">
                            <a class="d-flex uk-link-reset" href="#modal3" uk-toggle="">
                                <span class="uk-label uk-button uk-label-success uk-rounded" style={{minWidth:"32px", margin: "10px", paddingTop: "5px", paddingBottom: "30px", height:"32px", background:"rgb(250 127 34 / 90%)", color:"#e83e8c"}}><span class="uk-light" uk-icon="icon: file-pdf"></span></span>
                                <p class="uk-margin-small-top" style={{ marginTop: "15px !important;" }}>3_AS BUILT DOCS CHIBATA - DONDO_2018</p>
                            </a>

                            <>                          
                                <div id="modal3" className="uk-flex-top" uk-modal="">
                                    <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                        <button className="uk-modal-close-outside" type="button" uk-close="" />
                                        
                                        <div class="uk-modal-header">
                                            <h6 class="uk-text-bold">ARQUIVO AS BUILT DOCS CHIBATA - DONDO_2018</h6>
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
                                                <div class="uk-card-body uk-alert-warning">
                                                    <p class="uk-text-secondary">O acervo selecionado contém os arquivos <o class="uk-text-bold">AS BUILT DOCS CHIBATA - DONDO_2018.</o> Para acessar esses arquivos, por favor <a href="https://drive.google.com/drive/folders/1a89jcQXGQfVgzKgo0Ndz8VMML3opapl1" class="uk-text-uppercase ">clique aqui, </a>e faça sua solicitação de acesso, justificando para que fins deseja consultar. Sua solicitação será analisada e uma resposta será enviada para seu e-mail dentro de 24 horas.</p>
                                                </div>
                                                <div class="uk-card-footer">
                                                    <a href="https://drive.google.com/drive/folders/1a89jcQXGQfVgzKgo0Ndz8VMML3opapl1" class="uk-button uk-button-text">Aceder ao drive</a>
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
                        </li>

                        <li class="uk-padding-remove">
                            <a class="d-flex uk-link-reset" href="#modal4" uk-toggle="">
                                <span class="uk-label uk-button uk-label-success uk-rounded" style={{minWidth:"32px", margin: "10px", paddingTop: "5px", paddingBottom: "30px", height:"32px", background:"rgb(250 127 34 / 90%)", color:"#6f42c1"}}><span class="uk-light" uk-icon="icon: file-pdf"></span></span>
                                <p class="" style={{ marginTop: "15px !important;" }}>4_LINDELA & MASSINGA_2019</p>
                            </a>

                            <>                          
                                <div id="modal4" className="uk-flex-top" uk-modal="">
                                    <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                        <button className="uk-modal-close-outside" type="button" uk-close="" />
                                        
                                        <div class="uk-modal-header">
                                            <h6 class="uk-text-bold">ARQUIVO LINDELA & MASSINGA_2019</h6>
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
                                                <div class="uk-card-body uk-alert-warning">
                                                    <p class="uk-text-secondary">O acervo selecionado contém os arquivos <o class="uk-text-bold">LINDELA & MASSINGA_2019.</o> Para acessar esses arquivos, por favor <a href="https://drive.google.com/drive/folders/1bOF-dDMefQQwBtWUn0DGqmBCderyMoO7" class="uk-text-uppercase ">clique aqui, </a>e faça sua solicitação de acesso, justificando para que fins deseja consultar. Sua solicitação será analisada e uma resposta será enviada para seu e-mail dentro de 24 horas.</p>
                                                </div>
                                                <div class="uk-card-footer">
                                                    <a href="https://drive.google.com/drive/folders/1bOF-dDMefQQwBtWUn0DGqmBCderyMoO7" class="uk-button uk-button-text">Aceder ao drive</a>
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
                        </li>

                        <li class="uk-padding-remove">
                            <a class="d-flex uk-link-reset" href="#modal5" uk-toggle="">
                                <span class="uk-label uk-button uk-label-success uk-rounded" style={{minWidth:"32px", margin: "10px", paddingTop: "5px", paddingBottom: "30px", height:"32px", background:"rgb(250 127 34 / 90%)", color:"#6f42c1"}}><span class="uk-light" uk-icon="icon: file-pdf"></span></span>
                                <p class="uk-margin-small-top" style={{ marginTop: "15px !important;" }}>5_As Built Massinga</p>
                            </a>

                            <>                          
                                <div id="modal5" className="uk-flex-top" uk-modal="">
                                    <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                        <button className="uk-modal-close-outside" type="button" uk-close="" />
                                        
                                        <div class="uk-modal-header">
                                            <h6 class="uk-text-bold">ARQUIVO As Built Massinga</h6>
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
                                                <div class="uk-card-body uk-alert-warning">
                                                    <p class="uk-text-secondary">O acervo selecionado contém os arquivos <o class="uk-text-bold">As Built Massinga.</o> Para acessar esses arquivos, por favor <a href="https://drive.google.com/drive/folders/1nn_fVCOh8IpZANUZTN7HGamw_v9kp9Jl" class="uk-text-uppercase ">clique aqui, </a>e faça sua solicitação de acesso, justificando para que fins deseja consultar. Sua solicitação será analisada e uma resposta será enviada para seu e-mail dentro de 24 horas.</p>
                                                </div>
                                                <div class="uk-card-footer">
                                                    <a href="https://drive.google.com/drive/folders/1nn_fVCOh8IpZANUZTN7HGamw_v9kp9Jl" class="uk-button uk-button-text">Aceder ao drive</a>
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
                        </li>

                        <li class="uk-padding-remove">
                            <a class="d-flex uk-link-reset" href="#modal6" uk-toggle="">
                                <span class="uk-label uk-button uk-label-success uk-rounded" style={{minWidth:"32px", margin: "10px", paddingTop: "5px", paddingBottom: "30px", height:"32px", background:"rgb(250 127 34 / 90%)", color:"#6f42c1"}}><span class="uk-light" uk-icon="icon: file-pdf"></span></span>
                                <p class="uk-margin-small-top" style={{ marginTop: "15px !important;" }}>6_Zimpeto</p>
                            </a>

                            <>                          
                                <div id="modal6" className="uk-flex-top" uk-modal="">
                                    <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                        <button className="uk-modal-close-outside" type="button" uk-close="" />
                                        
                                        <div class="uk-modal-header">
                                            <h6 class="uk-text-bold">ARQUIVO Subestação Zimpeto</h6>
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
                                                <div class="uk-card-body uk-alert-warning">
                                                    <p class="uk-text-secondary">O acervo selecionado contém os arquivos da <o class="uk-text-bold">Subestação de Zimpeto.</o> Para acessar esses arquivos, por favor <a href="https://drive.google.com/drive/folders/1AAjTz0QCOat554VFdH81L2fRmnV05RZY" class="uk-text-uppercase ">clique aqui, </a>e faça sua solicitação de acesso, justificando para que fins deseja consultar. Sua solicitação será analisada e uma resposta será enviada para seu e-mail dentro de 24 horas.</p>
                                                </div>
                                                <div class="uk-card-footer">
                                                    <a href="https://drive.google.com/drive/folders/1AAjTz0QCOat554VFdH81L2fRmnV05RZY" class="uk-button uk-button-text">Aceder ao drive</a>
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
                        </li>
                        {/* <li>List item 3</li>
                        <li>List item 3</li> */}
                    </ul>
                    
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
