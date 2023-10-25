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

        <div className="uk-container uk-card ">

            <div className="uk-card uk-card-small uk-card-body uk-border-rounded">

                <div class="uk-card uk-card-body">
                    {/*  */}  
                    <h3 className="uk-text-center ">Contacto
                        <p class="uk-text-small uk-text-center uk-margin-top uk-text-light uk-text-center "> 
                            Para mais informações entre em contacto com a nossa equipe por meio dos canais em anexo
                        </p>
                    </h3 >
                </div>   
            </div>

            <div className="uk-child-width-1-1@s  uk-margin-remove uk-padding-remove  uk-grid">
                <div className="uk-width-1-3@s uk-margin-remove-left  uk-card-body uk-card-media-left uk-cover-container" >

                <div>
                    <div class="uk-card uk-card-primary uk-margin-remove-left uk-card-body" style={{ marginLeft:-200 }}>
                        <h3 class="uk-card-title">Info</h3>
                        <p><span uk-icon="phone"></span> +258 21 30 60</p>
                        <p><span uk-icon="whatsapp"></span> +258 21 30 60</p>
                        <p><span uk-icon="mail"></span>  academy@edm.co.mz</p>
                        <p><span uk-icon="location"></span> Av.Eduardo Mondlane 1352, 2° Andar, Maputo</p>
                    </div>
                </div>


                </div>
                <div className="uk-width-1-2@s uk-card-default uk-card-body" style={{ }}>
                    <div class="uk-card-body">
                        <form class="uk-form-stacked">

                            <div class="uk-margin">
                                {/* <label class="uk-form-label" for="form-stacked-text">Text</label> */}
                                <div class="uk-form-controls">
                                    <input class="uk-input" id="form-stacked-text" type="text" placeholder="Nome"/>
                                </div>
                            </div>

                            <div class="uk-margin">
                                {/* <label class="uk-form-label" for="form-stacked-text">Text</label> */}
                                <div class="uk-form-controls">
                                    <input class="uk-input" id="form-stacked-text" type="text" placeholder="Email"/>
                                </div>
                            </div>

                            <div class="uk-margin">
                                {/* <label class="uk-form-label" for="form-stacked-text">Text</label> */}
                                <div class="uk-form-controls">
                                    <input class="uk-input" id="form-stacked-text" type="text" placeholder="Contacto"/>
                                </div>
                            </div>

                            <div class="uk-margin">
                                {/* <label class="uk-form-label" for="form-stacked-text">Text</label> */}
                                <div class="uk-form-controls">
                                    <input class="uk-input" id="form-stacked-text" type="text" placeholder="Mensagem"/>
                                </div>
                            </div>

                            </form>
                    </div>
                </div>
            </div>
		
	       <br />
        </div>

        
//   return (  

    // <div className="uk-background-default">

    //   <div className="uk-card uk-card-small uk-card-body uk-border-rounded">

    //       <div class="uk-card uk-card-body">
    //         {/*  */}  
    //         <h3 className="uk-text-center ">Contacto
    //           <p class="uk-text-small uk-text-center uk-margin-top uk-text-light uk-text-center "> 
    //             É o mecanismo de criação, compartilha e uso do conhecimento, para prestação de serviço com qualidade e excelência aos clientes.
    //           </p>
    //         </h3 >
    //       </div>
          
    //   </div>

    //     <div class="uk-card uk-card-default uk-iniline uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
    //         <div class="uk-card-media-left uk-child-width-1-2@s">
    //             <img src="/images/ComponentTMP_1-image.png" alt=""/>
    //         </div>
    //         <div>
    //             <div class="uk-card-body uk-text-right uk-child-width-1-2@s uk-card-media-right">
    //                 <h3 class="uk-card-title">Media Left</h3>
    //                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    //             </div>
    //         </div>
    //     </div>
      
    // </div>
     }
     footer={<Footer />}
   />
      
      );
}
