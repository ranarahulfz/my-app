import React from 'react';
import styled from 'styled-components';

const HeroButtonsBox = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
`
const RegisterFreeLink = styled.a`
    font-family: maison-neue,sans-serif;
    font-weight: 700;
    line-height: 1;
    -webkit-appearance: none;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    border-radius: 2px;
    font-size: 1rem;
    padding: 0.875rem 1rem;
    color: white;
    background-color: #C223CE;
    border: 2px solid #C223CE;
    -webkit-transition: all 0.1s ease;
    transition: all 0.1s ease;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    margin-bottom: 1rem;
    animation-timing-function: ease-out;
`
const BrowserDocLink = styled.a`
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
    align-self: flex-start;
    padding: 1rem;
    font-size: 1rem;
    transition: box-shadow .2s ease,background-color .2s ease,transform .2s ease;
    position: relative;
    line-height: 24px;
    color: #300D4F;
    background-color: transparent;
    padding: 0;
    margin: 0 8px 6px;
    border-radius: 0;
    box-shadow: none;
    align-self: center;
    :before {
        content: " ";
        position: absolute;
        left: 0;
        right: 100%;
        bottom: -2px;
        z-index: 5;
        background: #300D4F;
        height: 3px;
    }
    : after {
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

class HeroButtons extends React.Component{
    render() {
        return(
            <HeroButtonsBox>
                <RegisterFreeLink>
                    Register for free
                </RegisterFreeLink>
                <BrowserDocLink>
                    Browse the docs
                </BrowserDocLink>
            </HeroButtonsBox>
        );
    }
}

export default HeroButtons;