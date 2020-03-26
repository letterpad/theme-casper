import styled from "styled-components";

export const StyledTags = styled.div`
  display: inline;
  word-break: break-all;
  a {
    border: 1px solid #ddd;
    font-size: 1.3rem;
    padding: 4px 8px;
    border-radius: 10px;
    box-shadow: none;
    background: #fdfdfd;

    color: rgba(var(--color-accent));
    margin-right: 8px;

    &:after {
      content: ",";
    }
    &:last-child:after {
      content: "";
    }
  }
`;
