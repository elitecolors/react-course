import MainLayout  from "../layouts/MainLayout.jsx";
import HomePage from "../pages/HomePage.jsx";

import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom';
import NotFoundPage from "../pages/NotFoundPage.jsx";
import JobPage from "../pages/JobPage.jsx";
import JobSingle, {JobLoader} from "../pages/JobSingle.jsx";
import AddJob from "../pages/AddJob.jsx";



const addNewJob = async (newJob) => {
    const res = await fetch('/api/jobs/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob)
    })

    return;
}

const router = createBrowserRouter(
    createRoutesFromElements(<Route path ='/' element={<MainLayout/>}>
            <Route index  element={<HomePage/>} />
            <Route path='/jobs'  element={<JobPage/>} />
            <Route path='/add-job'  element={<AddJob addJobSubmit={addNewJob}/>}  />
            <Route path='*'  element={<NotFoundPage/>} />
            <Route path='/job/:id'  element={<JobSingle/>} loader={JobLoader} />
        </Route>
        )
)

const App = () => {
    return <RouterProvider router={router} />

}

export default App;
