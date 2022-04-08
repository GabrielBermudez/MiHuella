import React, {useState, useEffect} from 'react';
import { CardActionArea, Card, CardContent, CardMedia, Typography, Box, Grid, Button } from '@mui/material';
import ProductsMock from '../ProductsMock';
import Container from '@mui/material/Container';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';

export default function ItemListContainer({data}){
	const [product, setProduct] = useState({});
	const {id} = useParams();

	const filterProductByID = () => {
		return ProductsMock.find(product => product.id == id)
	}

	useEffect(() =>{
		setProduct(filterProductByID());
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