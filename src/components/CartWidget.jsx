import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const CartWidget = ({quantity}) => {
    return (
        <>
            <div style={{overflow: 'hidden'}}>
                <div style={{position: 'relative', float:'left', top: '15px'}}>
                    <ShoppingCartOutlinedIcon />
                </div>
                <div style={{position: 'relative', float: 'right', right: '10px'}}>
                    <p style={{fontColor: 'white'}}>{quantity}</p>
                </div>
            </div>
        </>
    );
};

export default CartWidget;