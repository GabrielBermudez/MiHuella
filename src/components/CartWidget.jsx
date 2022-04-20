import React, { useContext } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";

export default function CartWidget() {
  const { cartProducts, calculateTotalItems } = useContext(CartContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Carrito de Compras">
          <ShoppingCartOutlinedIcon
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          />
        </Tooltip>
        <Typography sx={{ minWidth: 30 }}>{calculateTotalItems()}</Typography>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {cartProducts.map((product) => {
          return (
            <MenuItem>
              <Card sx={{ maxWidth: 300 }}>
                <Link to={`/item/${product.id}`}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="100"
                      image={`../images/${product.image}`}
                      alt="Producto en venta"
                    />
                    <CardContent style={{ color: "black" }}>
                      <Typography gutterBottom variant="p" component="div">
                        Nombre: {product.title}
                      </Typography>
                      <Typography gutterBottom variant="p" component="div">
                        Precio: ${product.price}
                      </Typography>
                      <Typography gutterBottom variant="p" component="div">
                        Cantidad: {product.quantity}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </MenuItem>
          );
        })}
        <div style={{ width: "90%", marginLeft: "2.5%" }}>
          <Link to="cart">
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                width: "100%",
              }}
            >
              INICIAR COMPRA
            </button>
          </Link>
        </div>
      </Menu>
    </React.Fragment>
  );
}
