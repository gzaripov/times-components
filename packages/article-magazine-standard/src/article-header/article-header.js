import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import Context from "@times-components/context";
import { ArticleFlags } from "@times-components/article-flag";
import { fontFactory } from "@times-components/styleguide";

import Label from "../article-label/article-label";
import Meta from "../article-meta/article-meta";
import Standfirst from "../article-standfirst/article-standfirst";
import {
  articleHeaderPropTypes,
  articleHeaderDefaultProps
} from "./article-header-prop-types";
import styles from "../styles";

const ArticleHeader = ({
  bylines,
  flags,
  isTablet,
  hasVideo,
  headline,
  label,
  longRead,
  onAuthorPress,
  publicationName,
  publishedTime,
  standfirst
}) => (
  <Context.Consumer>
    {({ theme: { headlineFont, headlineCase } }) => (
      <View style={[styles.container, isTablet && styles.tabletContainer]}>
        <Label isVideo={hasVideo} label={label} />
        <Text
          style={[
            styles.articleHeadline,
            {
              ...fontFactory({
                font: headlineFont || "headline",
                fontSize: isTablet ? "pageHeadline" : "headline"
              })
            },
            headlineCase ? { textTransform: headlineCase } : null
          ]}
        >
          {headline}
        </Text>
        <ArticleFlags flags={flags} longRead={longRead} withContainer />
        <Standfirst standfirst={standfirst} />
        <Meta
          bylines={bylines}
          isTablet={isTablet}
          onAuthorPress={onAuthorPress}
          publicationName={publicationName}
          publishedTime={publishedTime}
        />
      </View>
    )}
  </Context.Consumer>
);

ArticleHeader.propTypes = {
  ...articleHeaderPropTypes,
  onAuthorPress: PropTypes.func.isRequired
};

ArticleHeader.defaultProps = articleHeaderDefaultProps;

export default ArticleHeader;
