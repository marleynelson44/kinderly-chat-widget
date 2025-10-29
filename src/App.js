import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Style for the floating chat bubble button
  const bubbleStyle = {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    backgroundColor: "#4b6852", // Kinderly green tone
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    fontSize: "24px",
    cursor: "pointer",
    boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
    zIndex: 999999,
    transition: "transform 0.2s ease",
  };

  // Style for the chat window container
  const chatWindowStyle = {
    position: "fixed",
    bottom: "100px",
    right: "24px",
    width: "320px",
    maxHeight: "450px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
    display: isOpen ? "flex" : "none",
    flexDirection: "column",
    overflow: "hidden",
    zIndex: 999999,
  };

  // Chat window header
  const headerStyle = {
    backgroundColor: "#4b6852",
    color: "#fff",
    padding: "14px 18px",
    fontWeight: "600",
    fontSize: "16px",
  };

  // Chat message area
  const bodyStyle = {
    flex: 1,
    padding: "16px",
    fontSize: "15px",
    color: "#333",
  };

  // Input area
  const inputContainerStyle = {
    borderTop: "1px solid #eee",
    padding: "10px",
    display: "flex",
  };

  const inputStyle = {
    flex: 1,
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "8px 10px",
    fontSize: "14px",
    outline: "none",
  };

  const sendButtonStyle = {
    marginLeft: "8px",
    backgroundColor: "#4b6852",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "8px 14px",
    cursor: "pointer",
  };

  return (
    <>
      {/* Floating chat bubble */}
      <button
        style={bubbleStyle}
        onClick={() => setIsOpen(!isOpen)}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
      >
        💬
      </button>

      {/* Chat window */}
      <div style={chatWindowStyle}>
        <div style={headerStyle}>Kinderly Support</div>
        <div style={bodyStyle}>
          Hi there 👋 <br />
          How can we help you today?
        </div>
        <div style={inputContainerStyle}>
          <input type="text" placeholder="Type a message..." style={inputStyle} />
          <button style={sendButtonStyle}>Send</button>
        </div>
      </div>
    </>
  );
}

export default App;
