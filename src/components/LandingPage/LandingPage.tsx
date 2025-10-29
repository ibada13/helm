import Main from "./subcomponents/Main";
import WhoAreWe from "./subcomponents/WhoAreWe";
import OurServices from "./subcomponents/OurServices";
import OurProjects from "./subcomponents/OurProjects";
import HowItWorks from "./subcomponents/HowItWorks";
export default function LandingPage() { 

    return (
        <main>
            <Main />
            <WhoAreWe />
            <OurServices/>
            <OurProjects />
            <HowItWorks />
    </main>
)
}