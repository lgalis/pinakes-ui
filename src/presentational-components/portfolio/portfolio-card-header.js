import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Level,
  LevelItem,
  Text,
  TextContent,
  TextVariants
} from '@patternfly/react-core';
import EllipsisTextContainer from '../styled-components/ellipsis-text-container';

const PortfolioCardHeader = ({ to, portfolioName, headerActions }) => (
  <Level>
    <LevelItem className="portfolio-card-header-title pf-m-grow">
      <Link to={to}>
        <TextContent>
          <Text
            title={portfolioName}
            className="pf-u-mb-0"
            component={TextVariants.h3}
          >
            <EllipsisTextContainer>{portfolioName}</EllipsisTextContainer>
          </Text>
        </TextContent>
      </Link>
    </LevelItem>
    <LevelItem onClick={(event) => event.preventDefault()}>
      {headerActions}
    </LevelItem>
  </Level>
);

PortfolioCardHeader.propTypes = {
  portfolioName: PropTypes.string.isRequired,
  headerActions: PropTypes.arrayOf(PropTypes.node),
  to: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired
  }).isRequired
};

PortfolioCardHeader.defaultProps = {
  headerActions: []
};

export default PortfolioCardHeader;
