import { gql, useQuery } from "@apollo/client";
import PokemonCard from "./PokemonCard";

const pokemonDetailsQuery = gql`
  query Pokemon($name: String!) {
    ... @defer {
      pokemon(name: $name) {
        species {
          id
          name
        }
        stats {
          base_stat
          effort
          stat {
            id
            name
          }
        }
        held_items {
          item {
            id
            url
            name
          }
        }
        abilities {
          ability {
            id
            url
            name
          }
        }
      }
    }
    regions {
      count
      next
      previous
      results {
        id
        name
      }
      status
      message
    }
  }
`;

export default function PokemonDetails({ selectedPokemon, image }) {
  const { data } = useQuery(pokemonDetailsQuery, {
    variables: { name: selectedPokemon },
    returnPartialData: true,
  });

  return (
    <PokemonCard
      image={image}
      pokemon={data?.pokemon}
      selectedPokemon={selectedPokemon}
      regions={data?.regions}
    />
  );
}
