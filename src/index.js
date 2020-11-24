import React from 'react';
import ReactDOM from 'react-dom';
import {SearchSortTable} from 'simple-widgets'
import SearchSortTable2 from './SearchSortTable'

// Why does SearchSortTable need this ???
require("core-js/stable");                    // instead of @babel/polyfill
require("regenerator-runtime/runtime");

import ExampleClass from './ExampleClass'
import ExampleHooks from './ExampleHooks'
import RecordView from './RecordView'

const AlignStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  flexWrap: 'wrap',
  height: '100%',
}

const kid = {
  maxWidth: '40%',
  height: '29%',
  width: '49%',
  margin: 4,
  border: 'black',
  borderStyle: 'solid',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const kid2 = {...kid, height: '49%'}

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

const App = () => <div style={AlignStyle}>
    <ExampleTable />
    <ExampleTable2 />
    <ExampleClass style={kid} />
    <ExampleHooks style={kid} />
    <RecordView style={kid2} />
  </div>

ReactDOM.render(<App />, document.getElementById('app'));
