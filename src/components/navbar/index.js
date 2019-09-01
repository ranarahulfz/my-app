import React from 'react'
import styled from 'styled-components'
import Products from "./Products";
import Developers from "./Developers";
import Company from "./Company";
import SigninButton from "./SigninButton";
import SignupButton from "./SignupButton";

const Nav = styled.nav`
      width: 100%;
      margin: 0 auto;
`

const NavBox = styled.div`
      max-width: 75rem;
      margin: 0 auto;
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      z-index: 2;
      padding: 0.75rem 1rem;
`

const LogoBox = styled.div`

`

const NavLogoLink = styled.a`

`

const Logo = styled.span`
    display: inline-block;
    width: 144px;
    height: 38px;
    vertical-align: middle;
`

const NavLogoPowerLink = styled.a`
      display: inline-block;
      font-family: maison-neue,sans-serif;
      font-weight: 700;
      line-height: 1.5;
      background: #E6E6E6;
      color: #300D4F;
      position: absolute;
      left: 167px;
      padding: 5px;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-size: 12px;
      line-height: 16px;
      border-radius: 2px;
      -webkit-letter-spacing: 1px;
      -moz-letter-spacing: 1px;
      -ms-letter-spacing: 1px;
      letter-spacing: 1px;
      top: 0.7rem;
`

const MenuBox = styled.div`
  
`

const NavButtonsBox = styled.div`

`

