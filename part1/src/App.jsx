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
      <Part name={props.parts[0].name} count={props.parts[0].exercises} />
      <Part name={props.parts[1].name} count={props.parts[1].exercises} />
      <Part name={props.parts[2].name} count={props.parts[2].exercises} />
    </div>
  )}

const Total=(props)=>{

  const totalExercises = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises

  return(
    <div>
      <p>Number of exersises {totalExercises}</p>
    </div>
)}
    

const App = () => {
  
const course = 'Half Stack application development'
  const parts = [
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
  

  return (
    <div>
      <Header name={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App