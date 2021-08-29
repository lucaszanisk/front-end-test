import React from 'react';
import classes from './Footer.module.scss';

const Footer = (props: any) => {
  const itemsQty = props.orders.items.map((items: any) => {
    return parseFloat(items.qty);
  });

  const itemsPrice = props.orders.items.map((items: any) => {
    return parseFloat(items.price);
  });

  var totalPriceItems = 0;

  for (var i = 0; i < itemsPrice.length; i++) {
    totalPriceItems = totalPriceItems + itemsQty[i] * itemsPrice[i];
  }

  return (
    <footer>
      <div className={classes.header}>
        <span>Total do pedido</span>
        <span>R${totalPriceItems},00</span>
      </div>
      <div className={classes.header}>
        <span>Frete</span>
        <span>R${props.orders.freight.price}</span>
      </div>
      <div className={classes.header}>
        <span>Valor Total</span>
        <span>
          R$
          {props.orders.total}
        </span>
      </div>
    </footer>
  );
};
export default Footer;
