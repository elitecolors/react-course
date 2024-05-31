import Hero from "../src/components/Hero.jsx";
import HomeCards from "../src/components/HomeCards.jsx";
import JobListining from "../src/components/JobListining.jsx";
import ViewAllJobs from "../src/components/ViewAllJobs.jsx";


const HomePage = () => {
    return <>
        <Hero></Hero>
        <HomeCards></HomeCards>
        <JobListining isHome={true}>
        </JobListining>
        <ViewAllJobs></ViewAllJobs>
    </>
}

export default HomePage;
