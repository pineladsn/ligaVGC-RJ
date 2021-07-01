import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  Container,
  Grid,
  Paper,
  Tooltip,
  Typography,
} from "@material-ui/core";
import ListAltIcon from "@material-ui/icons/ListAlt";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  title: {
    fontSize: "24px",
    fontWeight: "500",
    margin: "32px 0",
  },
  wrapper: {
    margin: "32px 0",
    padding: "24px",
  },
  teamRow: {
    display: "flex",
    width: "100%",
  },
  pokemon: {
    maxHeight: "128px",
    maxWidth: "128px",
  },
  teamTitle: {
    fontSize: "16px",
    fontWeight: "600",
    width: "100%",
  },
  iconWrapper: {
    justifyContent: "flex-end",
    display: "flex",
  },
  icon: {
    color: "#FFF",
    marginLeft: "8px",
  },
}));

export default function SampleTeams() {
  const classes = useStyles();

  const teams = [
    {
      name: "Trick room",
      url: "https://pokepast.es/359ffd4eb4b48cb4",
      buildBy: "Polarzito",
      socialLink: "http://twitch.tv/polar_poke",
      pokemon: [
        {
          name: "Bronzong",
          picture: "https://pokepast.es/img/pokemon/437-0.png",
        },
        {
          name: "Slowking-Galar",
          picture: "https://pokepast.es/img/pokemon/199-1.png",
        },
        {
          name: "Marowak-Alola",
          picture: "https://pokepast.es/img/pokemon/105-1.png",
        },
        {
          name: "Crawdaunt",
          picture: "https://pokepast.es/img/pokemon/342-0.png",
        },
        {
          name: "Talonflame",
          picture: "https://pokepast.es/img/pokemon/663-0.png",
        },
        {
          name: "Flapple",
          picture: "https://pokepast.es/img/pokemon/841-0.png",
        },
      ],
    },
    {
      name: "Speed",
      url: "https://pokepast.es/12548bab7accd819",
      buildBy: "Polarzito",
      socialLink: "http://twitch.tv/polar_poke",
      pokemon: [
        {
          name: "Vikavolt",
          picture: "https://pokepast.es/img/pokemon/738-0.png",
        },
        {
          name: "Whimsicott",
          picture: "https://pokepast.es/img/pokemon/547-0.png",
        },
        {
          name: "Darmanitan-Galar",
          picture: "https://pokepast.es/img/pokemon/555-2.png",
        },
        {
          name: "Indeedee-F",
          picture: "https://pokepast.es/img/pokemon/876-1.png",
        },
        {
          name: "Barraskewda",
          picture: "https://pokepast.es/img/pokemon/847-0.png",
        },
        {
          name: "Reuniclus",
          picture: "https://pokepast.es/img/pokemon/579-0.png",
        },
      ],
    },
    {
      name: "Sun",
      url: "https://pokepast.es/3199bd5d97dd432e",
      buildBy: "Polarzito",
      socialLink: "http://twitch.tv/polar_poke",
      pokemon: [
        {
          name: "Lilligant",
          picture: "https://pokepast.es/img/pokemon/549-0.png",
        },
        {
          name: "Torkoal",
          picture: "https://pokepast.es/img/pokemon/324-0.png",
        },
        {
          name: "Jellicent",
          picture: "https://pokepast.es/img/pokemon/593-0.png",
        },
        {
          name: "Gastrodon",
          picture: "https://pokepast.es/img/pokemon/423-0.png",
        },
        {
          name: "Scrafty",
          picture: "https://pokepast.es/img/pokemon/560-0.png",
        },
        {
          name: "Boltund",
          picture: "https://pokepast.es/img/pokemon/836-0.png",
        },
      ],
    },
  ];

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="LIGA VGC RJ - Sub 500" active={"Times"} />
        <Typography className={classes.title}>
          Pokémon Sword & Shield Sub 500 - Times exemplo
        </Typography>

        <div>
          {teams.map((team) => (
            <Paper elevation={3} className={classes.wrapper}>
              <div className={classes.teamRow}>
                <Typography className={classes.teamTitle}>
                  {team.name} by {team.buildBy}
                </Typography>
                <div className={classes.iconWrapper}>
                  <a
                    href={team.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    alt={team.name}
                  >
                    <Tooltip title="Team paste">
                      <ListAltIcon className={classes.icon} />
                    </Tooltip>
                  </a>
                  <a href={"http://twitch.tv/polar_poke"}>
                    <Tooltip title="Follow on twitch">
                      <OndemandVideoIcon className={classes.icon} />
                    </Tooltip>
                  </a>
                </div>
              </div>

              <Grid container className={classes.root} spacing={2}>
                {team.pokemon.map((poke) => (
                  <Grid item>
                    <img
                      src={poke.picture}
                      alt={poke.name}
                      className={classes.pokemon}
                    />
                  </Grid>
                ))}
              </Grid>
            </Paper>
          ))}
        </div>
      </Container>
      <Footer description="Built with 💜 and ☕ by Pinela" />
    </>
  );
}
