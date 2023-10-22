import React from 'react'
import { NavLink } from 'react-router-dom'

export default function WebpagePath(props) {
    return (
        <div className={'flex '+props.className}>
            {props.previous.map((page, index) => (<NavLink key={index} to={page.to}>{page.title}/</NavLink>))}
            <p>{props.children}</p>
        </div >
    )
}
