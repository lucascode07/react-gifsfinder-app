import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { GifsFinderApp } from './GifsFinderApp';

const root = document.getElementById('root');

ReactDOM.createRoot(root)
  .render(
    <React.StrictMode>
      <GifsFinderApp />
    </React.StrictMode>
  )
