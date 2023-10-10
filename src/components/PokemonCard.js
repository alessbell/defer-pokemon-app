import Spinner from "./Spinner";

export default function PokemonCard({
  deferred,
  image,
  pokemon,
  selectedPokemon,
  regions,
}) {
  return (
    <>
      <div>
        <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
          <div className="lg:h-80 bg-blue-100 md:h-36 w-full ">
            {selectedPokemon ? (
              ""
            ) : (
              <div className="h-full w-full flex items-center justify-center font-medium">
                Select a Pokémon
              </div>
            )}
            <img
              alt=""
              src={image}
              className="object-cover object-center h-full"
            />
          </div>
          <div className="p-6">
            <h2
              className={`rounded-sm h-4 w-1/4 mb-2 ${
                pokemon ? "" : "bg-gray-300"
              } ${selectedPokemon && !pokemon?.stats ? "animate-pulse" : ""}`}
            >
              {pokemon
                ? "HP: " +
                  pokemon?.stats.find((stat) => stat.stat.name === "hp")
                    .base_stat
                : ""}
            </h2>
            <h1
              className={`text-xl font-semibold capitalize w-3/4 mb-4 h-6 rounded-sm ${
                selectedPokemon ? "" : "bg-gray-400"
              }`}
            >
              {selectedPokemon}
            </h1>
            <p
              className={`leading-relaxed mb-3 w-1/2 h-4 rounded-sm ${
                pokemon ? "" : "bg-gray-300"
              } ${selectedPokemon && !pokemon?.stats ? "animate-pulse" : ""}`}
            >
              {pokemon
                ? "Attack: " +
                  pokemon?.stats.find((stat) => stat.stat.name === "attack")
                    .base_stat
                : ""}
            </p>
            <p
              className={`leading-relaxed mb-3 w-2/3 h-4 rounded-sm ${
                pokemon ? "" : "bg-gray-300"
              } ${selectedPokemon && !pokemon?.stats ? "animate-pulse" : ""}`}
            >
              {pokemon
                ? "Defense: " +
                  pokemon?.stats.find((stat) => stat.stat.name === "defense")
                    .base_stat
                : ""}
            </p>
            <p
              className={`leading-relaxed mb-3 w-2/3 h-4 rounded-sm ${
                pokemon ? "" : "bg-gray-300"
              } ${selectedPokemon && !pokemon?.stats ? "animate-pulse" : ""}`}
            >
              {pokemon
                ? "Special attack: " +
                  pokemon?.stats.find(
                    (stat) => stat.stat.name === "special-attack"
                  ).base_stat
                : ""}
            </p>
          </div>
        </div>
      </div>
      <details className="mt-6" open>
        <summary className="text-lg font-semibold">Regions</summary>
        <div>
          {selectedPokemon ? (
            <ul className="list-disc ml-8">
              {regions ? (
                regions.results.slice(0, 4).map((region) => (
                  <li className="capitalize" key={region.name}>
                    {region.name}
                  </li>
                ))
              ) : (
                <Spinner deferred={deferred} />
              )}
            </ul>
          ) : null}
        </div>
      </details>
    </>
  );
}
