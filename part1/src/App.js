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
      {/*Hard coded: */}
      <Hello name="Maya" age={26 + 10} />
      {/*props passed in*/}
      <Hello name={name} age={age} />
      <Hi />
    </div>
  )
}

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

export default App