export const colorfyByType = (type) => {
  switch (type) {
    case "bug":
      return "#ADBD21";
    case "dark":
      return "#735A4A";
    case "dragon":
      return "#63598F";
    case "electric":
      return "#E4AF2C";
    case "fairy":
      return "#F7B5F7";
    case "fighting":
      return "#A2523A";
    case "fire":
      return "#E75234";
    case "flying":
      return "#9FB0F7";
    case "ghost":
      return "#6363B5";
    case "grass":
      return "#7BCE52";
    case "ground":
      return "#C6A959";
    case "ice":
      return "#5ACEE7";
    case "normal":
      return "#868177";
    case "poison":
      return "#83567B";
    case "psychic":
      return "#FF73A5";
    case "rock":
      return "#B59E59";
    case "steel":
      return "#ADADC6";
    case "water":
      return "#3B90ED";
    default:
      break;
  }
};
