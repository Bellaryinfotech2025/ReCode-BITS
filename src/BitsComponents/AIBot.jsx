// src/ChatBot.js
import React, { useState } from 'react';
import '../BitsStyles/AIBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false); // To control the visibility of the chat window
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' }
  ]); // Store the conversation

  // Function to toggle the chat window
  const toggleChatWindow = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle user input
  const handleUserInput = (event) => {
    event.preventDefault();
    const userInput = event.target.elements.userInput.value.trim();
    if (userInput === '') return;

    // Add user message to chat
    setMessages([...messages, { sender: 'user', text: userInput }]);
    event.target.reset();

    // Add bot's response (Here, we simulate the bot with simple responses)
    setTimeout(() => {
      const botResponse = getBotResponse(userInput);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: botResponse }
      ]);
    }, 1000);
  };

  // Simple function to return bot's responses based on user input
  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes('website') || lowerInput.includes('about')) {
      return 'We are Bellary Infotech, providing innovative IT solutions and Billing Solutions';
    } else if (lowerInput.includes('services') || lowerInput.includes('service')) {
      return 'Our services include Mobile development, Web Application, Website, IT Support, Software Development, Billing Solutions, and more.';
    } else if (lowerInput.includes('capabilities') || lowerInput.includes('capability')) {
      return 'We specialize in scalable enterprise applications, web & mobile app development.';
    } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      return 'Hello! How can I help you today?';
    } else {
      return "Sorry, I didn't quite understand that. Can you rephrase?";
    }
  };

  return (
    <div>
      {/* Chatbot button */}
      <div className="chatbot-button" onClick={toggleChatWindow}>
        <img src="https://img.icons8.com/ios-filled/50/000000/chat.png" alt="chatbot" />
      </div>

      {/* Chat window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Chat with Us</h3>
            <button className="close-btn" onClick={toggleChatWindow}>
              X
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <form className="chatbot-input" onSubmit={handleUserInput}>
            <input
              type="text"
              name="userInput"
              placeholder="Type your message..."
              autoComplete="off"
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
