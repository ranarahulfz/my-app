import React from 'react';
import styled from 'styled-components';

const ChatKitBox = styled.div`
    position: relative;
    width: 100%;
    color: white;
    background: rgb(48, 13, 79) none repeat scroll 0% 0%;
    padding: 1.5rem 1rem 1rem;
    text-align: center;
    margin: 1.25rem 0px;
    border-radius: 2px;
`
const ChatKitMobileBackGround = styled.span`
    position: absolute;
    display: block;
    z-index: 1;
    top: -12px;
    left: -12px;
`
const ChatKitBackGround = styled.span`
    position: absolute;
    display: none;
`
const ChatKitLink = styled.a`
    height: 30px;
    margin-bottom: 1rem;
    display: inline-block;
`
const ChatKitText = styled.p`
    font-family: maison-neue, sans-serif;
    font-weight: 300;
    line-height: 1.6;
    font-size: 16px;
    color: rgb(255, 255, 255);
    margin-bottom: 1rem;
`
const LearnMoreLink = styled.a`
    font-family: maison-neue, sans-serif;
    font-weight: 700;
    -moz-appearance: none;
    cursor: pointer;
    border: medium none;
    outline: currentcolor none medium;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    font-size: 1rem;
    letter-spacing: 0px;
    transition: box-shadow 0.2s ease 0s, background-color 0.2s ease 0s, transform 0.2s ease 0s;
    position: relative;
    line-height: 24px;
    color: white;
    background-color: transparent;
    padding: 0px;
    border-radius: 0px;
    box-shadow: none;
    align-self: center;
    margin: 0px;
   :before {
        content: " ";
        position: absolute;
        left: 0px;
        right: 100%;
        bottom: -2px;
        z-index: 5;
        background: rgb(48, 13, 79) none repeat scroll 0% 0%;
        height: 3px;
        transition-property: right;
        transition-duration: 0.2s;
        transition-timing-function: ease-out;
   }
   :after {
        content: " ";
        position: absolute;
        left: 0px;
        right: 0px;
        z-index: 4;
        bottom: -2px;
        background: white none repeat scroll 0% 0%;
        height: 3px;
   }
`

