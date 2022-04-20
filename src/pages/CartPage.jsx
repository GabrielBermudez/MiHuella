import React, { useState, useContext } from "react";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import DeleteIcon from "@mui/icons-material/Delete";
import CartContext from "../context/CartContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import ModalCustom from "../components/ModalCustom";
import db from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CartPage() {
  const { cartProducts, removeProductToCart, calculatePriceTotal } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [successOrder, setSuccessOrder] = useState(false);
  const [orderID, setOrderID] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [order, setOrder] = useState(
    {
      buyer: formData,
      items: cartProducts.map((cartProduct) => {
        return {
          id: cartProduct.id,
          title: cartProduct.title,
          price: cartProduct.price,
          quantity: cartProduct.quantity
        };
      }),
      total: calculatePriceTotal()
    }
  );

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    let prevOrder = {...order, buyer: formData};
    e.preventDefault();
    setOrder({
      ...order,
      buyer: formData
    });

    pushOrder(prevOrder)
  }

  const pushOrder = async (prevOrder) => {
    const orderFirebase = collection(db, 'orders');
    const orderDoc = await addDoc(orderFirebase, prevOrder)
    setSuccessOrder(true);
    setOrderID(orderDoc.id);
  }

  return (
    <>
      <TableContainer component={Paper} style={{ marginTop: 30 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Imagen</StyledTableCell>
              <StyledTableCell align="center">Producto</StyledTableCell>
              <StyledTableCell align="center">Descripción</StyledTableCell>
              <StyledTableCell align="center">Cantidad</StyledTableCell>
              <StyledTableCell align="center">Precio</StyledTableCell>
              <StyledTableCell align="center">Quitar</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartProducts.map((cartProduct) => {
              const { id, title, description, price, quantity, image } = cartProduct;
              return (
                <StyledTableRow key={id}>
                  <StyledTableCell align="center">
                    <img
                      src={`../images/${image}`}
                      alt="Logo de productos"
                      style={{ width: 125, borderRadius: 20 }}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">{title}</StyledTableCell>
                  <StyledTableCell align="center">
                    {description}
                  </StyledTableCell>
                  <StyledTableCell align="center">{quantity}</StyledTableCell>
                  <StyledTableCell align="center">${price}</StyledTableCell>
                  <StyledTableCell align="center">
                    <button
                      style={{
                        border: "1px solid black",
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        boxShadow: "1px 1px 5px #00000026",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        backgroundColor: "red",
                      }}
                      onClick={() => removeProductToCart(id)}
                    >
                      <DeleteIcon />
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ float: "right", margin: 30, fontSize: 20 }}>
        <div>Subtotal: ${calculatePriceTotal()}</div>
        <div>
          <b>TOTAL: ${calculatePriceTotal()}</b>
        </div>
      </div>
      {cartProducts.length !== 0 && <div style={{width: '100%', textAlign: 'center', marginTop: 30}}>
        <Button variant="contained" style={{textDecoration: 'none'}} onClick={() => setShowModal(true)}>Terminar Compra</Button>
      </div>}
      {cartProducts.length === 0 && 
              <div style={{width: '100%', textAlign: 'center', color:'gray'}}>
                  <h1>No hay productos en el carrito de compras</h1>
                  <Link to="/">
                  <Button variant="contained" style={{textDecoration: 'none'}}>Volver al catalogo de Productos</Button>
                  </Link>
              </div>
              }
      { showModal && <ModalCustom handleClose={() => setShowModal(false)} open={showModal}>
        {(successOrder) ? (
          <div style={{width: '100%', textAlign: 'center', padding: '10px 0px'}}>
            <h2 style={{color:"green", textAlign:'center'}}>Orden Generada con el codigo: {orderID}</h2>
            <Link to="/"><Button variant="contained" style={{textDecoration: 'none'}}>Aceptar</Button></Link>
          </div>
        ): (
          <div style={{padding:20, textAlign:'center'}}>
        <h2 style={{textDecoration:'underline'}}>Formulario de Compra</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nombre" onChange={handleChange} value={formData.name} style={{marginBottom:5}} /><br />
          <input type="number" name="phone" placeholder="Telefono" onChange={handleChange} value={formData.phone} style={{marginBottom:5}} /><br />
          <input type="mail" name="email" placeholder="Email" onChange={handleChange} value={formData.email} style={{marginBottom:5}} /><br />
          <Button variant="contained" type="submit">Enviar</Button>
        </form> </div>)}
      </ModalCustom> }
    </>
  );
}
