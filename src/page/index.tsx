import Article from "../shared/article";
import { IThemeContainer } from "../../../../types";
import Loader from "../shared/Loader";
import OhSnap from "../shared/OhSnap";
import React from "react";
import { StyledPost } from "./Page.css";

const Post: IThemeContainer["Post"] = ({
  settings,
  loading,
  data,
  helpers,
}) => {
  const post = data;
  if (loading) return <Loader />;
  if (!post) {
    return (
      <OhSnap message="Sorry, this post does not exist or might be restricted." />
    );
  }

  return (
    <StyledPost className="inner">
      <article className="post-full post">
        <header className="post-full-header">
          <section className="post-full-meta">
            <time className="post-full-meta-date" dateTime={post.publishedAt}>
              {post.publishedAt}
            </time>
          </section>
          <h1 className="post-full-title">{post.title}</h1>
        </header>

        <figure
          className="post-full-image"
          style={{
            backgroundImage: `url(${post.cover_image.src})`,
          }}
        ></figure>
        <section className="post-full-content">
          <Article post={post} settings={settings} helpers={helpers} />
        </section>
      </article>
    </StyledPost>
  );
};
export default Post;
