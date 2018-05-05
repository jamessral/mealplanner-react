import React from 'react';
import { shallow } from 'enzyme';
import Recipes from './';

const defaultProps = {};

const factory = props => <Recipes {...defaultProps} {...props} />;

describe('<Recipes />', () => {
  it('should render', () => {
    shallow(factory());
  });
});

