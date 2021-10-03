import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import { Button } from "@material-ui/core";
import TeamChoose from "../TeamChoose";
import { redPokemon } from "~/mocks";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  formControlGrid: {
    width: "100%",
  },
  select: {
    minWidth: "240px",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  button: {
    marginTop: "12px",
  },
  titleText: {
    fontSize: "2rem",
    margin: "2rem 0",
  },
}));

function TeamValidator() {
  const classes = useStyles();
  const theme = useTheme();
  const [colorName, setColorName] = useState([]);
  const [pokemonByColor, setPokemonByColor] = useState([]);

  const handleChange = (event) => {
    setColorName(event.target.value);
  };

  const handleClick = () => {
    const a = colorName;
    setPokemonByColor(redPokemon);
  };

  const colors = [
    "Vermelho",
    "Preto",
    "Cinza",
    "Azul",
    "Rosa",
    "Amarelo",
    "Branco",
    "Marrom",
    "Verde",
    "Roxo",
  ];

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  function getStyles(color, colorName, theme) {
    return {
      fontWeight:
        colorName.indexOf(color) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="mutiple-chip-label">Cores</InputLabel>
        <Select
          labelId="mutiple-chip-label"
          id="mutiple-chip"
          multiple
          className={classes.select}
          value={colorName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {colors.map((color) => (
            <MenuItem
              key={color}
              value={color}
              style={getStyles(color, colorName, theme)}
            >
              {color}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleClick}
        >
          Filtrar
        </Button>
      </FormControl>

      <TeamChoose pokemonByColor={pokemonByColor} />
    </>
  );
}

export default TeamValidator;
