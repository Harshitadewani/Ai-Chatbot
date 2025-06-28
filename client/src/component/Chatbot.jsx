import React, { useState } from "react";
import "../App.css";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch(`${process.env.REACT_APP_API}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMessage = { type: "bot", text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Something went wrong." },
      ]);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <img src="/bot.png" alt="Bot" className="bot-icon" />
        <h2>Chatbot Max</h2>
      </div>

      <div className="chat-body">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`message ${msg.type === "user" ? "user" : "bot"}`}
            {...(msg.type === "bot"
              ? { dangerouslySetInnerHTML: { __html: msg.text } }
              : { children: msg.text })}
          />
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend}>➤</button>
      </div>
    </div>
  );
};

export default Chatbot;
