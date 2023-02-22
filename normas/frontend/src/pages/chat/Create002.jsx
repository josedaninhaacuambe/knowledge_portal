import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from "../../utils/utils";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const getMessages = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(``, {
        headers: {
          'Authorization': `Bearer ${user}`,
        },
      });
      setMessages(response.data.messages);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    getMessages();
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}`, {
        sender: user.id,
        text: message,
      }, {
        headers: {
          'Authorization': `Bearer ${user}`,
        },
      });
      if(!response.ok) {
        throw Error(response.statusText);
      }
      setMessage('');
    } catch (error) {
      console.error(error);
    } finally {
      // Call effect here
      getMessages()
    }
  };

  return (
    <div className="chat">
    <header className="chat-header">
      <h1>Chat</h1>
    </header>
    {isLoading ? (
      <div>Carregando mensagens...</div>
    ) : (
      <div className="chat-messages">
        {messages.map(message => (
          <div key={message.id} className="chat-message">
            <span className="chat-message-sender">{message.sender}</span>: <span className="chat-message-text">{message.text}</span>
          </div>
        ))}
      </div>
    )}
    {user ? (
      <form className="chat-form" onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    ) : (
      <div>Por favor, faça login para enviar mensagens</div>
    )}
  </div>
);

  //   <div className="chat">
  //     <header className="chat-header">
  //       <h1>Chat</h1>
  //     </header>
  //     {isLoading ? (
  //       <div>Carregando mensagens...</div>
  //     ) : (
  //       <div className="chat-messages">
  //         {messages.map(message => (
  //           <div key={message.id} className="chat-message">
  //             <span className="chat-message-sender">{message.sender}</span>: <span className="chat-message-text">{message.text}</span>
  //           </div>
  //         ))}
  //       </div>
  //     )}
  //     {currentUser ? (
  //       <form className="chat-form" onSubmit={sendMessage}>
  //         <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
  //         <button type="submit">Enviar</button>
  //       </form>
  //     ) : (
  //       <div>Por favor, faça login para enviar mensagens</div>
  //     )}
  //   </div>
  // );
};

export default Chat;
