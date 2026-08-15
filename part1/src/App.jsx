const Header = (props) => {
  return(
  <div>
    <h1>{props.name}</h1>
  </div>
  )}

const Part = (props) => {
  return (
    <p>{props.name} - {props.count}</p>
  )
 } 

const Content = (props) => {
  return(
    <div className="content">
      <Part name={props.part1} count={props.exersises1} />
      <Part name={props.part2} count={props.exersises2} />
      <Part name={props.part3} count={props.exersises3} />
    </div>
  )}

const Total=(props)=>{
  return(
    <div>
      <p>Number of exersises {props.sum}</p>
    </div>
)}
    

const App = () => {
  
const course = 'Half Stack application development'
  const part1 = { 
    name:'Fundamentals of React',
    exercises: 10 }
  const part2 = { 
    name: 'Using props to pass data',
    exercises : 7 }
  const part3 = { 
    name: 'State of a component', 
    exercises: 14 }
  const totalExercises = part1.exercises + part2.exercises + part3.exercises

  return (
    <div>
      <Header name={course} />
      <Content part1={part1.name} 
      exersises1={part1.exercises}
      part2 = {part2.name} 
      exersises2 = {part2.exercises}
      part3={part3.name} 
      exersises3={part3.exercises}/>
      <Total sum={totalExercises}/>
    </div>
  )
}

export default App