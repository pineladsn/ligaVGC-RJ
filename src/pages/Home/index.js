import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BulletList } from "react-content-loader";
import { CssBaseline, Container } from "@material-ui/core";
import Header from "~/components/Header";
import Filter from "~/components/Filter";
import PokemonTable from "~/components/PokemonTable";
import TeamValidator from "~/components/TeamValidator";
import Footer from "~/components/Footer";

import {
  lcNumbers,
  pokemonNotInSwShAfterCrownTundra,
  pinkPokemon,
} from "~/mocks";
import { fetchPokemon } from "~/services/api";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  loadingWrapper: {
    marginTop: theme.spacing(3),
  },
}));

export default function Home() {
  const classes = useStyles();
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const fetchPokemonData = async () => {
    setIsLoading(true);
    // const allPokemon = Array.from({ length: 898 }, (_, i) => i + 1);
    const pink = pinkPokemon;
    const swShPokemon = pink.filter(
      (val) => !pokemonNotInSwShAfterCrownTundra.includes(val)
    );

    const res = await Promise.all(
      swShPokemon.map((number) => {
        return fetchPokemonFromAPI(number);
      })
    );

    const filtered = res.filter(function (el) {
      return el != null;
    });
    setPokemon(filtered);
    setFilteredPokemon(filtered);

    setIsLoading(false);
  };

  const fetchPokemonFromAPI = async (pokemonNumber) => {
    const res = await fetchPokemon(pokemonNumber);
    return res;
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header
          title="LIGA VGC RJ - Torneio Outubro Rosa"
          active={"Lista de pokémon"}
        />
        {/* <Filter pokemon={pokemon} setPokemon={setFilteredPokemon} /> */}
        {isLoading ? (
          <>
            <div className={classes.loadingWrapper}>
              <BulletList />
            </div>
          </>
        ) : (
          <div className={classes.mainGrid}>
            <PokemonTable data={filteredPokemon} />
            {/* <TeamValidator /> */}
          </div>
        )}
      </Container>
      <Footer description="Built with 💜 and ☕ by Pinela" />
    </>
  );
}
