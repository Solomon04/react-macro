import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

function removeLoader() {
  console.log('remove loader')
  const loader = document.getElementById('root-loader')
  if (loader) {
    loader.remove()
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'))
const init = Date.now()
console.log({ init })

root.render(
  <React.StrictMode>
    <div
      id='root-loader'
      style={
        {
          /* Skeleton loader styles */
        }
      }>
      Loading...
    </div>
    <App onComponentLoaded={removeLoader} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
