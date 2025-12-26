import styled from "styled-components";
import { textColors } from "../../theme";

export const Wrapper = styled.div`

  width: 100%;
  max-width: 1332px;
  padding: 0 16px;
  margin: 20px auto;


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


export const AddWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    gap: 16px;
    margin: 60px 0;

    .card{
        height: 100px;
        width: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #D9D9D9;
        
    }

    .img{
        object-fit: contain;
        height: 80%;
        width: 80%;
        background-color: #D9D9D9;

    }
`