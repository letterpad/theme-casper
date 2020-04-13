require("../../public/css/style.css");
require("../../public/css/typography.css");

import { Container, Footer, Main } from "./Layout.css";

import Header from "./Header";
import { ILayoutProps } from "../../../../types";
import { PrismCss } from "../../public/css/Prism.css";
import React from "react";

const Layout: React.ComponentType<ILayoutProps> = props => {
  const { Content, settings, router, ...rest } = props;

  const headerWithBanner = props.contentType === "posts";
  return (
    <Container className="theme-casper">
      <PrismCss />
      <Header
        router={router}
        settings={settings}
        headerWithBanner={headerWithBanner}
      ></Header>

      <Main className="outer">
        <Content {...props} />
      </Main>
      <Footer className="site-footer outer">
        <div className="site-footer-content inner">
          <section className="copyright">
            <SetDangerousHTML html={settings.site_footer} />
          </section>
          <SetDangerousHTML
            html={settings.subscribe_embed}
            className="subscribe"
          />
          <nav className="site-footer-nav">
            {settings.social_facebook && (
              <a href={settings.social_facebook} target="_blank" rel="noopener">
                Facebook
              </a>
            )}
            {settings.social_twitter && (
              <a href={settings.social_twitter} target="_blank" rel="noopener">
                Twitter
              </a>
            )}
            {settings.social_github && (
              <a href={settings.social_github} target="_blank" rel="noopener">
                Github
              </a>
            )}
          </nav>
        </div>
      </Footer>
    </Container>
  );
};

export default Layout;

// ------------------| helpers |-----------------------

function SetDangerousHTML({
  html,
  id = "",
  className = "",
}: {
  html: string;
  id?: string;
  className?: string;
}) {
  if (!html) return null;

  return (
    <div
      id={id}
      className={className}
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
}
