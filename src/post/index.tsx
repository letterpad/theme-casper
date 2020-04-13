import { FloatingHeader, StyledPost } from "./Post.css";
import React, { useEffect } from "react";

import Article from "../shared/article";
import Author from "../shared/article/Author";
import Comments from "../shared/article/Comments";
import { IThemeContainer } from "../../../../types";
import Loader from "../shared/Loader";
import OhSnap from "../shared/OhSnap";
import Progress from "./Progress";

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

  useEffect(() => {
    const sentinalEl = document.querySelector(".post-full-header");
    const headerEl = document.querySelector(".floating-header");
    const handler = entries => {
      // entries is an array of observed dom nodes
      // we're only interested in the first one at [0]
      // because that's our .sentinal node.
      // Here observe whether or not that node is in the viewport
      if (!entries[0].isIntersecting) {
        headerEl.classList.add("floating-active");
      } else {
        headerEl.classList.remove("floating-active");
      }
    };

    // create the observer
    const observer = new window.IntersectionObserver(handler);
    // give the observer some dom nodes to keep an eye on
    observer.observe(sentinalEl);
  }, [post.id]);

  const displayAuthor = settings.displayAuthorInfo == "true";
  const disqusShortname = settings.disqus_id;
  const disqusConfig = {
    url: post.slug,
    identifier: post.id.toString(),
    title: post.title,
  };

  return (
    <>
      <FloatingHeader className="floating-header">
        <div>
          <div className="floating-header-logo">
            <a href="https://eueung.github.io/">
              {settings.site_logo.src ? (
                <img src={settings.site_logo.src} alt={post.title} />
              ) : (
                settings.site_title
              )}
            </a>
          </div>
          <span className="floating-header-divider">—</span>
          <div className="floating-header-title">{post.title}</div>
        </div>
        <Progress height="3px" barColor="#555" />
      </FloatingHeader>

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

          <footer className="post-full-footer">
            {displayAuthor && <Author post={post} />}
          </footer>

          <Comments
            disqusConfig={disqusConfig}
            disqusShortname={disqusShortname}
          />
        </article>
      </StyledPost>
    </>
  );
};
export default Post;
