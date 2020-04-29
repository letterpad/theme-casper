import { Post } from "../../../../../../__generated__/gqlTypes";
import React from "react";
import styled from "styled-components";

interface IProps {
  post: Post;
}
const Author: React.FC<IProps> = ({ post }) => {
  return (
    <Container>
      <section className="author-card">
        {post.author.avatar && (
          <img
            className="author-profile-image"
            src={post.author.avatar}
            alt="Author"
          />
        )}
        <section className="author-card-content">
          <h4 className="author-card-name">
            <a href="#">{post.author.name}</a>
          </h4>
          <p>{post.author.bio}</p>
        </section>
      </section>
    </Container>
  );
};
export default Author;

const Container = styled.div`
  .author-card {
    display: flex;
    align-items: center;
    .author-profile-image {
      margin-right: 15px;
      width: 60px;
      height: 60px;
    }
    .author-card-content {
      .author-card-name {
        margin: 0 0 2px;
        padding: 0;
        font-size: 2rem;
        a {
          color: #15171a;
          font-weight: 700;
        }
      }
      p {
        margin: 0;
        color: #738a94;
        line-height: 1.3em;
      }
    }
  }
`;
