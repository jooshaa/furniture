import styled from "styled-components";

export const AboutStyle = styled.div`
  width: 100%;
  max-width: 1332px;
  padding: 0 16px;
  margin: 20px auto;

  .about_box {
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }

  .description {
    width: 640px;
  }

  /* ======================= */
  /* 📱 ≤ 900px */
  /* ======================= */
  @media (max-width: 900px) {
    .about_box {
      flex-direction: column;
      gap: 24px;
    }

    .description {
      width: 100%;
      height: auto;
    }
  }
`;
