import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { findRenderedComponentWithType } from "react-dom/test-utils";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

export default function PokemonTable(props) {
  const classes = useStyles();
  const { data } = props;

  const fetchType = (types) => {
    const typesArr = types.map((item) => {
      return item.type.name;
    });
    return typesArr.join().replace(",", "\n");
  };

  const fetchAbilities = (abilities) => {
    const abilitiesArr = abilities.filter((item) => {
      if (!item.is_hidden) {
        return item;
      }
    });
    return abilitiesArr
      .map((item) => {
        return item.ability.name;
      })
      .join()
      .replace(",", " / ");
  };

  const fetchHiddenAbility = (abilities) => {
    return abilities.find((item) => {
      if (item.is_hidden) {
        return item;
      }
    })?.ability?.name;
  };

  const calcBST = (bases) => {
    const basesArr = bases.map((item) => {
      return item.base_stat;
    });
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return basesArr.reduce(reducer);
  };

  return (
    <TableContainer component={Paper}>
      <Table
        className={classes.table}
        stickyHeader
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Type</StyledTableCell>
            <StyledTableCell align="center">Abilities</StyledTableCell>
            <StyledTableCell align="center">Hidden Ability</StyledTableCell>
            <StyledTableCell align="center">HP</StyledTableCell>
            <StyledTableCell align="center">Atk</StyledTableCell>
            <StyledTableCell align="center">Def</StyledTableCell>
            <StyledTableCell align="center">SpA</StyledTableCell>
            <StyledTableCell align="center">SpD</StyledTableCell>
            <StyledTableCell align="center">Spe</StyledTableCell>
            <StyledTableCell align="center">BST</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row?.id}>
              <StyledTableCell component="th" scope="row">
                <Avatar
                  alt={row?.name}
                  className={classes.large}
                  src={row?.sprites.front_default}
                />
              </StyledTableCell>
              <StyledTableCell align="center">{row?.name}</StyledTableCell>
              <StyledTableCell align="center">
                {fetchType(row?.types)}
              </StyledTableCell>
              <StyledTableCell align="center">
                {fetchAbilities(row?.abilities)}
              </StyledTableCell>
              <StyledTableCell align="center">
                {fetchHiddenAbility(row?.abilities)}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row?.stats[0].base_stat}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row?.stats[1].base_stat}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row?.stats[2].base_stat}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row?.stats[3].base_stat}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row?.stats[4].base_stat}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row?.stats[5].base_stat}
              </StyledTableCell>
              <StyledTableCell align="center">
                {calcBST(row?.stats)}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
