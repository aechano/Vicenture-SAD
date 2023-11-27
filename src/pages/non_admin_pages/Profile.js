import React, { useState } from 'react';
import { PATH_NAME, USER_TYPES } from '../../Variables/GLOBAL_VARIABLE';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';

export default function Profile({ userType }) {
    const navigate = useNavigate()
    var token = Cookies.get("token");
    if (token){
        var payload = jwtDecode(token);
    } else {
        navigate(PATH_NAME.Home);
    }
    const user = {
        email: payload.sub,
        username: payload.Username,
        businessSector: "Agriculture",
        company: "Cargill Inc",
        office: "Tourism Office",
        position: "Head Officer"
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
    const [newBusinessSector, setBusinessSector] = useState(user.businessSector);
    const [newCompany, setCompany] = useState(user.company);
    const [newOffice, setOffice] = useState(user.office);
    const [newPosition, setPosition] = useState(user.position);

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleCancelClick = () => {
        setNewEmail(user.email);
        setNewUsername(user.username);
        setBusinessSector(user.businessSector);
        setCompany(user.company);
        setOffice(user.office);
        setPosition(user.position);
        setEditing(false);
    };

    const handleSaveClick = () => {
        // Implement the logic to save the changes (e.g., send a request to the server)
        // You can use state (newEmail, newUsername) to send the updated data to the server
        setEditing(false);
    };

    return (
        <div className="flex flex-col items-center justify-center p-20 min-h-screen mt-32">
            <div className="my-0 mx-auto flex flex-col items-center w-full max-w-[800px] mb-2.5 mt-[-70px] border-2 border-solid border-lgu-green rounded-[14px]">
                <div className='text 2xl font-bold m-0 p-5 bg-lgu-green text-white w-full rounded-t-[10px]'>Profile</div>
                <div className='w-[200px] h-[200px] border-4 border-solid border-lgu-green rounded-[50%] my-5'>
                    <img src={require("./../../res/img/icon.png")} style={{ width: '100%', height: '100%', borderRadius: '50%' }} alt={user.username} />
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
                    {
                        [USER_TYPES.Investor, USER_TYPES.LguSV].includes(userType) ?
                            <>
                                <div style={labelStyle}>{userType===USER_TYPES.LguSV?"Office: ":"Business Sector: "}</div>
                                {editing ? (
                                    <input
                                        type="text"
                                        value={userType===USER_TYPES.LguSV?newOffice:newBusinessSector}
                                        onChange={(e) => userType===USER_TYPES.LguSV?setOffice(e.target.value):setBusinessSector(e.target.value)}
                                        style={smallInputStyle}
                                    />)
                                    :
                                    (<p style={detailStyle}>{userType===USER_TYPES.LguSV?newOffice:newBusinessSector}</p>)
                                }
                                <div style={labelStyle}>{userType===USER_TYPES.LguSV?"Position: ":"Company: "}</div>
                                {editing ?
                                    <input
                                        type="text"
                                        value={userType===USER_TYPES.LguSV?newPosition:newCompany}
                                        onChange={(e) => userType===USER_TYPES.LguSV?setPosition(e.target.value):setCompany(e.target.value)}
                                        style={smallInputStyle}
                                    />
                                    :
                                    <p style={detailStyle}>{userType===USER_TYPES.LguSV?newPosition:newCompany}</p>
                                }
                            </>
                            :
                            null
                    }
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
