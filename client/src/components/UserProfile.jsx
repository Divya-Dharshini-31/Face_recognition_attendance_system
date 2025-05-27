import React from "react";
import profilePic from "../../assets/profile-icon.png"; // Replace with actual path

const UserProfile = () => {
    return (
        <div
        style={{
            background: "linear-gradient(to bottom, #D6EEF7, #F5F9FB)",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "'Segoe UI', sans-serif",
        }}
        >
        <div
            style={{
            display: "flex",
            gap: "40px",
            background: "white",
            padding: "40px",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
        >
            {/* Left Panel */}
            <div style={{ textAlign: "center" }}>
            <img
                src={profilePic}
                alt="Profile"
                style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                objectFit: "cover",
                }}
            />
            <h2 style={{ color: "#5D3FD3", marginTop: "20px" }}>Thomas Miller</h2>
            <p style={{ fontWeight: "500", margin: 0 }}>Student</p>
            <button
                style={{
                marginTop: "20px",
                border: "none",
                background: "none",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#333",
                cursor: "pointer",
                }}
            >
                <span style={{ fontSize: "20px" }}>✏️</span> Edit profile
            </button>
            </div>

            {/* Right Panel */}
            <div>
            <div style={{ marginBottom: "20px" }}>
                <label style={{ fontWeight: "bold" }}>Full Name</label>
                <input
                type="text"
                value="Thomas Miller"
                readOnly
                style={inputStyle}
                />
            </div>
            <div style={{ marginBottom: "20px" }}>
                <label style={{ fontWeight: "bold" }}>Email</label>
                <input
                type="email"
                value="thomas202@example.com"
                readOnly
                style={inputStyle}
                />
            </div>
            <div style={{ marginBottom: "20px" }}>
                <label style={{ fontWeight: "bold" }}>Username</label>
                <input
                type="text"
                value="thomas_miller"
                readOnly
                style={inputStyle}
                />
            </div>

            {/* Attendance Box */}
            <div
                style={{
                background: "#D9D9D9",
                padding: "20px",
                borderRadius: "20px",
                width: "320px",
                fontWeight: "600",
                color: "#2F2F2F",
                }}
            >
                <div style={infoRow}>
                <span>Attendance Summary</span> <span>180</span>
                </div>
                <div style={infoRow}>
                <span>Total Days</span> <span>170</span>
                </div>
                <div style={infoRow}>
                <span>No.of Leave</span> <span>10</span>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    // Reusable style blocks
    const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontSize: "16px",
    marginTop: "5px",
    color: "#5D3FD3",
    fontWeight: "600",
    };

    const infoRow = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
};

export default UserProfile;
