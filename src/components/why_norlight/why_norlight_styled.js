import styled from "styled-components";
import { textColors } from "../../theme";

export const Wrapper = styled.div`
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


    .big-assorti{
        /* border: 1px solid black; */
        width: 100%;
        height: 360px;
        background-color: #d9d9d950;
    }

    
    .centralize_box{
        /* border: 1px solid black; */
        width: 250px;
        height: 270px;
        margin: 35px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .textes_box{
        /* width: 250px; */
        /* height: 150px; */
        /* border: 1px solid black; */
        display:flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 20px;
    }

    @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .text_settings {
      font-size: 32px;
    }
  }

  /* ===================== */
  /* 📱 ≤ 600px */
  /* ===================== */
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    .title_back {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }

    .text_settings {
      font-size: 26px;
    }
  }
`

