import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  formControlGrid: {
    width: "100% !important",
  },
  titleText: {
    fontSize: "2rem",
    margin: "2rem 0",
  },
}));

function TeamChoose(props) {
  const classes = useStyles();
  const { pokemonByColor } = props;
  const [pokemonTeam, setPokemonTeam] = useState({
    pokemon1: "",
    pokemon2: "",
    pokemon3: "",
    pokemon4: "",
    pokemon5: "",
    pokemon6: "",
  });

  const handlePokemonChange = (e) => {
    const { id } = e.target;
    setPokemonTeam((prevState) => ({
      ...prevState,
      [id]: e.currentTarget.textContent,
    }));
  };

  const handleValidate = () => {
    const a = pokemonTeam;
  };

  return (
    <>
      <Typography className={classes.titleText}>Escolha seu time</Typography>

      <Grid item xs={12}>
        <Paper>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              {/* <FormControl variant="filled" className={classes.formControlGrid}> */}
              {/* <InputLabel id="pokemon-one-label">Pokémon 1</InputLabel> */}
              <Autocomplete
                className={classes.formControlGrid}
                labelId="pokemon-one-label"
                id="pokemon1"
                options={pokemonByColor}
                getOptionLabel={(option) => option}
                defaultValue={pokemonTeam.pokemon1}
                value={pokemonTeam.pokemon1}
                onChange={handlePokemonChange}
                renderInput={(params) => (
                  <TextField {...params} label="Pokémon 1" variant="outlined" />
                )}
              />
              {/* </FormControl> */}
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl variant="filled" className={classes.formControlGrid}>
                <InputLabel id="pokemon-two-label">Pokémon 2</InputLabel>
                <Select
                  labelId="pokemon-two-label"
                  id="pokemon-two"
                  name="pokemon2"
                  value={pokemonTeam.pokemon2}
                  onChange={handlePokemonChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {pokemonByColor?.map((pokemon) => (
                    <MenuItem value={pokemon}>{pokemon}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl variant="filled" className={classes.formControlGrid}>
                <InputLabel id="pokemon-three-label">Pokémon 3</InputLabel>
                <Select
                  labelId="pokemon-three-label"
                  id="pokemon-three"
                  name="pokemon3"
                  value={pokemonTeam.pokemon3}
                  onChange={handlePokemonChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {pokemonByColor?.map((pokemon) => (
                    <MenuItem value={pokemon}>{pokemon}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl variant="filled" className={classes.formControlGrid}>
                <InputLabel id="pokemon-four-label">Pokémon 4</InputLabel>
                <Select
                  labelId="pokemon-four-label"
                  id="pokemon-four"
                  name="pokemon4"
                  value={pokemonTeam.pokemon4}
                  onChange={handlePokemonChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {pokemonByColor?.map((pokemon) => (
                    <MenuItem value={pokemon}>{pokemon}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl variant="filled" className={classes.formControlGrid}>
                <InputLabel id="pokemon-five-label">Pokémon 5</InputLabel>
                <Select
                  labelId="pokemon-five-label"
                  id="pokemon-five"
                  name="pokemon5"
                  value={pokemonTeam.pokemon5}
                  onChange={handlePokemonChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {pokemonByColor?.map((pokemon) => (
                    <MenuItem value={pokemon}>{pokemon}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl variant="filled" className={classes.formControlGrid}>
                <InputLabel id="pokemon-six-label">Pokémon 6</InputLabel>
                <Select
                  labelId="pokemon-six-label"
                  id="pokemon-six"
                  name="pokemon6"
                  value={pokemonTeam.pokemon6}
                  onChange={handlePokemonChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {pokemonByColor?.map((pokemon) => (
                    <MenuItem value={pokemon}>{pokemon}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleValidate}
      >
        Validar
      </Button>
    </>
  );
}

export default TeamChoose;
