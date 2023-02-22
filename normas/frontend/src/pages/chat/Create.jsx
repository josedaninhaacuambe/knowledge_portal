import React, { useState, useEffect } from 'react';
import Header from "../../components/HeaderSample";
import Layout from "../Layout";
//import axios from 'axios';
import io from 'socket.io-client';
import Footer from "../../components/footer";
import { BASE_URL } from "../../utils/utils";
import Spinner from "../../components/Spinner";

const Chat = () => {
    
    // Gerenciamento de estado do user de autenticação
    const [isLoading, setIsLoading] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"));
    // Gerenciamento de estado das mensagens e mensagem
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [messagess, getMessages] = useState('');
    
    // Conexão com o Socket.io
    const socket = io("http://localhost:3000");
    //const socket = io(`${BASE_URL}`);
   console.log(socket)
    if (!socket) {
        console.log('A user connected');
    } else {
        console.log('A user disconnected');
    }
    

    useEffect(() => {
        const getMessages = async () => {
          try {
            setIsLoading(true);
            const response = await fetch(`${BASE_URL}/chat`);
            const data = await response.json();
            setMessages(data.messages);
            setIsLoading(false);
          } catch (error) {
            console.error(error);
          }
        };
        getMessages();
      }, []);
    // Adiciona novas mensagens à lista de mensagens quando recebidas pelo Socket.io
    useEffect(() => {
    socket.on('new message', (newMessage) => {
        setMessages([...messages, newMessage]);
    });
    }, [messages]);

    // Envia a mensagem atual pelo Socket.io e limpa o campo de entrada
    const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit('send message', message);
    setMessage('');
    };

    // Faz login na API e armazena o user de autenticação
    const handleLogin = async (event) => {
    event.preventDefault();
    try {

    } catch (error) {
        console.error(error);
    }
    };

    const sendMessage = e => {
        e.preventDefault();
    
        // Envie a mensagem para a API usando o fetch
        fetch(`${BASE_URL}/chat`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            sender: user.id,
            text: message
          })
        }).then(() => {
          // Atualize a lista de mensagens buscando os dados da API novamente
          getMessages();
    
          // Limpe o campo de entrada de mensagem
          setMessage('');
        });
      };


  return (
    <Layout
      header={<Header />}
      content={
        <>
          {isLoading ? (
            <Spinner />
          ) : (
            <div>
                {!user ? (
                    window.location.href = '/accounts/login'
                ) : (
                    <div className="uk-container uk-flex uk-flex-center uk-margin-large uk-margin-top">
                    {/* <div className="chat-header" style={{ backgroundColor: 'orange' }}>
                      <h2>Chat</h2>
                    </div> */}
                    
                    <div className="chat-main">
                      <div className="chat-messages">
                        {messages.map(message => (
                          <div className="message-item" key={message.id}>
                            <p className="sender">{message.sender}:</p>
                            <p className="message">{message.text}</p>
                          </div>
                        ))}
                      </div>
                      <div className="uk-flex uk-flex-center">
                            {/* Lista de mensagens */}
                            <ul>
                            {messages.map(message => (
                                <li key={message.id}>{message.text}</li>
                            ))}
                            </ul>
                            {/* Formulário de envio de mensagens */}
                            <div class="uk-margin" uk-margin>
                                <form class="uk-inline" onSubmit={sendMessage}>
                                    <input class="uk-input uk-input uk-form-width-large" value={message} onChange={event => setMessage(event.target.value)} />
                                    <button class="uk-button uk-button-default" type="submit">Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="chat-profile">
                      <h3>User Profile</h3>
                      <p>Name:  
                        <span className="text-small">
                            {user.first_name}
                        </span>
                      </p>
                      
                      <p>lat Login:
                        <span className="text-small">
                            {user.last_login}
                        </span>
                      </p>
                    </div>
                  </div>


                
                )}
            </div>
            )}
        </>
      }
    footer={<Footer />}
    />
  );
}

export default Chat;
