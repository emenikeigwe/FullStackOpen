import { useState } from 'react'

const Button = ({ onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good || neutral || bad){
    return (
      <div>
      <p>average {1.0*(good-bad)/(good+neutral+bad)}</p>
      <p>positive {100.0*good/(good+neutral+bad)}%</p>
      </div>
    )
  }
  else {
    return (
      <div>
        <p>average N/A</p>
        <p>positive N/A</p>
      </div>
    )
  }
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }
  
  const handleBad = () => {
    setBad(bad + 1)
  }
  
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad' />
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good+neutral+bad}</p>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App