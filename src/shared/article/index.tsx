import {
  Post,
  Setting,
  TaxonomyTypes,
} from "../../../../../../__generated__/gqlTypes";
import React, { Component } from "react";

import { IHelpers } from "../../../../../helperProps";
import { Link } from "react-router-dom";
import { StyledTags } from "./Article.css";

interface IContent {
  post: Post;
  settings: Setting;
  adjacentPosts?: any;
  helpers: IHelpers;
}

export default class Content extends Component<IContent> {
  renderTaxonomies = (type: TaxonomyTypes) => {
    const { post } = this.props;

    const taxonomies = post[type].map(taxonomy => {
      return (
        <Link key={taxonomy.slug} to={taxonomy.slug}>
          {taxonomy.name}
        </Link>
      );
    });

    return taxonomies.length > 0 ? (
      <StyledTags className="tags">{taxonomies}</StyledTags>
    ) : null;
  };

  render() {
    const { post, helpers } = this.props;

    const content = helpers.setResponsiveImages(post.html);
    return (
      <>
        <article className="post-content">
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </article>

        {this.renderTaxonomies(TaxonomyTypes.Tags)}
      </>
    );
  }
}
