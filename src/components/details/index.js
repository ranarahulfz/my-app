import React from 'react';
import styled from 'styled-components';

const DetailsBox = styled.section`
    max-width: 550px;
    margin: 0px auto;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    -moz-box-align: center;
    align-items: center;
    text-align: center;
`
const DetailsTitle = styled.h3`
    color: rgb(48, 13, 79);
    margin-bottom: 1rem;
    font-size: 19px;
    letter-spacing: 0px;
    font-family: maison-neue, sans-serif;
    font-weight: 700;
    line-height: 1.5;
`
const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    -moz-box-pack: justify;
    justify-content: space-between;
    margin: 2rem 0px;
`
const DetailTiles = styled.div`
    margin: 1rem;
`
const DetailsIcon = styled.span`
    display: block;
    margin-bottom: 1rem;  
`
const TilesTitle = styled.h4`
    color: rgb(48, 13, 79);
    font-size: 28px;
    letter-spacing: 0px;
    font-family: italian-plate, sans-serif;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 0.375rem;
    text-transform: uppercase;
`
const TilesText = styled.p`
    font-family: maison-neue, sans-serif;
    font-weight: 300;
    line-height: 1.5;
    font-size: 16px;
    letter-spacing: 0px;
    color: rgb(48, 13, 79);
    margin: 0px auto;
`

class DetailSection extends React.Component{
    render() {
        return(
            <DetailsBox className="details-box">
                <DetailsTitle className="details-title">
                    Pusher is the category leader in robust APIs for app developers building scalable realtime communication features
                </DetailsTitle>
                <DetailsWrapper className="details-wrapper">
                    <DetailTiles>
                        <DetailsIcon className="tiles-icon">
                                <svg width="61" height="56" viewBox="0 0 61 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 21.45l6.7-3.91 3.9 6.7" stroke="#300D4F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32.78 42.77v-2.84" stroke="#300D4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M40.23 40.75L38.8 38.3" stroke="#300D4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M45.52 35.45l-2.44-1.43" stroke="#300D4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M47.54 28h-2.83" stroke="#300D4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M45.52 20.55l-2.44 1.43" stroke="#300D4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M40.23 15.25L38.8 17.7" stroke="#300D4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32.78 13.23v2.84" stroke="#300D4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25.32 15.25l1.43 2.45" stroke="#300D4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.03 20.55l2.44 1.43" stroke="#300D4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 28h2.84" stroke="#300D4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.03 35.45l2.44-1.43" stroke="#300D4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25.32 40.75l1.43-2.45" stroke="#300D4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32.78 42.77v-2.84" stroke="#300D4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.71 11.46a26.2 26.2 0 0 1 12.34-8.3A25.53 25.53 0 0 1 32.78 2 26.24 26.24 0 0 1 42.9 4.04a25.8 25.8 0 0 1 9.94 7.42 26.18 26.18 0 0 1 5.4 11.3 26.06 26.06 0 0 1-20.22 30.71 25.78 25.78 0 0 1-7.9.4 25.78 25.78 0 0 1-15.73-7.49 26.2 26.2 0 0 1-6.44-10.65A25.77 25.77 0 0 1 6.9 25.34a26.06 26.06 0 0 1 1.04-5.07" stroke="#300D4F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg><svg width="49" height="56" viewBox="0 0 49 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.1 37.5l1.32-2.1-5.84-3.42 5.84-3.4-1.32-2.1-7.78 4.68v1.66l7.78 4.68zm4.15 2.58l7.28-15.38-1.74-.82-7.32 15.42 1.78.78zm9.66-2.58l7.78-4.68v-1.66l-7.78-4.68-1.32 2.1 5.84 3.4-5.84 3.42 1.32 2.1z" fill="#300D4F"></path><path clip-rule="evenodd" d="M2 53.88h45v-45H2v45z" stroke="#300D4F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M6.38 2h36.25L47 8.88H2L6.38 2z" stroke="#300D4F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </DetailsIcon>
                        <TilesTitle className="tiles-title">
                            40+ SDKs
                        </TilesTitle>
                        <TilesText className="tiles-text">
                            Bring our APIs to any tech stack.
                        </TilesText>
                    </DetailTiles>
                    <DetailTiles>
                        <DetailsIcon className="tilesicon">
                            <svg width="61" height="56" viewBox="0 0 61 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 21.45l6.7-3.91 3.9 6.7" stroke="#300D4F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32.78 42.77v-2.84" stroke="#300D4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M40.23 40.75L38.8 38.3" stroke="#300D4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M45.52 35.45l-2.44-1.43" stroke="#300D4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M47.54 28h-2.83" stroke="#300D4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M45.52 20.55l-2.44 1.43" stroke="#300D4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M40.23 15.25L38.8 17.7" stroke="#300D4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32.78 13.23v2.84" stroke="#300D4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25.32 15.25l1.43 2.45" stroke="#300D4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.03 20.55l2.44 1.43" stroke="#300D4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 28h2.84" stroke="#300D4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.03 35.45l2.44-1.43" stroke="#300D4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25.32 40.75l1.43-2.45" stroke="#300D4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32.78 42.77v-2.84" stroke="#300D4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.71 11.46a26.2 26.2 0 0 1 12.34-8.3A25.53 25.53 0 0 1 32.78 2 26.24 26.24 0 0 1 42.9 4.04a25.8 25.8 0 0 1 9.94 7.42 26.18 26.18 0 0 1 5.4 11.3 26.06 26.06 0 0 1-20.22 30.71 25.78 25.78 0 0 1-7.9.4 25.78 25.78 0 0 1-15.73-7.49 26.2 26.2 0 0 1-6.44-10.65A25.77 25.77 0 0 1 6.9 25.34a26.06 26.06 0 0 1 1.04-5.07" stroke="#300D4F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </DetailsIcon>
                        <TilesTitle className="tiles-title">
                            Speedy Support
                        </TilesTitle>
                        <TilesText className="tiles-text">
                            Ready to answer any question, whenever you need us.
                        </TilesText>
                    </DetailTiles>
                </DetailsWrapper>
                <style jsx>{`
                    @media (min-width: 400px){
                        .details-title {
                            font-size: 19px;
                            letter-spacing: 0px;
                        }
                        .tiles-title {
                            font-size: 28px;
                            letter-spacing: 0px;
                        }
                       
                    }
                    @media (min-width: 760px){
                        .details-box {
                                padding: 4rem 1rem 3.75rem;
                        }
                        .details-title {
                            font-size: 21.375px;
                            letter-spacing: 0px;
                        }
                        .details-wrapper {
                            flex-flow: row nowrap;
                        }
                        .tiles-title {
                            font-size: 31.5px;
                            letter-spacing: 0px;
                        }
                       
                    }
                    @media (min-width: 960px){
                        .details-title {
                            font-size: 24.054px;
                            letter-spacing: 0px;
                        }
                        .tiles-title {
                            font-size: 35.448px;
                            letter-spacing: 0px;
                        }
                    }
                    @media (min-width: 1200px){
                       .details-title {
                            font-size: 27.056px;
                            letter-spacing: 0px;
                        }
                        .tiles-title {
                            font-size: 39.872px;
                            letter-spacing: 0px;
                        }
                    }
                `}</style>
            </DetailsBox>
        );
    }
}

export default DetailSection;