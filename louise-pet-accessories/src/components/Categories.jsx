import { Link } from "react-router-dom";

function Categories() {
  const categoryData = [
    { name: "Dogs", emoji: "🐶" },
    { name: "Cats", emoji: "🐱" },
    { name: "Birds", emoji: "🐦" },
    { name: "Fish", emoji: "🐟" },
    { name: "Rodents", emoji: "🐹" }
  ]

  return(
    <section className="py-12 bg-gradient-to-b from-gray-50 to-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8 text-black">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6">
        {categoryData.map(( { name, emoji }) => (
          <Link
            key={name}
            to={`/${name.toLowerCase()}`}
            className="bg-yellow-300 text-black rounded-lg py-10 hover:bg-yellow-400 cursor-pointer transition duration-300 shadow-md
                        hover:shadow-xl hover:scale-105 transform flex flex-col items-center justify-center gap-2"
          >
            <span className="text-6xl">{emoji}</span>
            <span className="text-lg font-semibold">{name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;