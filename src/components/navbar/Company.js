import React from 'react';
import styled from 'styled-components';

const CompanyBox = styled.div`
    position: relative;
    display: inline-block;
`
const CompanyLink = styled.a`
    font-family: maison-neue,sans-serif;
    font-weight: 700;
    line-height: 1.5;
    color: #300D4F;
    border: 0;
    font-size: 1rem;
    height: 40px;
    line-height: 40px;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 24px;
    cursor: pointer;
    border-radius: 2px;
    min-height: 40px;
    -webkit-transition: 0.05s linear all;
    transition: 0.05s linear all;
    outline: none;
    background: transparent;
    -webkit-text-decoration: none;
    text-decoration: none;
`
const CompanyListBox = styled.div``

class Company extends React.Component{
    render() {
        return(
          <CompanyBox>
              <CompanyLink>
                  Company
                  <svg width="12" height="8" viewBox="0 0 12 8" className="down-arrow">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M6 7.66L.34 2 1.76.59 6 4.83 10.24.59 11.66 2 6 7.66z" fill="#300D4F"></path>
                  </svg>
              </CompanyLink>
              <CompanyListBox>

              </CompanyListBox>
              <style jsx>{`
                    .down-arrow{
                        display: inline-block;
                        margin-left: 0.4rem;
                        -webkit-transform: translate3d(0,2px,0);
                        -ms-transform: translate3d(0,2px,0);
                        transform: translate3d(0,2px,0);
                    }
                `}</style>
          </CompanyBox>
        );
    }
}

export default Company;