import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BulletList } from "react-content-loader";
import { CssBaseline, Container } from "@material-ui/core";
import Header from "~/components/Header";
import PokemonTable from "~/components/PokemonTable";
import TeamValidator from "~/components/TeamValidator";
import Footer from "~/components/Footer";

import { lcNumbers } from "~/mocks";
import { fetchPokemonWithBSTLowerThan500 } from "~/services/api";

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
  const [lcPokemonSwSh, setLcPokemonSwSh] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const fetchPokemonData = async () => {
    setIsLoading(true);
    const allPokemon = Array.from(Array(898).keys());
    const res = await Promise.all(
      allPokemon.map((pokemonNumber) => {
        return fetchPokemonFromAPI(pokemonNumber + 1);
      })
    );

    const filtered = res.filter(function (el) {
      return el != null;
    });
    setLcPokemonSwSh(filtered);

    setIsLoading(false);
  };

  const fetchPokemonFromAPI = async (pokemonNumber) => {
    const res = await fetchPokemonWithBSTLowerThan500(pokemonNumber);
    return res;
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="LIGA VGC RJ - Sub 500" active={"Lista de pokémon"} />
        {isLoading ? (
          <>
            <div className={classes.loadingWrapper}>
              <BulletList />
            </div>
          </>
        ) : (
          <div className={classes.mainGrid}>
            <PokemonTable data={lcPokemonSwSh} />
            {/* <TeamValidator /> */}
          </div>
        )}
      </Container>
      <Footer description="Built with 💜 and ☕ by Pinela" />
    </>
  );
}
