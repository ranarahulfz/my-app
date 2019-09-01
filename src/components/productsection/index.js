import React from 'react';
import styled from 'styled-components';
import Products from "../navbar/Products";
import ChatKit from "./ChatKit";
import Channels from "./Channels";
import Beams from "./Beams";

const ProductsBox = styled.section`
    max-width: 75rem;
    margin: 0px auto;
    padding: 1rem 0px 3.5rem;
    display: flex;
    flex-direction: column;
    -moz-box-align: center;
    align-items: center;
`
const ProductTitle = styled.h2`
    font-family: italian-plate, sans-serif;
    font-weight: 600;
    line-height: 1.1;
    font-size: 33px;
    letter-spacing: 1px;
    color: rgb(48, 13, 79);
    margin-bottom: 2.625rem;
    text-transform: uppercase;
`
const ProductsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    -moz-box-align: center;
    align-items: center;
`

class ProductSection extends React.Component{
    render() {
        return(
            <ProductsBox>
                <ProductTitle className="products-title">Our Products</ProductTitle>
                <ProductsWrapper className="products-wrapper">
                    <ChatKit />
                    <Channels />
                    <Beams  />
                </ProductsWrapper>
                <style jsx>{`
                    @media (min-width: 760px){
                        .products-title {
                            font-size: 37.125px;
                            letter-spacing: 1px;
                        }
                        .chatkit-box {
                            margin: 3.5rem 0px;
                            padding: 3rem 1rem;
                            width: 352px;
                            height: 226px;
                        }
                        .channels-box {
                            margin: 3.5rem 0px;
                            padding: 3rem 1rem;
                            width: 352px;
                            height: 226px;
                        }
                        .beams-box {
                            margin: 3.5rem 0px;
                            padding: 3rem 1rem;
                            width: 352px;
                            height: 226px;
                        }
                        .chatkit-mobile-background {
                            display: none;
                        }
                        .chatkit-background {
                            display: block;
                            z-index: -1;
                            top: -36px;
                            right: -36px;
                        }
                    }
                    @media (min-width: 960px){
                        .products-title {
                            font-size: 41.778px;
                            letter-spacing: 1px;
                            margin-bottom: 3.5rem;
                        }
                    }
                    @media (min-width: 1200px){
                        .products-title {
                            font-size: 46.992px;
                            letter-spacing: 1px;
                        }
                        .products-wrapper {
                            flex-flow: row nowrap;
                            -moz-box-pack: justify;
                            justify-content: space-between;
                            width: 100%;
                        }
                        .chatkit-box {
                            margin: 1.25rem 0px;
                        } 
                        .channels-box {
                            margin: 1.25rem 0px;
                        }
                        .beams-box {
                            margin: 1.25rem 0px;
                        } 
                    } 
                `}</style>
            </ProductsBox>
        );
    }
}

export default ProductSection;