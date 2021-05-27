import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'

import './App.css'

function App() {
  // Declare a new state variable, which we'll call "field"
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')
  const [count, setCount] = useState(0)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then((respnse) =>
      respnse.json().then((users) => {
        setRobots(users)
        console.log(count)
      })
    )
    // console.log(robots, searchfield)
  }, [count]) //Only run if ccount changes

  // Need to turn this into a variable
  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  const filteredRobot = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  })

  return !robots.length ? (
    <h1>Loading...</h1>
  ) : (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobot} />
        </ErrorBoundry>
      </Scroll>
    </div>
  )
}

export default App
