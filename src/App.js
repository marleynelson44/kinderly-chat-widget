import React, { useState, useEffect } from "react";
import "./chatWidget.css";

const CHAT_ENDPOINT = "https://your-backend-domain.com/chat"; // we'll wire later

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // show welcome messages on first load
  useEffect(() => {
    setMessages([
      {
        from: "bot",
        text: "👋 Hi, I’m Kinderly Support. Is this about an existing order or just a quick question?",
      },
      {
        from: "bot",
        text: "If it's an order, tell me the email you used at checkout + your order number (looks like #1234) and I can check tracking for you 💛",
      },
    ]);
  }, []);

  // send message
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
        const res = await fetch(CHAT_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            latest_user_message: userMsg.text,
          }),
        });

        const data = await res.json();

        if (data && data.reply) {
          setMessages((prev) => [
            ...prev,
            { from: "bot", text: data.reply },
          ]);
        } else {
          setMessages((prev) => [
            ...prev,
            {
              from: "bot",
              text:
                "I’m here and reading — I just couldn’t get a reply from the server. You can also reach us at support@kinderly.",
            },
          ]);
        }
    } catch (err) {
        console.error(err);
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text:
              "Sorry, I'm having trouble connecting right now. You can drop us a message at support@kinderly and we'll jump in.",
          },
        ]);
    }
  };

  // handle enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating launcher button */}
      {!isOpen && (
        <button
          className="kc-launcher"
          onClick={() => setIsOpen(true)}
        >
          Chat 💬
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="kc-chat-window">
          <div className="kc-header">
            <div>
              <div className="kc-title">Kinderly Support</div>
              <div className="kc-subtitle">No stress — I can help 💛</div>
            </div>
            <button
              className="kc-close-btn"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="kc-messages">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`kc-bubble ${
                  m.from === "user" ? "kc-user" : "kc-bot"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="kc-input-row">
            <textarea
              className="kc-input"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="kc-send-btn" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
