import React from 'react';
import styled from 'styled-components';

const DocsBox = styled.div`
    position: relative;
    margin: 1rem;
`
const DocsLink = styled.div`
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
const DocsBGMobile = styled.span`
    position: absolute;
    z-index: -1;
    display: block;
    -webkit-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
    top: -21px;
    bottom: auto;
    left: -15px;
    right: auto;
`
const DocsBG = styled.span`
    display: none;
`
const DocsHeading = styled.h4`
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
const DocsText = styled.p`
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

class Docs extends React.Component {
    render() {
        return (
            <DocsBox className="docs-box">
                <DocsLink className="docs-link">
                    <DocsHeading className="docs-heading">
                        Docs
                    </DocsHeading>
                    <DocsText className="docs-text">
                        Full reference of our APIs
                    </DocsText>
                    <LearnMore>
                        Learn more
                    </LearnMore>
                </DocsLink>
                <DocsBGMobile className="docs-bg-mobile">
                    <svg width="252" height="120" viewBox="0 0 252 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M247.24 19H246a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M239.3 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M231.37 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.11.13.2l-4.3 7.44a.28.28 0 0 1-.25.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M223.44 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.11.13.2l-4.3 7.44a.28.28 0 0 1-.25.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M215.51 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M207.58 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14H212c.1 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M199.65 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M191.72 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M183.79 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M175.86 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M247.24 7.78H246a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M239.3 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M231.37 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.12.13.2l-4.3 7.44a.28.28 0 0 1-.25.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M223.44 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.12.13.2l-4.3 7.44a.28.28 0 0 1-.25.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M215.51 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M207.58 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14H212c.1 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M199.65 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M191.72 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M183.79 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M175.86 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M9.31 119.96H8.07a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M1.38 119.96H.14a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14H5.8c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M9.31 108.74H8.07a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M1.38 108.74H.14a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14H5.8c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M9.31 97.52H8.07a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.12.12.21l-4.3 7.44a.28.28 0 0 1-.24.13z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M1.38 97.52H.14a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14H5.8c.1 0 .17.12.12.21l-4.3 7.44a.28.28 0 0 1-.24.13z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M9.31 86.3H8.07a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.12.12.21l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M1.38 86.3H.14a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14H5.8c.1 0 .17.12.12.21l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M9.31 75.09H8.07a.14.14 0 0 1-.12-.21l4.3-7.43a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M1.38 75.09H.14a.14.14 0 0 1-.12-.21l4.3-7.43a.28.28 0 0 1 .24-.14H5.8c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M9.31 63.87H8.07a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M1.38 63.87H.14a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14H5.8c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M9.31 52.65H8.07a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M1.38 52.65H.14a.14.14 0 0 1-.12-.2L4.32 45a.28.28 0 0 1 .24-.14H5.8c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M9.31 41.44H8.07a.14.14 0 0 1-.12-.21l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.12.12.21l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M1.38 41.44H.14a.14.14 0 0 1-.12-.21l4.3-7.44a.28.28 0 0 1 .24-.14H5.8c.1 0 .17.12.12.21l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M9.31 30.22H8.07a.14.14 0 0 1-.12-.21l4.3-7.44a.28.28 0 0 1 .24-.13h1.24c.1 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M1.38 30.22H.14A.14.14 0 0 1 .02 30l4.3-7.44a.28.28 0 0 1 .24-.13H5.8c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M167.93 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M160 19h-1.25a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .25-.14h1.23c.11 0 .18.11.13.2l-4.3 7.44a.28.28 0 0 1-.25.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M152.07 19h-1.25a.14.14 0 0 1-.11-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M144.14 19h-1.24a.14.14 0 0 1-.13-.2l4.3-7.44a.28.28 0 0 1 .25-.14h1.24c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M136.2 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M128.27 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M120.34 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M112.41 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M104.48 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M96.55 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M88.62 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M80.69 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M72.76 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.11.12.2L73 18.87a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M64.83 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M56.9 19h-1.25a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M48.96 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M41.03 19H39.8a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M33.1 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.11.13.2l-4.3 7.44a.28.28 0 0 1-.25.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M25.17 19h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M17.24 19H16a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M9.31 19H8.07a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M1.38 19H.14a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14H5.8c.1 0 .17.11.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M167.93 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M160 7.78h-1.25a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .25-.14h1.23c.11 0 .18.12.13.2l-4.3 7.44a.28.28 0 0 1-.25.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M152.07 7.78h-1.25a.14.14 0 0 1-.11-.2L155 .13a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M144.14 7.78h-1.24a.14.14 0 0 1-.13-.2l4.3-7.44a.28.28 0 0 1 .25-.14h1.24c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M136.2 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M128.27 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M120.34 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M112.41 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M104.48 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M96.55 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M88.62 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44A.28.28 0 0 1 91.8 0h1.24c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M80.69 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M72.76 7.78h-1.24a.14.14 0 0 1-.12-.2L75.7.13a.28.28 0 0 1 .24-.14h1.24c.1 0 .17.12.12.2L73 7.65a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M64.83 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44A.28.28 0 0 1 68 0h1.24c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M56.9 7.78h-1.25a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M48.96 7.78h-1.24a.14.14 0 0 1-.12-.2L51.9.13a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M41.03 7.78H39.8a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M33.1 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.11 0 .18.12.13.2l-4.3 7.44a.28.28 0 0 1-.25.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M25.17 7.78h-1.24a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M17.24 7.78H16a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M9.31 7.78H8.07a.14.14 0 0 1-.12-.2l4.3-7.44a.28.28 0 0 1 .24-.14h1.24c.1 0 .18.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M1.38 7.78H.14a.14.14 0 0 1-.12-.2L4.32.13A.28.28 0 0 1 4.56 0H5.8c.1 0 .17.12.12.2l-4.3 7.44a.28.28 0 0 1-.24.14z"
                              fill="#300D4F"></path>
                    </svg>
                </DocsBGMobile>
                <DocsBG className="docs-bg">
                    <svg width="357" height="171" viewBox="0 0 357 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M349.69 27.37h-1.76a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .18.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M338.47 27.37h-1.75a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M327.26 27.37h-1.76a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M316.04 27.37h-1.75a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M304.83 27.37h-1.75a.2.2 0 0 1-.18-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M293.62 27.37h-1.76a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .18.3l-6.09 10.53a.4.4 0 0 1-.33.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M282.4 27.37h-1.75a.2.2 0 0 1-.17-.3l6.07-10.52a.4.4 0 0 1 .35-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M271.19 27.37h-1.76a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M259.97 27.37h-1.75a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M248.76 27.37H247a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M349.69 11.48h-1.76a.2.2 0 0 1-.17-.3L353.84.66a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .18.3l-6.08 10.54a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M338.47 11.48h-1.75a.2.2 0 0 1-.17-.3L342.63.66a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.54a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M327.26 11.48h-1.76a.2.2 0 0 1-.17-.3L331.41.66a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3L327.6 11.3a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M316.04 11.48h-1.75a.2.2 0 0 1-.17-.3L320.2.66a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.54a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M304.83 11.48h-1.75a.2.2 0 0 1-.18-.3L308.98.66a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.54a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M293.62 11.48h-1.76a.2.2 0 0 1-.17-.3L297.77.66a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .18.3l-6.09 10.54a.4.4 0 0 1-.33.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M282.4 11.48h-1.75a.2.2 0 0 1-.17-.3L286.55.66a.4.4 0 0 1 .35-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.54a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M271.19 11.48h-1.76a.2.2 0 0 1-.17-.3L275.34.66a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.54a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M259.97 11.48h-1.75a.2.2 0 0 1-.17-.3L264.13.66a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.54a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M248.76 11.48H247a.2.2 0 0 1-.17-.3L252.91.66a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3L249.1 11.3a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M13.26 170.4H11.5a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3L13.6 170.2a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M2.04 170.4H.3a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3L2.38 170.2a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M13.26 154.5H11.5a.2.2 0 0 1-.17-.29l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3L13.6 154.3a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M2.04 154.5H.3a.2.2 0 0 1-.17-.29l6.08-10.53a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3L2.38 154.3a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M13.26 138.62H11.5a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M2.04 138.62H.3a.2.2 0 0 1-.17-.3L6.2 127.8a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M13.26 122.72H11.5a.2.2 0 0 1-.17-.29l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M2.04 122.72H.3a.2.2 0 0 1-.17-.29L6.2 111.9a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M13.26 106.83H11.5a.2.2 0 0 1-.17-.3L17.41 96a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.54a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M2.04 106.83H.3a.2.2 0 0 1-.17-.3L6.2 96a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.54a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M13.26 90.94H11.5a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3L13.6 90.74a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M2.04 90.94H.3a.2.2 0 0 1-.17-.3L6.2 80.12a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3L2.38 90.74a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M13.26 75.05H11.5a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3L13.6 74.85a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M2.04 75.05H.3a.2.2 0 0 1-.17-.3L6.2 64.22a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3L2.38 74.85a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M13.26 59.16H11.5a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3L13.6 58.96a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M2.04 59.16H.3a.2.2 0 0 1-.17-.3L6.2 48.33a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3L2.38 58.96a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M13.26 43.27H11.5a.2.2 0 0 1-.17-.3l6.08-10.53a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3L13.6 43.07a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M2.04 43.27H.3a.2.2 0 0 1-.17-.3L6.2 32.44a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3L2.38 43.07a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M237.54 27.37h-1.75a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M226.33 27.37h-1.76a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M215.12 27.37h-1.76a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.07 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M203.9 27.37h-1.75a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M192.69 27.37h-1.76a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M181.47 27.37h-1.75a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M170.26 27.37h-1.76a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M159.04 27.37h-1.75a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M147.83 27.37h-1.76a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M136.62 27.37h-1.76a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.07 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M125.4 27.37h-1.75a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M114.19 27.37h-1.76a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M102.97 27.37h-1.75a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M91.76 27.37H90a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3L92.1 27.17a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M80.54 27.37H78.8a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M69.33 27.37h-1.75a.2.2 0 0 1-.18-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M58.11 27.37h-1.75a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.07 10.53a.4.4 0 0 1-.35.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M46.9 27.37h-1.75a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M35.69 27.37h-1.76a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M24.47 27.37h-1.75a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.53a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M13.26 27.37H11.5a.2.2 0 0 1-.17-.3l6.08-10.52a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3L13.6 27.17a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M2.04 27.37H.3a.2.2 0 0 1-.17-.3L6.2 16.56a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3L2.38 27.17a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M237.54 11.48h-1.75a.2.2 0 0 1-.17-.3L241.7.66a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.54a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M226.33 11.48h-1.76a.2.2 0 0 1-.17-.3L230.48.66a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.54a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M215.12 11.48h-1.76a.2.2 0 0 1-.17-.3L219.27.66a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.07 10.54a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M203.9 11.48h-1.75a.2.2 0 0 1-.17-.3L208.06.66a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.54a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M192.69 11.48h-1.76a.2.2 0 0 1-.17-.3L196.84.66a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.54a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M181.47 11.48h-1.75a.2.2 0 0 1-.17-.3L185.63.66a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.54a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M170.26 11.48h-1.76a.2.2 0 0 1-.17-.3L174.41.66a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3L170.6 11.3a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M159.04 11.48h-1.75a.2.2 0 0 1-.17-.3L163.2.66a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.54a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M147.83 11.48h-1.76a.2.2 0 0 1-.17-.3L151.98.66a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.54a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M136.62 11.48h-1.76a.2.2 0 0 1-.17-.3L140.77.66a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.07 10.54a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M125.4 11.48h-1.75a.2.2 0 0 1-.17-.3L129.56.66a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.54a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M114.19 11.48h-1.76a.2.2 0 0 1-.17-.3L118.34.66a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3l-6.08 10.54a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M102.97 11.48h-1.75a.2.2 0 0 1-.17-.3L107.13.66a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3l-6.08 10.54a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M91.76 11.48H90a.2.2 0 0 1-.17-.3L95.91.66a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3L92.1 11.3a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M80.54 11.48H78.8a.2.2 0 0 1-.17-.3L84.7.66a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3L80.88 11.3a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M69.33 11.48h-1.75a.2.2 0 0 1-.18-.3L73.48.66a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3L69.67 11.3a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M58.11 11.48h-1.75a.2.2 0 0 1-.17-.3L62.27.66a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3L58.46 11.3a.4.4 0 0 1-.35.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M46.9 11.48h-1.75a.2.2 0 0 1-.17-.3L51.06.66a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3L47.24 11.3a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M35.69 11.48h-1.76a.2.2 0 0 1-.17-.3L39.84.66a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3L36.03 11.3a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M24.47 11.48h-1.75a.2.2 0 0 1-.17-.3L28.63.66a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3L24.81 11.3a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M13.26 11.48H11.5a.2.2 0 0 1-.17-.3L17.41.66a.4.4 0 0 1 .34-.2h1.76a.2.2 0 0 1 .17.3L13.6 11.3a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M2.04 11.48H.3a.2.2 0 0 1-.17-.3L6.2.66a.4.4 0 0 1 .34-.2h1.75a.2.2 0 0 1 .17.3L2.38 11.3a.4.4 0 0 1-.34.2z"
                              fill="#300D4F"></path>
                    </svg>
                </DocsBG>
                <style jsx>{`
                     @media (min-width: 400px){
                        .docs-heading {
                            font-size: 23px;
                            -webkit-letter-spacing: 0.5px;
                            -moz-letter-spacing: 0.5px;
                            -ms-letter-spacing: 0.5px;
                            letter-spacing: 0.5px;
                        }
                        .docs-text {
                            font-size: 16px;
                            -webkit-letter-spacing: 0px;
                            -moz-letter-spacing: 0px;
                            -ms-letter-spacing: 0px;
                            letter-spacing: 0px;
                        }
                    }
                    @media (min-width: 760px){
                        .docs-link {
                            padding: 2.375rem 4.5rem;
                            min-width: 360px;
                        }
                        .docs-bg-mobile {
                            display: none;
                        }
                        .docs-bg {
                                position: absolute;
                                z-index: -1;
                                -webkit-transition: all 0.2s ease-out;
                                transition: all 0.2s ease-out;
                                display: block;
                                top: -30px;
                                bottom: auto;
                                left: -22px;
                            }
                        }
                        .docs-heading {
                             font-size: 25.875px;
                            -webkit-letter-spacing: 0.5px;
                            -moz-letter-spacing: 0.5px;
                            -ms-letter-spacing: 0.5px;
                            letter-spacing: 0.5px;
                        }
                        .docs-text {
                            font-size: 16px;
                            -webkit-letter-spacing: 0px;
                            -moz-letter-spacing: 0px;
                            -ms-letter-spacing: 0px;
                            letter-spacing: 0px;
                        }
                    }
                    @media (min-width: 960px){
                        .testinomial-title {
                            font-size: 29.118px;
                            letter-spacing: 0px;
                        }
                        .docs-heading {
                             font-size: 29.118000000000002px;
                            -webkit-letter-spacing: 0.5px;
                            -moz-letter-spacing: 0.5px;
                            -ms-letter-spacing: 0.5px;
                            letter-spacing: 0.5px;
                        }                        
                        .docs-text {
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
                        .docs-heading {
                             font-size: 32.751999999999995px;
                            -webkit-letter-spacing: 0.5px;
                            -moz-letter-spacing: 0.5px;
                            -ms-letter-spacing: 0.5px;
                            letter-spacing: 0.5px;
                        }
                        .docs-text {
                            font-size: 16px;
                            -webkit-letter-spacing: 0px;
                            -moz-letter-spacing: 0px;
                            -ms-letter-spacing: 0px;
                            letter-spacing: 0px;
                        }
                    }
                `}</style>
            </DocsBox>
        );
    }
}

export default Docs;