import React from 'react'
import { useLocation } from 'react-router-dom'
const Back = ({title}) => {
    const location = useLocation();
    return (
        <>
            <section className="back">
                <div className="container container-back">
                <h3>Home /{location.pathname.split("/")[1]}</h3>
                <h1>{title}</h1>
                </div>
            </section>
        </>
    )
}
export default Back