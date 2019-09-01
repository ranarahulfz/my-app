import React from 'react';
import styled from 'styled-components';
import Docs from "./Docs";
import Tutorials from "./Tutorials";

const TestinomialsBox = styled.section`
    background-color: rgb(244, 244, 244);
    position: relative;
    z-index: 1;
`
const TestinomialIcon = styled.span`
    position: absolute;
    z-index: 1;
    top: -22px;
    right: 20px;
`
const TestinomialWrapper = styled.div`
    margin: 0px auto;
    padding: 3rem 1rem 3.5rem;
    display: flex;
    flex-direction: column;
    -moz-box-align: center;
    align-items: center;
    text-align: center;
`
const TestinomialTitle = styled.h3`
    color: rgb(48, 13, 79);
    font-size: 23px;
    letter-spacing: 0.5px;
    font-family: maison-neue, sans-serif;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 1rem;
    max-width: 300px;
`
const TestinomialTiles = styled.div`
    display: flex;
    flex-direction: column;
    -moz-box-pack: justify;
    justify-content: space-between;
    margin: 2rem 0px;
`

const TutorialsBox = styled.div`
    position: relative;
    margin: 1rem;
`

class TestinomialSection extends React.Component{
    render() {
        return(
            <TestinomialsBox>
                <TestinomialIcon className="arrow-icon">
                    <svg width="45" height="57" viewBox="0 0 45 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" d="M22.5 22.48V2L2 13.82V34.3l20.5-11.82z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path clip-rule="evenodd" d="M22.5 42.95V22.48L2 34.3v20.48l20.5-11.83z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path clip-rule="evenodd" d="M22.5 22.48V2L43 13.82V34.3L22.5 22.48z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path clip-rule="evenodd" d="M22.5 42.95V22.48L43 34.3v20.48L22.5 42.95z" stroke="#6A52FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </TestinomialIcon>
                <TestinomialWrapper className="testinomial-wrapper">
                    <TestinomialTitle className="testinomial-title">
                        We have everything you need to get set up
                    </TestinomialTitle>
                    <TestinomialTiles className="testinomial-tiles">
                        <Docs/>
                        <Tutorials/>
                    </TestinomialTiles>
                </TestinomialWrapper>
                <style jsx>{`
                     @media (min-width: 400px){
                        .arrow-icon {
                            right: 40px;
                        }
                        .testinomial-title {
                            font-size: 23px;
                            letter-spacing: 0px;
                        }
                    }
                    @media (min-width: 760px){
                        .testinomial-wrapper {
                            padding: 4rem 1rem 3.75rem;
                        }
                        .testinomial-title {
                            font-size: 25.875px;
                            letter-spacing: 0px;
                        }
                        .testinomial-tiles {
                            flex-flow: row nowrap;
                        }
                    }
                    @media (min-width: 960px){
                        .testinomial-title {
                            font-size: 29.118px;
                            letter-spacing: 0px;
                        }
                    }
                    @media (min-width: 1200px){
                       .testinomial-title {
                            font-size: 32.752px;
                            letter-spacing: 0px;
                        }
                    }
                `}</style>
            </TestinomialsBox>
        );
    }
}

export default TestinomialSection;