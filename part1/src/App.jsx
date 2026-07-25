const Header = (props) => {
  return(
  <div>
    <h1>{props.name}</h1>
  </div>
  )}

const Part = (props) => {
  return (
    <p>{props.title} - {props.count}</p>
  )
 } 

const Content = (props) => {
  return(
    <div className="content">
      <Part title={props.part1} count={props.exersises1} />
      <Part title={props.part2} count={props.exersises2} />
      <Part title={props.part3} count={props.exersises3} />
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const totalExercises = exercises1 + exercises2+ exercises3

  return (
    <div>
      <Header name={course} />
      <Content part1={part1} 
      exersises1={exercises1}
      part2={part2} 
      exersises2={exercises2}
      part3={part3} 
      exersises3={exercises3}/>
      <Total sum={totalExercises}/>
    </div>
  )
}

export default App