import styled from "styled-components";
import { textColors } from "../../theme";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1332px;
  padding: 0 16px;
  margin: 0 auto;
  
`


export const Why_Norlight = styled.div`
  margin-bottom: 30px;


  .title_back{
    display: flex;
    justify-content: space-between;
  }

  .text_settings{
    font-size: 40px;
    font-weight: 700;
    font-style: bold;
    color: ${textColors.primary}
  }

  .about_company{
    border: 1px solid black;
    padding: 10px 50px;
    border-radius: 100px;
    width: 200px;
    height: 20px;
  }

  .arrow{
    margin-left: 15px;
  }
`

export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    .card{
        width: 100%;
        height: 395px;
        padding: 20px;
        /* border: 1px solid black; */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        gap: 15px
    }
    .img_wrapper{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center
    }

    .img_box {
        width: 173px;
        height: 216px; 
    }

    .img{
        height: 100%;
        width: 100%;
        object-fit: fill;
    }

    .price_basket{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 280px;
        height: 100px;


    }
    .priceses{
        display: flex;
        flex-direction: column
        
    }

    .like{
        right: 0;
        top: 0;
        height: 5px;
        width: 5px
    }

    .previous_price{
        font-size: 12px;
        color: #9F9F9F;
    }

    .price{
        color: #454545;
        font-size: 22px;
    }

   @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* ===================== */
  /* 📱 ≤ 900px — 2 */
  /* ===================== */
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* ===================== */
  /* 📱 ≤ 600px — 1 */
  /* ===================== */
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  

    `