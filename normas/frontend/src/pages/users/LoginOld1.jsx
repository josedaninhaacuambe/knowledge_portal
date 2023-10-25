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
    setIsLoading(true);

    const response = await loginUser({
      username,
      password,
    });

    if ("accessToken" in response) {
      localStorage.setItem("accessToken", response["accessToken"]);
      localStorage.setItem("user", JSON.stringify(response["user"]));
      localStorage.setItem("mainSession", JSON.stringify(response));
      setCorrectCredentials(response.correctCredentials);
      setType(response.type);

      window.location.href = "/dashboard";
      // });
    } else {
      setIsLoading(false);

      setCorrectCredentials(response.correctCredentials);
      setType(response.type);
    }
    setIsLoading(false);
  };


  return (

    <div className="">
      {isLoading ? <Spinner /> : ""}
        <div class="uk-position-relative uk-padding-remove uk-position-cover uk-background-cover" uk-cover>
            <div>
            <header
                style={{
                    height: "100vh",
                    width: "100%",
                    color: "white",
                    font: "bold 6.5em/2em monospace",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "linear-gradient( #858585cc , #fa7f22cc), url(https://i.pinimg.com/originals/f7/c8/8c/f7c88c4da92ec40f09694a26ace487fa.jpg)"
                }}
                >
                </header>
                {/* {isLoading ? <Spinner /> : ""} */}
                    {/* <img src="/images/ComponentTMP.jpg" style={{  width:1500, height:600, backgroundImage: backgroundColor:"#858585", floodColor:"#858585", floodOpacity:0.102 }}  alt="" /> */}
                  <div className="uk-position-small uk-padding-remove uk-position-top-center uk-overlay" style={{marginLeft:-310, tabSize:10}}>  
                    <img className="uk-small" src="/images/logo123.png" alt="" />
                  </div>

                <div class="uk-position-center uk-overlay uk-overlay-default uk-card uk-card-default uk-card-body" style={{borderRadius:20, marginLeft:-600}}>
                        <label className="uk-text-bold  uk-text-center uk-text-center uk-padding-remove uk-card-body uk-text-lead" htmlFor="username">
                                Login
                        </label>
                    <div className="uk-grid">
                        {/* <div></div> */}
                        <form
                            className="uk-form-stacked"
                            method="post"
                            onSubmit={handleSubmit}
                            >
                            <div className="uk-margin ">
                            <label className="uk-form-label uk-text-bolder uk-text-lead" htmlFor="username">
                                Usuário
                            </label>
                                <div className="uk-form-controls ">
                                    <input
                                        style={{  }}
                                        className="uk-input uk-form-width-large"
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
                            <label className="uk-form-label uk-text-bolder uk-text-lead" htmlFor="password">
                                Password
                            </label>
                                <div className="uk-form-controls">
                                    <input
                                        className="uk-input uk-form-width-large"
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
                            <div className="uk-width-1-1@s" style={{borderRadius:10}}>
                            <Button
                                style={{borderRadius:100}}
                                className="uk-button"
                                text="Entrar"
                                direction="uk-align-center"
                                disabled={isLoading}
                            />
                            </div>
                        </form>
                        
                        {/* <div class="">
                            <a href="#" class="uk-button uk-button-text"></a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
      </div>    
  );
}
