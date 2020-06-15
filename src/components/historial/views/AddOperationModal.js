import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Button, TextField, Grid, MenuItem} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const banksType = [
    {
      value: '',
      label: '',
    },
    {
      value: 'ahorro',
      label: 'Ahorro',
    },
    {
      value: 'corriente',
      label: 'Corriente',
    },
    {
      value: 'Vista',
      label: 'Vista/Rut',
    },
  ];

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export const AddOperationModal = (props) => {
  const {open, values, handleClose, changeValues, handleSendData} = props;

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Agregar operación
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
              <Grid item xs={12} sm={6} style={{width:'100%'}}>
                <TextField value={values.operationType} onChange={changeValues('operationType')} style={{width:'100%'}} select label='Tipo de operación' variant={'outlined'}>
                    <MenuItem value={'Ingreso'}>Ingreso</MenuItem>
                    <MenuItem value={'Envio a venezuela'}>Envio a venezuela</MenuItem>
                    <MenuItem value={'Transferencia'}>Transferencia</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} style={{width:'100%'}}>
                <TextField value={values.amount} onChange={changeValues('amount')} style={{width:'100%'}} label='Monto' variant={'outlined'}/>
              </Grid>
            </Grid>

            {values.operationType !== 'Ingreso' && values.operationType !== '' && (
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField disabled={values.operationType === 'Ingreso' || values.operationType === ''} value={values.name} onChange={changeValues('name')} style={{width:'100%'}} label='Nombre' variant={'outlined'}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField disabled={values.operationType === 'Ingreso' || values.operationType === ''} value={values.lastName} onChange={changeValues('lastName')} style={{width:'100%'}} label='Apellido' variant={'outlined'}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField disabled={values.operationType === 'Ingreso' || values.operationType === ''} value={values.documentNumber} onChange={changeValues('documentNumber')} style={{width:'100%'}} label='C.I/Rut' variant={'outlined'}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField disabled={values.operationType === 'Ingreso' || values.operationType === ''} value={values.bankNumber} onChange={changeValues('bankNumber')} style={{width:'100%'}} label='N° de cuenta' variant={'outlined'}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField disabled={values.operationType === 'Ingreso' || values.operationType === ''} value={values.bankName} onChange={changeValues('bankName')} style={{width:'100%'}} label='Banco' variant={'outlined'}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField disabled={values.operationType === 'Ingreso' || values.operationType === ''} value={values.bankType} onChange={changeValues('bankType')} style={{width:'100%'}} select label='Tipo de cuenta' variant={'outlined'}>
                            {banksType.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField disabled={values.operationType === 'Ingreso' || values.operationType === ''} value={values.email} onChange={changeValues('email')} style={{width:'100%'}} label='Email' variant={'outlined'}/>
                    </Grid>
                </Grid>
            )}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSendData} color="primary">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
