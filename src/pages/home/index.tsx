import Footer from "../../components/footer";
import Header from "../../components/header";
import Community from "./components/community";
import Youtube from "./components/youtube";
import Games from "./components/games";
import Showcase from "./components/showcase";
// import styles from "./index.module.scss";

function Home() {
    return (
        <main>
            <Header />
            <Showcase />
            <Games />
            <Community />
            <Youtube />
            <Footer />
        </main>
    )
}

export default Home;