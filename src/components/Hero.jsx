function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center text-yellow-300 bg-black min-h-[80vh] px-6">
      <h1 className="text-5xl font-bold mb-4">Find the best food and accessories for your pet:</h1>
      <p className="text-xl mb-8">Dogs, Cats, Birds, Fish, and Rodents - We have it all!</p>
      <button onClick={() => 
        document.getElementById('categories')?.scrollIntoView({behavior: 'smooth'})
      }
       className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg hover-bg-orange-500 transition-colors">Shop now</button>
    </section>
  );
}

export default Hero;