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
  const [lote, setLote] = useState();
  const [ambito, setAmbito] = useState();
  const [name, setName] = useState();
  const [provincia, setProvincia] = useState();
  const [distrito, setDistrito] = useState();
  const [financiador, setFinanciador] = useState();
  const [financiamento, setFinanciamento] = useState();
  const [inicio, setInicio] = useState();
  const [fim, setFim] = useState();
  const [estado, setEstado] = useState();
  const [description, setDescription] = useState();
  const [isoFile, setIsoFile] = useState();
  // const [type, setType] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));


  const categorias = [
    { value: "Maputo", key: "Maputo" },
    { value: "Gaza", key: "Gaza" },
    { value: "Inhambane", key: "Inhambane" },
    { value: "Manica", key: "Manica" },
    { value: "Sofala", key: "Sofala" },
    { value: "Zambezia", key: "Zambézia" },
    { value: "Tete", key: "Tete" },
    { value: "Niassa", key: "Niassa" },
    { value: "Nampula", key: "Nampula" },
    { value: "Zambezia", key: "Zambézia" },
    { value: "Maputo-cidade", key: "Maputo-cidade" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSector(user.sector.id);
    const sector_id = user.sector.id;
    setIsLoading(true);

    const formData = new FormData();
    formData.append("lote", lote);
    formData.append("ambito", ambito);
    formData.append("name", name);
    formData.append("provincia", provincia);
    formData.append("distrito", distrito);
    formData.append("financiador", financiador);
    formData.append("financiamento", financiamento);
    formData.append("inicio", inicio);
    formData.append("fim", fim);
    formData.append("estado", estado);
    formData.append("description", description);
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
              <div className="uk-margin uk-width-1-2@s uk-padding-remove uk-padding-remove-right">
                <label className="uk-form-label" htmlFor="lote">
                  Indique o lote
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    placeholder="Lote"
                    name="lote"
                    id="lote"
                    type="text"
                    onChange={(e) => setLote(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="uk-margin-remove uk-width-1-2@s uk-padding-remove-right ">
                <label className="uk-form-label" htmlFor="ambito">
                  Ambito de implementacao
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    placeholder="Ambito de implementacao"
                    name="ambito"
                    id="ambito"
                    type="text"
                    onChange={(e) => setAmbito(e.target.value)}
                    required
                  />
                </div>
              </div>


              <div className="uk-margin uk-margin uk-width-1-2@s uk-padding-remove uk-padding-remove-right">
                <label className="uk-form-label" htmlFor="name">
                  Titulo Projecto
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


              <div className=" uk-margin-top uk-width-1-4@s  uk-padding-remove-right">
                <label className="uk-form-label" htmlFor="published">
                  Selecione a Provincia
                </label>
                <select
                  className="uk-select"
                  name="provincia"
                  onChange={(e) => setProvincia(e.target.value)}
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

              <div className="uk-margin-bottom uk-margin-top uk-width-1-4@s">
                <label className="uk-form-label" htmlFor="distrito">
                  Distrito
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    placeholder="Nome da norma"
                    name="distrito"
                    id="distrito"
                    type="text"
                    onChange={(e) => setDistrito(e.target.value)}
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


              <div className="uk-margin-top uk-width-1-4@s  uk-padding-remove-right">
                <label className="uk-form-label" htmlFor="financiamento">
                Financiamento
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    placeholder="Valor financiado"
                    name="financiamento"
                    id="financiamento"
                    type="text"
                    onChange={(e) => setFinanciamento(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="uk-margin-top uk-width-1-4@s">
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
                    required
                    name="inicio"
                    id="inicio"
                    onChange={(e) => setInicio(e.target.value)}
                    autoComplete="false"
                  />
                </div>
              </div>

              <div className="uk-margin uk-width-1-2@s uk-padding-remove uk-padding-remove-right">
                <label className="uk-form-label" htmlFor="estado">
                Estado actual
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    placeholder="Estado actual"
                    name="estado"
                    id="estado"
                    type="text"
                    onChange={(e) => setEstado(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="uk-margin-top uk-width-1-4@s  uk-padding-remove-right">
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
                    required
                    name="fim"
                    id="fim"
                    onChange={(e) => setFim(e.target.value)}
                    autoComplete="false"
                  />
                </div>
              </div>
              <div className="uk-margin-top uk-width-1-4@s">
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
              <div className="uk-width-1-1@s uk-padding-remove-left uk-border-rounded">
                <label className="uk-form-label" htmlFor="description">
                  Descrição
                </label>
                <div className="uk-form-controls">
                  <textarea
                    className="uk-textarea"
                    rows="3"
                    id="description"
                    required
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
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
