import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import Layout from "../components/Layout";
import PokemonCard from "../components/PokemonCard";
import PokemonList from "../components/PokemonList";
import PokemonDetails from "../components/PokemonDetails";

const pokemonsQuery = gql`
  query Pokemons {
    pokemons {
      results {
        id
        url
        name
        image
        artwork
        dreamworld
      }
    }
  }
`;

export default function App({ deferred }) {
  const { data } = useQuery(pokemonsQuery);
  const [selectedPokemon, setSelectedPokemon] = useState();

  return (
    <Layout
      LeftColumn={() => (
        <PokemonList
          deferred={deferred}
          pokemon={data?.pokemons?.results}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
      )}
      RightColumn={() => (
        <EmptyCardOrDetails
          deferred={deferred}
          selectedPokemon={selectedPokemon}
          image={
            selectedPokemon
              ? data?.pokemons?.results.find(
                  (pokemon) => pokemon.name === selectedPokemon
                ).artwork
              : null
          }
        />
      )}
    />
  );
}

function EmptyCardOrDetails({ image, selectedPokemon, deferred }) {
  if (!selectedPokemon) {
    return <PokemonCard image={image} selectedPokemon={selectedPokemon} />;
  }
  return (
    <PokemonDetails
      image={image}
      selectedPokemon={selectedPokemon}
      deferred={deferred}
    />
  );
}
