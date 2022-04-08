import React, {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import ItemDetail from './ItemDetail';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useParams} from 'react-router-dom';
import ProductsMock from '../ProductsMock';

export default function ItemListContainer({title}) {
    const [products, setProducts] = useState([]);
    const {id} = useParams();

    const getAllProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(ProductsMock);
        })
    }
    
    useEffect( () => {
        if(id != undefined){
            console.log("entre");
            console.log(ProductsMock.filter(product => product.category_id == id));
            setProducts(ProductsMock.filter(product => product.category_id == id));
        }else{
            getAllProducts().then( (data) => {
                setProducts(data);
            }).finally(() => {
                console.log("Fin del UseEffect");
            })
        }
    }, [id])

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
                                        <ItemDetail data={product} key={product.id} />                                        
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