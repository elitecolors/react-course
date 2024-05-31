import {useState, useEffect} from 'react';
import JobCard from "./JobCard.jsx";
import Loader from "./Loader.jsx";

const JobListining = ({isHome = false}) => {
    const [jobs, setJobs] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
          const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
            try {
                const jobs = await fetch(apiUrl);
                const data = await jobs.json();
                setJobs(data);
            }catch (error) {
                console.error(error.message);
            } finally {
                setIsFetching(false);
            }
        }

        fetchJobs();
    }, [])

    return (<>
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    Browse Jobs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {isFetching ?
                        <Loader  loading={isFetching} /> :
                        (
                        <>
                        {jobs.map((job) => (
                        <JobCard  key = {job.id} job={job} />
                     ))}
                        </>
                        )}
                </div>
            </div>
        </section>
    </>);
}

export default JobListining;
