import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  fullHeightCard: {
    height: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0,0,0,0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    margin: "0 3px",
    heigth: "100%",
    position: "relative",
  },
  details: {
    margin: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  title: {
    padding: "0 16px",
  },

  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
}));
