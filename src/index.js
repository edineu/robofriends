import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import 'tachyons'
import CardList from './CardList'
import { robots } from './robots'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <CardList robots={robots} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
