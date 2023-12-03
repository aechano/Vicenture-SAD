import React, { useEffect, useState } from 'react';
import { PATH_NAME, USER_TYPES } from '../../Variables/GLOBAL_VARIABLE';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';

export default function Profile() {
    const [userType, setUserType] = useState(USER_TYPES.Guest)
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const [newProfilePicture, setNewProfilePicture] = useState(null);
    const [isTextClicked, setIsTextClicked] = useState(false);
    const [editing, setEditing] = useState(false);
    const [newEmail, setNewEmail] = useState();
    const [newUsername, setNewUsername] = useState();
    const [newBusinessSector, setBusinessSector] = useState();
    const [newCompany, setCompany] = useState();
    const [newOffice, setOffice] = useState();
    const [newPosition, setPosition] = useState();
    useEffect(() => {
        var token = Cookies.get("token");
        if (token) {
            var payload = jwtDecode(token);
            setUserType(payload.accountType);
        } else {
            navigate(PATH_NAME.Home);
        }

        setUser({
            email: payload.sub,
            username: payload.Username,
            businessSector: "Agriculture",
            company: "Cargill Inc",
            office: "Tourism Office",
            position: "Head Officer"
        });
    }, [])

    useEffect(()=>{
        setNewEmail(user?.email);
        setNewUsername(user?.username);
        setBusinessSector(user?.businessSector);
        setCompany(user?.company);
        setOffice(user?.office);
        setPosition(user?.position);
    }, [user])

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleTextClick = () => {
        // Add logic for handling the text click (e.g., open file input)
        setIsTextClicked(true);
    };

    const handleCancelClick = () => {
        setNewEmail(user?.email);
        setNewUsername(user?.username);
        setBusinessSector(user?.businessSector);
        setCompany(user?.company);
        setOffice(user?.office);
        setPosition(user?.position);
        setNewProfilePicture(null); // Reset the profile picture state
        setEditing(false);
        setIsTextClicked(false);
    };

    const handleSaveClick = () => {
        // Implement the logic to save the changes (e.g., send a request to the server)
        // You can use state (newEmail, newUsername, newProfilePicture) to send the updated data to the server

        // Example: Send new profile picture to the server
        if (newProfilePicture) {
            const formData = new FormData();
            formData.append('profilePicture', newProfilePicture);

            fetch('/api/updateProfilePicture', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")}`,
                },
                body: formData,
            })
                .then(response => response.json())
                .then(data => {
                    // Handle the response from the server
                    console.log('Profile picture updated successfully:', data);
                })
                .catch(error => {
                    console.error('Error updating profile picture:', error);
                });
        }

        setEditing(false);
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

    return (
        <div className="flex flex-col items-center justify-center p-20 min-h-screen mt-32">
            <div className="my-0 mx-auto flex flex-col items-center w-full max-w-[800px] mb-2.5 mt-[-70px] border-2 border-solid border-lgu-green rounded-[14px]">
                <div className='text 2xl font-bold m-0 p-5 bg-lgu-green text-white w-full rounded-t-[10px]'>Profile</div>
                <div className='w-[200px] h-[200px] border-4 border-solid border-lgu-green rounded-[50%] my-5'>
                    <label htmlFor="profilePictureInput">
                        <img
                            src={newProfilePicture ? URL.createObjectURL(newProfilePicture) : require("./../../res/img/icon.png")}
                            style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                            alt={user?.username}
                        />
                        <div className={`items-center mb-4 mt-2 ${isTextClicked ? 'underline' : ''}`}
                            onClick={handleTextClick}
                            style={{ cursor: 'pointer' }}>
                            {editing && <span>Change Profile Picture</span>}
                        </div>
                    </label>
                    {editing && (
                        <input
                            type="file"
                            id="profilePictureInput"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={(e) => setNewProfilePicture(e.target.files[0])}
                        />
                    )}
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
                                <div style={labelStyle}>{userType === USER_TYPES.LguSV ? "Office: " : "Business Sector: "}</div>
                                {editing ? (
                                    <input
                                        type="text"
                                        value={userType === USER_TYPES.LguSV ? newOffice : newBusinessSector}
                                        onChange={(e) => userType === USER_TYPES.LguSV ? setOffice(e.target.value) : setBusinessSector(e.target.value)}
                                        style={smallInputStyle}
                                    />)
                                    :
                                    (<p style={detailStyle}>{userType === USER_TYPES.LguSV ? newOffice : newBusinessSector}</p>)
                                }
                                <div style={labelStyle}>{userType === USER_TYPES.LguSV ? "Position: " : "Company: "}</div>
                                {editing ?
                                    <input
                                        type="text"
                                        value={userType === USER_TYPES.LguSV ? newPosition : newCompany}
                                        onChange={(e) => userType === USER_TYPES.LguSV ? setPosition(e.target.value) : setCompany(e.target.value)}
                                        style={smallInputStyle}
                                    />
                                    :
                                    <p style={detailStyle}>{userType === USER_TYPES.LguSV ? newPosition : newCompany}</p>
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
