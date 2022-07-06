import Note from './components/Note'
/*
Map, Filter, & Reduce Notes:

[map]
When you call map on an array,
it executes that callback on every element within it,
returning a new array with all of the values that the callback returned.

      const task_names = tasks.map(task => task.name)
_____________________________________________________________
[filter]
It takes an array and filters out unwanted elements.

      const words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby']
      const result = words.filter(word => word.length < 8)
______________________________________________________________
[reduce]
takes all of the elements in an array and reduces them into a single value
      let result = numbers.reduce((accu, val) => val + accu , initialVal)
      const total = [1, 2, 3, 4, 5].reduce((previous, current) => previous+current, 0)
______________________________________________________________
more functions can be found here: https://dev.to/vincenius/javascript-array-functions-cheatsheet-1c15
*/

const App = ({notes}) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App