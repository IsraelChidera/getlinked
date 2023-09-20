import Hero from "../components/widgets/Hero"
import Introduction from "../components/widgets/Introduction"
import Navbar from "../components/widgets/Navbar"
import Rules from "../components/widgets/Rules"


const Home = () => {
  return (
    <section>
        <Navbar />
        <Hero />
        <Introduction />
        <Rules />
    </section>
  )
}

export default Home