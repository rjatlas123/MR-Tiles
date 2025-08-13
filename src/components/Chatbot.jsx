
import React, { useState } from "react";
import "../styles/Chatbot.css";
import { FaComments, FaTimes } from "react-icons/fa";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I’m the Bharath Cement Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([...messages, { from: "user", text: input }]);
    setInput("");

    // Show WhatsApp Me button instead of static message
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          from: "bot",
          isButton: true,
          buttonText: "WhatsApp Me",
          link: "https://wa.me/919876543210" // Replace with your WhatsApp number
        }
      ]);
    }, 800);
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chat-window slide-up">
          <div className="chat-header">
            <h3> Assistant</h3>
            <FaTimes className="close-icon" onClick={toggleChat} />
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.from}`}>
                {msg.isButton ? (
                  <a
                    href={msg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn"
                  >
                    {msg.buttonText}
                  </a>
                ) : (
                  msg.text
                )}
              </div>
            ))}
          </div>

          <div className="quick-replies">
            <button onClick={() => setInput("Tell me about your products")}>Product Info</button>
            <button onClick={() => setInput("I need a quote")}>Get a Quote</button>
            <button onClick={() => setInput("Where is my nearest dealer?")}>Find Dealer</button>
            <button onClick={() => setInput("Contact support team")}>Support</button>
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}

      <div className="chat-toggle bounce" onClick={toggleChat}>
        <FaComments />
      </div>
    </div>
  );
};

export default ChatBot;
