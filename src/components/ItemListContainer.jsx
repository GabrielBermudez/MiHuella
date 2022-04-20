import React, {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import ItemDetail from './ItemDetail';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useParams} from 'react-router-dom';
import db from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function ItemListContainer({title}) {
    const [products, setProducts] = useState([]);
    const {category} = useParams();

    const getAllProducts = async () => {
        const itemCollection = collection(db, 'products');
        const productsSnapshot = await getDocs(itemCollection);
        const productList = productsSnapshot.docs.map((doc) => {
            let product = doc.data();
            product.id = doc.id;

            return product;
        });
        return productList;
    }
    
    useEffect( () => { 
        getAllProducts().then( (data) => {
            category ?
                setProducts(data.filter(product => product.category == category))
            :
            setProducts(data);
        }).finally(() => {
            console.log("Fin del UseEffect");
        })
    }, [category])

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