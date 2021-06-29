import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import { calcBST } from "~/utils/pokemonProps";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
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
  buttonRow: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "16px 0",
  },
  actionButton: {
    marginLeft: "8px",
  },
}));

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

const types = [
  "bug",
  "dark",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "fire",
  "flying",
  "ghost",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water",
];

const bases = [">300", ">400", "=500"];

const generations = [
  "Kanto",
  "Johto",
  "Hoenn",
  "Sinnoh",
  "Unova",
  "Kalos",
  "Alola",
  "Galar",
];

const pokemonPerGenerationMin = {
  Kanto: 1,
  Johto: 152,
  Hoenn: 252,
  Sinnoh: 387,
  Unova: 494,
  Kalos: 650,
  Alola: 722,
  Galar: 810,
};

const pokemonPerGenerationMax = {
  Kanto: 151,
  Johto: 251,
  Hoenn: 386,
  Sinnoh: 493,
  Unova: 649,
  Kalos: 721,
  Alola: 809,
  Galar: 898,
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Filter(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { pokemon, setPokemon } = props;
  const [type, setType] = useState([]);
  const [base, setBase] = useState([]);
  const [generation, setGeneration] = useState([]);

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleBaseChange = (event) => {
    setBase(event.target.value);
  };

  const handleGenerationChange = (event) => {
    setGeneration(event.target.value);
  };

  const resetFilters = () => {
    setType([]);
    setBase([]);
    setGeneration([]);
  };

  const doFilter = () => {
    if (type.length === 0 && base.length === 0 && generation.length === 0) {
      setPokemon(pokemon);
      return;
    }
    let filtered = [];
    let currentPokes = [];

    // Filter by type
    if (type.length > 0) {
      filtered = pokemon.filter((poke) => {
        const v = poke.types.filter((item) => {
          return type.includes(item.type.name);
        });

        return v.length > 0 ? poke : null;
      });
    }

    // Filter by base
    if (base.length > 0) {
      currentPokes = filtered.length === 0 ? pokemon : filtered;
      filtered = currentPokes.filter((poke) => {
        const total = calcBST(poke.stats);
        return total >= parseInt(base.substring(1, 4)) ? poke : null;
      });
    }

    // Filter by generation
    if (generation.length > 0) {
      currentPokes = filtered.length === 0 ? pokemon : filtered;
      filtered = currentPokes.filter((poke) => {
        const v = generation.filter((gen) => {
          return (
            poke.id >= pokemonPerGenerationMin[gen] &&
            poke.id <= pokemonPerGenerationMax[gen]
          );
        });

        return v.length > 0 ? poke : null;
      });
    }

    setPokemon(filtered);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="type-label">By type</InputLabel>
        <Select
          labelId="type-label"
          id="type"
          multiple
          value={type}
          onChange={handleTypeChange}
          input={<Input id="select-type" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {types.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, type, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="base-label">By total base</InputLabel>
        <Select
          labelId="base-label"
          id="base"
          value={base}
          onChange={handleBaseChange}
          input={<Input id="select-base" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              <Chip key={selected} label={selected} className={classes.chip} />
            </div>
          )}
          MenuProps={MenuProps}
        >
          {bases.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, base, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="generation-label">By generation</InputLabel>
        <Select
          labelId="generation-label"
          id="generation"
          multiple
          value={generation}
          onChange={handleGenerationChange}
          input={<Input id="select-generation" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {generations.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, generation, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <div className={classes.buttonRow}>
        <Button onClick={resetFilters}>Limpar filtros</Button>
        <Button
          variant="contained"
          color="primary"
          onClick={doFilter}
          className={classes.actionButton}
        >
          Filtrar
        </Button>
      </div>
    </div>
  );
}
