/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
// import Aside from "../components/Aside1";
 import Header from "../components/HeaderDocuments";
 import Layout from "./Layout1";
//import { BASE_URL } from "../utils/utils";


export default function Dashboard() {
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
        >
          <div className="uk-slider-items uk-child-width-1-4@s uk-grid" uk-grid>
            <li>
              <div className="uk-card uk-card-default uk-padding-remove" style={{borderRadius:20}}>
              <a href="/Normas">
                <div className="uk-card-media-top uk-text-center uk-padding uk-padding-remove-bottom" style={{ borderRadius:20 }}>
                  {/* <img src="/images/ComponentTMP_2-image6.png" width={80} height={80} alt="" style={{ borderRadius:"10 10 0 0"}} /> */}
                  <img src="https://i.pinimg.com/originals/c5/af/23/c5af23dc63a7589617deb56132b4ecdd.jpg" width={50} height={50} alt="" />
                  {/* https://lh3.googleusercontent.com/pw/AL9nZEVQLhSFEdiRKMJ8Nf1Bj249uHi1t4nMtPZAa0_aVJ4XjOp9oVqQTbBL6XLgOmEsM20Yh-OgtbcZ3me__iydgFnofROGQRXxFXjg4TbprLue8deFQKsNUTkz_hE2oFXjClA9SNNKn9yZPjnCYhMVrrHv=s457-no?authuser=0 */}
                </div>
                <div className="uk-card-body uk-text-center">
                  <p className="uk-card-title uk-text-bold">Normas</p>
                  <span className="uk-margin-remove uk-padding-remove">
                    (254 Arquivos)
                  </span>
                </div>
                </a>
              </div>
            </li>
            <li>
              <div className="uk-card uk-card-default uk-padding-remove" style={{borderRadius:20}}>
                <a href="/legislation">
                <div className="uk-card-media-top uk-text-center uk-padding uk-padding-remove-bottom" style={{ borderRadius:20 }}>
                  <img src="https://i.pinimg.com/originals/ce/48/de/ce48de01ecd8c1ccb20e1a8eaa9db178.jpg" width={50} height={50} alt="" style={{ borderRadius:"10 10 0 0"}} />
                </div>
                <div className="uk-card-body uk-text-center">
                  {/* <a href="/Legislacao"> */}
                    <p className="uk-card-title uk-text-bold">Legislações</p>
                    <span className="uk-margin-remove uk-padding-remove">
                      (254 Arquivos)
                  </span>
                  {/* </a> */}
                </div>
                </a>
              </div>
            </li>
            <li>
              <div className="uk-card uk-card-default uk-padding-remove" style={{borderRadius:20}}>
                <a href="/Projecto">
                <div className="uk-card-media-top uk-text-center uk-padding uk-padding-remove-bottom" style={{ borderRadius:20 }}>
                  <img src="https://i.pinimg.com/originals/97/d3/06/97d306e5b448dc13c683142ef99c3dbe.jpg" width={80} height={80} alt="" style={{ borderRadius:"10 10 0 0"}} />
                </div>
                <div className="uk-card-body uk-text-center">
                  <p className="uk-card-title uk-text-bold">Projecto</p>
                  <span className="uk-margin-remove uk-padding-remove">
                    (254 Arquivos)
                  </span>
                </div>
                </a>
              </div>
            </li>
            <li>
              <div className="uk-card uk-card-default uk-padding-remove" style={{borderRadius:20}}>
                <a href="/OrdensS">
                <div className="uk-card-media-top uk-text-center uk-padding uk-padding-remove-bottom" style={{ borderRadius:20 }}>
                  <img src="https://i.pinimg.com/originals/49/3a/3f/493a3fc8d0183b22b46bb52c842fa582.jpg" width={80} height={80} alt="" style={{ borderRadius:"10 10 0 0"}} />
                </div>
                <div className="uk-card-body uk-text-center">
                  <p className="uk-card-title uk-text-bold">Ordens</p>
                  <span className="uk-margin-remove uk-padding-remove">
                    (254 Arquivos)
                  </span>
                </div>
                </a>
              </div>
            </li>
            <li>
              <div className="uk-card uk-card-default" style={{borderRadius:20}}>
                <div className="uk-card-media-top uk-text-center uk-padding uk-padding-remove-bottom" style={{ borderRadius:20 }}>
                  <img src="/images/ComponentTMP_2-image6.png" width={80} height={80} alt="" style={{ borderRadius:"10 10 0 0"}} />
                </div>
                <div className="uk-card-body uk-text-center">
                  <p className="uk-card-title uk-text-bold">Normas</p>
                  <span className="uk-margin-remove uk-padding-remove">
                    (254 Arquivos)
                  </span>
                </div>
              </div>
            </li>
          </div>
          {/* <a
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
          /> */}
        </div>
        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin" />
      </div>

     }
      //aside={<Aside1 />}
   />
      
      );
}
