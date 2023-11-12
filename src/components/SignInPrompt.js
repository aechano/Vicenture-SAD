import { Box, Modal, Typography } from '@mui/material'
import React from 'react'

export default function SignInPrompt({ open, handleClose }) {
    return (
        <>
            <img
                src={require("./../res/debug_img/intro.png")}
                className='w-full h-full' />
            <div
                className='fixed top-0 left-0 bg-white brightness-50 h-screen w-screen opacity-50'>

            </div>
        </>
    )
}
