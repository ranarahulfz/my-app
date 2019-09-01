import React from 'react';
import styled from 'styled-components';

let visibilityStatus = 'hidden';

const ProductsBox = styled.div`
    position: relative;
    display: inline-block;
`
const ProductsLink = styled.a`
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
    :hover {
      ${visibilityStatus} = 'visible' ;
    }
`
const ProductsListBox = styled.div`
    position: absolute;
    padding: 0.5rem;
    z-index: 2;
    background: white;
    top: 114%;
    left: 50%;
    list-style: none;
    visibility: hidden;
    -webkit-transform: translate3d(-51%,10px,0);
    -ms-transform: translate3d(-51%,10px,0);
    transform: translate3d(-51%,10px,0);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    opacity: 0;
    cursor: auto;
    box-shadow: 0px -6px 10px rgba(0,0,0,0.1),0px 3px 4px rgba(0,0,0,0.1);
    border-radius: 4px;
`
const TopPointer = styled.span`
    position: absolute;
    top: -14px;
    left: calc(50% - 10px);
`
const ProductsLinks = styled.a`
    display: block;
    background: transparent;
    padding: 1rem;
    -webkit-text-decoration: none;
    text-decoration: none;
    -webkit-transition: .1s background linear;
    transition: .1s background linear;
    border-radius: 2px;
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
`
const ProductLinkBox = styled.span`
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 2rem;
    cursor: pointer;
`
const ProductDescription = styled.p`
    font-family: maison-neue,sans-serif;
    font-weight: 300;
    line-height: 1.6;
    font-size: 18px;
    color: #300D4F;
    margin-bottom: 1rem;
    white-space: nowrap;
    font-size: 16px !important;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 8px;
    margin-bottom: 0;
    margin-left: 35px;
`

