import Footer from "../../components/footer";
import Header from "../../components/header";
import Community from "./components/community";
import Creators from "./components/creators";
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
            <Creators />
            <Footer />
        </main>
    )
}

export default Home;