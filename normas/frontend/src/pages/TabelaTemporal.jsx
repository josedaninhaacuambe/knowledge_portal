import React, { useState, useEffect } from "react";
import MessageAlert from "../components/Alert";
import { BASE_URL } from "../utils/utils";
import Header from "../components/HeaderSample";
import "react-data-table-component-extensions/dist/index.css";
import Layout from "./Layout1";
import Footer from "../components/footer";
import { Link, useNavigate } from "react-router-dom";
 


function ListOrdens() {
  const navigate = useNavigate();


  return (
    <Layout
      header={<Header />}
      content={
        <div className="uk-padding">

            <div>
                <h3 className="uk-heading-bullet uk-text-bolder" style={{ color:"#fa7f22" }}><span className="uk-text-light uk-margin-remove"></span>Tabela de Temporalidade</h3>
                <a onClick={() => navigate(-1)} className="uk-text-normal uk-button-link uk-align-left uk-margin-remove uk-text-bold"><span uk-icon="icon: arrow-left; ratio: 1 "></span>Voltar</a>        
            </div>
          <MessageAlert  />
            <div className="uk-overflow-container">

            <table class="uk-table uk-table-middle uk-table-divider">
                <thead>
                    <tr>
                        <th class="uk-width-small">Actividades</th>
                        <th>Descricao</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Actividades Meio</td>
                        <td>Este documentos estabelece os prazos de guarda e a destinação final dos documentos produzidos e recebidos, ligadas à finalidade da empresa, mas que é essencial para manutenção das operações.</td>
                        <td><a class="uk-button uk-button-default" type="button"  href="../../file/document.pdf"> visualizar</a></td>
                    </tr>
                    <tr>
                        <td>Actividades fim</td>
                        <td>Este documentos estabelece os prazos de guarda e a destinação final dos documentos produzidos e recebidos, ligadas à finalidade da empresa, ou seja, seu objetivo registrado em seu contrato social.</td>
                        <td><a class="uk-button uk-button-default" type="button"  href="../../file/document.pdf"> visualizar</a></td>
                    </tr>
                </tbody>
            </table>

            </div>  
        </div>
      }
      // aside={<Aside />}
      footer={<Footer />}
    />
  );
}

export default ListOrdens;
