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
        .post-full-meta-date {
          color: #3eb0ef;
        }
      }
      .post-full-title {
        margin: 0;
        color: #090a0b;
      }
    }

    .post-full-image {
      margin: 0 -10vw -165px;
      height: 800px;
      background: #c5d2d9 50%;
      background-size: cover;
      border-radius: 5px;
    }
    .post-full-content {
      position: relative;
      margin: 0 auto;
      padding: 70px 100px 0;
      min-height: 230px;
      font-family: Georgia, serif;
      font-size: 2.2rem;
      line-height: 1.6em;
      background: #fff;
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
