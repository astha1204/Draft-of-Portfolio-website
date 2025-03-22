import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/ContactUs/ContactUs.jsx';
import NotFound from './Components/NotFound.jsx'; // ✅ Ensure this is imported
import User from './Components/User/User.jsx';
import Github, { githubfollowers } from './Components/Github/Github.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         index: true, // This makes it the default route ("/")
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path:'contactus',
//         element:<Contact/>
//       }
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path="contactus" element={<Contact />} />
      <Route 
      loader={githubfollowers}
      path="github" 
      element={<Github />} />
      {/* //loader={githubfollowers} correctly calls githubfollowers() and returns the data. */}
      {/* This ensures useLoaderData() inside Github.jsx receives the expected API response. */}
      <Route path="user/:userid" element={<User />} />
     
      <Route path="*" element={<NotFound />} /> {/* Catch-all 404 route */}
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
