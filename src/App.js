import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true); // start open for now so we can tweak look

  // Colors
  const kinderlyGreen = "#4b6852";
  const lightBorder = "#e5e5e5";
  const bgWhite = "#ffffff";

  // Floating launcher button
  const bubbleStyle = {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    backgroundColor: kinderlyGreen,
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "56px",
    height: "56px",
    fontSize: "22px",
    fontWeight: "500",
    lineHeight: "56px",
    textAlign: "center",
    cursor: "pointer",
    boxShadow: "0 10px 24px rgba(0,0,0,0.25)",
    zIndex: 999999,
    transition: "transform 0.2s ease",
  };

  // Chat window wrapper
  const chatWindowStyle = {
    position: "fixed",
    bottom: "96px",
    right: "24px",
    width: "320px",
    maxHeight: "420px",
    backgroundColor: bgWhite,
    borderRadius: "12px",
    boxShadow: "0 18px 48px rgba(0,0,0,0.28)",
    display: isOpen ? "flex" : "none",
    flexDirection: "column",
    overflow: "hidden",
    border: `1px solid ${lightBorder}`,
    zIndex: 999999,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Inter', 'SF Pro Text', system-ui, sans-serif",
  };

  // Header of the chat popup
  const headerStyle = {
    backgroundColor: kinderlyGreen,
    color: "#fff",
    padding: "12px 16px",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "1.4",
    display: "flex",
    alignItems: "center",
    borderBottom: `1px solid ${kinderlyGreen}`,
  };

  // Body / message area
  const bodyStyle = {
    flex: 1,
    padding: "16px",
    fontSize: "14px",
    lineHeight: "1.5",
    color: "#222",
    backgroundColor: "#fff",
  };

  // Little bubble for our welcome message
  const messageBubbleStyle = {
    backgroundColor: "#f5f6f5",
    border: `1px solid ${lightBorder}`,
    borderRadius: "10px",
    padding: "12px 14px",
    maxWidth: "90%",
    fontSize: "14px",
    lineHeight: "1.5",
    color: "#222",
    boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
  };

  // Input row at the bottom
  const inputRowStyle = {
    borderTop: `1px solid ${lightBorder}`,
    padding: "10px 10px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    gap: "8px",
  };

  const inputStyle = {
    flex: 1,
    border: `1px solid ${lightBorder}`,
    borderRadius: "8px",
    padding: "8px 10px",
    fontSize: "13px",
    lineHeight: "1.4",
    outline: "none",
    minWidth: 0,
  };

  const sendButtonStyle = {
    backgroundColor: kinderlyGreen,
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "8px 12px",
    fontSize: "13px",
    fontWeight: 500,
    cursor: "pointer",
    lineHeight: "1.2",
    whiteSpace: "nowrap",
  };

  return (
    <>
      {/* Chat window */}
      <div style={chatWindowStyle}>
        <div style={headerStyle}>
          Kinderly Support
        </div>

        <div style={bodyStyle}>
          <div style={messageBubbleStyle}>
            <div style={{ fontWeight: 500, marginBottom: "4px" }}>
              Hi there <span role="img" aria-label="wave">👋</span>
            </div>
            <div style={{ fontSize: "13px", lineHeight: "1.5", color: "#444" }}>
              How can we help you today?
              <br />
              • Order / tracking
              <br />
              • Product questions
              <br />
              • Returns / support
            </div>
          </div>
        </div>

        <div style={inputRowStyle}>
          <input
            type="text"
            placeholder="Type a message..."
            style={inputStyle}
          />
          <button style={sendButtonStyle}>Send</button>
        </div>
      </div>

      {/* Floating launcher (bubble) */}
      <button
        style={bubbleStyle}
        onClick={() => setIsOpen(!isOpen)}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.07)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
        aria-label="Open chat"
      >
        💬
      </button>
    </>
  );
}

export default App;
