import React, { useState } from "react";
import Button from "../../components/Button";
import MessageAlert from "../../components/Alert";
import Spinner from "../../components/Spinner";
import { BASE_URL } from "../../utils/utils";

async function loginUser(credentials) {
  return fetch(BASE_URL + "account/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login() {
  const [username, setUserName] = useState(false);
  const [password, setPassword] = useState(false);
  const [type, setType] = useState(false);
  const [correctCredentials, setCorrectCredentials] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // setTimeout("$('#preloader').fadeOut('slow')", null)

    setIsLoading(true);

    const response = await loginUser({
      username,
      password,
    });

    if ("accessToken" in response) {
      // swal("Success", response.message, "success", {
      //   buttons: false,
      //   timer: 2000,
      // })
      // .then((value) => {
      localStorage.setItem("accessToken", response["accessToken"]);
      localStorage.setItem("user", JSON.stringify(response["user"]));
      localStorage.setItem("mainSession", JSON.stringify(response));
      setCorrectCredentials(response.correctCredentials);
      setType(response.type);

      window.location.href = "/";
      // });
    } else {
      setIsLoading(false);

      setCorrectCredentials(response.correctCredentials);
      setType(response.type);
      // console.log(response);
      // swal("Failed", response.message, "error");
    }
    setIsLoading(false);
  };

  return (

    // <div class="uk-card uk-card-default uk-width-1-2@m">
    //     <div class="uk-card-header">
    //         <div class="uk-grid-small uk-flex-middle" uk-grid>
    //             <div class="uk-width-auto">
    //                 <img class="uk-border-circle" width="40" height="40" src="images/avatar.jpg">
    //             </div>
    //             <div class="uk-width-expand">
    //                 <h3 class="uk-card-title uk-margin-remove-bottom">Title</h3>
    //                 <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
    //             </div>
    //         </div>
    //     </div>
    //     <div class="uk-card-body">
    //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    //     </div>
    //     <div class="uk-card-footer">
    //         <a href="#" class="uk-button uk-button-text">Read more</a>
    //     </div>
    // </div>




    <div className="uk-container uk-card uk-card-default uk-margin-large-top">
      {isLoading ? <Spinner /> : ""}
      <div>
        <h4 className="uk-text-bold uk-margin-large-top">
          {/* Seja bem vindo a Gestão de Normas */}
          Portal do conhecimento da EDM
        </h4>
        {/* <p className="uk-text-light">
          Neste modulo, tens a disponibilidade de visualizar as normas que o teu
          sector tem acesso
        </p> */}
        <div className="uk-child-width-1-1@s uk-grid">
          <div> </div>
          {/* <h2 className="h3 mb-3 font-weight-normal uk-margin-medium-top uk-padding-remove">
            Aceda a plataforma
          </h2> */}
          <form
            className="uk-form-stacked uk-width-1-2@s uk-padding-remove"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="uk-margin uk-width-1-1@s uk-margin-medium-top">
              <label className="uk-form-label" htmlFor="username">
                Nome de usuário
              </label>
              <div className="uk-form-controls">
                <input
                  className="uk-input"
                  placeholder="Usuário de acesso"
                  name="username"
                  id="username"
                  type="text"
                  required
                  onChange={(e) => setUserName(e.target.value)}
                />
                <div id="error"></div>
              </div>
            </div>
            <div className="uk-margin uk-width-1-1@s">
              <label className="uk-form-label" htmlFor="password">
                Senha
              </label>
              <div className="uk-form-controls">
                <input
                  className="uk-input"
                  placeholder="Senha de acesso"
                  name="password"
                  required
                  id="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              {correctCredentials ? (
                <MessageAlert type={type} message={correctCredentials} />
              ) : (
                <MessageAlert />
              )}
            </div>
            <div className="uk-margin uk-width-1-1@s">
              <Button
                text="Entrar"
                direction="uk-align-right"
                disabled={isLoading}
              />
            </div>
          </form>
          <div className="uk-form-stacked uk-card-bod uk-width-1-2@s">
            {/* <img
              className="uk-img uk-margin-large-left"
              src="../images/unknown18.jpeg"
              alt=""
            /> */}
          </div>

          
         <div class="uk-card-footer">
             <a href="#" class="uk-button uk-button-text">login with</a>
         </div>

        </div>
      </div>
    </div>
  );
}
