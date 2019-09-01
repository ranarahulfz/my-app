import React from 'react';
import styled from 'styled-components';

const BeamsBox = styled.div`
    position: relative;
    width: 100%;
    color: white;
    background: rgb(48, 13, 79) none repeat scroll 0% 0%;
    padding: 1.5rem 1rem 1rem;
    text-align: center;
    margin: 1.25rem 0px;
    border-radius: 2px;
`
const BeamsMobileBackGround = styled.span`
    position: absolute;
    display: block;
    z-index: 1;
    top: -12px;
    left: -12px;
`
const BeamsBackGround = styled.span`
    position: absolute;
    display: none;
`
const BeamsLink = styled.a`
    display: block;
    z-index: -1;
    top: -36px;
    right: -36px;
    margin-bottom: 1rem;
`
const BeamsText = styled.p`
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

class Beams extends React.Component {
    render() {
        return(
            <BeamsBox className="beams-box">
                <BeamsMobileBackGround className="chatkit-mobile-background">
                    <svg width="51" height="48" viewBox="0 0 51 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M32.81 27.34l9.08 18.1 9.08-18.1H32.8z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 27.34l9.08 18.1 9.07-18.1H0z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20.41h18.15L9.08 2.31 0 20.4z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.84 0l9.07 18.11L35 0H16.84z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.84 47.75h18.15L25.9 29.64l-9.07 18.1z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M32.81 20.41h18.16l-9.08-18.1-9.08 18.1z" fill="#2AE9AA"></path>
                    </svg>
                </BeamsMobileBackGround>
                <BeamsBackGround className="beams-background">
                    <svg width="354" height="300" viewBox="0 0 354 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M319 53h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M341 53h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M343 38h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M354 57h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M332 57h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M330 72h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M341 15h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M275 15h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M220 34h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M233 0h-13l6.5 13L233 0z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M231 19h13l-6.5 13-6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M255 34h-13l6.5-13 6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M244 15h-13l6.5-13 6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M242 0h13l-6.5 13L242 0z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M277 0h-13l6.5 13L277 0z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M288 19h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M264 34h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M266 15h-13l6.5-13 6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M253 19h13l-6.5 13-6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M286 34h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M299 0h-13l6.5 13L299 0z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M297 19h13l-6.5 13-6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M321 34h-13l6.5-13 6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M310 15h-13l6.5-13 6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M308 0h13l-6.5 13L308 0z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M343 0h-13l6.5 13L343 0z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M354 19h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M330 34h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M332 15h-13l6.5-13 6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M319 19h13l-6.5 13-6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M209 15h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M143 15h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M90 19H77l6.5 13L90 19z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M88 34h13l-6.5-13L88 34z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M77 15h13L83.5 2 77 15z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M101 0H88l6.5 13L101 0z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M99 19h13l-6.5 13L99 19z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M123 34h-13l6.5-13 6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M112 15H99l6.5-13 6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M110 0h13l-6.5 13L110 0z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M145 0h-13l6.5 13L145 0z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M156 19h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M132 34h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M134 15h-13l6.5-13 6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M121 19h13l-6.5 13-6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M154 34h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M167 0h-13l6.5 13L167 0z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M165 19h13l-6.5 13-6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M189 34h-13l6.5-13 6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M178 15h-13l6.5-13 6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M176 0h13l-6.5 13L176 0z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M211 0h-13l6.5 13L211 0z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M222 19h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M198 34h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M200 15h-13l6.5-13 6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M187 19h13l-6.5 13-6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 15h13L17.5 2 11 15z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 0H0l6.5 13L13 0z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 19H11l6.5 13L24 19z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 34h13L6.5 21 0 34z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 34h13l-6.5-13L22 34z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M35 0H22l6.5 13L35 0z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M79 0H66l6.5 13L79 0z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M57 0H44l6.5 13L57 0z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M46 15H33l6.5-13L46 15z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33 19h13l-6.5 13L33 19z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M44 34h13l-6.5-13L44 34z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M66 34h13l-6.5-13L66 34z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M68 15H55l6.5-13L68 15z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M55 19h13l-6.5 13L55 19z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M341 281h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M275 281h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M220 300h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M233 266h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M231 285h13l-6.5 13-6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M255 300h-13l6.5-13 6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M244 281h-13l6.5-13 6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M242 266h13l-6.5 13-6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M277 266h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M288 285h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M264 300h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M266 281h-13l6.5-13 6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M253 285h13l-6.5 13-6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M286 300h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M299 266h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M297 285h13l-6.5 13-6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M321 300h-13l6.5-13 6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M310 281h-13l6.5-13 6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M308 266h13l-6.5 13-6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M343 266h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M354 285h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M330 300h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M332 281h-13l6.5-13 6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M319 285h13l-6.5 13-6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M209 281h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M143 281h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M90 285H77l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M46 285H33l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33 281h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M88 300h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M77 281h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M101 266H88l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M99 285h13l-6.5 13-6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M123 300h-13l6.5-13 6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M112 281H99l6.5-13 6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M110 266h13l-6.5 13-6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M145 266h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M156 285h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M132 300h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M134 281h-13l6.5-13 6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M121 285h13l-6.5 13-6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M154 300h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M167 266h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M165 285h13l-6.5 13-6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M189 300h-13l6.5-13 6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M178 281h-13l6.5-13 6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M176 266h13l-6.5 13-6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M211 266h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M222 285h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M198 300h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M200 281h-13l6.5-13 6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M187 285h13l-6.5 13-6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 281h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 266H0l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 285H11l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 300h13l-6.5-13L0 300z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 300h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M35 266H22l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M79 266H66l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M57 266H44l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M44 300h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M66 300h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M68 281H55l6.5-13 6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M55 285h13l-6.5 13-6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M319 91h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M341 91h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M343 76h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M354 95h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M332 95h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M330 110h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M319 129h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M341 129h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M343 114h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M354 133h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M332 133h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M330 148h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M319 167h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M341 167h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M343 152h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M354 171h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M332 171h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M330 186h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M319 205h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M341 205h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M343 190h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M354 209h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M332 209h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M330 224h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M319 243h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M341 243h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M343 228h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M354 247h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M332 247h-13l6.5 13 6.5-13z" fill="#2AE9AA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M330 262h13l-6.5-13-6.5 13z" fill="#2AE9AA"></path>
                    </svg>
                </BeamsBackGround>
                <BeamsLink className="beams-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 809.21 200">
                        <defs>
                            <style></style>
                        </defs>
                        <title>beams_full-logo</title>
                        <g fill="#2ae9aa">
                            <path d="M85.58,40.65l-15.75,9.1a.79.79,0,0,0-.4.69V190a.39.39,0,0,0,.2.35L86.18,200a.4.4,0,0,0,.6-.35V41.35A.81.81,0,0,0,85.58,40.65Z"></path>
                            <path d="M104.14,189.58v-18a.81.81,0,0,1,1.2-.7l15,8.64a.8.8,0,0,1,0,1.39l-15.55,9A.39.39,0,0,1,104.14,189.58Z"></path>
                            <path d="M104.14,150V131.54a.8.8,0,0,1,1.2-.7L155,159.52a.8.8,0,0,1,0,1.38l-16,9.21a.36.36,0,0,1-.4,0L104.34,150.3A.4.4,0,0,1,104.14,150Z"></path>
                            <path d="M104.14,109.87V91.45a.8.8,0,0,1,1.2-.69l67.83,39.16a.8.8,0,0,1,.4.69v18.88a.41.41,0,0,1-.61.35l-68.62-39.62A.4.4,0,0,1,104.14,109.87Z"></path>
                            <path d="M104.14,69.79V51.37a.81.81,0,0,1,1.2-.7l67.83,39.16a.83.83,0,0,1,.4.7v18.88a.41.41,0,0,1-.61.35L104.34,70.14A.42.42,0,0,1,104.14,69.79Z"></path>
                            <path d="M50.87,60.7,35.11,69.79a.82.82,0,0,0-.4.69V170a.43.43,0,0,0,.2.35l16.56,9.55a.39.39,0,0,0,.6-.34V61.39A.8.8,0,0,0,50.87,60.7Z"></path>
                            <path d="M16.15,80.74.4,89.83a.81.81,0,0,0-.4.7V150a.4.4,0,0,0,.2.34l16.56,9.56a.4.4,0,0,0,.6-.34V81.43A.8.8,0,0,0,16.15,80.74Z"></path>
                            <path d="M0,69.33V50.44a.79.79,0,0,1,.4-.69L86.38.11a.77.77,0,0,1,.8,0l86,49.64a.82.82,0,0,1,.4.69V69.33a.4.4,0,0,1-.61.34L87,20a.41.41,0,0,0-.4,0L.6,69.67A.39.39,0,0,1,0,69.33Z"></path>
                        </g>
                        <g fill="white">
                            <path d="M260,43.13H309.6c19.72,0,33.9,12.88,33.9,30.65,0,9.29-4.4,17-11.57,21.36v.32c9.78,4.57,15.82,14.35,15.82,26.25,0,24-14.19,35.54-43.37,35.54H260Zm46.13,45.49c8.64,0,13.37-4.24,13.37-12.07,0-7.66-4.73-11.9-13.37-11.9h-22v24Zm2.61,47.11c10.27,0,15-4.57,15-14.19,0-9-5.22-13.85-14.83-13.85H284.17v28Z"></path>
                            <path d="M371.21,43.13h73.52V65.3H395.34V88.45h45v21.19h-45v25.44h49.55v22.17H371.21Z"></path>
                            <path d="M531.61,139.48H487.92l-6,17.77h-24L498.68,43.13h22.17l40.76,114.12h-24Zm-7.34-21.19L509.93,76.23h-.33l-14.34,42.06Z"></path>
                            <path d="M579.36,43.13H606.1l31.95,76.79h.33l32.11-76.79h26.73V157.25H673.59V86.82h-.33l-29.83,70.43H633L603.33,86.82H603v70.43H579.36Z"></path>
                            <path d="M742.53,114.54c3.1,17,9.78,23.47,24.94,23.47,11.25,0,17.61-4.07,17.61-11.25,0-8-5.38-11.9-24.45-18.42-26.57-9-36.52-18.58-36.52-35.37,0-19.08,16-32.28,38.64-32.28,22.33,0,39.77,13.53,43.36,33.58l-23.48,5c-3.09-11.57-9.45-16.95-19.88-16.95-9,0-14.84,4.08-14.84,10.43,0,5.87,4.89,9.13,21.85,14.84,14.18,4.89,24.45,10.27,30.48,16.3s9,13.53,9,22.82c0,19.73-17.12,32.93-42.06,32.93-27.23,0-44.18-14-48.26-40.1Z"></path>
                        </g>
                    </svg>
                </BeamsLink>
                <BeamsText className="beams-text">
                    Programmatic push notifications
                </BeamsText>
                <LearnMoreLink className="beams-learn-more">
                    Learn more
                </LearnMoreLink>
                <style jsx>{`
                    .beams-link svg{
                        width: auto;
                        height: 100%;
                    }
                    @media (min-width: 760px){                      
                        .beams-box {
                            margin: 3.5rem 0px;
                            padding: 3rem 1rem;
                            width: 352px;
                            height: 226px;
                        }
                        .beams-mobile-background {
                            display: none;
                        }
                        .beams-link {
                            height: 40px;
                        }
                        .beams-background {
                            display: block;
                            z-index: -1;
                            top: -36px;
                            right: -36px;
                        }
                    }
                    @media (min-width: 960px){
                        
                    }
                    @media (min-width: 1200px){                     
                        .beams-box {
                            margin: 1.25rem 0px;
                        } 
                    } 
                `}</style>
            </BeamsBox>
        );
    }
}

export default Beams;