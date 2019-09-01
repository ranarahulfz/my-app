import React from 'react';
import styled from 'styled-components';

const SignupButtonBox = styled.div`
  display: inline-block;
`
const SignupLink = styled.a`
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
    padding: 0.875rem 1rem;
    color: white;
    background-color: #C223CE;
    border: 2px solid #C223CE;
    -webkit-transition: all 0.1s ease;
    transition: all 0.1s ease;
    width: auto;
    margin-left: 1rem;
`

class SignupButton extends React.Component{
    render() {
        return(
            <SignupButtonBox>
                <SignupLink>
                    Sign up
                </SignupLink>
            </SignupButtonBox>
        );
    }
}

export default SignupButton;