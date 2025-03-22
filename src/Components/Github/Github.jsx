import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data=useLoaderData()

  // const [data,setData]=useState([]);
  // useEffect(async ()=>{
  //   const here= await fetch('https://api.github.com/users/hiteshchoudhary')
  //   const data= await here.json;
  // }

  // ,[])
  //The useEffect callback cannot be async because useEffect expects a synchronous cleanup function.
// Instead, define an async function inside useEffect and call it.
//.json is a function, so you must call it like await here.json();

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const here = await fetch("https://api.github.com/users/hiteshchoudhary");
//       const data = await here.json(); // ✅ Call .json() as a function
//       console.log(data); // ✅ Log the fetched data (or use it in state)
//       setData(data)
//     } catch (error) {
//       console.error("Error fetching data:", error); // ✅ Handle errors
//     }
//   };

//   fetchData(); // ✅ Call the async function inside useEffect
// }, []);

  return (
    <div className='text-4xl text-center bg-gray-300 w-full h-[399px]'>
      GitHub followers:{data.followers}
      <img src={data.avatar_url} alt="gitpicture" width={250}></img>
    </div>
  )
}

export default Github;

// export const githubfollowers=async()=>{
//   const here = await fetch("https://api.github.com/users/hiteshchoudhary");
//   return here.json();

// }
export const githubfollowers = async () => {
  const response = await fetch("https://api.github.com/users/astha1204");
  if (!response.ok) throw new Error("Failed to fetch data"); // ✅ Handle errors properly
  return response.json();
};