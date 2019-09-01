import React from 'react';
import styled from 'styled-components';
import HeroButtons from "./HeroButtons";

const HeroBox = styled.div`

`
const Hero = styled.section`
  width: 100%;
    max-width: 75rem;
    margin: 0 auto;
    position: relative;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 3rem 1rem;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 4.5rem;
`
const HeroTextBox = styled.div`
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 2rem;
`
const HeroTextTitle = styled.h1`
    font-family: italian-plate,sans-serif;
    font-weight: 600;
    line-height: 1.1;
    font-size: 40px;
    -webkit-letter-spacing: 4px;
    -moz-letter-spacing: 4px;
    -ms-letter-spacing: 4px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #300D4F;
    margin-bottom: 1.5rem;
    max-width: 520px;
    -webkit-animation-name: animation-1rkgcrb;
    animation-name: animation-1rkgcrb;
    -webkit-animation-direction: normal;
    animation-direction: normal;
    -webkit-animation-duration: 0.8s;
    animation-duration: 0.8s;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
`
const HeroTextSubTitle = styled.h2`
    font-family: italian-plate,sans-serif;
    font-weight: 600;
    line-height: 1.1;
    font-size: 33px;
    -webkit-letter-spacing: 1px;
    -moz-letter-spacing: 1px;
    -ms-letter-spacing: 1px;
    letter-spacing: 1px;
    color: #300D4F;
    margin-bottom: 1.5rem;
    font-size: 19px;
    -webkit-letter-spacing: 0px;
    -moz-letter-spacing: 0px;
    -ms-letter-spacing: 0px;
    letter-spacing: 0px;
    font-family: maison-neue,sans-serif;
    font-weight: 700;
    line-height: 1.5;
    max-width: 280px;
    -webkit-animation-name: animation-1rkgcrb;
    animation-name: animation-1rkgcrb;
    -webkit-animation-direction: normal;
    animation-direction: normal;
    -webkit-animation-duration: 0.8s;
    animation-duration: 0.8s;
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
`
const HeroTextImageBoxTop = styled.span`
    position: absolute;
    width: 194px;
    top: 0;
    left: 0;
    webkit-transform: translate3d(-32%,-110%,0) scale(0.75);
    -ms-transform: translate3d(-32%,-110%,0) scale(0.75);
    transform: translate3d(-32%,-110%,0) scale(0.75);
`
const HeroTextImageBoxBottom = styled.span`
    position: absolute;
    width: 195px;
    bottom: 0;
    right: 0;
    -webkit-transform: translate3d(32%,290%,0) scale(0.75);
    -ms-transform: translate3d(32%,290%,0) scale(0.75);
    transform: translate3d(32%,290%,0) scale(0.75);
`
const HeroImageBoxTop = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    -webkit-transform: translate3d(20%,-20%,0) scale(0.75);
    -ms-transform: translate3d(20%,-20%,0) scale(0.75);
    transform: translate3d(20%,-20%,0) scale(0.75);
`
const HeroImageBoxLeft = styled.span`
    position: absolute;
    bottom: 0;
    left: 0;
    -webkit-transform: translate3d(8%,18%,0) scale(0.75);
    -ms-transform: translate3d(8%,18%,0) scale(0.75);
    transform: translate3d(8%,18%,0) scale(0.75);
`
const HeroImageBoxRight = styled.span`
    position: absolute;
    bottom: 0;
    right: 0;
    -webkit-transform: translate3d(0,16%,0) scale(0.75);
    -ms-transform: translate3d(0,16%,0) scale(0.75);
    transform: translate3d(0,16%,0) scale(0.75);
