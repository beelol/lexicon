export default (theme) => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  infoboxImage: {
    // width: 200,
    // height: 200,
    "margin-bottom": 20,
    "max-width": "100%",
    height: "auto"
  },
  infoboxImageContainer: {
    width: 200,
    height: 200,
    "margin-top": 10,

    display: "flex",
    "align-items": "center",
    "justify-content": "center"
  },
  container: {
    "margin-top": 40
  },
  innerContent: {
    display: 'flex',
    width: 350,
    alignItems: 'center',
    'flex-direction': 'column'
  },
  divider: {
    width: 200,
    "margin-bottom": 20
  }
});