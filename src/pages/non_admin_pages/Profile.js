import React, { useState } from 'react';

export default function Profile() {
    const user = {
        email: "Ghe3lo_@example.com",
        username: "Ghe3lo_",
        // Add more user details if needed
    };

    const profileContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        minHeight: '100vh',
    };

    const profileContentStyle = {
        margin: '0 auto', // Center the content horizontally
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '800px',
        marginBottom: '10px',
        marginTop: '-70px',
        border: '2px solid #2D5F2E',
        borderRadius: '14px',
    };

    const profileImageStyle = {
        width: '200px',
        height: '200px',
        border: '4px solid #2D5F2E',
        borderRadius: '50%',
        marginBottom: '20px',
        marginTop: '20px',
    };

    const profileInfoStyle = {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#B5F8B6',
        width: '100%',
        maxWidth: '600px', 
        margin: '0 auto', 
        borderRadius: '10px',
        marginTop: '10px',
    };

    const smallInputStyle = {
        width: '100%', 
        padding: '10px',
        fontSize: '16px',
        border: '2px solid #2D5F2E',
        borderRadius: '10px',
    };

    const labelStyle = {
        fontWeight: 'bold',
        fontSize: '18px',
        textAlign: 'left',
        marginTop: '10px',
    };

    const detailStyle = {
        marginBottom: '15px',
        fontSize: '16px',
        textAlign: 'left',
    };

    const profileTextStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        margin: '0',
        padding: '20px',
        backgroundColor: '#2D5F2E',
        color: '#fff',
        width: '100%',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
    };

    const buttonStyle = {
        backgroundColor: '#2D5F2E',
        color: '#fff',
        border: 'none',
        borderRadius: '10px',
        padding: '10px 20px',
        cursor: 'pointer',
        marginTop: '20px',
        marginBottom: '20px',
    };

    const saveButtonStyle = {
        ...buttonStyle,
        marginLeft: '40px',
    };

    const [editing, setEditing] = useState(false);
    const [newEmail, setNewEmail] = useState(user.email);
    const [newUsername, setNewUsername] = useState(user.username);

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleCancelClick = () => {
        setNewEmail(user.email);
        setNewUsername(user.username);
        setEditing(false);
    };

    const handleSaveClick = () => {
        // Implement the logic to save the changes (e.g., send a request to the server)
        // You can use state (newEmail, newUsername) to send the updated data to the server
        setEditing(false);
    };

    return (
        <div style={profileContainerStyle}>
            <div style={profileContentStyle}>
                <div style={profileTextStyle}>Profile</div>
                <div style={profileImageStyle}>
                    <img src={require("./../../res/debug_img/userpfp1.png")} style={{ width: '100%', height: '100%', borderRadius: '50%' }} alt={user.username} />
                </div>
                <div style={profileInfoStyle}>
                    <div style={labelStyle}>Email:</div>
                    {editing ? (
                        <input
                            type="text"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                            style={smallInputStyle} 
                        />
                    ) : (
                        <p style={detailStyle}>{newEmail}</p>
                    )}
                    <div style={labelStyle}>Username:</div>
                    {editing ? (
                        <input
                            type="text"
                            value={newUsername}
                            onChange={(e) => setNewUsername(e.target.value)}
                            style={smallInputStyle} 
                        />
                    ) : (
                        <p style={detailStyle}>{newUsername}</p>
                    )}
                </div>
                {editing ? (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button style={buttonStyle} onClick={handleCancelClick}>Cancel</button>
                        <button style={saveButtonStyle} onClick={handleSaveClick}>Save Changes</button>
                    </div>
                ) : (
                    <button style={buttonStyle} onClick={handleEditClick}>Edit Profile</button>
                )}
            </div>
        </div>
    );
}
