import AboutMe from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ShowCases from './components/ShowCases'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Experience />
      <ShowCases />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  )
}

export default App