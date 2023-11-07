import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { PATH_NAME } from '../Variables/GLOBAL_VARIABLE';

function RedirectMessages() {
    const navigate = useNavigate();
    
    useEffect(() => {
        var conversationID = "123";
        navigate(PATH_NAME.Messages + "/" + conversationID);
    }, []);
    return (
        <div />
    )
}

export { RedirectMessages }
