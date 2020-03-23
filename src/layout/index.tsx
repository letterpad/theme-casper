require("../../public/css/style.css");
require("../../public/css/typography.css");

import { Footer, Main } from "./Layout.css";

import { Grid } from "./Grid.css";
import Header from "./Header";
import { ILayoutProps } from "../../../../types";
import { Link } from "react-router-dom";
import { PrismCss } from "../../public/css/Prism.css";
import React from "react";

const Layout: React.ComponentType<ILayoutProps> = props => {
  const { Content, settings, router, ...rest } = props;

  const { site_footer, subscribe_embed } = settings;
  const headerWithBanner = props.contentType === "posts";
  return (
    <Grid>
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
            <SetDangerousHTML html={settings.site_footer.value} />
          </section>
          <SetDangerousHTML
            html={settings.subscribe_embed.value}
            className="subscribe"
          />
          <nav className="site-footer-nav">
            {settings.social_facebook.value && (
              <a
                href={settings.social_facebook.value}
                target="_blank"
                rel="noopener"
              >
                Facebook
              </a>
            )}
            {settings.social_twitter.value && (
              <a
                href={settings.social_twitter.value}
                target="_blank"
                rel="noopener"
              >
                Twitter
              </a>
            )}
            {settings.social_github.value && (
              <a
                href={settings.social_github.value}
                target="_blank"
                rel="noopener"
              >
                Github
              </a>
            )}
          </nav>
        </div>
      </Footer>
    </Grid>
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
