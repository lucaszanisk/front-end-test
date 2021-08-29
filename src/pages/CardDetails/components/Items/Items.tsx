import React from 'react';
import classes from './Items.module.scss';

const Items = (props: any) => {
  const itemsName = props.orders.items.map((items: any) => {
    return <p>{items.name}</p>;
  });
  const itemsQty = props.orders.items.map((items: any) => {
    return <p>x{items.qty}</p>;
  });
  const itemsPrice = props.orders.items.map((items: any) => {
    return <p>R$ {items.price}</p>;
  });

  return (
    <div className={classes.itens}>
      <div className={classes.headerItens}>
        <span>ITENS</span>
        <span>QNTD.</span>
        <span>Valor Unit.</span>
      </div>

      <div className={classes.list_Itens}>
        <div>{itemsName}</div>
        <span>{itemsQty}</span>
        <span>{itemsPrice}</span>
      </div>
    </div>
  );
};

export default Items;
