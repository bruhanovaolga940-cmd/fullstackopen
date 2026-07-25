const Header = (props) => {
  return(
  <div>
    <h1>{props.name}</h1>
  </div>
  )}

const Content=(props)=>{
  return(
    <div className="content">
      <p>{props.title} - {props.count}</p>
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

  // const content = [
  //   { part: 'Fundamentals of React', ex: 10 },
  //   { part: 'Using props to pass data', ex: 7 },
  //   { part: 'State of a component', ex: 14 },
  // ]

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
      {/* {content.map((item) => (
        <Content
          key={item.part}
          title={item.part}
          count={item.ex}
        />
      ))} */}
      <Content title={part1} count={exercises1} />
      <Content title={part2} count={exercises2} />
      <Content title={part3} count={exercises3} />
      <Total sum={totalExercises}/>
    </div>
  )
}

export default App