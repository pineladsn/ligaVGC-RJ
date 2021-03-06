import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    color: "#e84393",
    flex: 1,
    textOverflow: "inherit",
    overflow: "auto",
    whiteSpace: "break-spaces",
    padding: "20px 0",
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  toolbarLinkSpecial: {
    padding: theme.spacing(1),
    flexShrink: 0,
    backgroundColor: "#e84393",
    borderRadius: "4px",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { active, title } = props;

  const sections = [
    { title: "Lista de pokémon", url: "/" },
    // { title: "Times", url: "sample-teams" },
    {
      title: "VGC Brasil",
      url: "https://beacons.page/pokevgcbr",
      target: "_blank",
    },
    {
      title: "Battlefy",
      url: "https://battlefy.com/pok%C3%A9mon-vgc-brasil/liga-vgc-rj-0507-1807-sub-500/60d9011cba50fe1fae633267/info?infoTab=details",
      target: "_blank",
    },
    {
      title: "Conscientize-se",
      url: "https://www.inca.gov.br/assuntos/outubro-rosa",
      // url: "https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_base_stats_(Generation_VIII-present)",
      target: "_blank",
    },
    {
      title: "Buy me a coffee ☕",
      url: "https://nova.kickante.com.br/vaquinha/buy-me-a-coffee",
      target: "_blank",
    },
  ];

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections?.map((section) => (
          <Link
            color={active === section.title ? "primary" : "inherit"}
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            target={section.target}
            className={
              section.title === "Conscientize-se"
                ? classes.toolbarLinkSpecial
                : classes.toolbarLink
            }
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
