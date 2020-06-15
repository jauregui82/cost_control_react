const options = {
  selectableRows: 'none',
  responsive: 'standard',
  elevation: 0,
  filter: true,
  print: false,
  download: true,
  viewColumns: false,
  textLabels: {
    body: {
      noMatch: 'Disculpe, no se han encontrado registros',
      toolTip: 'Ordenar',
      columnHeaderTooltip: (column) => `Ordenar por ${column.label}`,
    },
    pagination: {
      next: 'Siguiente Página',
      previous: 'Página anterior',
      rowsPerPage: 'Filas por página:',
      displayRows: 'de',
    },
    toolbar: {
      search: 'Buscar',
      downloadCsv: 'Descargar Excel',
      print: 'Imprimir',
      viewColumns: 'Ver Columnas',
      filterTable: 'Filtros Tabla',
    },
    filter: {
      all: 'all',
      title: 'FILTROS',
      reset: 'LIMPIAR',
    },
    selectedRows: {
      text: ' - seleccionado (s) ',
      delete: 'Eliminar',
      deleteAria: 'Eliminar Seleccionados',
    },
  },
};

export default options;