`

class HeroSection extends React.Component{
    render() {
        return(
            <HeroBox>
                <Hero>
                    <HeroTextBox>
                        <HeroTextTitle className="hero-text-title">
                            Powering realtime experiences in
                            <br/>
                            all your apps
                        </HeroTextTitle>
                        <HeroTextSubTitle className="hero-text-subtitle">
                            Hosted APIs that are flexible,  scalable, and easy to integrate
                        </HeroTextSubTitle>
                        <HeroTextImageBoxTop className="text-image-top">
                            <svg width="194" viewBox="0 0 194 75">
                                <path d="M1.16 75a1.17 1.17 0 0 1-1.03-1.7c5.31-10.43 12.82-23.77 23.84-34.4a66.77 66.77 0 0 1 21.1-13.98c3.4-1.4 15.1-5.44 22.54.88 4.57 3.89 6.57 9.93 6.1 18.47l-.05 1.15-.14 2.42a90.76 90.76 0 0 1 23.9-34.22c7.85-6.97 15.36-10.98 22.95-12.23 9.65-1.6 19.11 1.8 24.12 8.66 4.24 5.8 5.47 13.97 3.65 24.28l-1.9 10.9c5.25-9.62 14.27-18.11 25.14-20.26 4.76-.94 8.77-.6 11.94.97 5.1 2.54 8.36 8.38 9.7 17.33a87.82 87.82 0 0 1-.61 29.72c-.1.54-.58.93-1.13.94L1.16 75zm55.9-50.29c-3.77 0-7.76 1-11.13 2.37a64.47 64.47 0 0 0-20.35 13.5C15.4 50.4 8.24 62.66 3.08 72.65L190.3 71.6a85.51 85.51 0 0 0 .43-27.98c-1.23-8.16-4.06-13.41-8.44-15.6-2.7-1.34-6.22-1.6-10.46-.76-6.66 1.3-13.23 5.48-18.5 11.74-4.81 5.7-8.22 12.72-9.35 19.24a1.16 1.16 0 1 1-2.28-.4v-.01c.08-.49 2.78-16.1 4.15-23.9 1.7-9.67.62-17.24-3.23-22.5-4.43-6.07-13.21-9.18-21.87-7.75-7.15 1.19-14.27 5-21.79 11.68a88.4 88.4 0 0 0-27 45.09 1.16 1.16 0 1 1-2.26-.55c1.11-4.64 1.38-9.7 1.64-14.6l.06-1.15c.42-7.77-1.31-13.19-5.3-16.57-2.42-2.06-5.64-2.87-9.03-2.87z" fill="#E5E5E5"></path>
                            </svg>
                        </HeroTextImageBoxTop>
                        <HeroTextImageBoxBottom className="text-image-bottom">
                            <svg width="195" height="56" viewBox="0 0 195 56">
                                <path d="M65.44 39.68a4.58 4.58 0 0 1-4.51-3.73c-.54-2.52.7-5.45 1.92-7.2 1.4-2 4.89-6 8.88-10.19a1.28 1.28 0 0 1 2.1.4c.55 1.34.14 11-1.31 14.66-.91 2.28-2.97 4.95-5.51 5.79a4.9 4.9 0 0 1-1.57.27zm6.07-17.2a92.3 92.3 0 0 0-6.57 7.7c-1.22 1.73-1.84 3.84-1.54 5.25.14.64.46 1.12.98 1.43.56.34 1.15.4 1.82.17 1.48-.48 3.14-2.3 3.95-4.32.9-2.28 1.3-7.14 1.36-10.24z" fill="#E5E5E5"></path><path d="M193.73 56L1.25 54.9c-.47 0-.9-.26-1.12-.68-.22-.41-.18-.91.1-1.3C10.44 38.78 18.1 29.3 28.5 17.99c4.17-4.54 8.7-9.25 14.2-12.59C48.96 1.6 55.67.19 61.59 1.44c2.82.6 5.03 1.73 6.57 3.36 2.06 2.2 4.63 7.64 5.5 12.22 8.16-5.85 19.87-8.65 24.45-8.8 6.6-.2 16.19.77 24.27 6.52a30.42 30.42 0 0 1 11.9 17.87 21.12 21.12 0 0 1 9.26-9.66c9-4.96 21.98-5 30.83-.09 12.41 6.89 20.25 30.49 20.58 31.49a1.26 1.26 0 0 1-1.2 1.65zm-190-3.58l188.22 1.06c-2.02-5.47-9.08-23.02-18.83-28.43-8.14-4.51-20.06-4.48-28.35.1-4.26 2.34-9.41 6.9-9.76 15.25-.03.69-.62 1.23-1.32 1.2-.7-.03-1.24-.61-1.22-1.3a28.16 28.16 0 0 0-11.58-23.52c-7.5-5.34-16.5-6.24-22.7-6.05-4.93.15-17.39 3.49-24.7 9.6a1.27 1.27 0 0 1-2.09-.9c-.21-4.25-2.99-10.65-5.1-12.93-1.18-1.25-2.94-2.13-5.25-2.61-5.28-1.1-11.32.18-17 3.63-5.22 3.17-9.61 7.73-13.65 12.14A338.68 338.68 0 0 0 3.73 52.42z" fill="#E5E5E5"></path>
                            </svg>
                        </HeroTextImageBoxBottom>
                    </HeroTextBox>
                    <HeroButtons/>
                    <HeroImageBoxRight className="hero-image-right">
                        <svg viewBox="0 0 237 180" fill="none" xmlns="http://www.w3.org/2000/svg" width="237">
                            <path d="M235.9 88.47v11.16l-45.66 79.27H39.19v-4.62l.1-.16h147.08l49.38-85.65h.15z" fill="#2E0D4E"></path>
                            <path d="M190.24 180H39.19c-.6 0-1.1-.5-1.1-1.1v-4.62c0-.2.05-.39.15-.56l.1-.16c.2-.34.56-.54.95-.54h146.44l49.06-85.1c.2-.34.57-.55.96-.55h.15c.6 0 1.1.5 1.1 1.1v11.16c0 .2-.05.39-.15.56l-45.66 79.26c-.2.34-.56.55-.95.55zm-149.95-2.2H189.6l45.2-78.46v-7.01l-47.48 82.34c-.2.34-.56.55-.95.55H40.29v2.57z" fill="#2E0D4E"></path>
                            <path d="M235.75 88.47l-49.38 85.65H39.24l45.21-78.4 4.18-7.25h147.12z" fill="#fff"></path>
                            <path d="M186.37 175.22H39.25a1.1 1.1 0 0 1-.95-1.65l49.38-85.65c.2-.34.56-.55.95-.55h147.12a1.1 1.1 0 0 1 .96 1.65l-49.39 85.65c-.2.34-.56.55-.95.55zm-145.22-2.2h144.58l48.11-83.45H89.27l-48.12 83.45z" fill="#2E0D4E"></path>
                            <path d="M204.34 81.49h-13.58v-2.2h12.48V34.06H65.25v22.79h-2.2v-23.9c0-.6.49-1.1 1.1-1.1h140.19c.6 0 1.1.5 1.1 1.1v47.42c0 .61-.5 1.1-1.1 1.1z" fill="#2ae9aa"></path><path d="M151.52 174.62l-2.04-.84a14.81 14.81 0 0 0-1.77-13.74 14.76 14.76 0 0 0-12.26-6.41H98.09v-2.2h37.36c5.7 0 10.82 2.67 14.07 7.35a17.1 17.1 0 0 1 3.05 8.36 60.8 60.8 0 0 1 52.96-32.85h9.51v2.21h-9.49a58.6 58.6 0 0 0-52.44 34.58l-1.6 3.54z" fill="#2E0D4E"></path>
                            <path d="M226.72 114.2H74.06v2.2h152.66v-2.2z" fill="#2E0D4E"></path>
                            <path d="M134.26 103.88l-27.95 48.49 1.9 1.1 27.96-48.49-1.9-1.1z" fill="#2E0D4E"></path>
                            <path d="M89.29 68.25c7.8 0 14.13-6.33 14.13-14.15a14.14 14.14 0 1 0-14.13 14.15z" fill="#2ae9aa"></path><path d="M193 114.77l-15.7 27.22 1.9 1.1 15.7-27.22-1.9-1.1z" fill="#2E0D4E"></path>
                            <path d="M190.76 56.86H45.8v47.42h144.96V56.86z" fill="#fff"></path><path d="M190.76 105.38H45.8c-.6 0-1.1-.5-1.1-1.1V56.86c0-.61.49-1.1 1.1-1.1h144.96c.6 0 1.1.49 1.1 1.1v47.42c0 .6-.5 1.1-1.1 1.1zm-143.86-2.2h142.76V57.95H46.9v45.21z" fill="#2ae9aa"></path>
                            <path d="M70.2 95.09a14.14 14.14 0 1 0-14.13-14.15c0 7.81 6.33 14.15 14.13 14.15z" fill="#2ae9aa"></path><path d="M96.5 76.86c2.42-4 6.01-7.27 10.21-9.3 1.62-.78 3.64-1.35 5.11-.33 1.13.78 1.55 2.25 1.66 3.63.3 3.79-1.44 8.81-4.88 10.87-.77.46-1.79.61-2.55.15-.9-.56-1.17-1.8-.9-2.83 1.26-4.72 5.84-7.98 9.91-10.16 2.84-1.52 11.2-5.93 14.11-3.08 3.3 3.22-.34 16.35-3.85 12.42-1.43-2.4.44-5.44 2.59-7.23 2.33-1.93 5.17-3.38 8.2-3.55 3.02-.18 6.2 1.07 7.92 3.58 1.7 2.5 1.55 6.27-.68 8.32.23-1.84 1.89-3.14 3.5-4.07a29.7 29.7 0 0 1 23.87-2.46" fill="#fff"></path>
                            <path d="M107.12 83.27c-.59 0-1.16-.15-1.65-.45-1.25-.77-1.82-2.43-1.38-4.06.94-3.51 3.56-6.6 7.97-9.4-.18-.5-.45-.94-.86-1.22-1.07-.74-2.77-.19-4 .41a23.48 23.48 0 0 0-9.75 8.88l-1.89-1.14c2.52-4.16 6.3-7.61 10.67-9.73 3.2-1.54 5.14-.99 6.22-.24.65.44 1.16 1.09 1.53 1.9l.57-.31c5.1-2.73 12.23-5.99 15.4-2.9a5.3 5.3 0 0 1 1.34 2.55 13.4 13.4 0 0 1 4.76-1.22c3.6-.2 7.08 1.4 8.9 4.07a7.9 7.9 0 0 1 1.31 3.93l.04-.02a30.85 30.85 0 0 1 24.78-2.55l-.7 2.1a28.62 28.62 0 0 0-22.98 2.36c-.58.34-1.07.68-1.48 1.01a6.66 6.66 0 0 1-1.82 2.93 1.1 1.1 0 0 1-1.84-.95c.14-1.15.7-2.2 1.7-3.17.3-1.46.04-3.11-.84-4.4-1.39-2.05-4.12-3.26-6.94-3.1-1.7.1-3.26.63-4.6 1.32.03 1.62-.22 3.36-.65 4.91-.39 1.4-1.53 4.7-3.7 5.21-.56.13-1.65.17-2.73-1.02a1.11 1.11 0 0 1-.12-.17c-1.73-2.9.18-6.44 2.83-8.65.58-.48 1.27-1 2.05-1.49a3.71 3.71 0 0 0-.85-2.06c-.89-.87-3.74-1.6-12.82 3.26l-1.05.58.04.34c.31 4-1.48 9.55-5.41 11.9-.66.4-1.37.59-2.05.59zm5.29-11.5c-3.42 2.32-5.46 4.82-6.2 7.57-.15.57-.04 1.32.4 1.6.35.2.93.14 1.42-.16 2.82-1.68 4.36-5.73 4.38-9.02zm13.8 5.8c.15.15.35.31.51.28.44-.1 1.4-1.19 2.09-3.66.27-.97.44-1.96.51-2.9l-.7.56c-1.54 1.28-3.42 3.84-2.4 5.72z" fill="#2ae9aa"></path>
                            <path d="M170.57 89.2H96.44v2.21h74.13v-2.2z" fill="#2ae9aa"></path>
                            <path d="M98.09 153.8c-.4 0-.77-.2-.96-.56-.36-.63-8.62-15.55-8.62-22.49a9.6 9.6 0 0 1 9.58-9.6 9.6 9.6 0 0 1 9.58 9.6c0 6.94-8.27 21.86-8.62 22.5-.2.34-.57.56-.96.56zm0-30.43a7.4 7.4 0 0 0-7.38 7.38c0 5.05 5.18 15.45 7.38 19.63 2.2-4.18 7.38-14.58 7.38-19.63a7.4 7.4 0 0 0-7.38-7.38z" fill="#2ae9aa"></path>
                            <path d="M98.28 153.9H10.87c-3.9 0-7.4-2-9.36-5.37a10.78 10.78 0 0 1-.11-10.8l26.99-49.1a16.8 16.8 0 0 1 14.65-8.61h2.76v2.2h-2.76a14.6 14.6 0 0 0-12.73 7.48L3.32 138.8a8.6 8.6 0 0 0 .09 8.62 8.57 8.57 0 0 0 7.46 4.28h87.41v2.2z" fill="#2ae9aa"></path><path d="M217.48 32.87h-2.2c0-6.15-5-11.16-11.14-11.16v-2.2c7.35 0 13.34 6 13.34 13.36z" fill="#2ae9aa"></path><path d="M227.04 32.87h-2.2a20.74 20.74 0 0 0-20.7-20.74v-2.2a22.94 22.94 0 0 1 22.9 22.94z" fill="#2ae9aa"></path>
                            <path d="M236.95 32.87h-2.2a30.67 30.67 0 0 0-30.61-30.66V0a32.88 32.88 0 0 1 32.81 32.87z" fill="#2ae9aa"></path><path d="M98.28 135.15a4.41 4.41 0 1 1 .01-8.82 4.41 4.41 0 0 1-.01 8.82zm0-6.61a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4z" fill="#2ae9aa"></path>
                        </svg>
                    </HeroImageBoxRight>
                    <HeroImageBoxLeft className="hero-image-left">
                        <svg viewBox="0 0 174 298" fill="none" xmlns="http://www.w3.org/2000/svg" width="174"><path d="M1.06 174.28A1.06 1.06 0 0 1 0 173.23V61.02c0-4.1 2.77-7.72 6.75-8.8l127.9-33.74a9.08 9.08 0 0 1 7.94 1.56 9.03 9.03 0 0 1 3.58 7.23v107.85c0 .48-.32.9-.78 1.02L1.33 174.25l-.27.03zm136-154.01c-.61 0-1.24.08-1.85.25L7.28 54.27a7.01 7.01 0 0 0-5.18 6.75v110.84l141.95-37.55V27.27c0-2.2-1-4.22-2.75-5.55a6.96 6.96 0 0 0-4.25-1.45z" fill="#2E0D4E"></path><path d="M144.2 27.15L.03 65.29l.54 2.03L144.74 29.2l-.55-2.04z" fill="#2E0D4E"></path><path d="M9.51 131.4c-.23 0-.46-.07-.65-.21-.25-.2-.4-.51-.4-.84V76.77c0-.49.32-.9.8-1.03l63.4-15.91a1.05 1.05 0 0 1 1.32 1.02v53.25c0 .48-.34.9-.8 1.02l-63.4 16.25c-.1.03-.18.04-.27.04zm1.06-53.81v51.4l61.28-15.7V62.2L10.57 77.59z" fill="#887eff"></path><path d="M100.56 298c-.18 0-.37-.05-.53-.15L61.8 275.27a1.05 1.05 0 0 1-.52-.9v-.3c0-.38.2-.72.53-.9l7.76-4.43 1.05 1.83-6.43 3.67 36.38 21.5 35.64-20.32-6.45-3.82 1.08-1.8 7.76 4.58c.32.19.52.53.52.9v.3c0 .37-.2.72-.53.9l-37.51 21.38c-.16.1-.35.14-.53.14z" fill="#887eff"></path><path d="M162.76 47.4L34.85 81.13a8.06 8.06 0 0 0-5.97 7.77v112.22l144.06-41.21V55.17c0-5.3-5.05-9.16-10.18-7.78z" fill="#fff"></path><path d="M28.88 202.18c-.22 0-.45-.08-.63-.22-.27-.2-.42-.5-.42-.84V88.92c0-4.1 2.77-7.72 6.74-8.8L162.5 46.38a9.08 9.08 0 0 1 7.93 1.56 9.04 9.04 0 0 1 3.58 7.23v104.75c0 .47-.31.88-.76 1.01l-144.06 41.2c-.1.03-.2.05-.3.05zm136-154.02c-.6 0-1.23.09-1.84.25h-.01L35.12 82.16a7.01 7.01 0 0 0-5.18 6.75v110.81l141.95-40.6V55.17c0-2.2-1-4.23-2.76-5.56a6.95 6.95 0 0 0-4.24-1.45z" fill="#2E0D4E"></path><path d="M172.16 55.04L28.01 93.18l.54 2.04 144.16-38.14-.55-2.04z" fill="#2E0D4E"></path><path d="M101.09 182.04h-2.11v52.06h2.1v-52.06z" fill="#887eff"></path><path d="M100.56 288.7c-.18 0-.37-.05-.53-.15L61.8 265.97a1.05 1.05 0 0 1-.52-.9v-.3c0-.37.2-.72.53-.9l7.76-4.43 1.05 1.83-6.43 3.67 36.38 21.5 35.64-20.32-6.45-3.81 1.08-1.82 7.76 4.6c.32.18.52.53.52.9v.28c0 .38-.2.73-.53.92l-37.51 21.37c-.16.1-.35.14-.53.14z" fill="#887eff"></path><path d="M100.56 279.4c-.18 0-.37-.04-.53-.14L61.8 256.68a1.05 1.05 0 0 1-.52-.91v-.29c0-.38.2-.73.53-.91l37.5-21.38c.34-.2.74-.19 1.07 0l38.22 22.59c.32.19.52.53.52.9v.3c0 .37-.2.72-.53.9l-37.51 21.39c-.16.1-.34.14-.53.14zM64.2 255.65l36.38 21.49 35.64-20.31-36.38-21.5-35.64 20.31z" fill="#887eff"></path><path d="M21.57 189.65c-2.9 0-5.73-.96-8.08-2.8a13.02 13.02 0 0 1-5.04-10.31v-6.1h2.12v6.1a11 11 0 0 0 13.67 10.68l3.71-.92.5 2.05-3.71.91c-1.06.26-2.12.39-3.17.39z" fill="#887eff"></path><path d="M44.28 115.81a5.88 5.88 0 0 1-5.89-5.89v-.28c0-2.7 1.84-5.05 4.47-5.7l53.8-13.52a5.88 5.88 0 0 1 2.92 11.4l-53.82 13.8c-.49.13-.98.2-1.48.2zm53.84-23.46c-.31 0-.63.04-.94.12l-53.81 13.5a3.77 3.77 0 0 0-2.86 3.67v.28a3.78 3.78 0 0 0 4.73 3.66L99.05 99.8a3.78 3.78 0 0 0-.93-7.44z" fill="#887eff"></path><path d="M114.37 98.12a5.87 5.87 0 0 1-5.88-5.88V92a5.89 5.89 0 0 1 4.4-5.7l27.73-7.18a5.86 5.86 0 0 1 5.09 1.04 5.9 5.9 0 0 1-2.07 10.33l-27.72 7.44c-.52.14-1.04.2-1.55.2zm27.74-17.1c-.32 0-.65.05-.96.13l-27.72 7.19a3.78 3.78 0 0 0-2.83 3.65v.25a3.77 3.77 0 0 0 4.77 3.65l27.72-7.44a3.78 3.78 0 0 0-.98-7.43z" fill="#887eff"></path><path d="M44.28 134.22c-1.3 0-2.56-.43-3.6-1.24a5.85 5.85 0 0 1-2.29-4.65v-.29c0-2.7 1.84-5.04 4.47-5.7l18.67-4.8a5.87 5.87 0 0 1 7.34 5.72 5.89 5.89 0 0 1-4.43 5.7l-18.66 5.07c-.5.12-1 .19-1.5.19zm18.7-14.74c-.3 0-.62.03-.93.11l-18.67 4.79a3.78 3.78 0 0 0-2.87 3.66v.29a3.77 3.77 0 0 0 4.73 3.66l18.67-5.07a3.78 3.78 0 0 0-.92-7.44z" fill="#887eff"></path><path d="M79.15 125.25a5.88 5.88 0 0 1-5.89-5.88v-.25a5.89 5.89 0 0 1 4.41-5.7l50.22-12.5a5.86 5.86 0 0 1 5.08 1.05 5.9 5.9 0 0 1-2.07 10.33l-50.22 12.75c-.5.14-1.02.2-1.53.2zm50.23-22.4c-.32 0-.65.04-.96.12l-50.22 12.5a3.77 3.77 0 0 0-2.82 3.65v.25a3.77 3.77 0 0 0 4.77 3.65l50.22-12.76a3.78 3.78 0 0 0-1-7.41z" fill="#887eff"></path><path d="M51.26 81.95l-14.08 3.73.54 2.04 14.08-3.73-.54-2.03z" fill="#2E0D4E"></path><path d="M22.67 53.75L8.6 57.48l.54 2.03L23.2 55.8l-.54-2.04z" fill="#2E0D4E"></path><path d="M99.86 186.6a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5z" fill="#fff"></path><path d="M99.86 187.66a5.8 5.8 0 0 1-5.82-5.8 5.8 5.8 0 0 1 11.63 0c0 3.2-2.6 5.8-5.81 5.8zm0-9.49a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4z" fill="#887eff"></path><path d="M78.8 23.87a10.72 10.72 0 0 0-15.11 0l-1.5-1.49a12.73 12.73 0 0 1 9.06-3.74c3.42 0 6.63 1.33 9.05 3.74l-1.5 1.5z" fill="#887eff"></path><path d="M85.3 17.4a19.93 19.93 0 0 0-28.1 0l-1.5-1.49a22.05 22.05 0 0 1 31.1 0l-1.5 1.49z" fill="#887eff"></path><path d="M92.02 10.69a29.47 29.47 0 0 0-41.55 0l-1.5-1.49A31.33 31.33 0 0 1 71.26 0c8.4 0 16.32 3.27 22.27 9.2l-1.5 1.49z" fill="#887eff"></path><path d="M9.69 173.96a3.34 3.34 0 1 0 0-6.69 3.34 3.34 0 0 0 0 6.69z" fill="#fff"></path><path d="M9.69 175.01a4.4 4.4 0 0 1-4.4-4.39 4.4 4.4 0 0 1 8.8 0 4.4 4.4 0 0 1-4.4 4.4zm0-6.67a2.29 2.29 0 0 0-2.3 2.28 2.29 2.29 0 0 0 4.59 0 2.29 2.29 0 0 0-2.3-2.28z" fill="#887eff"></path><path d="M28.35 190.47a3.34 3.34 0 1 0 .01-6.69 3.34 3.34 0 0 0 0 6.69z" fill="#fff"></path><path d="M28.35 191.52a4.4 4.4 0 0 1-4.4-4.39 4.4 4.4 0 0 1 8.8 0 4.4 4.4 0 0 1-4.4 4.4zm0-6.67a2.3 2.3 0 0 0-2.29 2.28 2.3 2.3 0 0 0 4.58 0 2.3 2.3 0 0 0-2.29-2.28z" fill="#887eff"></path></svg>
                    </HeroImageBoxLeft>
                    <HeroImageBoxTop className="hero-image-top">
                        <svg viewBox="0 0 244 164" fill="none" xmlns="http://www.w3.org/2000/svg" width="244">
                            <path d="M128.13 72.75H6.42a5.27 5.27 0 0 1-4.78-7.53L7.6 52.8 4.07 60.7a4.87 4.87 0 0 0 4.48 6.85h117.84l.4.08 1.34 5.11z" fill="#ff9873"></path><path d="M128.13 73.86H6.42a6.4 6.4 0 0 1-5.8-9.12L6.6 52.31a1.12 1.12 0 0 1 2.03.93L5.1 61.17a3.69 3.69 0 0 0 .29 3.57 3.72 3.72 0 0 0 3.16 1.7H126.4c.08 0 .16.01.23.03l.4.08c.42.09.75.4.86.8l1.33 5.12a1.11 1.11 0 0 1-1.08 1.4zM2.99 64.98l-.34.72a4.16 4.16 0 0 0 3.77 5.93h120.26l-.77-2.97H8.55a6 6 0 0 1-5.56-3.68z" fill="#ff9873"></path>
                            <path d="M196.35 146.21H92.24l1.07-4.45h101.13c3.2 0 5.49-3.05 4.58-6.1l-1.27-4.26 2.95 9.08a4.5 4.5 0 0 1-4.35 5.73z" fill="#2E0D4E"></path><path d="M196.35 147.33H92.24c-.35 0-.67-.16-.89-.43a1.1 1.1 0 0 1-.2-.95l1.07-4.45c.12-.5.57-.85 1.09-.85h101.13a3.64 3.64 0 0 0 3.5-4.67l-1.26-4.26c-.17-.59.16-1.2.74-1.38.59-.18 1.21.14 1.4.72l2.94 9.07.02.04a5.6 5.6 0 0 1-5.43 7.16zm-102.7-2.23h102.7a3.38 3.38 0 0 0 3.28-4.3l-.21-.65-.26.37a5.86 5.86 0 0 1-4.73 2.35H94.2l-.54 2.23z" fill="#2E0D4E"></path>
                            <path d="M132.45 89.8h-.1a1.12 1.12 0 0 1-.98-.84l-5.3-20.3H8.55a6 6 0 0 1-5.5-8.4l14.82-33.3a6.03 6.03 0 0 1 5.5-3.56H154.3a6.02 6.02 0 0 1 5.06 2.75 5.93 5.93 0 0 1 .41 5.72l-26.31 57.27c-.18.4-.58.66-1.02.66zM23.37 25.63a3.8 3.8 0 0 0-3.46 2.24L5.09 61.17a3.69 3.69 0 0 0 .29 3.57 3.72 3.72 0 0 0 3.16 1.7h118.4c.51 0 .95.35 1.08.84l4.72 18.1 25-54.43a3.77 3.77 0 0 0-3.44-5.32H23.38z" fill="#ff9873"></path>
                            <path d="M87.68 164c-.5 0-.95-.34-1.08-.82l-15.92-58.17a5.86 5.86 0 0 1 5.69-7.4h108.1c2.59 0 4.91 1.72 5.65 4.2l9.97 33.54a5.86 5.86 0 0 1-5.66 7.53H94.07l-5.3 20.28c-.12.5-.57.84-1.07.84zM76.37 99.84a3.64 3.64 0 0 0-3.53 4.58l14.82 54.13 4.45-17.07c.13-.49.58-.83 1.08-.83h101.25a3.64 3.64 0 0 0 3.5-4.67l-9.96-33.54a3.68 3.68 0 0 0-3.51-2.6H76.37z" fill="#2E0D4E"></path>
                            <path d="M97.35 131a11.55 11.55 0 0 1-11.56-11.5c0-6.34 5.19-11.5 11.56-11.5 6.38 0 11.57 5.16 11.57 11.5S103.73 131 97.35 131zm0-20.78a9.31 9.31 0 0 0-9.32 9.28 9.31 9.31 0 0 0 9.32 9.27 9.31 9.31 0 0 0 9.33-9.27 9.31 9.31 0 0 0-9.33-9.28z" fill="#2E0D4E"></path>
                            <path d="M34.67 55.68c5.77 0 10.45-4.65 10.45-10.39S40.44 34.9 34.67 34.9a10.42 10.42 0 0 0-10.45 10.4c0 5.73 4.68 10.38 10.45 10.38z" fill="#ff9873"></path><path d="M213.73 121.72l-19.37-.17.02-2.22 19.36.17a8.81 8.81 0 0 0 8.22-5.7l19.25-48.6c1-2.7.64-5.62-1.03-8a8.69 8.69 0 0 0-7.21-3.75h-81.88v-2.22h81.87a10.9 10.9 0 0 1 9.05 4.7 10.77 10.77 0 0 1 1.28 10.08l-19.25 48.6a11.04 11.04 0 0 1-10.31 7.11z" fill="#ff9873"></path>
                            <path d="M194.18 124.32a3.53 3.53 0 0 0 3.55-3.53 3.53 3.53 0 0 0-3.55-3.52 3.53 3.53 0 0 0-3.54 3.52 3.53 3.53 0 0 0 3.54 3.53z" fill="#fff"></path><path d="M194.18 125.43a4.66 4.66 0 0 1-4.66-4.64 4.66 4.66 0 0 1 9.33 0c0 2.56-2.1 4.64-4.67 4.64zm0-7.05a2.42 2.42 0 0 0-2.42 2.41 2.42 2.42 0 0 0 4.85 0 2.42 2.42 0 0 0-2.43-2.4z" fill="#ff9873"></path>
                            <path d="M149.03 55.68a3.53 3.53 0 0 0 3.55-3.53 3.53 3.53 0 0 0-3.55-3.52 3.53 3.53 0 0 0-3.54 3.52 3.53 3.53 0 0 0 3.54 3.53z" fill="#fff"></path><path d="M149.03 56.8a4.66 4.66 0 0 1-4.66-4.65 4.66 4.66 0 0 1 9.33 0c0 2.56-2.1 4.64-4.67 4.64zm0-7.06a2.42 2.42 0 0 0-2.42 2.41 2.42 2.42 0 0 0 4.85 0 2.42 2.42 0 0 0-2.43-2.4z" fill="#ff9873"></path><path d="M64.69 56.4c-.66 0-1.3-.17-1.85-.5-1.4-.85-2.05-2.72-1.55-4.54 1.1-4.1 4.2-7.7 9.43-10.98a3.18 3.18 0 0 0-1.13-1.65c-1.34-.91-3.4-.25-4.9.48a27.74 27.74 0 0 0-11.56 10.45l-1.91-1.15a30.02 30.02 0 0 1 12.5-11.3c2.95-1.43 5.36-1.53 7.14-.3.79.53 1.4 1.32 1.81 2.33l.85-.46c5.95-3.17 14.28-6.96 17.93-3.42.8.76 1.3 1.85 1.59 3.1 1.7-.78 3.62-1.37 5.74-1.5 4.16-.23 8.21 1.6 10.32 4.69a9.02 9.02 0 0 1 1.54 4.8l.3-.17a36.43 36.43 0 0 1 29.05-2.97l-.7 2.11a34.13 34.13 0 0 0-27.24 2.79c-.71.4-1.31.82-1.8 1.23a7.64 7.64 0 0 1-2.12 3.39 1.12 1.12 0 0 1-1.86-.96 6.09 6.09 0 0 1 1.98-3.64 6.98 6.98 0 0 0-1-5.33c-1.68-2.45-4.94-3.9-8.34-3.7a13.9 13.9 0 0 0-5.6 1.6c.06 1.92-.24 3.98-.75 5.81-.45 1.6-1.76 5.4-4.24 5.98-.75.17-1.88.11-3.03-1.15a1.13 1.13 0 0 1-.12-.18c-1.99-3.3.23-7.34 3.3-9.88.7-.58 1.54-1.2 2.5-1.8a4.6 4.6 0 0 0-1.08-2.62c-2.52-2.44-10.68 1.32-15.32 3.79l-1.34.73.06.5c.36 4.65-1.72 11.05-6.3 13.77-.73.43-1.53.65-2.3.65zm6.4-13.61c-4.23 2.8-6.74 5.82-7.64 9.14-.2.73-.04 1.7.56 2.07.53.33 1.31.15 1.85-.17 3.47-2.07 5.32-7.1 5.24-11.04zm15.96 7.23c.3.3.56.44.78.39.72-.17 1.84-1.74 2.58-4.4.37-1.3.58-2.61.66-3.82-.42.3-.81.6-1.16.9-2.23 1.83-4.06 4.77-2.86 6.93z" fill="#ff9873"></path>
                            <path d="M163.03 125.06H119v2.23h44.03v-2.23z" fill="#2E0D4E"></path>
                            <path d="M174.97 113.19h-60.08v2.22h60.08v-2.22z" fill="#2E0D4E"></path><path d="M6.2 0L4.28 1.13 14.8 18.88l1.93-1.13L6.2 0z" fill="#ff9873"></path>
                            <path d="M25.34 5.22H23.1v11.5h2.24V5.22z" fill="#ff9873"></path>
                        </svg>
                    </HeroImageBoxTop>
                </Hero>
                <style jsx>{`
                    @media (min-width: 760px){
                        .hero-text-title {
                            font-size: 62px;
                        }
                        .hero-text-subtitle {
                            max-width: 340px;
                        }
                        .text-image-top {
                            -webkit-transform: translate3d(-54%,-118%,0) scale(0.75);
                            -ms-transform: translate3d(-54%,-118%,0) scale(0.75);
                            transform: translate3d(-54%,-118%,0) scale(0.75);
                        }
                        .text-image-bottom {
                            webkit-transform: translate3d(97%,-234%,0) scale(0.75);
                            -ms-transform: translate3d(97%,-234%,0) scale(0.75);
                            transform: translate3d(97%,-234%,0) scale(0.75);
                        }
                        .hero-image-right {
                                display: inline-block;
                                -webkit-animation-name: animation-pvi5yo;
                                animation-name: animation-pvi5yo;
                                -webkit-animation-direction: normal;
                                animation-direction: normal;
                                -webkit-animation-duration: 0.6s;
                                animation-duration: 0.6s;
                                -webkit-animation-delay: 0.1s;
                                animation-delay: 0.1s;
                                -webkit-animation-fill-mode: forwards;
                                animation-fill-mode: forwards;
                                -webkit-animation-timing-function: ease-out;
                                animation-timing-function: ease-out;
}
                        }
                        .hero-image-left {
                                display: inline-block;
                                -webkit-animation-name: animation-pvi5yo;
                                animation-name: animation-pvi5yo;
                                -webkit-animation-direction: normal;
                                animation-direction: normal;
                                -webkit-animation-duration: 0.6s;
                                animation-duration: 0.6s;
                                -webkit-animation-delay: 0.1s;
                                animation-delay: 0.1s;
                                -webkit-animation-fill-mode: forwards;
                                animation-fill-mode: forwards;
                                -webkit-animation-timing-function: ease-out;
                                animation-timing-function: ease-out;
                        }
                        .hero-image-top {
                            display: inline-block;
                            -webkit-animation-name: animation-pvi5yo;
                            animation-name: animation-pvi5yo;
                            -webkit-animation-direction: normal;
                            animation-direction: normal;
                            -webkit-animation-duration: 0.6s;
                            animation-duration: 0.6s;
                            -webkit-animation-delay: 0.1s;
                            animation-delay: 0.1s;
                            -webkit-animation-fill-mode: forwards;
                            animation-fill-mode: forwards;
                            -webkit-animation-timing-function: ease-out;
                            animation-timing-function: ease-out;
                        }
                       
                    }
                    @media (min-width: 960px){
                        .hero-text-title {
                            font-size: 50.64px;
                            -webkit-letter-spacing: 4px;
                            -moz-letter-spacing: 4px;
                            -ms-letter-spacing: 4px;
                            letter-spacing: 4px;
                        }
                        .hero-text-subtitle {
                            max-width: 378px;
                        }
                        .text-image-top {
                            -webkit-transform: translate3d(-54%,-118%,0) scale(1);
                            -ms-transform: translate3d(-54%,-118%,0) scale(1);
                            transform: translate3d(-54%,-118%,0) scale(1);
                        }
                        .text-image-bottom {
                            webkit-transform: translate3d(142%,-234%,0) scale(1);
                            -ms-transform: translate3d(142%,-234%,0) scale(1);
                            transform: translate3d(142%,-234%,0) scale(1);
                        }
                        .hero-image-right {
                        
                        }
                        .hero-image-left {
                        
                        }
                        .hero-image-top {
                        
                        }
                    }
                    @media (min-width: 1200px){
                        .hero-text-title {
                                font-size: 56.959999999999994px;
                                -webkit-letter-spacing: 4px;
                                -moz-letter-spacing: 4px;
                                -ms-letter-spacing: 4px;
                                letter-spacing: 4px;
                        }
                        .hero-text-subtitle {
                            font-size: 27.055999999999997px;
                            -webkit-letter-spacing: 0px;
                            -moz-letter-spacing: 0px;
                            -ms-letter-spacing: 0px;
                            letter-spacing: 0px;
                        }
                    }
                `}</style>
            </HeroBox>
        );
    }
}

export default HeroSection;