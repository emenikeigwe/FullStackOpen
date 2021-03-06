import { useState } from 'react'

const Button = ({ onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({value, text, end}) => {
  return <tr><td>{text}</td><td>{value}{end}</td></tr>
}

const Statistics = ({good, neutral, bad}) => {
  if (good || neutral || bad){
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={good+neutral+bad} />
            <StatisticLine text="average" value={1.0*(good-bad)/(good+neutral+bad)} />
            <StatisticLine text="positive" value={100.0*good/(good+neutral+bad)} end="%" />
          </tbody>
        </table>
      </div>
    )
  }
  else {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={good+neutral+bad} />
          </tbody>
        </table>
        <p>No feedback given</p>
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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App