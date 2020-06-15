import { createMuiTheme } from '@material-ui/core/styles';

const dashboardTableTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#3DCE59',
      main: '#3CBA68',
      dark: '#0F2C2A',
      contrastText: '#ffffff',
    },
  },
  overrides: {
    MuiDialog: {
      paperScrollPaper: {
        maxHeight: 'calc(100% - 175px);',
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: '3px',
      },
    },
    MuiDialogContent: {
      root: {
        padding: '0px',
      },
    },
    MuiTabs: {
      flexContainer: {
        justifyContent: 'space-evenly',
      },
    },
    MuiTableRow: {
      root: {
        '&.Mui-selected': {
          backgroundColor: '#9da6a62b',
        },
      },
      head: {
        height: '48px',
      },
    },
    MuiTableCell: {
      head: {
        lineHeight: 1.43,
      },
    },
    MuiCard: {
      root: {
        borderRadius: '0px',
      },
    },
    MuiCardContent: {
      root: {
        padding: '0 !important',
      },
    },
    MuiIconButton: {
      root: {
        padding: '8px',
      },
    },
    MuiChip: {
      root: {
        textTransform: 'uppercase',
      },
    },
    MUIDataTableHeadCell: {
      root: {
        textAlign: 'left',
        letterSpacing: '0.125em',
        padding: '10px 2.2%',
      },
      fixedHeader: {
        backgroundColor: 'rgba(255,255,255,1)',
        textAlign: 'left',
      },
    },
    MUIDataTableBodyRow: {
      root: {
        '&:nth-child(odd)': {
          background: '#F8F8F8',
        },
        '&:hover': {
          backgroundColor: '#EAEAEA !important',
        },
      },
    },
    MUIDataTableFilterList: {
      root: {
        borderTop: 'solid 20px #EAEAEA',
        margin: 0,
        paddingLeft: '1em',
      },
      chip: {
        border: '1px solid #80808069',
        backgroundColor: '#ffffff',
        fontWeight: 500,
        letterSpacing: '0.025em',
        '& svg': {
          display: 'none',
        },
      },
    },
    MUIDataTableBodyCell: {
      root: {
        whiteSpace: 'nowrap',
        height: '100%',
        padding: '10px 2.5%',
      },
      cellStackedSmall: {
        '@media (max-width: 959px)': {
          fontWeight: '500',
          height: 'auto !important',
          borderBottom: '0px',
          width: '100%',
          fontSize: '0.875rem',
          padding: '5px 2.5%',
        },
      },
      stackedCommon: {
        '@media (max-width: 959px)': {
          height: 'auto !important',
          borderBottom: '1px solid #F9C028',
          width: '100%',
          fontSize: '0.875rem',
          padding: '5px 2.5%',
        },
      },
    },
    MUIDataTableToolbar: {
      titleText: {
        letterSpacing: '0.250em',
        textTransform: 'uppercase',
        fontWeight: '500',
        fontSize: '1em',
      },
    },
    MuiToolbar: {
      regular: {
        minHeight: '70px !important',
      },
    },
    MUIDataTable: {
      responsiveScrollMaxHeight: {
        height: '100%',
        maxHeight: 'calc(100vh - 265px)',
      },
    },
    MUIDataTablePaper: {
      borderRadius: '0px',
    },
  },
});

export default dashboardTableTheme;
