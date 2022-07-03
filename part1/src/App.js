import { useState } from 'react'
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }
    return (
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )
  }

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }
  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left'/>
      <Button handleClick={handleRightClick} text='right'/>
      {right}
      <History allClicks={allClicks}/>
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
/*
// react component needs a root element (div/fragments) OR
const Hello = (props) => {
  return (
    <>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </>
  )
}

//  an array of components
const Hi = () => {
  return [
    <p>Hi!</p>,
    <p>Salut!</p>,
    <p>Hola!</p>
  ]
}

// react component names are capitalized (required)
const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      {//Hard coded: }
      <Hello name="Maya" age={26 + 10} />
      {//props passed in}
      <Hello name={name} age={age} />
      <Hi />
    </div>
  )
}*/

// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20

//   // while code below looks like html, it is actually JSX
//   // in JSX EVERY tag needs to be closed
//   return (
//     <div>
//      <p>Hello world, it is {now.toString()}</p>
//      <p>
//         {a} plus {b} is {a+b}
//      </p>
//     </div>
//   )
// }

// export default App