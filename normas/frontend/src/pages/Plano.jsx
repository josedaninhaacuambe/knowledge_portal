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
                <h3 className="uk-heading-bullet uk-text-bolder" style={{ color:"#fa7f22" }}><span className="uk-text-light uk-margin-remove"></span>Plano de Classificação</h3>
                <a onClick={() => navigate(-1)} className="uk-text-normal uk-button-link uk-align-left uk-margin-remove uk-text-bold"><span uk-icon="icon: arrow-left; ratio: 1 "></span>Voltar</a>        
            </div>
          <MessageAlert  />
            <div className="uk-overflow-container">

            <table class="uk-table uk-table-middle uk-table-divider">
                <thead>
                    <tr>
                        <th class="uk-width-small">Actividade</th>
                        <th>Descricao</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Actividades Meio</td>
                        <td>No plano de classificação das actividades - meio, os assuntos são divididos em classes (000 e 900).
                            As Classes 000 e 900 correspondem às actividades-meio, aquelas que são comuns em todos os órgãos e instituições da Administração Pública (ver anexo II do Decreto 84/2018 de 26 de Dezembro - SNAE).
                            A Classe 000 é referente aos assuntos da Administração Geral, e aClasse 900 a Eventos e Organizações sociais
			</td>
                        <td><a class="uk-button uk-button-default" type="button"  href="../../file/Decreto 84-2018, de 26 de Dezembro.pdf"> visualizar</a></td>
                    </tr>
                    <tr>
                        <td>Actividades Fim</td>
                        <td>
	          	    As Classes 100 a 800 correspondem às actividades – fim de cada sector (ver Diploma Ministerial 30/2008 de 30 de Abril – Metodologias para a elaboração de planos de classificação e tabelas de temporalidade de documentos das actividades-fim).
                            Entretanto devido a sua especificidade, a EDM elaborou o seu próprio plano de classificação e tabela de Temporalidade para as actividades Fim.	
			    {/*O plano de classificação das actividades fins é o instrumento utilizado para classificar todo e qualquer documento de arquivo, indicando o código de classificação e relacionando todos os documentos de arquivo produzidos e recebidos, ligadas à finalidade da empresa, ou seja, seu objetivo registrado em seu contrato social.*/}
			</td>
                        <td><a class="uk-button uk-button-default" type="button"  href="../../file/BR_SNAE.pdf"> visualizar</a></td>
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
