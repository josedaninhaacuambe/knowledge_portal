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

        <div className="uk-container uk-margin-top uk-card ">
            <h2 class="uk-margin-top uk-flex uk-flex-center">Página em Construção</h2>
                <p class="uk-flex uk-flex-center uk-text-bolder">Volte em breve</p>
                <div class="uk-flex uk-flex-center uk-padding-large uk-margin-large-bottom">
                    <div>
                        <img src="https://i.pinimg.com/originals/e5/cb/d0/e5cbd05f774253831c80a6c918716596.jpg" uk-img alt="" />
                        {/* <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="https://i.pinimg.com/originals/55/02/86/550286dad9f787e9a50f54c2625c0c14.png" uk-img>
                            <h1>Background Image</h1>
                        </div> */}
                    </div>
                </div>                
        </div> 
     }
    footer={<Footer />}
   />      
      );
}
