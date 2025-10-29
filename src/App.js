import React, { useState } from "react";

function App() {
  // start CLOSED in production
  const [isOpen, setIsOpen] = useState(false);

  // brand colors
  const kinderlyGreen = "#4b6852";
  const lightBorder = "#e5e5e5";

  // floating launcher (the little 💬 button)
  const bubbleWrapperStyle = {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    zIndex: 999999,
  };

  const bubbleButtonStyle = {
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
    transition: "transform 0.2s ease",
  };

  // chat popup window
  const chatWindowStyle = {
    position: "fixed",
    bottom: "96px",
    right: "24px",
    width: "320px",
    maxHeight: "420px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 18px 48px rgba(0,0,0,0.28)",
    display: isOpen ? "flex" : "none", // hide if closed
    flexDirection: "column",
    overflow: "hidden",
    border: `1px solid ${lightBorder}`,
    zIndex: 999999,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Inter', 'SF Pro Text', system-ui, sans-serif",
  };

  const headerStyle = {
    backgroundColor: kinderlyGreen,
    color: "#fff",
    padding: "12px 16px",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "1.4",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: `1px solid ${kinderlyGreen}`,
  };

  const closeButtonStyle = {
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "16px",
    lineHeight: "1",
    cursor: "pointer",
    padding: 0,
  };

  const bodyStyle = {
    flex: 1,
    padding: "16px",
    fontSize: "14px",
    lineHeight: "1.5",
    color: "#222",
    backgroundColor: "#fff",
  };

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
      {/* Chat popup window */}
      <div style={chatWindowStyle}>
        <div style={headerStyle}>
          <span>Kinderly Support</span>
          <button
            style={closeButtonStyle}
            aria-label="Close chat"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </div>

        <div style={bodyStyle}>
          <div style={messageBubbleStyle}>
            <div style={{ fontWeight: 500, marginBottom: "4px" }}>
              Hi there <span role="img" aria-label="wave">👋</span>
            </div>
            <div
              style={{
                fontSize: "13px",
                lineHeight: "1.5",
                color: "#444",
              }}
            >
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

      {/* Floating bubble launcher */}
      <div style={bubbleWrapperStyle}>
        <button
          style={bubbleButtonStyle}
          onClick={() => setIsOpen(!isOpen)}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.07)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1.0)";
          }}
          aria-label="Open chat"
        >
          💬
        </button>
      </div>
    </>
  );
}

export default App;
