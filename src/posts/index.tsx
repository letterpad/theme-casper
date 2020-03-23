import ArticleItem from "./ArticleItem";
import { Container } from "./Posts.css";
import { IThemeContainer } from "../../../../types";
import Loader from "../../../../helpers/Loader";
import React from "react";

const Posts: IThemeContainer["Posts"] = ({
  router,
  settings,
  initialProps,
  loading,
  data,
  helpers,
  ...rest
}) => {
  const posts = data;

  if (loading) return <Loader />;
  if (!posts) {
    return null;
  }

  if (posts.rows.length === 0) {
    return null;
  }

  return (
    <Container className="inner">
      <div className="post-feed">
        {posts.rows.map(item => (
          <ArticleItem post={item} />
        ))}
      </div>
    </Container>
  );
};

export default Posts;