class Navbar extends React.Component {
    render() {
        return(
          <Nav>
              <NavBox className="navbar-container">
                  <LogoBox>
                      <NavLogoLink>
                          <Logo>
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 1203.43 317.2">
                                  <path fill="#300d4f" d="M102.66 316.72v-79.51a.46.46 0 0 1 .24-.41l102.18-59a.46.46 0 0 0 .24-.41v-22.61a.47.47 0 0 0-.71-.41l-101.24 58.45a.47.47 0 0 1-.71-.41v-22.62a.47.47 0 0 1 .24-.41l102.18-59a.49.49 0 0 0 .24-.41v-22.61a.48.48 0 0 0-.71-.41L103.37 165.4a.47.47 0 0 1-.71-.41v-22.61a.46.46 0 0 1 .24-.41L205.08 83a.47.47 0 0 0 .24-.41V59.67a1 1 0 0 0-.47-.82L103.13.13a.93.93 0 0 0-.94 0L82.84 11.3a.47.47 0 0 0 0 .82l101.24 58.45a.48.48 0 0 1 0 .82l-19.35 11.17a1 1 0 0 1-.95 0L62.07 23.84a1 1 0 0 0-1 0L41.78 35a.47.47 0 0 0 0 .82L143 94.28a.47.47 0 0 1 0 .82l-19.34 11.17a1 1 0 0 1-1 0L21 47.54a1 1 0 0 0-1 0L0 59.12V258a.46.46 0 0 0 .24.41l19.58 11.31a.47.47 0 0 0 .71-.41V71.8a.47.47 0 0 1 .71-.41L40.83 82.7a.47.47 0 0 1 .23.41v198.6a.47.47 0 0 0 .24.41l19.58 11.31a.48.48 0 0 0 .72-.42V95.51a.47.47 0 0 1 .71-.41l19.58 11.3a.47.47 0 0 1 .24.41v198.61a.49.49 0 0 0 .23.41l19.64 11.3a.47.47 0 0 0 .66-.41z"></path>
                                  <g fill="#300d4f"><path d="M308 254.11V62.7a3.56 3.56 0 0 1 3.66-3.58h56.9c36.08 0 58.49 21 58.49 56.18s-25.43 57.58-58.81 57.58h-30.38a1.91 1.91 0 0 0-1.91 1.86v79.68a3.56 3.56 0 0 1-3.65 3.58h-20.66a4.07 4.07 0 0 1-3.64-3.89zm60.56-104.89c19.07 0 29.88-15.87 29.88-33.92 0-18.68-9.85-32.84-29.88-32.84h-30.7a1.92 1.92 0 0 0-1.86 1.87v63a1.91 1.91 0 0 0 1.91 1.87z"></path><path d="M544.81 58.81h20.66a3.56 3.56 0 0 1 3.66 3.58V207c0 32.84-26.86 52.91-58.33 52.91-30.84 0-57.7-20.23-57.7-52.91V62.39a3.56 3.56 0 0 1 3.65-3.58h20.35a3.56 3.56 0 0 1 3.66 3.58v144.1c0 17.89 13.66 29.25 29.88 29.25s30.2-11.36 30.2-29.25v-144a4.2 4.2 0 0 1 3.97-3.68z"></path>
                                    <path d="M640.18 157.16c-19.71-13.23-32.9-28-32.9-50.27 0-31.9 26.86-50.26 57.38-50.26 28.76 0 54 16 55.47 56.49a3.83 3.83 0 0 1-3.66 3.89h-18.91a3.64 3.64 0 0 1-3.66-3.42c-1.27-22-14.46-32.53-31-32.53-15.9 0-27.82 9.34-27.82 24.28 0 12.91 7.79 19.92 28.14 34.23l28.45 20.54c19.71 14.32 30.83 27.24 30.83 47.62 0 33-27.18 52.6-59.13 52.6-30.2 0-54-16.49-56.58-56.95a3.64 3.64 0 0 1 3.66-3.9h19.23a3.75 3.75 0 0 1 3.65 3.43c1.75 22.56 15.26 33 31.16 33 15.26 0 29.56-8.25 29.56-27.55 0-12-5.4-17.89-21-28.32z"></path><path d="M855.55 254.11v-83.72a1.91 1.91 0 0 0-1.91-1.87h-60.87a1.91 1.91 0 0 0-1.91 1.87v83.72a3.56 3.56 0 0 1-3.66 3.57h-20.66a3.56 3.56 0 0 1-3.66-3.57V62.7a3.56 3.56 0 0 1 3.66-3.58h20.66a3.56 3.56 0 0 1 3.66 3.58v80a1.91 1.91 0 0 0 1.91 1.86h60.87a1.91 1.91 0 0 0 1.91-1.86v-80a3.56 3.56 0 0 1 3.66-3.58h20.66a3.56 3.56 0 0 1 3.66 3.58v191.56a3.56 3.56 0 0 1-3.66 3.58h-20.66a3.69 3.69 0 0 1-3.66-3.73z"></path>
                                    <path d="M935.82 254.11V62.7a3.56 3.56 0 0 1 3.65-3.58h101.09a3.56 3.56 0 0 1 3.66 3.58v16.65a3.56 3.56 0 0 1-3.66 3.58H965.7a1.92 1.92 0 0 0-1.91 1.87v58.66a1.91 1.91 0 0 0 1.91 1.87h51.5a3.56 3.56 0 0 1 3.65 3.58v16.65a3.56 3.56 0 0 1-3.65 3.58h-51.5a1.92 1.92 0 0 0-1.91 1.87v61a1.92 1.92 0 0 0 1.91 1.87h74.86a3.66 3.66 0 0 1 3.66 3.58v16.65a3.66 3.66 0 0 1-3.66 3.57H939.47a3.46 3.46 0 0 1-3.65-3.57z"></path><path d="M1173.28 254.11l-30.51-83.26a1.86 1.86 0 0 0-1.75-1.24h-28.29a1.91 1.91 0 0 0-1.91 1.86v82.64a3.56 3.56 0 0 1-3.66 3.57h-20.66a3.55 3.55 0 0 1-3.65-3.57V62.7a3.56 3.56 0 0 1 3.65-3.58h56.59c34.65 0 58.49 21.94 58.49 54.47 0 21.63-11.45 39.68-32.43 50.26a.8.8 0 0 0-.47 1.09l34.49 88.23a3.66 3.66 0 0 1-3.5 5h-21.46a6.72 6.72 0 0 1-4.93-4.06zm-32.42-107.22c16.69 0 31.63-11.67 31.63-32.21 0-18.37-11.92-32.22-31.63-32.22h-28.13a1.74 1.74 0 0 0-1.75 1.71v60.69a1.91 1.91 0 0 0 1.91 1.87z"></path>
                                  </g>
                              </svg>
                          </Logo>
                      </NavLogoLink>
                      <NavLogoPowerLink>
                          We're hiring
                      </NavLogoPowerLink>
                  </LogoBox>
                  <MenuBox>
                      <Products />
                      <Developers/>
                      <Company/>
                  </MenuBox>
                  <NavButtonsBox>
                        <SigninButton/>
                        <SignupButton/>
                  </NavButtonsBox>
              </NavBox>
              <style jsx>{`
               
              `}</style>
          </Nav>
        );
    }
}

export default Navbar;