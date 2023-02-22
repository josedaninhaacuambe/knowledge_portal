import { useEffect } from "react";
import { useState } from "react";
import MessageAlert from "../../components/Alert";
import Aside from "../../components/Aside";
import { BASE_URL } from "../../utils/utils";
import Header from "../../components/Header";
import Layout from "../Layout";
import { Link } from "react-router-dom";

function ListProcessos() {
  const [processos, setProcessos] = useState(false);

  useEffect(() => {
    const getProcessos = async () => {
      try {
        const response = await fetch(`${BASE_URL}processos/`);
        const data = await response.json();
        setProcessos(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProcessos();
  }, []);

  return (
    <Layout
      header={<Header />}
      content={
        <div className="uk-padding">
          <h3 className="h3 mb-3 font-weight-normal uk-margin-medium-top  uk-text-bold">
            Lista dos Processos
          </h3>
          <MessageAlert  />
          
          <table
            className="uk-table uk-table-hover uk-table-striped"
            id="generic-table"
          >
            <thead>
              <th className="uk-text-left uk-text-uppercase">Nome</th>
              <th className="uk-text-left uk-text-uppercase">Descrição</th>
              <th
                className="uk-text-left uk-table-shrink uk-text-uppercase"
                colSpan="2"
              >
                ACÇÃO
              </th>
            </thead>
            <tbody>
              {processos &&
                processos.map((processo, key) => (
                  <tr key={key}>
                    <td>{processo.name}</td>
                    <td>{processo.type}</td>
                    <td>{processo.description}</td>
                    <td>

                      {   
                        <p>
                          <a
                            className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                            href="/processo"
                          >
                            <span uk-icon="icon: file-text; ratio: 1.2 "></span>
                          </a>

                          <Link
                            className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                            to="/viewPdf2"
                            state={processo}
                          >
                            <span uk-icon="icon: file-pdf; ratio: 1.2"></span>
                          </Link>
                        </p>
                      }
 
                      {" "}
                      {/* <a
                        className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                        href="/sectores/edit/1"
                      >
                    {" "}
                    <span
                      href="#"
                      uk-icon="icon:  file-text; ratio: 1.2"
                      ></span>
                    </a> */}
                      {/* <Link
                        className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                        to="/sectores/edit"
                        state={processo}
                      >
                        <span
                          href="#"
                          uk-icon="icon: file-text; ratio: 1.2"
                        ></span>
                      </Link>
                      <a
                        className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                        href="/sectores/show/1"
                      >
                        <span
                          href="#"
                          uk-icon="icon:  chevron-right; ratio: 1.2"
                        >
                          {" "}
                        </span>
                      </a> */}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      }
      aside={<Aside />}
    />
  );
}

export default ListProcessos;
