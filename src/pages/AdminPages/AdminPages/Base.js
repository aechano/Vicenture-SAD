import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Base({contents, title}) {
    return (
        <div className='p-10'>
            <h1 className='font-medium'>{title}</h1>
            <div className='flex flex-col ps-10'>
                {
                    contents.map((content, index) => {
                        return (
                            <RedirectTexts
                                key={index}
                                to={content.to}
                                name={content.name}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}

function RedirectTexts({ to, name }) {
    return (
        <NavLink
            className="my-1"
            to={to}>
            Go to "<span className='text-lgu-green font-medium'>{name}</span>" Admin View
        </NavLink>
    )
}
