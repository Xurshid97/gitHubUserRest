import React from 'react'
import { useState, useEffect } from 'react' 
import { useParams } from 'react-router-dom'

function UserDetails() {
  let [userTodo, setUserTodo] = useState()

  let params = useParams()
  let userID = params.userId

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(req=> req.json())
      .then((data)=> {
        let elemsArr = []
        data.forEach(element => {
          if (element.userId == userID) {
            elemsArr.push(element)
          }
        });
        setUserTodo(elemsArr)
      })
  }, [])

  let itemCount = 0;
  let userTodoList = userTodo ? userTodo.map((eachItem)=> {
        itemCount++
        return(
          <div key={eachItem.id} className='todoCard'>
            <p>{itemCount}</p>
            <h5>{eachItem.title}</h5>
            <h5>{eachItem.completed ? 'Completed' : 'Not Completed'}</h5>
          </div>
        )
    }) : null

  return (
    <div className='parentCard'>
      UserId is {userID}
      {userTodoList}
    </div>
  )
}

export default UserDetails