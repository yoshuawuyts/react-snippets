/*eslint no-unused-expressions: 0*/
'use strict';

/**
 * Module dependencies
 */

var should = require('should');
var jsdom = require('jsdom');
var React;
var utils;

/**
 * Initialize variables
 */

var document;
var window;

/**
 * Initialize jsdom
 */

beforeEach(function() {
  global.window = jsdom.jsdom().createWindow('<html><body></body></html>');
  global.document = global.window.document;
  global.navigator = global.window.navigator;
  React = require('react/addons');
  utils = React.addons.TestUtils;
});

/**
 * Tests
 */

describe('test our tests', function() {
  it('should display the window objects', function () {
    global.window.should.exist;
    global.document.should.exist;
    global.navigator.should.exist;
    utils.should.exist;
    React.should.exist;
  });

  it('should render a label', function () {
    var label = utils.renderIntoDocument(React.DOM.label(null, 'hi'));
  })
})