import React from 'react';
import styled from 'styled-components';

const ChannelsBox = styled.div`
    position: relative;
    width: 100%;
    color: white;
    background: rgb(48, 13, 79) none repeat scroll 0% 0%;
    padding: 1.5rem 1rem 1rem;
    text-align: center;
    margin: 1.25rem 0px;
    border-radius: 2px;
`
const ChannelsMobileBackGround = styled.span`
    position: absolute;
    display: block;
    z-index: 1;
    top: -22px;
    right: -24px;
`
const ChannelsBackGround = styled.span`
    position: absolute;
    display: none;
`
const ChannelsLink = styled.a`
    display: block;
    z-index: -1;
    top: -36px;
    right: -36px;
    margin-bottom: 1rem;
`
const ChannelsText = styled.p`
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

class Channels extends React.Component {
    render() {
        return(
            <ChannelsBox className="channels-box">
                <ChannelsMobileBackGround className="channels-mobile-background">
                    <svg width="45" height="57" viewBox="0 0 45 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" d="M22.5 22.48V2L2 13.82V34.3l20.5-11.82z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path clip-rule="evenodd" d="M22.5 42.95V22.48L2 34.3v20.48l20.5-11.83z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path clip-rule="evenodd" d="M22.5 22.48V2L43 13.82V34.3L22.5 22.48z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path clip-rule="evenodd" d="M22.5 42.95V22.48L43 34.3v20.48L22.5 42.95z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </ChannelsMobileBackGround>
                <ChannelsBackGround className="channels-background">
                    <svg width="348" height="304" viewBox="0 0 348 304" fill="none" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M346.5 16.84l-15 8.66V10.16l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M316.5 16.84l15 8.66V10.16l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M346.5 32.18l-15 8.66V25.5l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M316.5 32.18l15 8.66V25.5l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M346.5 47.5l-15 8.67V40.83l15-8.66V47.5z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M316.5 47.5l15 8.67V40.83l-15-8.66V47.5z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M346.5 62.85l-15 8.66V56.17l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M316.5 62.85l15 8.66V56.17l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M346.5 78.18l-15 8.66V71.5l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M316.5 78.18l15 8.66V71.5l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M346.5 93.52l-15 8.66V86.84l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M316.5 93.52l15 8.66V86.84l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M346.5 108.86l-15 8.66v-15.34l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M316.5 108.86l15 8.66v-15.34l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M346.5 124.2l-15 8.66v-15.34l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M316.5 124.2l15 8.66v-15.34l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M346.5 139.52l-15 8.66v-15.34l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M316.5 139.52l15 8.66v-15.34l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M346.5 154.86l-15 8.66v-15.34l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M316.5 154.86l15 8.66v-15.34l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M346.5 170.19l-15 8.66V163.5l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M316.5 170.19l15 8.66V163.5l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M346.5 185.53l-15 8.66v-15.34l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M316.5 185.53l15 8.66v-15.34l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M346.5 200.86l-15 8.66v-15.34l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M316.5 200.86l15 8.66v-15.34l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M346.5 216.2l-15 8.66v-15.34l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M316.5 216.2l15 8.66v-15.34l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M346.5 231.54l-15 8.66v-15.34l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M316.5 231.54l15 8.66v-15.34l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M346.5 246.88l-15 8.66V240.2l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M316.5 246.88l15 8.66V240.2l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M346.5 262.22l-15 8.66v-15.34l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M316.5 262.22l15 8.66v-15.34l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M316.5 16.84l-15 8.66V10.16l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M286.5 16.84l15 8.66V10.16l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M316.5 32.18l-15 8.66V25.5l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M286.5 32.18l15 8.66V25.5l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M286.5 16.84l-15 8.66V10.16l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M256.5 16.84l15 8.66V10.16l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M286.5 32.18l-15 8.66V25.5l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M256.5 32.18l15 8.66V25.5l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M256.5 16.84l-15 8.66V10.16l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M226.5 16.84l15 8.66V10.16l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M256.5 32.18l-15 8.66V25.5l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M226.5 32.18l15 8.66V25.5l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M226.5 16.84l-15 8.66V10.16l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M196.5 16.84l15 8.66V10.16l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M226.5 32.18l-15 8.66V25.5l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M196.5 32.18l15 8.66V25.5l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M196.5 16.84l-15 8.66V10.16l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M166.5 16.84l15 8.66V10.16l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M196.5 32.18l-15 8.66V25.5l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M166.5 32.18l15 8.66V25.5l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M166.5 16.84l-15 8.66V10.16l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M136.5 16.84l15 8.66V10.16l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M166.5 32.18l-15 8.66V25.5l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M136.5 32.18l15 8.66V25.5l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M136.5 16.84l-15 8.66V10.16l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M106.5 16.84l15 8.66V10.16l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M136.5 32.18l-15 8.66V25.5l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M106.5 32.18l15 8.66V25.5l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M106.5 16.84l-15 8.66V10.16l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M76.5 16.84l15 8.66V10.16l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M106.5 32.18l-15 8.66V25.5l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M76.5 32.18l15 8.66V25.5l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M76.5 16.84l-15 8.66V10.16l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M46.5 16.84l15 8.66V10.16l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M76.5 32.18l-15 8.66V25.5l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M46.5 32.18l15 8.66V25.5l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M46.5 16.84l-15 8.66V10.16l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M16.5 16.84l15 8.66V10.16l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M46.5 32.18l-15 8.66V25.5l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M16.5 32.18l15 8.66V25.5l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M16.5 16.84l-15 8.66V10.16l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M16.5 32.18l-15 8.66V25.5l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M346.5 277.57l-15 8.66V270.9l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M316.5 277.57l15 8.66V270.9l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M346.5 292.92l-15 8.65v-15.33l15-8.67v15.35z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M316.5 292.92l15 8.65v-15.33l-15-8.67v15.35z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M316.5 277.57l-15 8.66V270.9l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M286.5 277.57l15 8.66V270.9l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M316.5 292.92l-15 8.65v-15.33l15-8.67v15.35z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M286.5 292.92l15 8.65v-15.33l-15-8.67v15.35z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M286.5 277.57l-15 8.66V270.9l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M256.5 277.57l15 8.66V270.9l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M286.5 292.92l-15 8.65v-15.33l15-8.67v15.35z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M256.5 292.92l15 8.65v-15.33l-15-8.67v15.35z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M256.5 277.57l-15 8.66V270.9l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M226.5 277.57l15 8.66V270.9l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M256.5 292.92l-15 8.65v-15.33l15-8.67v15.35z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M226.5 292.92l15 8.65v-15.33l-15-8.67v15.35z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M226.5 277.57l-15 8.66V270.9l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M196.5 277.57l15 8.66V270.9l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M226.5 292.92l-15 8.65v-15.33l15-8.67v15.35z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M196.5 292.92l15 8.65v-15.33l-15-8.67v15.35z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M196.5 277.57l-15 8.66V270.9l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M166.5 277.57l15 8.66V270.9l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M196.5 292.92l-15 8.65v-15.33l15-8.67v15.35z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M166.5 292.92l15 8.65v-15.33l-15-8.67v15.35z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M166.5 277.57l-15 8.66V270.9l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M136.5 277.57l15 8.66V270.9l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M166.5 292.92l-15 8.65v-15.33l15-8.67v15.35z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M136.5 292.92l15 8.65v-15.33l-15-8.67v15.35z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M136.5 277.57l-15 8.66V270.9l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M106.5 277.57l15 8.66V270.9l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M136.5 292.92l-15 8.65v-15.33l15-8.67v15.35z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M106.5 292.92l15 8.65v-15.33l-15-8.67v15.35z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M106.5 277.57l-15 8.66V270.9l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M76.5 277.57l15 8.66V270.9l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M106.5 292.92l-15 8.65v-15.33l15-8.67v15.35z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M76.5 292.92l15 8.65v-15.33l-15-8.67v15.35z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M76.5 277.57l-15 8.66V270.9l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M46.5 277.57l15 8.66V270.9l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M76.5 292.92l-15 8.65v-15.33l15-8.67v15.35z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M46.5 292.92l15 8.65v-15.33l-15-8.67v15.35z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M46.5 277.57l-15 8.66V270.9l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M16.5 277.57l15 8.66V270.9l-15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M46.5 292.92l-15 8.65v-15.33l15-8.67v15.35z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M16.5 292.92l15 8.65v-15.33l-15-8.67v15.35z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M16.5 277.57l-15 8.66V270.9l15-8.66v15.34z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M16.5 292.92l-15 8.65v-15.33l15-8.67v15.35z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </ChannelsBackGround>
                <ChannelsLink className="channels-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1170.84 200">
                        <title>channels_full-logo</title>
                        <g fill="white">
                            <path d="M326.39,37.64c25.37,0,45.08,17.48,47.82,42.85L349.36,84.6c-2.58-15.25-10.8-23.82-23-23.82-17.32,0-27.6,14.74-27.6,39.42s10.28,39.42,27.6,39.42c12.85,0,21.08-9.08,23.31-25.71l24.85,4.29c-3.08,26.91-21.94,44.56-48.16,44.56-32.06,0-53-24.68-53-62.56S294.33,37.64,326.39,37.64Z"></path><path d="M397.17,40.21h25.37v47h38.91v-47h25.37v120H461.45V110.31H422.54v49.88H397.17Z"></path><path d="M583.14,141.51H537.2l-6.34,18.68h-25.2l42.85-120h23.31l42.86,120h-25.2Zm-7.72-22.28L560.34,75H560l-15.08,44.23Z"></path><path d="M633.35,40.21h26L700,116.48h.34V40.21h25.37v120H699.68L659.06,83.91h-.34v76.28H633.35Z"></path><path d="M757.09,40.21h26.06l40.62,76.27h.34V40.21h25.37v120H823.43L782.81,83.91h-.35v76.28H757.09Z"></path><path d="M880.84,40.21h77.3V63.52H906.21V87.86h47.3v22.28h-47.3v26.74h52.1v23.31H880.84Z"></path><path d="M984.7,40.21h25.37v96.67h50.74v23.31H984.7Z"></path><path d="M1100.74,115.28C1104,133.11,1111,140,1127,140c11.83,0,18.51-4.29,18.51-11.83,0-8.4-5.65-12.51-25.71-19.37-27.94-9.43-38.39-19.54-38.39-37.2,0-20,16.8-33.93,40.62-33.93,23.48,0,41.82,14.22,45.6,35.31l-24.69,5.31c-3.25-12.17-9.94-17.83-20.91-17.83-9.43,0-15.6,4.29-15.6,11,0,6.17,5.14,9.6,23,15.6,14.91,5.14,25.71,10.8,32.06,17.14s9.42,14.23,9.42,24c0,20.74-18,34.62-44.22,34.62-28.63,0-46.45-14.74-50.74-42.16Z"></path></g><g fill="#6a52ff"><path d="M127.12,10,109.92.11a.84.84,0,0,0-.84,0L91.67,10.16a.84.84,0,0,1-.84,0L73.42.11a.84.84,0,0,0-.84,0L55.38,10a.42.42,0,0,0,0,.73L91,31.36a.45.45,0,0,0,.42,0l35.66-20.59A.42.42,0,0,0,127.12,10Z"></path><path d="M163.62,31.11l-17.2-9.92a.84.84,0,0,0-.84,0L91.67,52.31a.84.84,0,0,1-.84,0L36.92,21.19a.84.84,0,0,0-.84,0l-17.2,9.92a.42.42,0,0,0,0,.73L91,73.5a.4.4,0,0,0,.42,0l72.16-41.66A.42.42,0,0,0,163.62,31.11Z"></path><path d="M109.5,84.65v19.86a.42.42,0,0,0,.63.36l72.16-41.66a.41.41,0,0,0,.21-.36V43.48a.84.84,0,0,0-1.26-.73L109.92,83.92A.84.84,0,0,0,109.5,84.65Z"></path><path d="M110.13,147l72.16-41.66a.44.44,0,0,0,.21-.37V85.62a.84.84,0,0,0-1.26-.73l-71.32,41.18a.83.83,0,0,0-.42.73v19.85A.42.42,0,0,0,110.13,147Z"></path><path d="M91.25,177.53V95.19a.83.83,0,0,0-.42-.73L74.26,84.89a.84.84,0,0,0-1.26.73V167a.84.84,0,0,1-1.26.73l-16.57-9.57a.84.84,0,0,1-.42-.73V74.11a.84.84,0,0,0-.42-.73L37.76,63.82a.84.84,0,0,0-1.26.73v81.37a.84.84,0,0,1-1.26.73l-16.57-9.56a.84.84,0,0,1-.42-.73V53a.84.84,0,0,0-.42-.73L1.26,42.75A.84.84,0,0,0,0,43.48V147.14a.41.41,0,0,0,.21.36L91,199.94a.4.4,0,0,0,.42,0l90.83-52.44a.41.41,0,0,0,.21-.36V127.77a.84.84,0,0,0-1.26-.73L92.51,178.26A.84.84,0,0,1,91.25,177.53Z"></path>
                        </g>
                    </svg>
                </ChannelsLink>
                <ChannelsText className="channels-text">
                    Build scalable realtime features
                </ChannelsText>
                <LearnMoreLink className="channels-learn-more">
                    Learn more
                </LearnMoreLink>
                <style jsx>{`
                    .channels-link svg{
                        width: auto;
                        height: 100%;
                    }
                    @media (min-width: 760px){                     
                        .channels-box {
                            margin: 3.5rem 0px;
                            padding: 3rem 1rem;
                            width: 352px;
                            height: 226px;
                        }                   
                        .channels-mobile-background {
                            display: none;
                        }
                        .channels-background {
                            display: block;
                            z-index: -1;
                            top: -38px;
                            right: -33px;
                        }
                        .channels-link {
                            height: 40px;
                        }
                    }
                    @media (min-width: 960px){
                        
                    }
                    @media (min-width: 1200px){                     
                        .channels-box {
                            margin: 1.25rem 0px;
                        }
                    } 
                `}</style>
            </ChannelsBox>
        );
    }
}

export default Channels;