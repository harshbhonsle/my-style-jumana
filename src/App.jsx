import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import { contactData, hoursData, locationData } from "./Data/ContactData";
import ContactInfo from "./Components/ContactInfo";
function App() {
  

  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main className="pt-20">
        <section id="home">
          <Hero />
        </section>
      <ContactInfo
        contact={contactData}
        hours={hoursData}
        location={locationData}
      />

        {/* You can add other sections like About, Services, etc. here */}
      </main>

    </>
  )
}

export default App
