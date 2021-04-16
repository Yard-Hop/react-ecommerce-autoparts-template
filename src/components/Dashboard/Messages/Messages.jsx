/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import './Messages.css';
import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const Messages = () => {
  const [form, setForm] = useState('');
  const [threads, setThreads] = useState([
    { user: 'Tom' },
    { user: 'Newas' },
    { user: 'Carlos' },
    { user: 'Kevin' },
  ]);

  const handleFormChange = (e) => {
    e.preventDefault();
    setForm(e.target.value);
    console.log(form);
  };

  const onSubmit = (props) => {
    fetch('http://localhost:3001/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
      }),

    })
      // .catch((err) = console.log(err))
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  const messageThreads = () => {
    const test = [];
    for (let i = 0; i < threads.length; i++) {
      test.push(<div key={threads[i].user} className="thread">{threads[i].user}</div>);
    }
    return test;
  };

  return (
    <div className="messagesWrapper" data-testid="messages">
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
          <div className="b">
            <span className="message">test message this is a test message</span>
          </div>
          <div className="b">
            <span className="message">test message this is a test messagefjgnkdfkgndfjkngjkdfngjkdnkfjng</span>
          </div>
        </div>
        <div className="formAndButton">
          <input
            type="text"
            className="messengerForm"
            placeholder=" Type something..."
            onChange={(e) => handleFormChange(e)}
          />
          <Button
            className="messageButton"
            color="primary"
            variant="contained"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
