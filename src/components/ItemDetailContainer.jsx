import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Box, Grid, Button } from '@mui/material';
import {useParams} from 'react-router-dom';
import db from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function ItemListContainer({data}){
	const [product, setProduct] = useState({});
	const {id} = useParams();
	const navigate = useNavigate();

	const getProductByID = async () => {
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);
        
        if(docSnap.exists()){
			let product = docSnap.data();
			product.id = docSnap.id;
			setProduct(product);
		}else{
			console.log("Document no encontrado!");
			navigate('/error');
		}
    }

	useEffect(() => { 
        getProductByID(id);
    }, [id])

	
	return (
		<>
			<Card sx={{ maxWidth: '100%' }}>
			 	<CardContent>
			 		<Box sx={{ flexGrow: 1 }}>
		                <Grid container spacing={2}>
			                <Grid item xs={8}>
					        	<CardMedia
						          component="img"
						          height="400"
						          image={`../images/${product.image}`}
						          alt="Producto en venta"
						        />
						    </Grid>
						    <Grid item xs={4}>
						    	<div>
						    		Nombre: {product.title} <br />
						    		Descripción: {product.description} <br />
						    		Precio: ${product.price} <br />
						    		Stock: {product.stock} <br />
						    	</div>
						    	<Button variant="contained" style={{textDecoration: 'none'}}>Comprar</Button> 
						    </Grid>
						</Grid>
					</Box>
				</CardContent>
			</Card>
		</>
	);
}