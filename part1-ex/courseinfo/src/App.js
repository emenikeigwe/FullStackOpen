import { useState } from "react"
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>
        left
      </button>
      <button onClick={() => setRight(right + 1)}>
        right
      </button>
      {right}
    </div>
  )
}
export default App
// import { useState } from 'react'
// const Display = ({ counter }) => <div>{counter}</div>
// const Button = ({ onClick, text}) => <button onClick={onClick}>{text}</button>

// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   const increaseByOne = () => setCounter(counter+1)

//   const setToZero = () => setCounter(0)
// /*
//   const handleClick = () => {
//     console.log("clicked")
//   }
//   setTimeout(
//     () => setCounter(counter + 1), 
//     1000
//   )*/

//   return (
//     <div>
//       <Display counter={counter}/>
//       <Button onClick={increaseByOne} text={"plus"}/>
//       <Button onClick={setToZero} text="zero"/>
//     </div>
//   )
// }

// export default App

/* order of prop destructuring does not matter
// only variable names need to match up
const Hello = (props) => {
  const { name, age } = props
is identical to...
const Hello = ({ name, age }) => {
------------------- 
const Hello = ({ age, name }) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App*/

/*const Header = (props) => {
  return(<><h1>{props.course}</h1></>)
}

const Part = (props) => {
  return (
    <><p>{props.name} has {props.exercises} exercises.</p></>
  )
}
const Content = (props) => {
  return(
    <>
    <Part name={props["parts"][0]["name"]} exercises= {props["parts"][0]["exercises"]} />
    <Part name={props["parts"][1]["name"]} exercises= {props["parts"][1]["exercises"]} />
    <Part name={props["parts"][2]["name"]} exercises= {props["parts"][2]["exercises"]} />
    </>
  )
}

const Total = (props) => {
  return(
    <>
      <p>In total, there are {props["parts"][0]["exercises"]+props["parts"][1]["exercises"]+props["parts"][2]["exercises"]} exercises.</p>
    </>
  )
  
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App*/