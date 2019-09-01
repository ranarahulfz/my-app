import React from 'react';
import styled from 'styled-components';

const SigninButtonBox = styled.div`
  display: inline-block;
`
const SigninLink = styled.a`
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
        transition-property: right;
        transition-duration: 0.2s;
        transition-timing-function: ease-out;
    }
    :after {
        content: " ";
        position: absolute;
        left: 0;
        right: 0;
        z-index: 4;
        bottom: 2px;
        background: #C223CE;
        height: 3px;
    }
`

class SigninButton extends React.Component{
    render() {
        return(
            <SigninButtonBox>
                <SigninLink>
                    Sign in
                </SigninLink>
            </SigninButtonBox>
        );
    }
}

export default SigninButton;