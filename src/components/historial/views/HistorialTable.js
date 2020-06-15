import React from 'react';
import MUIDataTable from 'mui-datatables';
import options from '../../common/MuiTableGeneralOptions';
import dashboardTableTheme from '../../common/MuiTableThemeDashboard';
import InfoIcon from '@material-ui/icons/Info';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Button, Tooltip, Grid } from '@material-ui/core';

export const HistorialTable = (props) => {
  const option = {
    ...options,
    selectableRows: 'multiple',
    filter: false,
    print: false,
    download: false,
    viewColumns: false,
    serverSide: false,
    search: true,
    // serverSide: true,
    // count: props.data.count,
    // rowsPerPage: props.values.pageSize,
    rowsPerPageOptions: [10, 20, 50, 100],
    // downloadOptions: {
    //   filename: 'solicitudes-linea-express.csv',
    // },
    // searchText: searchText,
    searchPlaceholder: 'Buscar',
    // onTableChange: (action, tableState) => {
    //   switch (action) {
    //     case 'changePage':
    //       props.changePage(tableState.page, 'page');
    //       break;
    //     case 'changeRowsPerPage':
    //       props.changeRowSize(tableState.rowsPerPage, 'pageSize');
    //       break;
    //     case 'search':
    //       filterChange(tableState.searchText, 'searchText');
    //       break;
    //     case 'filterChange':
    //       setSearchText('');
    //       setFilterWord(tableState.filterList[4]);
    //       if (!tableState.filterList[4].length) {
    //         tableState.filterList[4] = '';
    //       }
    //       props.filterChange(tableState.filterList[4], 'filterState');
    //       break;
    //     case 'resetFilters':
    //       setSearchText('');
    //       setFilterWord('all');
    //       props.filterChange('', 'filterState');
    //       break;
    //     default:
    //       break;
    //   }
    // },
  };
  const columns = [
    {
      name: 'id',
      label: 'ID',
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: 'amount',
      label: 'Monto',
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: 'payment_date',
      label: 'Destinatario',
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: 'representative',
      label: 'Tipo',
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: 'payment_date',
      label: 'Fecha de pago',
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: 'state',
      label: 'Estado',
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: 'id',
      label: 'Acción',
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          const icon = <InfoIcon />;
          return (
            <Tooltip title="Ver detalle">
              <Button onClick={() => props.selectedPaymentsConfirm(value)}>{icon}</Button>
            </Tooltip>
          );
        },
        filter: false,
        sort: false,
      },
    },
  ];
  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        {/* {props.data.results ? ( */}
        <MuiThemeProvider theme={dashboardTableTheme}>
          <MUIDataTable title="Listado" columns={columns} options={option} data={[]} />
        </MuiThemeProvider>
        {/* ) : (
          <p> No hay datos dispobiles para mostrar. </p>
        )} */}
      </Grid>
    </Grid>
  );
};
