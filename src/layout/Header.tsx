import { HeaderContent, Navigation, StyledHeader } from "./Layout.css";

import { ILayoutProps } from "../../../../types";
import { Link } from "react-router-dom";
import React from "react";

interface IHeaderProps {
  headerWithBanner: boolean;
}
type TypeHeader = Pick<ILayoutProps, "settings" | "router"> & IHeaderProps;

const Header: React.FC<TypeHeader> = ({ settings, headerWithBanner }) => {
  const banner = JSON.parse(settings.banner.value);
  const logo = settings.site_logo.value;
  const parsedMenu = JSON.parse(settings.menu.value);

  const displayInlineLogo = !headerWithBanner;
  return (
    <StyledHeader bg={banner.src}>
      <div className="inner">
        {headerWithBanner && (
          <HeaderContent className="site-header-content">
            <h1 className="site-title">
              {logo ? (
                <img
                  className="site-logo"
                  src={logo}
                  alt={settings.site_title.value}
                />
              ) : (
                settings.site_title.value
              )}
            </h1>
            <h2 className="site-description">
              {settings.site_description.value}
            </h2>
          </HeaderContent>
        )}

        <Navigation className="site-nav" displayInlineLogo={displayInlineLogo}>
          <div className="site-nav-left">
            {displayInlineLogo && (
              <Link className="site-nav-logo" to="/">
                {logo ? (
                  <img src={logo} alt={settings.site_title.value} />
                ) : (
                  settings.site_title.value
                )}
              </Link>
            )}
            <ul className="nav" role="menu">
              {parsedMenu.map((item, i) => {
                return (
                  <li className="" key={i} role="menuitem">
                    <Link to={i === 0 ? "/" : item.slug} className="normal">
                      {i === 0 ? "Home" : item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="site-nav-right">
            <div className="social-links">
              {settings.social_facebook.value && (
                <a
                  className="social-link social-link-fb"
                  href={settings.social_facebook.value}
                  target="_blank"
                  rel="noopener"
                >
                  <FacebookIcon />
                </a>
              )}

              {settings.social_twitter.value && (
                <a
                  className="social-link social-link-tw"
                  href={settings.social_twitter.value}
                  target="_blank"
                  rel="noopener"
                >
                  <TwitterIcon />
                </a>
              )}

              {settings.social_github.value && (
                <a
                  className="social-link"
                  href={settings.social_github.value}
                  target="_blank"
                  rel="noopener"
                >
                  <GithubIcon />
                </a>
              )}
            </div>
          </div>
        </Navigation>
      </div>
    </StyledHeader>
  );
};

export default Header;

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
  </svg>
);