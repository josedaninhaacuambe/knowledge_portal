import React, { useState } from "react";
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
  const [checked, setChecked] = useState(false);
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
      setIsLoading(false);
      // });
    } else {
      setIsLoading(false);

      setCorrectCredentials(response.correctCredentials);
      setType(response.type);
    }

  };


  return (

    <div className="">
      {isLoading ? <Spinner /> :
        <div class="uk-position-relative uk-padding-remove uk-position-cover uk-background-cover" uk-cover>
            <div>
            <header
                style={{
                    height: "100vh",
                    width: "100%",
                    color: "white",
                    font: "bold 6.5em/2em monospace",
                    background:"linear-gradient( #858585cc , #fa7f22cc), url(https://i.pinimg.com/originals/f7/c8/8c/f7c88c4da92ec40f09694a26ace487fa.jpg)"
                }}
                >
                </header>
                    <div className=" uk-position-center uk-overlay uk-flex uk-flex-center uk-visible@m uk-overlay-default uk-card uk-card-default uk-card-body" style={{borderRadius:20, marginLeft:-400}}>
                        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-12">
                            <div className="text-center uk-margin-remove-vertical uk-padding-remove-vertical uk-margin-remove mb-5">
                                <img className="mb-3 profile-img-login" src="https://lh3.googleusercontent.com/pw/AL9nZEU-Pml7gon5-l4L3qbgD6BuJXv3SvGXDf_KBNDboOPtH3pejk1VKW5eG9zp0hoe_cLAhNz9NR-rLm6FvepSRrcCtC46QcNlp9s1MBtNheagdlJm3V0tfs_fClrBFB1rgrUFVq_AVnbq33kX8vaIElwt=w457-h438-no?authuser=0" alt="logo" />
                                <div className="text-600 text-2xl uk-margin-remove-vertical uk-padding-remove-vertical font-medium mb-3">Bem vindo!</div>
                                <span className="text-600 font-medium line-height-3">Insira as suas credencias</span>
                                {/*<a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Crie hoje!</a>*/}
                            </div>
                            <div className="uk-padding-remove-top">
                                {correctCredentials ? (
                                    <MessageAlert type={type} message={correctCredentials} />
                                ) : (
                                    <MessageAlert />
                                )}
                            </div>
                            <form
                                method="post"
                                onSubmit={handleSubmit}
                                >
                                <div>
                                    <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                                    <input
                                        placeholder="Usuário de acesso"
                                        name="username"
                                        id="username"
                                        type="text"
                                        required
                                        style={{paddingLeft:"100px" }}
                                        onChange={(e) => setUserName(e.target.value)}
                                        className="w-full form-success uk-input uk-form-width-large mb-3" />

                                    <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                                    <input
                                        placeholder="Senha de acesso"
                                        name="password"
                                        required
                                        id="password"
                                        type="password"
                                        style={{paddingLeft:"100px" }}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full form-success uk-input uk-form-width-large mb-3"
                                    />

                                    <div className="flex align-items-center uk-margin-remove-vertical uk-padding-remove-vertical justify-content-between mb-6">
                                        <div className="flex align-items-center">
                                            <label htmlFor="rememberme">Lembre de mim</label>
                                        </div>
                                    </div>

                                     <br/>
                                        <button class="uk-button uk-button-primary p-button-warning uk-width-1-1 uk-margin-small-bottom" disabled={isLoading}
                                        label="Sign In"
                                        icon="pi pi-user"
                                        type="submit">
                                        Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>


                    <div className=" uk-position-center uk-overlay uk-flex uk-flex-center uk-hidden@m uk-margin-remove-top uk-flex uk-flex-center uk-overlay-default uk-card uk-card-default uk-card-body" style={{borderRadius:10, marginLeft:-350, marginTop: "-30px"}}>
                        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-12">
                            <div className="text-center uk-margin-remove-vertical uk-padding-remove-vertical uk-margin-remove mb-5">
                                <img className="mb-3 profile-img-login" src="https://lh3.googleusercontent.com/pw/AL9nZEU-Pml7gon5-l4L3qbgD6BuJXv3SvGXDf_KBNDboOPtH3pejk1VKW5eG9zp0hoe_cLAhNz9NR-rLm6FvepSRrcCtC46QcNlp9s1MBtNheagdlJm3V0tfs_fClrBFB1rgrUFVq_AVnbq33kX8vaIElwt=w457-h438-no?authuser=0" alt="logo" />
                                <div className="text-600 text-2xl uk-margin-remove-vertical uk-padding-remove-vertical font-medium mb-3">Bem vindo de volta</div>
                                <span className="text-600 font-medium line-height-3">Não tem uma conta?</span>
                            </div>
                            <div className="uk-padding-remove-top">
                                {correctCredentials ? (
                                    <MessageAlert type={type} message={correctCredentials} />
                                ) : (
                                    <MessageAlert />
                                )}
                            </div>
                            <form
                                method="post"
                                onSubmit={handleSubmit}
                                >
                                <div>
                                    <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                                    <input
                                        placeholder="Usuário de acesso"
                                        name="username"
                                        id="username"
                                        type="text"
                                        required
                                        onChange={(e) => setUserName(e.target.value)}
                                        className="w-full form-success uk-input uk-form-width-large mb-3" />

                                    <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                                    <input
                                        placeholder="Senha de acesso"
                                        name="password"
                                        required
                                        id="password"
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full form-success uk-input uk-form-width-large mb-3"
                                    />

                                    <div className="flex align-items-center uk-margin-remove-vertical uk-padding-remove-vertical justify-content-between mb-6">
                                        <div className="flex align-items-center">
                                            <label htmlFor="rememberme">Lembre de mim</label>
                                        </div>
                                    </div>
                                        <button class="uk-button uk-button-primary p-button-warning uk-width-1-1 uk-margin-small-bottom" disabled={isLoading}
                                        label="Aceder"
                                        icon="pi pi-user"
                                        type="submit">
                                        Aceder</button>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>

      </div>}
      </div>
  );
}
