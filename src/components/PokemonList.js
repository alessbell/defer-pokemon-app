export default function PokemonDetails({
  pokemon,
  deferred,
  selectedPokemon,
  setSelectedPokemon,
}) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pokémon{deferred ? " ⚡️" : " 🐌"}
          </h2>
        </div>
        <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-y-16 gap-x-8 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none">
          {pokemon?.map((pokemon) => (
            <button
              className={`${
                pokemon.name === selectedPokemon
                  ? "outline outline-2 outline-offset-2 outline-blue-500 bg-blue-100"
                  : ""
              } rounded-md`}
              key={pokemon.name}
              onClick={() => {
                setSelectedPokemon(pokemon.name);
              }}
            >
              <li className="m-2">
                <img
                  className="mx-auto h-24 w-24"
                  src={pokemon.dreamworld}
                  alt=""
                />
                <h3 className="capitalize mt-6 text-lg font-semibold leading-7 tracking-tight text-gray-900">
                  {pokemon.name}
                </h3>
              </li>
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
}
