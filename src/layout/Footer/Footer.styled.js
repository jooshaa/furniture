import styled from "styled-components";
import { bgColors } from "../../theme";

export const FooterWrapper = styled.footer`
  background-color: ${bgColors.lightBlue};
  padding: 70px 0;
  display: flex;



  .container1 {
    width: 100%;
    max-width: 1332px;
    padding: 0 16px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    gap: 80px;
  }

  .column1 {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .client {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .social {
    display: flex;
    gap: 8px;
  }

  .tel {
    display: inline-block;
    font-size: 22px;
    font-weight: 500;
    color: #333;
    text-decoration: none;
    letter-spacing: 0.5px;
  }


  @media (max-width: 900px) {
    padding: 50px 0;

    .container1 {
      gap: 40px;
      flex-wrap: wrap;
    }

    .column1 {
      flex: 1 1 45%;
    }
  }

  
  @media (max-width: 600px) {
    padding: 40px 0;

    .container1 {
      flex-direction: column;
      gap: 32px;
    }

    .column1 {
      gap: 24px;
    }

    .tel {
      font-size: 18px;
    }
  }
`;
