const drawerWidth = 276;

const styles = (theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: '#3A454E',
    // color: '#fff',
  },
  drawerClose: {
    backgroundColor: '#3A454E',
    // color: '#fff',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    backgroundColor: '#3A454E',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});

export const CustomListItemCss = (theme) => ({
  root: {
    color: 'white',
    // borderColor: theme.palette.secondary.light,
    borderColor: 'rgb(76, 86, 86)',
    // backgroundColor: 'rgba(0, 0, 0, 0.08',
    '&.Mui-selected': {
      color: theme.palette.primary.main,
      borderLeft: `solid 3px ${theme.palette.primary.main}`,
    },
    '&:hover': {
      color: '#3CBA68',
    },
  },
});

export const CustomListItemIconCss = (theme) => ({
  root: {
    color: 'white',
  },
});

export default styles;
