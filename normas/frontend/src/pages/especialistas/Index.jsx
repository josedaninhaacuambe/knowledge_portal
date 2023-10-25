import { useEffect } from "react";
import { useState } from "react";
import MessageAlert from "../../components/Alert";
import Aside from "../../components/Aside";
import { BASE_URL } from "../../utils/utils";
import Header from "../../components/Header";
import "react-data-table-component-extensions/dist/index.css";
import Layout from "../Layout";
import { Link } from "react-router-dom";

function ListEspecialistas() {
  const [especialista, setEspecialistas] = useState(false);

  useEffect(() => {
    const getEspecialistas = async () => {
      try {
        const response = await fetch(`${BASE_URL}especialistas/`);
        const data = await response.json();
        setEspecialistas(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getEspecialistas();
  }, []);

  return (
    <Layout
      header={<Header />}
      content={
        <div className="uk-padding">
          <h3 className="h3 mb-3 font-weight-normal uk-margin-medium-top  uk-text-bold">
            Base de Dados de Especialistas
          </h3>
          <MessageAlert  />
          
          <table
            className="uk-table uk-table-hover uk-table-striped"
            id="generic-table"
          >
            <thead>
              <th className="uk-text-left uk-text-uppercase">Nome do especialista</th>
              <th className="uk-text-left uk-text-uppercase">Posicao</th>
              <th className="uk-text-left uk-text-uppercase">Conhecimento que detem</th>
              <th
                className="uk-text-left uk-table-shrink uk-text-uppercase"
                colSpan="2"
              >
                ::
              </th>
            </thead>
            <tbody>
              {especialista &&
                especialista.map((especialistas, key) => (
                  <tr key={key}>
                    <td>{especialistas.name}</td>
                    <td>{especialistas.status}</td>
                    <td>{especialistas.description}</td>
                    <td>

                    {   
                        <p>
                          <a
                            className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                            href="/especialistas"
                          >
                            <span uk-icon="icon: file-text; ratio: 1.2 "></span>
                          </a>

                          <Link
                            className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                            to="/viewPdf5"
                            state={especialistas}
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
                        state={ordems}
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

export default ListEspecialistas;
