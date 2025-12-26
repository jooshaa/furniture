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
    margin-bottom: 50px;
    /* justify-content: space-between; */
    
    .img-wrapper{
        height: 450px;
        width: 450px;
        padding: 0;
        margin: 0;
        position: relative;
        top: -55px; 
        left: 120px;
        pointer-events: auto;

    }

    .text-wrapper{
        width: 615px;
        height: 352px;
        position: relative;
        top: 30px;
        left: 150px;
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

    //=============REsponsive
    @media (max-width: 900px) {
    width: 830px;
    margin: 0 10px;
    height: auto;
    padding: 34px;
    /* gap: 24px; */

    display: flex;
    align-items: center;
    justify-content: space-between;

    .img-wrapper {
      width: 320px;
      height: 320px;

      top: 0;
      left: 0;
    }

    .text-wrapper {
      width: auto;
      height: auto;

      top: 0;
      left: 0;
    }
  }
`


export const LampImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;
    top: 0;
`


