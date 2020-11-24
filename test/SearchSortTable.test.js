/* eslint-env jest */

import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import {SearchSortTable} from 'simple-widgets'
import SearchSortTable2 from '../src/SearchSortTable.js'

/*
https://stackoverflow.com/questions/36682241/testing-functional-components-with-renderintodocument

Since function components don't have an instance associated with them, you can't use them
directly with render or renderIntoDocument. Instead you will want to wrap your function components
in a wrapper component that uses createClass or extends React.Component.

-- monastic-panic https://stackoverflow.com/users/2108893/monastic-panic
*/


const col1 = {header: 'word', name:null, search:true, sort:true}
const col2 = {header: 'phrase', name:null, search:true, sort:true}
const tableData = [
                     ['hello', 'the fox jumped over the lazy dog'],
                     ['there', 'is a place'],
                     ['I', 'like to go'],
                     ['we', 'like it'],
                     ['penny', 'whoof'],
                  ]
const colsInfo = [col1, col2]

const ExampleTable = (props) => {
  return <SearchSortTable data={tableData} table={colsInfo} {...props} />
}

const ExampleTable2 = (props) => {
  return <SearchSortTable2 data={tableData} table={colsInfo} {...props} />
}

class Wrapper extends React.Component {
  render() {
    return this.props.children
  }
}

describe('ExampleTable', function () {

  it('should render', function () {
      var tree = TestUtils.renderIntoDocument(<Wrapper><ExampleTable /></Wrapper>);
      expect(tree).not.toBeNull();
  });


});

describe('ExampleTable2', function () {

  it('should render', function () {
      var tree = TestUtils.renderIntoDocument(<Wrapper><ExampleTable2 /></Wrapper>);
      expect(tree).not.toBeNull();
  });


});