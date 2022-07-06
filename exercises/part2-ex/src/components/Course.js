import React from 'react';

const Header = (props) => {
  return(<><h1>{props.course}</h1></>)
}

const Part = (props) => {
  return (
    <><p>{props.name} has {props.exercises} exercises.</p></>
  )
}
const Content = (props) => {
  /*return(
    <>
    <Part name={props["parts"][0]["name"]} exercises= {props["parts"][0]["exercises"]} />
    <Part name={props["parts"][1]["name"]} exercises= {props["parts"][1]["exercises"]} />
    <Part name={props["parts"][2]["name"]} exercises= {props["parts"][2]["exercises"]} />
    </>
  )*/
  return props["parts"].map(part => <Part name={part["name"]} exercises={part["exercises"]} />)
  }

const Total = (props) => {
    return(
      <b>
        <p>total of {props["parts"].map(part => part["exercises"]).reduce((prev, current) => prev+current, 0)} exercises</p>
      </b>
    )
    
}

const Course = ({course}) => {
    return (
        <div>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      )
}

export default Course