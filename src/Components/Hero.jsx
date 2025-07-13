const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#FAF7F0] via-[#F5E6E3] to-[#B76E79] px-6 md:px-20 py-12 flex flex-col items-center text-center">
      {/* Text content */}
      <h1 className="text-4xl md:text-6xl font-playfair font-semibold text-[#2E2E2E] mb-6 max-w-4xl">
        Welcome to My Style by Jumana
      </h1>
      <p className="text-lg md:text-2xl font-montserrat text-[#8A4B53] mb-10 max-w-3xl">
        Elegant beauty and style tailored just for you — experience personalized care and expert touch.
      </p>
      <button
        onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
        className="px-8 py-3 bg-[#B76E79] hover:bg-[#8A4B53] text-white font-montserrat font-semibold rounded-md shadow-md transition-colors duration-300 mb-12"
      >
        Explore Services
      </button>

      {/* Full width image */}
      <div className="w-full min-w-2xl">
        <img
          src="./hero.jpg"
          alt="Beauty style"
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
      </div>

     
  {/* Contact */}
 

    </section>
  );
};

export default Hero;
