import React, {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Item from './Item';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function ItemList({title}) {
    const [products, setProducts] = useState([]);

    const allProducts = [
        {
            id: 1,
            title: "Alimento para Perro",
            price: 2000,
            image: 'alimento_perro_1.png',
            stock: 5
        },
        {
            id: 2,
            title: "Alimento para Gato",
            price: 1300,
            image: 'alimento_gato_1.png',
            stock: 3
        }
    ];

    const getAllProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(allProducts);
        })
    }
    
    useEffect( () => {
        setTimeout(() => {
            getAllProducts().then( (data) => {
                setProducts(data);
            }).finally(() => {
                console.log("Fin del UseEffect");
            })
        }, 2000);
    }, [])

    return (
        <>
            <Container maxWidth="xl">
                <div style={{textAlign: 'center', textDecoration: 'underline' , boxShadow: '1px 5px 15px gray', height: '100vh'}}>
                   <h1>{title}</h1>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            {products.map( (product) => {
                                return (
                                    <Grid item xs={4}>
                                        <Item data={product} key={product.id} />
                                    </Grid> 
                                );
                            })}
                        </Grid>
                    </Box> 
                </div>  
            </Container>
        </>
    );
}