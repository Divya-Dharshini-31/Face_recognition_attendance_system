import React from "react";

const AddEditUser = () => {
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
            {/* Left Side */}
            <div style={{ textAlign: "center" }}>
            <div
                style={{
                width: "200px",
                height: "200px",
                backgroundColor: "#A6B8C1",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto",
                }}
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                height="64"
                viewBox="0 -960 960 960"
                width="64"
                fill="black"
                >
                <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-80q0-33 17.5-60t46.5-42q67-34 135.5-51T480-410q72 0 140.5 17T756-342q29 15 46.5 42T820-240v80H160Z" />
                </svg>
            </div>
            <p style={{ marginTop: "12px", color: "#333" }}>Add Student image</p>
            <h2 style={{ color: "#5D3FD3", marginBottom: "20px" }}>
                Thomas Miller
            </h2>
            <button
                style={{
                padding: "10px 20px",
                fontSize: "16px",
                border: "none",
                borderRadius: "10px",
                backgroundColor: "#4A90A4",
                color: "#fff",
                cursor: "pointer",
                }}
            >
                Add/Edit User
            </button>
            </div>

            {/* Right Side - Form */}
            <div style={{ width: "350px" }}>
            <FormGroup label="Add Full Name" value="Thomas Miller" />
            <FormGroup label="Add Email" value="thomas202@example.com" />
            <FormGroup label="Add Username" value="thomas_miller" />
            <FormGroup label="Add Phone number" value="6782089894" />
            <FormGroup label="Add Date of Birth" value="2005-06-09" type="date" />
            </div>
        </div>
        </div>
    );
    };

    // Reusable Input Group Component
    const FormGroup = ({ label, value, type = "text" }) => {
    return (
        <div style={{ marginBottom: "20px" }}>
        <label style={{ fontWeight: "bold" }}>{label}</label>
        <input
            type={type}
            value={value}
            readOnly
            style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            fontSize: "16px",
            marginTop: "5px",
            color: "#5D3FD3",
            fontWeight: "600",
            }}
        />
        </div>
    );
};

export default AddEditUser;
