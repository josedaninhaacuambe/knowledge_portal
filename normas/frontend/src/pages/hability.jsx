import React, { useEffect } from "react";
import { useState } from "react";
import MessageAlert from "../components/Alert";
import Aside from "../components/Aside";
import { BASE_URL } from "../utils/utils";
import Header from "../components/HeaderSample";
import Layout from "./Layout1";
import Footer from "../components/footer";
import { Link, Routes, Route, useNavigate } from "react-router-dom";


function ListHability() {
  const [especialista, setEspecialistas] = useState(false);
  const navigate = useNavigate();

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
            <>
                <div className="b-example-divider uk-column-divider" />
                <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom uk-text-bold">Boas práticas</h2>
                <p>O conjunto de processos, procedimentos e atividades que combinadas resultam em sucesso de qualquer tarefa, seja ela de natureza técnica ou administrativa.</p>
                <div className="row row-cols-1y uk-margin-large row-cols-lg-2 uk-column-1-1@s uk-column-1-3@m uk-column-1-3@l uk-margin-remove align-items-stretch g-4 py-5" >
                    
		    <div className="col">
                    <div className="card card-cover h-150 uk-card overflow-hidden text-bg-dark rounded-4 shadow-lg">
                        	<iframe width="100%" height="280" src="https://www.youtube.com/embed/Wa0jCpYfdkg" title="Especialista em Linhas e Infraestruturas Elétricas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                        <div className="d-flex flex-column h-100 p-5 pb-3 uk-margin-remove-top uk-padding-remove-top text-white text-shadow-1">
                        <h6 className="pt-5 text-margem mt-5 mb-4 uk-margin-remove-top uk-padding-remove-top uk-text-light display-6 lh-1 fw-bold" style={{fontSize:"1.5rem",margin:"0px", padding:"0.5px", marginTop: "0rem !important", color: "#fff !important", paddingTop:"0.2rem" }}>
                            Manutenção de Linhas e Infraestruturas Elétricas.
                        </h6>
                        <ul className="d-flex list-unstyled mt-auto">
                            <li className="me-auto">
                            <img
                                src="/images/LogoTransparente.png"
                                alt="Bootstrap"
                                width={32}
                                height={32}
                                className="rounded-circle border border-white"
                            />
                            </li>
                            <li className="d-flex align-items-center me-3">
                            <svg className="bi me-2" width="1em" height="1em">
                                <use xlinkHref="#geo-fill" />
                            </svg>
                            <small>Boas Práticas</small>
                            </li>
                            <li className="d-flex align-items-center">
                            <svg className="bi me-2" width="1em" height="1em">
                                <use xlinkHref="#calendar3" />
                            </svg>
                            <small>published: 2022-12-21</small>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>

                    <div className="col">
                    <div className="card card-cover h-150 uk-card overflow-hidden text-bg-dark rounded-4 shadow-lg">
                        <iframe width="100%" height="280" src="https://www.youtube.com/embed/nvkrBwIshjo" title="Especialista em Linhas e Infraestruturas Elétricas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                        <div className="d-flex flex-column h-100 p-5 pb-3 uk-margin-remove-top uk-padding-remove-top text-white text-shadow-1">
                        <h6 className="pt-5 text-margem mt-5 mb-4 uk-margin-remove-top uk-padding-remove-top uk-text-light display-6 lh-1 fw-bold" style={{fontSize:"1.5rem", margin:"0px", padding:"1rem", marginTop: "0.9rem !important", color: "#fff !important", paddingTop:"0.2rem" }}>
                            Manutenção de Equipamentos de Potência.
                        </h6>
                        <ul className="d-flex list-unstyled mt-auto">
                            <li className="me-auto">
                            <img
                                src="/images/LogoTransparente.png"
                                alt="Bootstrap"
                                width={32}
                                height={32}
                                className="rounded-circle border border-white"
                            />
                            </li>
                            <li className="d-flex align-items-center me-3">
                            <svg className="bi me-2" width="1em" height="1em">
                                <use xlinkHref="#geo-fill" />
                            </svg>
                            <small>Boas Práticas</small>
                            </li>
                            <li className="d-flex align-items-center">
                            <svg className="bi me-2" width="1em" height="1em">
                                <use xlinkHref="#calendar3" />
                            </svg>
                            <small>published: 2022-12-21</small>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </>
        </div>
      }
      footer={<Footer />}
    />
  );
}

export default ListHability;