class ChatKit extends React.Component {
    render() {
        return(
            <ChatKitBox className="chatkit-box">
                <ChatKitMobileBackGround className="chatkit-mobile-background">
                    <svg width="95" height="24" viewBox="0 0 95 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M77.04 11.55a8.9 8.9 0 0 1 8.86-8.93c4.89 0 8.86 4 8.86 8.93a8.9 8.9 0 0 1-8.86 8.93c-4.9 0-8.86-4-8.86-8.93z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 11.55A11.5 11.5 0 0 1 11.46 0a11.5 11.5 0 0 1 11.46 11.55A11.5 11.5 0 0 1 11.46 23.1 11.5 11.5 0 0 1 0 11.55z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M51.36 11.55c0-5.41 4.35-9.8 9.73-9.8a9.77 9.77 0 0 1 9.72 9.8c0 5.42-4.35 9.8-9.72 9.8a9.77 9.77 0 0 1-9.73-9.8z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.68 11.55c0-5.9 4.74-10.68 10.6-10.68 5.84 0 10.59 4.78 10.59 10.68 0 5.9-4.75 10.68-10.6 10.68s-10.59-4.78-10.59-10.68z" fill="#FF8473"></path>
                    </svg>
                </ChatKitMobileBackGround>
                <ChatKitBackGround className="chatkit-background">
                    <svg width="349" height="298" viewBox="0 0 349 298" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.19 7.36a1.6 1.6 0 1 1-3.19 0 1.6 1.6 0 0 1 3.19 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.35 7.36a1.9 1.9 0 1 1-3.8 0 1.9 1.9 0 0 1 3.8 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.5 7.36a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M57.66 7.36a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M75.82 7.36a2.8 2.8 0 1 1-5.62 0 2.8 2.8 0 0 1 5.62 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M93.98 7.36a3.11 3.11 0 1 1-6.23 0 3.11 3.11 0 0 1 6.23 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M112.13 7.36a3.41 3.41 0 1 1-6.83 0 3.41 3.41 0 0 1 6.83 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M130.29 7.36a3.72 3.72 0 1 1-7.44 0 3.72 3.72 0 0 1 7.44 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M148.45 7.36a4.02 4.02 0 1 1-8.04 0 4.02 4.02 0 0 1 8.04 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M166.6 7.36a4.32 4.32 0 1 1-8.64 0 4.32 4.32 0 0 1 8.64 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M184.76 7.36a4.63 4.63 0 1 1-9.26 0 4.63 4.63 0 0 1 9.26 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M202.91 7.36a4.93 4.93 0 1 1-9.85 0 4.93 4.93 0 0 1 9.85 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M221.07 7.36a5.23 5.23 0 1 1-10.46 0 5.23 5.23 0 0 1 10.46 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M239.23 7.36a5.53 5.53 0 1 1-11.07 0 5.53 5.53 0 0 1 11.07 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M257.38 7.36a5.84 5.84 0 1 1-11.67 0 5.84 5.84 0 0 1 11.67 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M275.54 7.36a6.14 6.14 0 1 1-12.28 0 6.14 6.14 0 0 1 12.28 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M293.7 7.36a6.44 6.44 0 1 1-12.9 0 6.44 6.44 0 0 1 12.9 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M311.86 7.36a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M330.01 7.36a7.05 7.05 0 1 1-14.1 0 7.05 7.05 0 0 1 14.1 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M348.17 7.36a7.35 7.35 0 1 1-14.7 0 7.35 7.35 0 0 1 14.7 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M345.59 23.96a1.6 1.6 0 1 1 3.19 0 1.6 1.6 0 0 1-3.2 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M327.43 23.96a1.9 1.9 0 1 1 3.8 0 1.9 1.9 0 0 1-3.8 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M309.27 23.96a2.2 2.2 0 1 1 4.4 0 2.2 2.2 0 0 1-4.4 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M291.12 23.96a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M272.96 23.96a2.8 2.8 0 1 1 5.61 0 2.8 2.8 0 0 1-5.61 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M254.8 23.96a3.11 3.11 0 1 1 6.22 0 3.11 3.11 0 0 1-6.22 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M236.65 23.96a3.41 3.41 0 1 1 6.82 0 3.41 3.41 0 0 1-6.82 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M218.49 23.96a3.72 3.72 0 1 1 7.43 0 3.72 3.72 0 0 1-7.43 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M200.33 23.96a4.02 4.02 0 1 1 8.04 0 4.02 4.02 0 0 1-8.04 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M182.18 23.96a4.32 4.32 0 1 1 8.64 0 4.32 4.32 0 0 1-8.64 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M164.02 23.96a4.63 4.63 0 1 1 9.25 0 4.63 4.63 0 0 1-9.25 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M145.86 23.96a4.93 4.93 0 1 1 9.86 0 4.93 4.93 0 0 1-9.86 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M127.7 23.96a5.23 5.23 0 1 1 10.47 0 5.23 5.23 0 0 1-10.47 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M109.55 23.96a5.53 5.53 0 1 1 11.07 0 5.53 5.53 0 0 1-11.07 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M91.4 23.96a5.84 5.84 0 1 1 11.67 0 5.84 5.84 0 0 1-11.68 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M73.23 23.96a6.14 6.14 0 1 1 12.29 0 6.14 6.14 0 0 1-12.29 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M55.08 23.96a6.44 6.44 0 1 1 12.89 0 6.44 6.44 0 0 1-12.9 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M36.92 23.96a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.77 23.96a7.05 7.05 0 1 1 14.1 0 7.05 7.05 0 0 1-14.1 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M.6 23.96a7.35 7.35 0 1 1 14.71 0 7.35 7.35 0 0 1-14.7 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M330.01 40.57a7.05 7.05 0 1 1-14.1 0 7.05 7.05 0 0 1 14.1 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M348.17 40.57a7.35 7.35 0 1 1-14.7 0 7.35 7.35 0 0 1 14.7 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M345.59 57.18a1.6 1.6 0 1 1 3.19 0 1.6 1.6 0 0 1-3.2 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M327.43 57.18a1.9 1.9 0 1 1 3.8 0 1.9 1.9 0 0 1-3.8 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M330.01 73.78a7.05 7.05 0 1 1-14.1 0 7.05 7.05 0 0 1 14.1 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M348.17 73.78a7.35 7.35 0 1 1-14.7 0 7.35 7.35 0 0 1 14.7 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M345.59 90.39a1.6 1.6 0 1 1 3.19 0 1.6 1.6 0 0 1-3.2 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M327.43 90.39a1.9 1.9 0 1 1 3.8 0 1.9 1.9 0 0 1-3.8 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M330.01 107a7.05 7.05 0 1 1-14.1 0 7.05 7.05 0 0 1 14.1 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M348.17 107a7.36 7.36 0 1 1-14.71 0 7.36 7.36 0 0 1 14.71 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M345.59 123.6a1.6 1.6 0 1 1 3.19 0 1.6 1.6 0 0 1-3.2 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M327.43 123.6a1.9 1.9 0 1 1 3.8 0 1.9 1.9 0 0 1-3.8 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M330.01 140.2a7.05 7.05 0 1 1-14.1 0 7.05 7.05 0 0 1 14.1 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M348.17 140.2a7.35 7.35 0 1 1-14.7 0 7.35 7.35 0 0 1 14.7 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M345.59 156.81a1.6 1.6 0 1 1 3.19 0 1.6 1.6 0 0 1-3.2 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M327.43 156.81a1.9 1.9 0 1 1 3.8 0 1.9 1.9 0 0 1-3.8 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M330.01 173.42a7.05 7.05 0 1 1-14.1 0 7.05 7.05 0 0 1 14.1 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M348.17 173.42a7.35 7.35 0 1 1-14.7 0 7.35 7.35 0 0 1 14.7 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M345.59 190.03a1.6 1.6 0 1 1 3.19 0 1.6 1.6 0 0 1-3.2 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M327.43 190.03a1.9 1.9 0 1 1 3.8 0 1.9 1.9 0 0 1-3.8 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M330.01 206.64a7.05 7.05 0 1 1-14.1 0 7.05 7.05 0 0 1 14.1 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M348.17 206.64a7.35 7.35 0 1 1-14.71 0 7.35 7.35 0 0 1 14.71 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M345.59 223.24a1.6 1.6 0 1 1 3.19 0 1.6 1.6 0 0 1-3.2 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M327.43 223.24a1.9 1.9 0 1 1 3.8 0 1.9 1.9 0 0 1-3.8 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M330.01 239.85a7.05 7.05 0 1 1-14.1 0 7.05 7.05 0 0 1 14.1 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M348.17 239.85a7.36 7.36 0 1 1-14.71 0 7.36 7.36 0 0 1 14.71 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M345.59 256.46a1.6 1.6 0 1 1 3.19 0 1.6 1.6 0 0 1-3.2 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M327.43 256.46a1.9 1.9 0 1 1 3.8 0 1.9 1.9 0 0 1-3.8 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.19 273.06a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.35 273.06a1.9 1.9 0 1 1-3.8 0 1.9 1.9 0 0 1 3.8 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.5 273.06a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M57.66 273.06a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M75.82 273.06a2.8 2.8 0 1 1-5.62 0 2.8 2.8 0 0 1 5.62 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M93.98 273.06a3.11 3.11 0 1 1-6.22 0 3.11 3.11 0 0 1 6.22 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M112.13 273.06a3.41 3.41 0 1 1-6.83 0 3.41 3.41 0 0 1 6.83 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M130.29 273.06a3.72 3.72 0 1 1-7.44 0 3.72 3.72 0 0 1 7.44 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M148.45 273.06a4.02 4.02 0 1 1-8.04 0 4.02 4.02 0 0 1 8.04 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M166.6 273.06a4.32 4.32 0 1 1-8.64 0 4.32 4.32 0 0 1 8.64 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M184.76 273.06a4.63 4.63 0 1 1-9.26 0 4.63 4.63 0 0 1 9.26 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M202.91 273.06a4.93 4.93 0 1 1-9.85 0 4.93 4.93 0 0 1 9.85 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M221.07 273.06a5.23 5.23 0 1 1-10.46 0 5.23 5.23 0 0 1 10.46 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M239.23 273.06a5.53 5.53 0 1 1-11.07 0 5.53 5.53 0 0 1 11.07 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M257.38 273.06a5.84 5.84 0 1 1-11.67 0 5.84 5.84 0 0 1 11.67 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M275.54 273.06a6.14 6.14 0 1 1-12.28 0 6.14 6.14 0 0 1 12.28 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M293.7 273.06a6.44 6.44 0 1 1-12.9 0 6.44 6.44 0 0 1 12.9 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M311.86 273.06a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M330.01 273.06a7.05 7.05 0 1 1-14.1 0 7.05 7.05 0 0 1 14.1 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M348.17 273.06a7.35 7.35 0 1 1-14.7 0 7.35 7.35 0 0 1 14.7 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M345.59 289.67a1.6 1.6 0 1 1 3.19 0 1.6 1.6 0 0 1-3.2 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M327.43 289.67a1.9 1.9 0 1 1 3.8 0 1.9 1.9 0 0 1-3.8 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M309.27 289.67a2.2 2.2 0 1 1 4.4 0 2.2 2.2 0 0 1-4.4 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M291.12 289.67a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M272.96 289.67a2.8 2.8 0 1 1 5.61 0 2.8 2.8 0 0 1-5.61 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M254.8 289.67a3.11 3.11 0 1 1 6.22 0 3.11 3.11 0 0 1-6.22 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M236.65 289.67a3.41 3.41 0 1 1 6.82 0 3.41 3.41 0 0 1-6.82 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M218.49 289.67a3.72 3.72 0 1 1 7.43 0 3.72 3.72 0 0 1-7.43 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M200.33 289.67a4.02 4.02 0 1 1 8.04 0 4.02 4.02 0 0 1-8.04 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M182.18 289.67a4.32 4.32 0 1 1 8.64 0 4.32 4.32 0 0 1-8.64 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M164.02 289.67a4.63 4.63 0 1 1 9.25 0 4.63 4.63 0 0 1-9.25 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M145.86 289.67a4.93 4.93 0 1 1 9.86 0 4.93 4.93 0 0 1-9.86 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M127.7 289.67a5.23 5.23 0 1 1 10.47 0 5.23 5.23 0 0 1-10.47 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M109.55 289.67a5.53 5.53 0 1 1 11.07 0 5.53 5.53 0 0 1-11.07 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M91.4 289.67a5.84 5.84 0 1 1 11.67 0 5.84 5.84 0 0 1-11.68 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M73.23 289.67a6.14 6.14 0 1 1 12.29 0 6.14 6.14 0 0 1-12.29 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M55.08 289.67a6.44 6.44 0 1 1 12.89 0 6.44 6.44 0 0 1-12.9 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M36.92 289.67a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.77 289.67a7.05 7.05 0 1 1 14.1 0 7.05 7.05 0 0 1-14.1 0z" fill="#FF8473"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M.6 289.67a7.35 7.35 0 1 1 14.71 0 7.35 7.35 0 0 1-14.7 0z" fill="#FF8473"></path>
                    </svg>
                </ChatKitBackGround>
                <ChatKitLink className="chatkit-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 989.68 200">
                        <title>chatkit_full-logo</title>
                        <g fill="white">
                            <path d="M326.78,38.39c25.4,0,45.14,17.51,47.88,42.91l-24.88,4.12c-2.57-15.28-10.81-23.86-23-23.86-17.33,0-27.63,14.76-27.63,39.47s10.3,39.48,27.63,39.48c12.88,0,21.11-9.1,23.34-25.75L375,119.05c-3.09,27-22,44.62-48.23,44.62-32.09,0-53-24.71-53-62.64S294.69,38.39,326.78,38.39Z"></path>
                            <path d="M397.65,41h25.4V88h39V41h25.4V161.1H462V111.16h-39V161.1h-25.4Z"></path>
                            <path d="M583.85,142.39h-46L531.5,161.1H506.27L549.18,41h23.34l42.9,120.13H590.19Zm-7.73-22.31L561,75.81h-.35l-15.1,44.27Z"></path>
                            <path d="M644.07,64.31H609.24V41h94.9V64.31H669.47V161.1h-25.4Z"></path>
                            <path d="M727.81,41h25.41V90.05h.34L793.89,41h29.69l-44.11,53.2L827,161.1h-30.2l-32.95-48h-.35l-10.29,12.53V161.1H727.81Z"></path>
                            <path d="M845.53,41h25.4V161.1h-25.4Z"></path>
                            <path d="M929.62,64.31H894.78V41h94.9V64.31H955V161.1h-25.4Z"></path>
                        </g>
                        <g fill="#ff8473">
                            <path d="M73.51.11,90.94,10.18a.84.84,0,0,0,.84,0L109.21.11a.84.84,0,0,1,.84,0l17.22,9.94a.42.42,0,0,1,0,.73L91.57,31.4a.45.45,0,0,1-.42,0L55.45,10.78a.42.42,0,0,1,0-.73L72.67.11A.84.84,0,0,1,73.51.11Z"></path>
                            <path d="M18.91,31.88,91.15,73.59a.4.4,0,0,0,.42,0l72.25-41.71a.42.42,0,0,0,0-.73L146.6,21.21a.86.86,0,0,0-.85,0l-54,31.16a.84.84,0,0,1-.84,0L37,21.21a.86.86,0,0,0-.85,0L18.91,31.15A.42.42,0,0,0,18.91,31.88Z"></path>
                            <path d="M181.46,42.8,110.05,84a.84.84,0,0,0-.42.73v19.88a.43.43,0,0,0,.64.37l72.24-41.71a.44.44,0,0,0,.21-.37V43.53A.84.84,0,0,0,181.46,42.8Z"></path>
                            <path d="M109.63,127v19.88a.43.43,0,0,0,.64.37l72.24-41.71a.44.44,0,0,0,.21-.37V85.73a.84.84,0,0,0-1.26-.73l-71.41,41.22A.84.84,0,0,0,109.63,127Z"></path>
                            <path d="M109.63,169.15V189a.42.42,0,0,0,.64.36l72.24-41.71a.41.41,0,0,0,.21-.36v-19.4a.84.84,0,0,0-1.26-.73l-71.41,41.23A.84.84,0,0,0,109.63,169.15Z"></path>
                            <path d="M1.27,42.8,90.94,94.57a.84.84,0,0,1,.42.73V199.58a.42.42,0,0,1-.63.36L73.3,189.88a.41.41,0,0,1-.21-.36V105.61a.44.44,0,0,0-.21-.37L.21,63.29A.44.44,0,0,1,0,62.92V43.53A.84.84,0,0,1,1.27,42.8Z"></path>
                            <path d="M1.27,85l53.12,30.67a.83.83,0,0,1,.43.73v62.08a.42.42,0,0,1-.64.36L36.76,168.78a.4.4,0,0,1-.22-.36V126.71a.44.44,0,0,0-.21-.37L.21,105.49a.44.44,0,0,1-.21-.37V85.73A.84.84,0,0,1,1.27,85Z"></path>
                            <path d="M1.27,127.19l16.58,9.58a.84.84,0,0,1,.42.73v19.88a.42.42,0,0,1-.63.37L.21,147.68a.41.41,0,0,1-.21-.36v-19.4A.85.85,0,0,1,1.27,127.19Z"></path>
                        </g>
                    </svg>
                </ChatKitLink>
                <ChatKitText className="chatkit-text">
                    Extensible API for in-app chat
                </ChatKitText>
                <LearnMoreLink className="chatkit-read-more">
                    Learn more
                </LearnMoreLink>
                <style jsx>{`
                    .chatkit-link svg{
                        width: auto;
                        height: 100%;
                    }
                    @media (min-width: 760px){
                        .chatkit-box {
                            margin: 3.5rem 0px;
                            padding: 3rem 1rem;
                            width: 352px;
                            height: 226px;
                        }                     
                        .chatkit-mobile-background {
                            display: none;
                        }
                        .chatkit-background {
                            display: block;
                            z-index: -1;
                            top: -36px;
                            right: -36px;
                        }
                        .chatkit-link {
                            height: 40px;  
                        }
                    }
                    @media (min-width: 960px){
                       
                    }
                    @media (min-width: 1200px){
                        .chatkit-box {
                            margin: 1.25rem 0px;
                        } 
                    } 
                `}</style>
            </ChatKitBox>
        );
    }
}

export default ChatKit;