class Products extends React.Component{
    render() {
        return(
            <ProductsBox>
                <ProductsLink>
                    Products
                    <svg width="12" height="8" viewBox="0 0 12 8" className="down-arrow">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M6 7.66L.34 2 1.76.59 6 4.83 10.24.59 11.66 2 6 7.66z" fill="#300D4F"></path>
                    </svg>
                </ProductsLink>
                <ProductsListBox style = {{visibility: {visibilityStatus}}}>
                    <TopPointer>
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                            <path d="M20 12H0L10 0l10 12z" fill="#fff"></path>
                        </svg>
                    </TopPointer>
                    <ProductsLinks>
                        <div>
                            <ProductLinkBox>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 989.68 200">
                                    <title>chatkit_full-logo</title>
                                    <g fill="#300D4F">
                                        <path d="M326.78,38.39c25.4,0,45.14,17.51,47.88,42.91l-24.88,4.12c-2.57-15.28-10.81-23.86-23-23.86-17.33,0-27.63,14.76-27.63,39.47s10.3,39.48,27.63,39.48c12.88,0,21.11-9.1,23.34-25.75L375,119.05c-3.09,27-22,44.62-48.23,44.62-32.09,0-53-24.71-53-62.64S294.69,38.39,326.78,38.39Z"></path>
                                        <path d="M397.65,41h25.4V88h39V41h25.4V161.1H462V111.16h-39V161.1h-25.4Z"></path>
                                        <path d="M583.85,142.39h-46L531.5,161.1H506.27L549.18,41h23.34l42.9,120.13H590.19Zm-7.73-22.31L561,75.81h-.35l-15.1,44.27Z"></path>
                                        <path d="M644.07,64.31H609.24V41h94.9V64.31H669.47V161.1h-25.4Z"></path>
                                        <path d="M727.81,41h25.41V90.05h.34L793.89,41h29.69l-44.11,53.2L827,161.1h-30.2l-32.95-48h-.35l-10.29,12.53V161.1H727.81Z"></path>
                                        <path d="M845.53,41h25.4V161.1h-25.4Z"></path>
                                        <path d="M929.62,64.31H894.78V41h94.9V64.31H955V161.1h-25.4Z"></path>
                                    </g>
                                    <g fill="#ff8473">
                                        <path d="M73.51.11,90.94,10.18a.84.84,0,0,0,.84,0L109.21.11a.84.84,0,0,1,.84,0l17.22,9.94a.42.42,0,0,1,0,.73L91.57,31.4a.45.45,0,0,1-.42,0L55.45,10.78a.42.42,0,0,1,0-.73L72.67.11A.84.84,0,0,1,73.51.11Z"></path>
                                        <path d="M18.91,31.88,91.15,73.59a.4.4,0,0,0,.42,0l72.25-41.71a.42.42,0,0,0,0-.73L146.6,21.21a.86.86,0,0,0-.85,0l-54,31.16a.84.84,0,0,1-.84,0L37,21.21a.86.86,0,0,0-.85,0L18.91,31.15A.42.42,0,0,0,18.91,31.88Z"></path>
                                        <path d="M181.46,42.8,110.05,84a.84.84,0,0,0-.42.73v19.88a.43.43,0,0,0,.64.37l72.24-41.71a.44.44,0,0,0,.21-.37V43.53A.84.84,0,0,0,181.46,42.8Z"></path>
                                        <path d="M109.63,127v19.88a.43.43,0,0,0,.64.37l72.24-41.71a.44.44,0,0,0,.21-.37V85.73a.84.84,0,0,0-1.26-.73l-71.41,41.22A.84.84,0,0,0,109.63,127Z"></path>
                                        <path d="M109.63,169.15V189a.42.42,0,0,0,.64.36l72.24-41.71a.41.41,0,0,0,.21-.36v-19.4a.84.84,0,0,0-1.26-.73l-71.41,41.23A.84.84,0,0,0,109.63,169.15Z"></path>
                                        <path d="M1.27,42.8,90.94,94.57a.84.84,0,0,1,.42.73V199.58a.42.42,0,0,1-.63.36L73.3,189.88a.41.41,0,0,1-.21-.36V105.61a.44.44,0,0,0-.21-.37L.21,63.29A.44.44,0,0,1,0,62.92V43.53A.84.84,0,0,1,1.27,42.8Z"></path>
                                        <path d="M1.27,85l53.12,30.67a.83.83,0,0,1,.43.73v62.08a.42.42,0,0,1-.64.36L36.76,168.78a.4.4,0,0,1-.22-.36V126.71a.44.44,0,0,0-.21-.37L.21,105.49a.44.44,0,0,1-.21-.37V85.73A.84.84,0,0,1,1.27,85Z"></path>
                                        <path d="M1.27,127.19l16.58,9.58a.84.84,0,0,1,.42.73v19.88a.42.42,0,0,1-.63.37L.21,147.68a.41.41,0,0,1-.21-.36v-19.4A.85.85,0,0,1,1.27,127.19Z"></path>
                                    </g>
                                </svg>
                            </ProductLinkBox>
                            <ProductDescription>
                                Extensible API for in-app chat
                            </ProductDescription>
                        </div>
                    </ProductsLinks>
                    <ProductsLinks>
                        <div>
                            <ProductLinkBox>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1170.84 200">
                                    <title>channels_full-logo</title>
                                    <g fill="#300D4F">
                                        <path d="M326.39,37.64c25.37,0,45.08,17.48,47.82,42.85L349.36,84.6c-2.58-15.25-10.8-23.82-23-23.82-17.32,0-27.6,14.74-27.6,39.42s10.28,39.42,27.6,39.42c12.85,0,21.08-9.08,23.31-25.71l24.85,4.29c-3.08,26.91-21.94,44.56-48.16,44.56-32.06,0-53-24.68-53-62.56S294.33,37.64,326.39,37.64Z"></path>
                                        <path d="M397.17,40.21h25.37v47h38.91v-47h25.37v120H461.45V110.31H422.54v49.88H397.17Z"></path>
                                        <path d="M583.14,141.51H537.2l-6.34,18.68h-25.2l42.85-120h23.31l42.86,120h-25.2Zm-7.72-22.28L560.34,75H560l-15.08,44.23Z"></path>
                                        <path d="M633.35,40.21h26L700,116.48h.34V40.21h25.37v120H699.68L659.06,83.91h-.34v76.28H633.35Z"></path>
                                        <path d="M757.09,40.21h26.06l40.62,76.27h.34V40.21h25.37v120H823.43L782.81,83.91h-.35v76.28H757.09Z"></path>
                                        <path d="M880.84,40.21h77.3V63.52H906.21V87.86h47.3v22.28h-47.3v26.74h52.1v23.31H880.84Z"></path>
                                        <path d="M984.7,40.21h25.37v96.67h50.74v23.31H984.7Z"></path>
                                        <path d="M1100.74,115.28C1104,133.11,1111,140,1127,140c11.83,0,18.51-4.29,18.51-11.83,0-8.4-5.65-12.51-25.71-19.37-27.94-9.43-38.39-19.54-38.39-37.2,0-20,16.8-33.93,40.62-33.93,23.48,0,41.82,14.22,45.6,35.31l-24.69,5.31c-3.25-12.17-9.94-17.83-20.91-17.83-9.43,0-15.6,4.29-15.6,11,0,6.17,5.14,9.6,23,15.6,14.91,5.14,25.71,10.8,32.06,17.14s9.42,14.23,9.42,24c0,20.74-18,34.62-44.22,34.62-28.63,0-46.45-14.74-50.74-42.16Z"></path>
                                    </g>
                                    <g fill="#6a52ff">
                                        <path d="M127.12,10,109.92.11a.84.84,0,0,0-.84,0L91.67,10.16a.84.84,0,0,1-.84,0L73.42.11a.84.84,0,0,0-.84,0L55.38,10a.42.42,0,0,0,0,.73L91,31.36a.45.45,0,0,0,.42,0l35.66-20.59A.42.42,0,0,0,127.12,10Z"></path>
                                        <path d="M163.62,31.11l-17.2-9.92a.84.84,0,0,0-.84,0L91.67,52.31a.84.84,0,0,1-.84,0L36.92,21.19a.84.84,0,0,0-.84,0l-17.2,9.92a.42.42,0,0,0,0,.73L91,73.5a.4.4,0,0,0,.42,0l72.16-41.66A.42.42,0,0,0,163.62,31.11Z"></path>
                                        <path d="M109.5,84.65v19.86a.42.42,0,0,0,.63.36l72.16-41.66a.41.41,0,0,0,.21-.36V43.48a.84.84,0,0,0-1.26-.73L109.92,83.92A.84.84,0,0,0,109.5,84.65Z"></path>
                                        <path d="M110.13,147l72.16-41.66a.44.44,0,0,0,.21-.37V85.62a.84.84,0,0,0-1.26-.73l-71.32,41.18a.83.83,0,0,0-.42.73v19.85A.42.42,0,0,0,110.13,147Z"></path>
                                        <path d="M91.25,177.53V95.19a.83.83,0,0,0-.42-.73L74.26,84.89a.84.84,0,0,0-1.26.73V167a.84.84,0,0,1-1.26.73l-16.57-9.57a.84.84,0,0,1-.42-.73V74.11a.84.84,0,0,0-.42-.73L37.76,63.82a.84.84,0,0,0-1.26.73v81.37a.84.84,0,0,1-1.26.73l-16.57-9.56a.84.84,0,0,1-.42-.73V53a.84.84,0,0,0-.42-.73L1.26,42.75A.84.84,0,0,0,0,43.48V147.14a.41.41,0,0,0,.21.36L91,199.94a.4.4,0,0,0,.42,0l90.83-52.44a.41.41,0,0,0,.21-.36V127.77a.84.84,0,0,0-1.26-.73L92.51,178.26A.84.84,0,0,1,91.25,177.53Z"></path>
                                    </g>
                                </svg>
                            </ProductLinkBox>
                            <ProductDescription>
                                Build scalable realtime features
                            </ProductDescription>
                        </div>
                    </ProductsLinks>
                    <ProductsLinks>
                        <div>
                            <ProductLinkBox>
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
                                    <g fill="#300D4F">
                                        <path d="M260,43.13H309.6c19.72,0,33.9,12.88,33.9,30.65,0,9.29-4.4,17-11.57,21.36v.32c9.78,4.57,15.82,14.35,15.82,26.25,0,24-14.19,35.54-43.37,35.54H260Zm46.13,45.49c8.64,0,13.37-4.24,13.37-12.07,0-7.66-4.73-11.9-13.37-11.9h-22v24Zm2.61,47.11c10.27,0,15-4.57,15-14.19,0-9-5.22-13.85-14.83-13.85H284.17v28Z"></path>
                                        <path d="M371.21,43.13h73.52V65.3H395.34V88.45h45v21.19h-45v25.44h49.55v22.17H371.21Z"></path>
                                        <path d="M531.61,139.48H487.92l-6,17.77h-24L498.68,43.13h22.17l40.76,114.12h-24Zm-7.34-21.19L509.93,76.23h-.33l-14.34,42.06Z"></path>
                                        <path d="M579.36,43.13H606.1l31.95,76.79h.33l32.11-76.79h26.73V157.25H673.59V86.82h-.33l-29.83,70.43H633L603.33,86.82H603v70.43H579.36Z"></path>
                                        <path d="M742.53,114.54c3.1,17,9.78,23.47,24.94,23.47,11.25,0,17.61-4.07,17.61-11.25,0-8-5.38-11.9-24.45-18.42-26.57-9-36.52-18.58-36.52-35.37,0-19.08,16-32.28,38.64-32.28,22.33,0,39.77,13.53,43.36,33.58l-23.48,5c-3.09-11.57-9.45-16.95-19.88-16.95-9,0-14.84,4.08-14.84,10.43,0,5.87,4.89,9.13,21.85,14.84,14.18,4.89,24.45,10.27,30.48,16.3s9,13.53,9,22.82c0,19.73-17.12,32.93-42.06,32.93-27.23,0-44.18-14-48.26-40.1Z"></path>
                                    </g>
                                </svg>
                            </ProductLinkBox>
                            <ProductDescription>
                                Programmatic push notifications
                            </ProductDescription>
                        </div>
                    </ProductsLinks>
                </ProductsListBox>
                <style jsx>{`
                    .down-arrow{
                        display: inline-block;
                        margin-left: 0.4rem;
                        -webkit-transform: translate3d(0,2px,0);
                        -ms-transform: translate3d(0,2px,0);
                        transform: translate3d(0,2px,0);
                    }
                `}</style>
            </ProductsBox>
        );
    }
}

export default Products;