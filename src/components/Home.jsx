import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  let [beginData, setBeginData] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(req => req.json())
      .then((data) => {
        setBeginData(data)
      })

  }, [])
  useEffect(() => {
    async function fetchFlowData() {
      try {
        const response = await fetch('https://convify-main.server4.xyz/api/flows/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            credentials: 'include',
          },
        });

        console.log(response, "response");

        if (response.ok) {
          const data = await response.json();
        } else {
          console.error('Failed to fetch flow data:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error fetching flow data:', error);
      }
    }

    fetchFlowData();
  }, []);
  let userCard = beginData ? beginData.map((data) => {
    return (
      <Link to={`/details/${data.id}`} key={data.id}>
        <div className='userCard'>
          <h2>{data.name}</h2>
          <h3>{data.email}</h3>
        </div>
      </Link>
    )
  }) : null

  return (
    <div className='allCards'>
      {userCard}
    </div>
  )
}

export default Home