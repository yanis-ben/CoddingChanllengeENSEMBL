import React from 'react'

export const Header:React.FC = () => {
    return (
        <div className="header">
            <div className="HeaderTop">

                <div className="demoStreaming">
                    <h1>DEMO Streaming</h1>
                </div>

                <div className="connexion">
                    <p>Log in</p>
                    <button className="button">Start your free trial</button>
                </div>
            </div>

            <div className="popularTitles">
                Popular Titles
            </div>
            
        </div>
    )
}
