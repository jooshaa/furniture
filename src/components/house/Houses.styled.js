import styled from "styled-components";
import { textColors } from "../../theme";

export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    .card{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        
    }

    .img_box{
        width: 100%;
        height: 270px;
    }

    .img{
        width: 100%;
        height: 270px;
        object-fit: cover;
        border-radius: 10px;

    }

    .text_icon_box{
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        margin-top: 20px;
        align-items: baseline;
        
    }

    .text{
        font-size: 20px;
        font-weight: 700;
        color: ${textColors.primary}
    }

    .data{
        font-size: 14px;
        font-weight: 500;
        color: ${textColors.primary};
        margin-bottom: 15px
    }

    .hr{
        
         height: 1px;
         border: none;
          background-color: ${textColors.primary};
    }

   @media (max-width: 1100px) {
  grid-template-columns: repeat(2, 1fr);
}

/* 1 колонка — ТОЛЬКО ОЧЕНЬ НИЗКО */
@media (max-width: 520px) {
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 10px;
  margin: 10px auto;

  .card {
    height: auto;
  }

  .img_box {
    height: 220px;
  }
}



`

