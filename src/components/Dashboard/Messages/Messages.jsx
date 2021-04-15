/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import './Messages.css';
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { io } from 'socket.io-client';

const socket = io.connect('http://localhost:3000', {
  withCredentials: true,
  extraHeaders: {
    'my-custom-header': 'abcd',
  },
  transports: ['websocket'],
});

const Messages = () => {
  // eslint-disable-next-line no-console

  const [form, setForm] = useState('');
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [threads, setThreads] = useState([
    { user: 'Tom' },
    { user: 'Newas' },
    { user: 'Carlos' },
    { user: 'Kevin' },
  ]);

  function recievedMessage(msg) {
    setMessages((oldMsgs) => [...oldMsgs, msg]);
  }

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect(socket);
    socketRef.current.on('connect', () => {
      console.log('WE CONNECTED!');
    });
    socketRef.current.on('your id', (id) => {
      console.log('id', id);
      setYourID(id);
    });
    socketRef.current.on('message', (msg) => {
      console.log('msg from server', msg);
      recievedMessage(msg);
    });
    console.log('socketRef.current.emit', socketRef.current.emit);
    // socketRef.current.emit('message', 'message from client');
  });

  const sendMessage = (e) => {
    console.log('inside sendMessage');
    socketRef.current.emit('message', 'sendMessage from client');
    e.preventDefault();
    const messageObj = {
      body: message,
      id: yourID,
    };
    setMessage('');
    console.log('messageObj', messageObj);
    console.log('socketRef.current.emit', socketRef.current.emit);
    socketRef.current.emit('message', messageObj);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
    console.log(`this is  the message: ${e.target.value}`);
  };

  // const handleFormChange = (e) => {
  //   e.preventDefault();
  //   setForm(e.target.value);
  //   console.log(form);
  // };

  // const onSubmit = (props) => {
  //   fetch('http://localhost:3000/dashboard/messages', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //     }),

  //   })
  //     .then((res) => res.json())
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };
  const onSubmit = (props) => {};

  // can refactor this code to be
  // {threads.map((ele, i) => <div className="thread" key={i}>{ele.user}</div>)};
  const messageThreads = () => {
    const test = [];
    for (let i = 0; i < threads.length; i++) {
      // console.log(threads[i].user);
      test.push(<div className="thread">{threads[i].user}</div>);
    }
    return test;
  };

  return (
    <div className="messagesWrapper">
      <div className="messageSideBar">
        <div className="messageSideBarHeader"> sidebar header </div>
        <div className="threadContainer">
          messages from users
          {messageThreads()}
        </div>

      </div>
      <div className="messagesContainer">
        <div className="messageContainerHeader">
          <h1> container header</h1>
        </div>
        <div className="messageBackground">
          {/** ******************* messages ************************** */}
          {messages.map((msg, index) => {
            if (msg.id === yourID) {
              return <div className="myMessage" key={[index]}>{msg.body}</div>;
            }
            return (
              <div className="partnerMessage" key={[index]}>
                {msg.body}
              </div>
            );
          })}
          {/** ****************** END OF MESSAGES ******************** */}
        </div>
        <div className="formAndButton">
          <input
            type="text"
            className="messengerForm"
            placeholder=" Type something..."
            vaule={message}
            onChange={(e) => handleChange(e)}
          />
          <Button
            className="messageButton"
            color="primary"
            variant="contained"
            onClick={sendMessage}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
