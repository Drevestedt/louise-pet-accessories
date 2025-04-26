function Categories() {
  const categories = ["Dogs", "Cats", "Birds", "Fish", "Rodents"]

  return(
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8 text-black">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6"> #TODO: Continue with styling 
        {categories.map((category) => (
          <div
            key={category}
            className=""
          >
          {category}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;