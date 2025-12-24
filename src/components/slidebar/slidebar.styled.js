import styled from "styled-components";
import { slidebars, textColors, textsStyle } from "../../theme";

export const SlidebarBox = styled.div`
    height:400px;
    /* width: 1314px; */
    background-color: ${slidebars.bg};
    border-radius: 50px;
    /* margin: 20px 100px; */
    /* overflow: hidden; */
    position: relative;
    padding: 10px;
    display: flex;
    pointer-events: none;
    /* justify-content: space-between; */
    
    .img-wrapper{
        height: 450px;
        width: 450px;
        padding: 0;
        margin: 0;
        position: relative;
        top: -55px; 
        left: 300px;
        pointer-events: auto;

    }

    .text-wrapper{
        width: 615px;
        height: 352px;
    }

    .text-span{
        font-size: ${textsStyle.font_size};
        font-weight: ${textsStyle.text_weight};
        font-style: ${textsStyle.text_style};
    }

    .text-data-span{
        border: 1px solid black;
        padding: 5px 17px;
        border-radius: 100px;
        background-color: ${textColors.primary};
        color: ${textColors.white};
        
        
    }
`


export const LampImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;
    top: 0;
`