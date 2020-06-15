import React, { useEffect } from 'react';
import { HistorialTable } from './views/HistorialTable';
import Layout from '../Layout';
import moment from 'moment';
import { AddOperationModal } from './views/AddOperationModal';
import {Button, Grid} from '@material-ui/core';

export const HistorialPayment = () => {
    const [dataHistory, setDataHistory] = React.useState([]);
    const [openAdd, setOpenAdd] = React.useState(false);
    const userActive = 'jauregui82';
    const date = new Date();
    const [values, setValues] = React.useState({
        name:'',
        lastName:'',
        documentNumber: '',
        bankNumber: '',
        bankName: '',
        bankType: '',
        amount: '',
        operationType:'',
        email:'',
        created: moment(date).format('DD-MM-YYYY')
    });

    const firebase = window.firebase;
    const db = window.firebase.database();
    const refUser = db.ref(`server/data/users/${userActive}/${dataHistory.length}`)
  
    const getData = () => {
        firebase.database().ref(`server/data/users/${userActive}`).orderByChild("created").on('value', snap =>{
            const listCost= snap.val();
            if (listCost) {
                console.log('key===>>', snap.key);
                console.log('listCost===>>', listCost);
                console.log('dataHistory===>>', dataHistory);
                let dataUpdate= dataHistory;
                dataUpdate.push(listCost)
                setDataHistory(listCost)             
            } else {
                setDataHistory([])             
            }
        });
    };

    useEffect(()=>{
        getData();
    },[])

    const handleClickOpen = () => {
      setOpenAdd(true);
    };
  
    const handleClose = () => {
      setOpenAdd(false);
      setValues({
            name:'',
            lastName:'',
            documentNumber: '',
            bankNumber: '',
            bankName: '',
            bankType: '',
            amount: '',
            operationType:'',
            created: moment(date).format('DD-MM-YYYY')
        })
    };
  
    const changeValues = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    }
  
    const handleClickMap = () => {
        // dataHistory.map((item, i)=>{
        //     return (
                
        //         console.log(item),
        //         console.log(i)
        //     );
            
        // })
        console.log(dataHistory);
        
    }
    
    const handleSendData = () => {
        console.log(dataHistory.length);
        refUser.set({
            id: dataHistory.length,
            name: values.name,
            lastName: values.lastName,
            fullName: `${values.name} ${values.lastName}`,
            documentNumber: values.documentNumber,
            bankNumber: values.bankNumber,
            bankName: values.bankName,
            bankType: values.bankType,
            amount: values.amount,
            operationType: values.operationType,
            email: values.email,
            created: values.created,
            paymentDate: '',
            state: 'pending',
        });
    }
  
    return(
        <Layout container={'xl'}>
            <Grid container spacing={2}>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={handleClickOpen}>
                        Solicitar Operación
                    </Button>
                </Grid>
            </Grid>
            <HistorialTable data={dataHistory}/>

            <AddOperationModal 
                open={openAdd}
                values={values}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                changeValues={changeValues}
                handleSendData={handleSendData}
                handleClickMap={handleClickMap}
            />
        </Layout>
    );
} 