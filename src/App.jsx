import {Navbar} from "@/layout/Navbar"
import {Hero} from "@/sections/About"
import {Project} from "@/sections/Project"
import {Experience} from "@/sections/Experience"
import {Testimonials} from "@/sections/Testimonials"
import {Contact} from "@/sections/Contact"
function App() {
  return(
  <div className="min-h-screen overflow-x-hidden">
    <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Project/>
        <Experience/>
        <Testimonials/>
        <Contact/>
      </main>
  </div>)
}

export default App
