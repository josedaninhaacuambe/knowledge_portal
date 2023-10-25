import { useState } from "react";
import Aside from "../../components/Aside";
import Header from "../../components/Header";
import { BASE_URL } from "../../utils/utils";
import Layout from "../Layout";
import axios from "axios";
import Spinner from "../../utils/Spinner";

async function CreateProjecto(formData) {
  return await axios.post(
    `${BASE_URL}projectos`,
    formData /* , { headers: { 'Content-Type': 'multipart/form-data' } } */
  );
}

function CreateProjectoLayout() {
  const [, setSector] = useState();
  const [nr, setNr] = useState();
  const [name, setName] = useState();
  const [financiador, setFinanciador] = useState();
  const [financiamento, setFinanciamento] = useState();
  const [tipo_pagamento, setTipo_pagamento] = useState();
  const [valor_financiando, setValor_financiando] = useState();
  const [nivel_desempenho, setNivel_desempenho] = useState();
  const [status, setType] = useState();
  const [inicio, setInicio] = useState();
  const [fim, setFim] = useState();
  const [ponto_de_situacao, setPonto_de_situacao] = useState();
  const [constrangimentos, setConstrangimentos] = useState();
  const [isoFile, setIsoFile] = useState();
  // const [type, setType] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));


  const categorias = [
    { value: "Planificado", key: "planificado" },
    { value: "Emcurso", key: "emcurso" },
    { value: "Concluído", key: "concluido" },
    { value: "Lições apreendidas", key: "licoes" },
  ];


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSector(user.sector.id);
    const sector_id = user.sector.id;
    setIsLoading(true);

    const formData = new FormData();
    formData.append("nr", nr);
    formData.append("name", name);
    formData.append("status", status);
    formData.append("financiador", financiador);
    formData.append("financiamento", financiamento);
    formData.append("tipo_pagamento", tipo_pagamento);
    formData.append("valor_financiando", valor_financiando);
    formData.append("nivel_desempenho", nivel_desempenho);
    formData.append("ponto_de_situacao", ponto_de_situacao);
    formData.append("constrangimentos", constrangimentos);
    formData.append("inicio", inicio);
    formData.append("fim", fim);
    formData.append("sector_id", sector_id);
    formData.append("file_name", isoFile);
    console.log(name);
    console.log("formData");

    try {
      const response = await CreateProjecto(formData);
      setIsLoading(false);
      window.location.href = "/projectos";
      console.log(response);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      //Alert to be added when error handled
    }
  };

  return (
    <>
      {" "}
      {isLoading ? <Spinner /> : ""}
      <div className="uk-background-default uk-padding">
        <div className="uk-padding-small">
          <h3 className="h3 mb-3 uk-text-bold uk-margin-small-top">
            Registo dos projectos
          </h3>
          <form
            className="uk-form-stacked uk-width-1-1@s uk-padding-remove-top uk-margin-large-top"
            method="POST"
            onSubmit={handleSubmit}
            encType="multipart/form"
          >
            <div className="uk-width-1-1@s uk-padding-remove uk-grid">
              <div className="uk-margin uk-width-1-2@s uk-padding-remove t">
                <label className="uk-form-label" htmlFor="nr">
                  Numero do Projecto
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    placeholder="Insira o numero do projecto"
                    name="nr"
                    id="nr"
                    type="text"
                    onChange={(e) => setNr(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="uk-width-1-2@s  uk-padding-remove-right">
                <label className="uk-form-label" htmlFor="name">
                Designação do Projectos
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    placeholder="Nome da norma"
                    name="name"
                    id="name"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="uk-margin uk-width-1-2@s uk-padding-remove uk-padding-remove-right">
                <label className="uk-form-label" htmlFor="financiador">
                  Financiador
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    placeholder="Financiador"
                    name="financiador"
                    id="financiador"
                    type="text"
                    onChange={(e) => setFinanciador(e.target.value)}
                    required
                  />
                </div>
              </div>


              <div className="uk-margin-top uk-width-1-2@s  uk-padding-remove-right">
                <label className="uk-form-label" htmlFor="financiamento">
                  Tipo de Financiamento
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    placeholder="Tipo do financiamento"
                    name="financiamento"
                    id="financiamento"
                    type="text"
                    onChange={(e) => setFinanciamento(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="uk-margin uk-width-1-2@s uk-padding-remove uk-padding-remove-right">
                <label className="uk-form-label" htmlFor="published">
                  Forma de pagamento
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    placeholder="Forma de Pagamento"
                    name="tipo_pagamento"
                    id="tipo_pagamento"
                    type="text"
                    onChange={(e) => setTipo_pagamento(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="uk-margin-top uk-width-1-4@s  uk-padding-remove-right">
                <label className="uk-form-label" htmlFor="valor_financiando">
                  Valor do financiando
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    placeholder="valor de financiamento"
                    name="valor_financiando"
                    id="valor_financiando"
                    type="text"
                    onChange={(e) => setValor_financiando(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="uk-margin-top uk-width-1-4@s  uk-padding-remove-right">
                <label className="uk-form-label" htmlFor="nivel_desempenho">
                  Nivel de desempenho
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    placeholder="Nivel de desempenho"
                    name="nivel_desempenho"
                    id="nivel_desempenho"
                    type="text"
                    onChange={(e) => setNivel_desempenho(e.target.value)}
                    required
                  />
                </div>
              </div>

              

              <div className="uk-margin-top uk-hidden">
                <label className="uk-form-label" htmlFor="inicio">
                  Data de Inicio
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    min="1900"
                    max="2100"
                    type="text"
                    step="1"
                    placeholder="1999"
                    name="inicio"
                    id="inicio"
                    onChange={(e) => setInicio(e.target.value)}
                    autoComplete="false"
                  />
                </div>
              </div>

              <div className="uk-width-1-2@s uk-padding-remove-right uk-border-rounded">
                <label className="uk-form-label" htmlFor="constrangimentos">
                  Estado do Projecto
                </label>
                <select
                  className="uk-select uk-margin-small-top"
                  name="status"
                  onChange={(e) => setType(e.target.value)}
                  required
                >
                  <option value="">Por favor seleccione...</option>
                  {categorias.map(function (value, key) {
                    return (
                      <option key={key} index={value.value} value={value.key}>
                        {value.value}
                      </option>
                    );
                  })}
                </select>
              </div>
        

              <div className="uk-margin uk-width-1-1@s uk-padding-remove uk-padding-remove-right">
                <label className="uk-form-label" htmlFor="ponto_de_situacao">
                  Ponto de situação
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    placeholder="Ponto de situação"
                    name="ponto_de_situacao"
                    id="ponto_de_situacao"
                    type="text"
                    onChange={(e) => setPonto_de_situacao(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="uk-margin-top uk-hidden  uk-padding-remove-right">
                <label className="uk-form-label" htmlFor="fim">
                  Fim do financiamento
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    min="1900"
                    max="2100"
                    type="text"
                    step="1"
                    placeholder="1999"
                    name="fim"
                    id="fim"
                    onChange={(e) => setFim(e.target.value)}
                    autoComplete="false"
                  />
                </div>
              </div>
              <div className="uk-margin-top uk-hidden uk-width-1-4@s">
                <label className="uk-form-label" htmlFor="sector">
                  Sector {user.first_name}
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    placeholder="Nome do Sector"
                    id="sector"
                    defaultValue={user.sector.name}
                    type="text"
                    readOnly
                  />
                  <input
                    className="uk-input"
                    placeholder="Sector ID"
                    name="sector_id"
                    id="sector_id"
                    defaultValue={user.sector.id}
                    onChange={(e) => setSector(e.target.value)}
                    type="text"
                    hidden
                  />
                </div>
              </div>
              <div className="uk-margin">
                <span className="uk-text-middle uk-text-normal">
                  Selecione o ficheiro que deseja guardar
                </span>
                <div className="uk-form-custom">
                  <input
                    className="uk-input"
                    type="file"
                    required
                    id="file"
                    name="file_name"
                    accept="application/pdf"
                    onChange={(event) => {
                      const file = event.target.files[0];
                      setIsoFile(file);
                    }}
                  />
                  <span className="uk-link uk-margin-small-right">
                    &nbsp;Seleccionar
                  </span>
                </div>
              </div>
              <div className="uk-width-1-1@s uk-padding-remove-right uk-border-rounded">
                <label className="uk-form-label" htmlFor="constrangimentos">
                  Constrangimentos
                </label>
                <div className="uk-form-controls">
                  <textarea
                    className="uk-textarea"
                    rows="3"
                    id="constrangimentos"
                    required
                    name="constrangimentos"
                    onChange={(e) => setConstrangimentos(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="uk-margin uk-width-1-1@s">
                <button
                  className="uk-button uk-button-secondary uk-align-right"
                  type="submit"
                >
                  Registar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default function CreateProjectos() {
  return (
    <Layout
      header={<Header />}
      content={<CreateProjectoLayout />}
      aside={<Aside />}
    />
  );
}
