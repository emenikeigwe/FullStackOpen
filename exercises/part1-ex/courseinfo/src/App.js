

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