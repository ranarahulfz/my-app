import React from 'react';
import styled from 'styled-components';

const TutorialsBox = styled.div`
    position: relative;
    margin: 1rem;
`
const TutorialsLink = styled.div`
    display: inline-block;
    width: 100%;
    -webkit-text-decoration: none;
    text-decoration: none;
    background-color: white;
    border-radius: 2px;
    z-index: 2;
    padding: 0.75rem 2.5rem;
    -webkit-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
`
const TutorialsBGMobile = styled.span`
    position: absolute;
    z-index: -1;
    display: block;
    -webkit-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
    top: auto;
    bottom: -21px;
    left: auto;
    right: -15px;
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
`
const TutorialsBG = styled.span`
    display: none;
`
const TutorialsHeading = styled.h4`
    font-family: italian-plate,sans-serif;
    font-weight: 600;
    line-height: 1.1;
    font-size: 23px;
    -webkit-letter-spacing: 0.5px;
    -moz-letter-spacing: 0.5px;
    -ms-letter-spacing: 0.5px;
    letter-spacing: 0.5px;
    color: #300D4F;
    margin-bottom: 1rem;
    font-family: italian-plate,sans-serif;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 0.375rem;
    text-transform: uppercase;
`
const TutorialsText = styled.p`
    font-family: maison-neue,sans-serif;
    font-weight: 300;
    line-height: 1.5;
    font-size: 16px;
    -webkit-letter-spacing: 0px;
    -moz-letter-spacing: 0px;
    -ms-letter-spacing: 0px;
    letter-spacing: 0px;
    color: #300D4F;
    margin-bottom: 1rem;
    white-space: nowrap;
`
const LearnMore = styled.button`
    font-family: maison-neue,sans-serif;
    font-weight: 700;
    line-height: 1;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    border: none;
    outline: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    -webkit-align-self: flex-start;
    -ms-flex-item-align: start;
    align-self: flex-start;
    padding: 1rem;
    border-radius: 2px;
    font-size: 1rem;
    -webkit-letter-spacing: 0;
    -moz-letter-spacing: 0;
    -ms-letter-spacing: 0;
    letter-spacing: 0;
    -webkit-transition: box-shadow .2s ease,background-color .2s ease,-webkit-transform .2s ease;
    -webkit-transition: box-shadow .2s ease,background-color .2s ease,transform .2s ease;
    transition: box-shadow .2s ease,background-color .2s ease,transform .2s ease;
    position: relative;
    line-height: 24px;
    color: #300D4F;
    background-color: transparent;
    padding: 0;
    margin: 0 8px 6px;
    border-radius: 0;
    box-shadow: none;
    :before {
        content: " ";
        position: absolute;
        left: 0;
        right: 100%;
        bottom: -2px;
        z-index: 5;
        background: #300D4F;
        height: 3px;
        -webkit-transition-property: right;
        transition-property: right;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }
    :after {
        content: " ";
        position: absolute;
        left: 0;
        right: 0;
        z-index: 4;
        bottom: -2px;
        background: #C223CE;
        height: 3px;
    }
`

