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
            'cookie': 'NEXT_LOCALE=en; __Host-next-auth.csrf-token=317b9594a77045155affde5614712f05f0b184f4629b2c5965c863f38a07c67a%7Cd67fc7823950ff436f39fbf03d5dd47f0759e103c016e37f76d0d35b2dab4725; __Secure-next-auth.callback-url=https%3A%2F%2Fconvify-main.server4.xyz%2Fdashboard; __Secure-next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..gT_UaHCZjBL-r0Ty.etlk6UmWA9khEbhDVqG2IX-wc9YCKbl4X3EL3uhqldKBdaUFGdnqvS5JNhlm59cc7lhCI4pAEmKNSYPxp6k3QRFLq1dBLq9AfAo9cMYQfO33rdHRxtwOXdwVFQRn2x9bIu3YZf5KttqVLQ6rWMyqIxqPwhQQNLgUHxU6ktRze1tbVDDe5qtYFYWNPJn-HwCjkzeY8h3i-n7rnqK944yk8A.D_ygp5kiyPOyqm87NUHFvQ',
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