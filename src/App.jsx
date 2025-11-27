
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import { Button } from './components/ui/button'
import AppLayout from './Layouts/Applayout'
import LandingPage from './Pages/LandingPage'
import Onboarding from './Onboarding'
import Job from './Pages/job'
import JobListing from './Pages/JobListing'
import MyJob from './Pages/MyJob'
import PostJob from './Pages/PostJob'
import SavedJob from './Pages/SavedJob'
import JobPage from './Pages/JobPage'

const router = createBrowserRouter([
  {
    element:<AppLayout></AppLayout>,
    children:[
      {
        path:"/",
        element:<LandingPage></LandingPage>
      },
      {
        path:"/job",
        element:<Job></Job>
      },
      {
        path:"/Joblisting",
        element:<JobListing></JobListing>
      },
      {
        path:"/Job/:id",
        element:<JobPage></JobPage>
      },
      {
        path:"/Myjob",
        element:<MyJob></MyJob>
      },
      {
        path:"/PostJob",
        element:<PostJob></PostJob>
      },
      {
        path:"/SavedJob",
        element:<SavedJob></SavedJob>
      },
      {
        path:"/onboarding",
        element:<Onboarding></Onboarding>
      }
    ]
  }
])

function App() {
  return  <RouterProvider router={router}/>
  
}

export default App
