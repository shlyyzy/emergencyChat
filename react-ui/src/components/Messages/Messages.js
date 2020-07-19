import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import ReactEmoji from 'react-emoji';

import Message from './Message/Message';
import './Messages.css';

const Messages = ({ messages, name, time }) => (
  <ScrollToBottom className="messages">
    {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
  </ScrollToBottom>
);

export default Messages;