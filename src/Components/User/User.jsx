import React from 'react'
//A React Router hook that allows us to access parameters from the URL.
import { useParams } from 'react-router-dom'
//uses React Router to retrieve a URL parameter and display it on the page.

function User() {
    const {userid}=useParams()  // Extracts 'userid' from the URL
  return (
    <div className='bg-grey-400 p-4 h-10'>
      User:{userid}
    </div>
  )
  //If the user navigates to /user/123, the component will display:
  //User: 123

}

export default User
