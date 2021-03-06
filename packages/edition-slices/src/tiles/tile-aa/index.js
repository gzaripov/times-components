/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import {
  getTileSummary,
  TileLink,
  TileSummary,
  withTileTracking
} from "../shared";
import styles from "./styles";
import WithoutWhiteSpace from "../shared/without-white-space";
import PositionedTileStar from "../shared/positioned-tile-star";

const TileAA = ({ onPress, tile }) => (
  <TileLink onPress={onPress} style={styles.container} tile={tile}>
    <WithoutWhiteSpace
      style={styles.summaryContainer}
      render={whiteSpaceHeight => (
        <TileSummary
          headlineStyle={styles.headline}
          summary={getTileSummary(tile, 800)}
          summaryStyle={styles.summary}
          tile={tile}
          whiteSpaceHeight={whiteSpaceHeight}
          withStar={false}
        />
      )}
    />
    <PositionedTileStar articleId={tile.article.id} />
  </TileLink>
);

TileAA.propTypes = {
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired
};

export default withTileTracking(TileAA);
