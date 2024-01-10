import React from 'react'

export default function MyFooter() {
    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="text-center p-3 w-100" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2022 Copyright:
                <a className="text-dark" href="#title"> Epibooks.com</a>
            </div>
        </footer>
    )
}
