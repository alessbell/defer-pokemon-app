import { gql, useQuery } from "@apollo/client";
import PokemonCard from "./PokemonCard";

const PokemonFragment = gql`
  fragment PokemonDetails on Query {
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
`;

const pokemonDetailsQuery = gql`
  query Pokemon($name: String!) {
    ...PokemonDetails # @defer
    regions {
      results {
        id
        name
      }
    }
  }
  ${PokemonFragment}
`;

const deferredPokemonDetailsQuery = gql`
  query Pokemon($name: String!) {
    ...PokemonDetails @defer
    regions {
      results {
        id
        name
      }
    }
  }
  ${PokemonFragment}
`;

export default function PokemonDetails({ selectedPokemon, image, deferred }) {
  const query = deferred ? deferredPokemonDetailsQuery : pokemonDetailsQuery;
  console.log(deferred, query);
  const { data } = useQuery(query, {
    variables: { name: selectedPokemon },
    // returnPartialData: !!deferred,
  });

  return (
    <PokemonCard
      deferred={deferred}
      image={image}
      pokemon={data?.pokemon}
      selectedPokemon={selectedPokemon}
      regions={data?.regions}
    />
  );
}
