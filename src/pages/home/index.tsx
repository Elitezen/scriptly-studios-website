import Footer from "../../components/footer";
import Header from "../../components/header";
import Community from "./components/community";
import Youtube from "./components/youtube";
import Games from "./components/games";
import Showcase from "./components/showcase";
import Event from "./components/event";
import Credits from "./components/credits";
// import styles from "./index.module.scss";

function Home() {
    return (
        <main>
            <Header />
            <Showcase />
            <Games />
            <Event />
            <Youtube />
            <Community />
            <Credits />
            <Footer />
        </main>
    )
}

export default Home;