class Tutorials extends React.Component{
    render() {
        return(
            <TutorialsBox className="tutorials-box">
                <TutorialsLink className="tutorials-link">
                    <TutorialsHeading className="tutorials-heading">
                        Tutorials
                    </TutorialsHeading>
                    <TutorialsText className="tutorials-text">
                        Tutorials to help you get started
                    </TutorialsText>
                    <LearnMore>
                        Learn more
                    </LearnMore>
                </TutorialsLink>
                <TutorialsBGMobile className="tutorials-bg-mobile">
                    <svg width="252" height="120" viewBox="0 0 252 120" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M247.24 19H246a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M239.3 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M231.37 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.11.13.2l-4.3 7.44a.28.28 0 0 1-.25.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M223.44 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.11.13.2l-4.3 7.44a.28.28 0 0 1-.25.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M215.51 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M207.58 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14H212c.1 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M199.65 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M191.72 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M183.79 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M175.86 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M247.24 7.78H246a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M239.3 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M231.37 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.12.13.2l-4.3 7.44a.28.28 0 0 1-.25.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M223.44 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.12.13.2l-4.3 7.44a.28.28 0 0 1-.25.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M215.51 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M207.58 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14H212c.1 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M199.65 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M191.72 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M183.79 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M175.86 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.31 119.96H8.07a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.38 119.96H.14a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14H5.8c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.31 108.74H8.07a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.38 108.74H.14a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14H5.8c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.31 97.52H8.07a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.12.12.21l-4.3 7.44a.28.28 0 0 1-.24.13z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.38 97.52H.14a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14H5.8c.1 0 .17.12.12.21l-4.3 7.44a.28.28 0 0 1-.24.13z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.31 86.3H8.07a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.12.12.21l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.38 86.3H.14a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14H5.8c.1 0 .17.12.12.21l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.31 75.09H8.07a.14.14 0 0 1-.12-.21l4.3-7.43a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.38 75.09H.14a.14.14 0 0 1-.12-.21l4.3-7.43a.28.28 0 0 1 .24-.14H5.8c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.31 63.87H8.07a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.38 63.87H.14a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14H5.8c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.31 52.65H8.07a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.38 52.65H.14a.14.14 0 0 1-.12-.2L4.32 45a.28.28 0 0 1 .24-.14H5.8c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.31 41.44H8.07a.14.14 0 0 1-.12-.21l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.12.12.21l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.38 41.44H.14a.14.14 0 0 1-.12-.21l4.3-7.44a.28.28 0 0 1 .24-.14H5.8c.1 0 .17.12.12.21l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.31 30.22H8.07a.14.14 0 0 1-.12-.21l4.3-7.44a.28.28 0 0 1 .24-.13h1.24c.1 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.38 30.22H.14A.14.14 0 0 1 .02 30l4.3-7.44a.28.28 0 0 1 .24-.13H5.8c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M167.93 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M160 19h-1.25a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .25-.14h1.23c.11 0 .18.11.13.2l-4.3 7.44a.28.28 0 0 1-.25.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M152.07 19h-1.25a.14.14 0 0 1-.11-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M144.14 19h-1.24a.14.14 0 0 1-.13-.2l4.3-7.44a.28.28 0 0 1 .25-.14h1.24c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M136.2 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M128.27 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M120.34 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M112.41 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M104.48 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M96.55 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M88.62 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M80.69 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M72.76 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.11.12.2L73 18.87a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M64.83 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M56.9 19h-1.25a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M48.96 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M41.03 19H39.8a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33.1 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.11.13.2l-4.3 7.44a.28.28 0 0 1-.25.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M25.17 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.24 19H16a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.31 19H8.07a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.38 19H.14a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14H5.8c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M167.93 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M160 7.78h-1.25a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .25-.14h1.23c.11 0 .18.12.13.2l-4.3 7.44a.28.28 0 0 1-.25.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M152.07 7.78h-1.25a.14.14 0 0 1-.11-.2L155 .13a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M144.14 7.78h-1.24a.14.14 0 0 1-.13-.2l4.3-7.44a.28.28 0 0 1 .25-.14h1.24c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M136.2 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M128.27 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M120.34 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M112.41 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M104.48 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M96.55 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M88.62 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44A.28.28 0 0 1 91.8 0h1.24c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M80.69 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M72.76 7.78h-1.24a.14.14 0 0 1-.12-.2L75.7.13a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.12.12.2L73 7.65a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M64.83 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44A.28.28 0 0 1 68 0h1.24c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M56.9 7.78h-1.25a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M48.96 7.78h-1.24a.14.14 0 0 1-.12-.2L51.9.13a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M41.03 7.78H39.8a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33.1 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.12.13.2l-4.3 7.44a.28.28 0 0 1-.25.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M25.17 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.24 7.78H16a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.31 7.78H8.07a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.38 7.78H.14a.14.14 0 0 1-.12-.2L4.32.13A.28.28 0 0 1 4.56 0H5.8c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z" fill="#300D4F"></path></svg>
                </TutorialsBGMobile>
                <TutorialsBG className="tutorials-bg">
                    <svg width="357" height="171" viewBox="0 0 357 171" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M350.08 170.46h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M338.86 170.46h-1.75a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M327.65 170.46h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M316.43 170.46h-1.75a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M305.22 170.46h-1.76a.2.2 0 0 1-.16-.3l6.07-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M294 170.46h-1.75a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .18.3l-6.08 10.53a.4.4 0 0 1-.35.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M282.8 170.46h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M271.58 170.46h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M260.36 170.46h-1.75a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M249.15 170.46h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M350.08 154.57h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M338.86 154.57h-1.75a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M327.65 154.57h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M316.43 154.57h-1.75a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M305.22 154.57h-1.76a.2.2 0 0 1-.16-.3l6.07-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M294 154.57h-1.75a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .18.3l-6.08 10.53a.4.4 0 0 1-.35.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M282.8 154.57h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M271.58 154.57h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M260.36 154.57h-1.75a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M249.15 154.57h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M237.93 170.46h-1.75a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.07 10.53a.4.4 0 0 1-.35.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M226.72 170.46h-1.75a.2.2 0 0 1-.18-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M215.5 170.46h-1.75a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .18.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M204.3 170.46h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M193.08 170.46h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M181.86 170.46h-1.75a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M170.65 170.46h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M159.43 170.46h-1.75a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.07 10.53a.4.4 0 0 1-.35.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M148.22 170.46h-1.75a.2.2 0 0 1-.18-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M137 170.46h-1.75a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .18.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M125.8 170.46h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M114.58 170.46h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M103.36 170.46h-1.75a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M92.15 170.46h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M80.93 170.46h-1.75a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.07 10.53a.4.4 0 0 1-.35.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M69.72 170.46h-1.75a.2.2 0 0 1-.17-.3l6.07-10.53a.4.4 0 0 1 .35-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M58.5 170.46h-1.75a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M47.3 170.46h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M36.08 170.46h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24.86 170.46h-1.75a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.65 170.46h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.43 170.46H.68a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.07 10.53a.4.4 0 0 1-.35.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M237.93 154.57h-1.75a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.07 10.53a.4.4 0 0 1-.35.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M226.72 154.57h-1.75a.2.2 0 0 1-.18-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M215.5 154.57h-1.75a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .18.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M204.3 154.57h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M193.08 154.57h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M181.86 154.57h-1.75a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M170.65 154.57h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M159.43 154.57h-1.75a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.07 10.53a.4.4 0 0 1-.35.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M148.22 154.57h-1.75a.2.2 0 0 1-.18-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M137 154.57h-1.75a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .18.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M125.8 154.57h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M114.58 154.57h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M103.36 154.57h-1.75a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M92.15 154.57h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M80.93 154.57h-1.75a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.07 10.53a.4.4 0 0 1-.35.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M69.72 154.57h-1.75a.2.2 0 0 1-.17-.3l6.07-10.53a.4.4 0 0 1 .35-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M58.5 154.57h-1.75a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M47.3 154.57h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M36.08 154.57h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24.86 154.57h-1.75a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.65 154.57h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.43 154.57H.68a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.07 10.53a.4.4 0 0 1-.35.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.65 138.67h-1.76a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.43 138.67H.68a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.07 10.53a.4.4 0 0 1-.35.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.65 122.78h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.43 122.78H.68a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.07 10.53a.4.4 0 0 1-.35.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.65 106.89h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.43 106.89H.68a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3L2.78 106.7a.4.4 0 0 1-.35.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.65 91h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3L13.99 90.8a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.43 91H.68a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3L2.78 90.8a.4.4 0 0 1-.35.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.65 75.1h-1.76a.2.2 0 0 1-.17-.29l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3L13.99 74.9a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.43 75.1H.68a.2.2 0 0 1-.17-.29l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3L2.78 74.9a.4.4 0 0 1-.35.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.65 59.22h-1.76a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.43 59.22H.68a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3L2.78 59.02a.4.4 0 0 1-.35.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.65 43.32h-1.76a.2.2 0 0 1-.17-.3L17.8 32.5a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.43 43.32H.68a.2.2 0 0 1-.17-.3L6.59 32.5a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3L2.78 43.12a.4.4 0 0 1-.35.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.65 27.43h-1.76a.2.2 0 0 1-.17-.3L17.8 16.6a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.43 27.43H.68a.2.2 0 0 1-.17-.3L6.59 16.6a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3L2.78 27.23a.4.4 0 0 1-.35.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.65 11.54h-1.76a.2.2 0 0 1-.17-.3L17.8.71a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z" fill="#300D4F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.43 11.54H.68a.2.2 0 0 1-.17-.3L6.59.71a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3L2.78 11.34a.4.4 0 0 1-.35.2z" fill="#300D4F"></path></svg>
                </TutorialsBG>
                <style jsx>{`
                     @media (min-width: 400px){
                        .tutorials-heading {
                            font-size: 23px;
                            -webkit-letter-spacing: 0.5px;
                            -moz-letter-spacing: 0.5px;
                            -ms-letter-spacing: 0.5px;
                            letter-spacing: 0.5px;
                        }
                        .tutorials-text {
                            font-size: 16px;
                            -webkit-letter-spacing: 0px;
                            -moz-letter-spacing: 0px;
                            -ms-letter-spacing: 0px;
                            letter-spacing: 0px;
                        }
                    }
                    @media (min-width: 760px){
                        .tutorials-link {
                            padding: 2.375rem 4.5rem;
                            min-width: 360px;
                        }
                        .tutorials-bg-mobile {
                            display: none;
                        }
                        .tutorials-bg {
                                position: absolute;        
                                z-index: -1;
                                -webkit-transition: all 0.2s ease-out;
                                transition: all 0.2s ease-out;
                                display: block;
                                top: auto;
                                bottom: -35px;
                                left: -22px;                           
                        }
                        .tutorials-heading {
                             font-size: 25.875px;
                            -webkit-letter-spacing: 0.5px;
                            -moz-letter-spacing: 0.5px;
                            -ms-letter-spacing: 0.5px;
                            letter-spacing: 0.5px;
                        }
                        .tutorials-text {
                            font-size: 16px;
                            -webkit-letter-spacing: 0px;
                            -moz-letter-spacing: 0px;
                            -ms-letter-spacing: 0px;
                            letter-spacing: 0px;
                        }
                    }
                    @media (min-width: 960px){
                        .testinomials-title {
                            font-size: 29.118px;
                            letter-spacing: 0px;
                        }
                        .tutorials-heading {
                             font-size: 29.118000000000002px;
                            -webkit-letter-spacing: 0.5px;
                            -moz-letter-spacing: 0.5px;
                            -ms-letter-spacing: 0.5px;
                            letter-spacing: 0.5px;
                        }                        
                        .tutorials-text {
                            font-size: 16px;
                            -webkit-letter-spacing: 0px;
                            -moz-letter-spacing: 0px;
                            -ms-letter-spacing: 0px;
                            letter-spacing: 0px;                    
                        }
                    }
                    @media (min-width: 1200px){
                       .testinomial-title {
                            font-size: 32.752px;
                            letter-spacing: 0px;
                        }
                        .tutorials-heading {
                             font-size: 32.751999999999995px;
                            -webkit-letter-spacing: 0.5px;
                            -moz-letter-spacing: 0.5px;
                            -ms-letter-spacing: 0.5px;
                            letter-spacing: 0.5px;
                        }
                        .tutorials-text {
                            font-size: 16px;
                            -webkit-letter-spacing: 0px;
                            -moz-letter-spacing: 0px;
                            -ms-letter-spacing: 0px;
                            letter-spacing: 0px;
                        }
                    }
                `}</style>
            </TutorialsBox>
        );
    }
}

export default Tutorials;