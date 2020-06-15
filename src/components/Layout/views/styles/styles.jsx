const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    minHeight: '100vh',
    height: 'auto',
    backgroundColor: '#f4f4f4',
    position: 'relative',
  },
});

export default styles;
