import { configure, mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import mock, { once } from 'xhr-mock';
import fetchMock from 'fetch-mock';

/**
 * mock fetch
 */
import 'whatwg-fetch';
global.fetchMock = fetchMock;

configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.React = React;

/**
 * Setup mock of tests
 */
mock.setup();
global.mockOnce = once;
global.apiClientMock = mock;

/**
 * setup ENV vars
 */
process.env.BASE_PATH = '/r/insights/platform';

/**
 * Setup JSDOM
 */
global.SVGPathElement = function () {};

global.MutationObserver = class {
  constructor(callback) {}
  disconnect() {}
  observe(element, initObject) {}
};
