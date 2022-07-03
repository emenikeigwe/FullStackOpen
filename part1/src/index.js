import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

//renders contents into div element with ID root in public/index.html
ReactDOM.createRoot(document.getElementById('root')).render(<App />)

/*
let counter = 1

const refresh = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App counter={counter}/>
  )
}


//setInterval(function, interval)
setInterval(() => {
  refresh()
  counter += 1
}, 1000)*/