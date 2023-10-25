import { useEffect } from "react";
import { useState } from "react";
import MessageAlert from "../components/Alert";
import Aside from "../components/Aside";
import { BASE_URL } from "../utils/utils";
import Header from "../components/HeaderSample";
import Layout from "./Layout1";
import Footer from "../components/footer";
import { Link, useNavigate } from "react-router-dom";

function ListLegislacao() {
  const [legislation, setLegislacao] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getLegislacao = async () => {
      try {
        const response = await fetch(`${BASE_URL}legislacao/`);
        const data = await response.json();
        setLegislacao(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getLegislacao();
  }, []);

  return (
    <Layout
      header={<Header />}
      content={
        <div className="uk-padding">
            {/* <button className="uk-margin" style={{borderRadius:100}} onClick={() => navigate(-1)}>Voltar</button>
            <br /> */}
            <div className="uk-visible@m">
              <div className="uk-card uk-card-small uk-padding-small uk-card-hover uk-card-body uk-border-rounded" style={{ width:250}}>  
              <p className="uk-text-bolder uk-h4">
                  
                  <span uk-icon="icon:  list; ratio: 1.2 "></span> 
                    </p>
                    <p className="uk-text-default uk-text-center uk-text-bold  uk-margin-remove" style={{ color:"#fa7f22" }}>
	      		<span className="uk-text-light uk-margin-remove"></span>Legislações</p>
                    <a onClick={() => navigate(-1)} uk-icon="icon: arrow-left; ratio: 1 " className="uk-text-normal uk-button-link uk-align-right uk-margin-remove">voltar</a>        
              </div>
            </div>
            {/* <div className="uk-card-default uk-padding-small uk-padding-remove-right uk-margin-remove-right" style={{ width:250, borderRadius: 10}}>
                <div className="uk-align-left uk-inline uk-padding-remove">
                  <img src="https://i.pinimg.com/originals/ce/48/de/ce48de01ecd8c1ccb20e1a8eaa9db178.jpg" width={50} height={50} alt="" />
                </div>
                <div className="uk-margin-remove-right uk-padding-remove">
                    <p className="uk-text-bold uk-padding-remove">Legislações</p>
                      (1 Arquivo)
                </div>
            </div> */}
	      <div className="uk-hidden@m">
                <h3 className="uk-heading-bullet uk-text-bolder" style={{ color:"#fa7f22" }}>	
	      		<span className="uk-text-light uk-margin-remove"></span>Legislações</h3>
                <a onClick={() => navigate(-1)} className="uk-text-normal uk-button-link uk-align-left uk-margin-remove uk-text-bold">
	      		<span uk-icon="icon: arrow-left; ratio: 1 "></span>Voltar</a>
            </div>

          {/* <h3 className="h3 mb-3 font-weight-normal uk-margin-medium-top  uk-text-bold">
            Legislações
          </h3> */}
          <MessageAlert  />
          
          <table
            className="uk-table uk-table-hover uk-table-striped"
            id="generic-table"
          >
            <thead>
              <th className="uk-text-left uk-visible@m uk-text-uppercase">Ano</th>
              <th className="uk-text-left uk-text-uppercase">Nome</th>
              <th className="uk-text-left uk-visible@m uk-text-uppercase">Descrição</th>
              <th
                className="uk-text-left uk-table-shrink uk-text-uppercase"
                colSpan="2"
              >
                
              </th>
            </thead>
            <tbody>
              {legislation &&
                legislation.map((legislations, key) => (
                  <tr key={key}>
                    <td className="uk-visible@m">{legislations.data}</td>
                    <td>{legislations.name}</td>
                    {/* <td>{legislations.type}</td> */}
                    <td className="uk-visible@m">{legislations.description}</td>
                    <td>
                    {   
                        <p>
                            <p uk-margin>
                               <a class="uk-button uk-button-default" href="/viewPdf3" style={{ borderRadius:20 }}>
                               <Link
                                    className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                                    to="/viewPdf3"
                                    state={legislations}
                                    >
                                    <span>visualizar</span>
                                    </Link>
                                    {/* visualizar */}
                                </a>
                            </p>
                          {/* <a
                            className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                            href="/legislacao"
                          >
                            <span uk-icon="icon: file-text; ratio: 1.2 "></span>
                          </a>

                          <Link
                            className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                            to="/viewPdf3"
                            state={legislations}
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

export default ListLegislacao;
