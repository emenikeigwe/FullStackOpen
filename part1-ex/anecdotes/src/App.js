import { useState } from 'react'

const Button = ({text, onClick}) => {
  return <button onClick={onClick}>{text}</button>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(Math.floor(Math.random()*anecdotes.length))
  const [votes, setVotes] = useState({})
  const onNextClick = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }
  const onVoteClick = () => {
    let copy = { ...votes}
    if (selected in votes){
      copy[selected] += 1
    }
    else {
      copy[selected] = 1
    }
    setVotes(copy)
  }

  const getMaxValueKey = (obj) => {
    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
  }
  let vote_dec
  let most_dec

  if (votes[selected]){
    vote_dec = (
    <>
    <h1>Anecdote of the Day</h1>
    <p>{anecdotes[selected]}</p>
    <p>has {votes[selected]} votes</p>
    </>
    )
  }
  else {
    vote_dec = <><h1>Anecdote of the day</h1><p>has 0 votes</p></>
  }

  if (Object.keys(votes).length){
    let max_ind = getMaxValueKey(votes)
    most_dec = (
      <>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[max_ind]} </p>
      <p>has {votes[max_ind]} votes</p>
      </>
    )
  }
  else {
    most_dec = (
      <><h1>Anecdote with most votes</h1><p>No votes yet</p></>
    )
  }
  return (
    <div>
      {vote_dec}
      <Button onClick={onVoteClick} text="vote" />
      <Button onClick={onNextClick} text="next anecdote" />
      {most_dec}
    </div>
  )
}

export default App