import { useEffect } from "react";
import { useState } from "react";
import MessageAlert from "../components/Alert";
import Aside from "../components/Aside";
import { BASE_URL } from "../utils/utils";
import Header from "../components/HeaderSample";
import Layout from "./Layout1";
import Footer from "../components/footer";
import { Link, Routes, Route, useNavigate } from "react-router-dom";


function ListOrdens() {
  const [ordem, setOrdens] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getOrdens = async () => {
      try {
        const response = await fetch(`${BASE_URL}ordens/`);
        const data = await response.json();
        setOrdens(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getOrdens();
  }, []);

  return (
    <Layout
      header={<Header />}
      content={
        <div className="uk-padding">
          {/* <button className="uk-margin" style={{borderRadius:100}} onClick={() => navigate(-1)}>Voltar</button> */}
          {/* <a className="uk-inline" href="/Documents"><button className="uk-inline uk-padding-remove uk-margin-remove" style={{borderRadius:100, backgroundColor:"#fff", color:"#000" }}><span uk-icon="arrow-left"></span></button></a> */}
            {/* <br /> */}
            
	     {/*<div>
              <div className="uk-card uk-card-small uk-padding-small uk-card-hover uk-card-body uk-border-rounded" style={{ width:250}}>  
              <p className="uk-text-bolder uk-h4">
                  
                  <span uk-icon="icon:  list; ratio: 1.2 "></span> 
                    </p>
                    <p className="uk-text-default uk-text-center uk-text-bold  uk-margin-remove" style={{ color:"#fa7f22" }}><span className="uk-text-light uk-margin-remove"></span>Ordens de Serviço</p>
                    <a onClick={() => navigate(-1)} uk-icon="icon: arrow-left; ratio: 1 " className="uk-text-normal uk-button-link uk-align-right uk-margin-remove">voltar</a>        
              </div>
            </div>*/}

	      <div>
                  <h3 className="uk-heading-bullet uk-text-bolder" style={{ color:"#fa7f22" }}><span className="uk-text-light uk-margin-remove"></span>Ordens de serviço</h3>
                <a onClick={() => navigate(-1)} className="uk-text-normal uk-button-link uk-align-left uk-margin-remove uk-text-bold"><span uk-icon="icon: arrow-left; ratio: 1 "></span>Voltar</a>
            </div>



            {/* <div className="uk-card-default uk-padding-small uk-border-rounded uk-padding-remove-right uk-margin-remove-right" style={{ width:250, borderRadius: 10 }}>
                <div className="uk-align-left uk-inline uk-padding-remove">
                  <img src="https://i.pinimg.com/originals/49/3a/3f/493a3fc8d0183b22b46bb52c842fa582.jpg" width={50} height={50} alt="" />
                </div>
                <div className="uk-margin-remove-right uk-padding-remove">
                    <p className="uk-text-bold uk-padding-remove">Ordens</p>
                      (1 Arquivo)
                </div>
            </div> */}

          {/* <h4 className="h3 mb-3 font-weight-normal uk-margin-medium-top  uk-text-bold">
            Ordens de Servico
          </h4> */}
          <MessageAlert  />
          
          <table
            className="uk-table uk-table-hover uk-table-striped"
            id="generic-table"
          >
            <thead>
              <th className="uk-text-left uk-text-uppercase">Código</th>
              <th className="uk-text-left uk-visible@m uk-text-uppercase">Assunto</th>
              <th
                className="uk-text-left uk-table-shrink uk-text-uppercase"
                colSpan="2"
              >
                ::
              </th>
            </thead>
            <tbody>
              {ordem &&
                ordem.map((ordems, key) => (
                  <tr key={key}>
                    <td>{ordems.code}</td>
                    <td className="uk-visible@m">{ordems.name}</td>
                    <td>

                    {   
                        <p>
                          <p uk-margin>
                               <a class="uk-button uk-button-default" href="/viewPdf1" style={{ borderRadius:20 }}>
                               <Link
                                    className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                                    to="/viewPdf1"
                                    state={ordems}
                                    >
                                    <span>visualizar</span>
                                    </Link>
                                    {/* visualizar */}
                                </a>
                            </p>
                          {/* <a
                            className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                            href="/ordens"
                          >
                            <span uk-icon="icon: file-text; ratio: 1.2 "></span>
                          </a>

                          <Link
                            className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                            to="/viewPdf1"
                            state={ordems}
                          >
                            <span uk-icon="icon: file-pdf; ratio: 1.2"></span>
                          </Link> */}
                        </p>
                      }

                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
	<br/>    
        </div>
      }
      footer={<Footer />}
    />
  );
}

export default ListOrdens;
