import styled from "styled-components";
import { bgColors } from "../../theme";

export const CatalogDiv = styled.div`
  width: 100%;
  max-width: 1332px;
  padding: 0 16px;
  margin: 0 auto;
  
`;

export const Catalog_back_box = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 17px;
    /* height: 100px; */

    .all_catalog{
        border: 1px solid black;
        padding: 10px 50px;
        border-radius: 100px;
        width: 200px;
        height: 20px;
        /* margin-top: 50px */
    }

    .arrow{
        margin-left: 12px
    }

    .catalog_text{
        font-weight: 700;
        font-size: 40px
    }

`;


export const BoxForCard = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    width: 100%;

    .card{
        width: 100%;
        height: 250px;
        border-radius: 20px;
        background-color: ${bgColors.lightBlue};
        display: flex;
        justify-content: space-between;
        padding: 15px;
        
    }

    .img_box{
        width: 180px;
        height: 205px;
    }

    .img{
        object-fit: fill;
        width: 100%;
        height: 100%;
    }

    .name_price_box{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 20px;
    }

    .arrow{
        margin-left: 10px
    }

    @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* ======================= */
  /* 📱 ≤ 600px — 1 карточка */
  /* ======================= */
  @media (max-width: 600px) {
    grid-template-columns: 1fr;

    .card {
      height: auto;
      gap: 12px;
    }
  }

`