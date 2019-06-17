import React from 'react';
import MyName from './MyName/MyName'
import Introduction from './Introduction/Introduction'
import Navigation from './Navigation/Navigation'

export default function AboutMe() {
    return (
        <div className="about-me">
            <MyName />
            <Introduction />
            <Navigation />
        </div>
    )
}