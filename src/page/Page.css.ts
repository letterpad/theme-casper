import styled from "styled-components";
export const StyledPost = styled.div`
  .post-full {
    position: relative;
    z-index: 50;

    .post-full-header {
      margin: 0 auto;
      padding: 6vw 3vw 3vw;
      max-width: 1040px;
      text-align: center;
      .post-full-meta {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #738a94;
        font-size: 1.4rem;
        font-weight: 600;
        text-transform: uppercase;
        @media (max-width: 500px) {
          font-size: 1.2rem;
          line-height: 1.3em;
        }
        .post-full-meta-date {
          color: #3eb0ef;
        }
      }
      .post-full-title {
        margin: 0;
        color: #090a0b;
        @media (max-width: 500px) {
          font-size: 2.9rem;
        }
      }
    }

    .post-full-image {
      margin: 0 -10vw -165px;
      height: 800px;
      background: #c5d2d9 50%;
      background-size: cover;
      border-radius: 5px;
      @media (max-width: 1170px) {
        margin: 0 -4vw -100px;
        height: 600px;
        border-radius: 0;
      }
      @media (max-width: 800px) {
        height: 400px;
      }
      @media (max-width: 500px) {
        margin-bottom: 4vw;
        height: 350px;
      }
    }

    .post-full-footer {
      -ms-flex-pack: justify;
      justify-content: space-between;
      margin: 0 auto;
      padding: 3vw 0 6vw;
      max-width: 840px;
      display: flex;
    }
  }
`;
