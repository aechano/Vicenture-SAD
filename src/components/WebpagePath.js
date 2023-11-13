import React from 'react'
import { NavLink } from 'react-router-dom'

export default function WebpagePath(props) {
    /*This is an inner component of Banner.
    <WebpagePath> has the following attributes:
    props.previous (required) - This is a list of objects with the
                    attributes title and to.
                    title (required) - This is the displayed text of a breadcrumb.
                    to (optional) - This is the link of where to redirect the user
                                    when the displayed text is clicked.
    
    This component also takes children where it is the title of the current webpage.
    This component also takes additional className for the outer <div> of this component.
    */
    return (
        <div className={'flex ' + props.className}>
            {props.previous !== undefined ? 
                /*Iterate through the list and display each breadcrumb*/
                props.previous.map((page, index) => (
                    page.to !== "" && page.to != undefined ?
                        /*if breadcrumb has redirect, use NavLink to display*/
                        <NavLink key={index} to={page.to}>{page.title} /&nbsp;</NavLink>
                        :
                        /*if breadcrumb has no redirect, use <p> tag to display*/
                        <p key={index}>{page.title} /&nbsp; </p>
                ))
                :
                null}
            <p>{props.children}</p>
        </div >
    )
}
