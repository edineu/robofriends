import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
  /**
   * Simulate error
   *
 * if (true) {
    throw new Error('Noooooo')
  }
 * */
  return (
    <div>
      {robots.map((_user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        )
      })}
    </div>
  )
}

export default CardList
