import React from 'react';
import Container from '@mui/material/Container';
import ItemCount from './ItemCount';

const ItemListContainer = ({title}) => {
    return (
        <>
            <Container maxWidth="xl">
                <div style={{textAlign: 'center', textDecoration: 'underline' , boxShadow: '1px 5px 15px gray', height: '100vh'}}>
                   <h1>{title}</h1>
                   <ItemCount stocks={5} initial={1}/>
                </div>  
            </Container>
        </>
    );
};

export default ItemListContainer;