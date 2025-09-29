import NavBar from "./components/NavBar";
import Main from "./components/Main";


import WhoAreWe from "./components/WhoAreWe";
import OurServices from "./components/OurServices";
import OurProjects from "./components/OurProjects";
import Footer from "./components/Footer";
export default function Constract() { 





    return (
        <>
            <NavBar />
            
            <main>
                <Main />
                <WhoAreWe />
                <OurServices />
                <OurProjects/>

            </main>
            <Footer />
        
        </>
    );
}