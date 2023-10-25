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
            <div className="uk-visible@m">
              <div className="uk-card uk-card-small uk-padding-small uk-card-hover uk-card-body uk-border-rounded" style={{ width:250}}>  
                    <p className="uk-text-bolder uk-h4"><span uk-icon="icon:  list; ratio: 1.2 "></span></p>
                    <p className="uk-text-default uk-text-center uk-text-bold  uk-margin-remove" style={{ color:"#fa7f22" }}><span className="uk-text-light uk-margin-remove"></span>Base de Dados de Especialistas</p>
                    <a onClick={() => navigate(-1)} uk-icon="icon: arrow-left; ratio: 1 " className="uk-text-normal uk-button-link uk-align-right uk-margin-remove">voltar</a>        
              </div>
            </div>

             <div className="uk-hidden@m">
                <h3 className="uk-heading-bullet uk-text-bolder" style={{ color:"#fa7f22" }}>
	      		<span className="uk-text-light uk-margin-remove"></span>Base de Dados de Especialistas</h3>
                <a onClick={() => navigate(-1)} className="uk-text-normal uk-button-link uk-align-left uk-margin-remove uk-text-bold">
	      		<span uk-icon="icon: arrow-left; ratio: 1 "></span>Voltar</a>        
             </div>

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
	  <br />   
        </div>
      }
      footer={<Footer />}
    />
  );
}

export default ListOrdens;