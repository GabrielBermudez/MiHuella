import React from 'react';
import Container from '@mui/material/Container';

const ItemListContainer = () => {
    return (
        <>
            <Container maxWidth="xl">
                <div style={{textAlign: 'center', textDecoration: 'underline' , boxShadow: '1px 5px 15px gray', height: '50vh'}}>
                   <h1>Catalogo de Productos</h1>
                </div>

            </Container>
        </>
    );
};

export default ItemListContainer;