import Faq from "../components/widgets/Faq"
import Hero from "../components/widgets/Hero"
import Introduction from "../components/widgets/Introduction"
import KeyAttributes from "../components/widgets/KeyAttributes"
import Navbar from "../components/widgets/Navbar"
import Prizes from "../components/widgets/Prizes"
import Rules from "../components/widgets/Rules"
import Timeline from "../components/widgets/Timeline"


const Home = () => {
    return (
        <section>
            <Navbar />
            <Hero />
            <Introduction />
            <Rules />
            <KeyAttributes />
            <Faq />
            <Timeline />
            <Prizes />
        </section>
    )
}

export default Home