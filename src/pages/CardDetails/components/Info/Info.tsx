import React from 'react';
import { Container } from '../../../../components/Container/Container';
// import classes from '../Info/Info.module.scss';

const Info = (props: any) => {
  return (
    <Container>
      <div>
        <p>Pedido feito em: {props.orders.date}</p>
        <div>
          <h3>INFORMAÇÕES DE ENTREGA</h3>
          <h4>Endereço</h4>
          <p>
            {props.orders.address.street}, {props.orders.address.number},
            {props.orders.address.city}, {props.orders.address.state}, CEP:
            {props.orders.address.postcode}
          </p>
        </div>
        <div>
          <h4>Previsão de entrega</h4>
          <p>
            de {props.orders.freight.from} a {props.orders.freight.to} dias.
          </p>
        </div>
      </div>
      <div>
        <h3>DETALHES DA COMPRA</h3>
        <h4>Tipo de pagamento</h4>
        <p>{props.orders.payment_method}</p>
      </div>
    </Container>
  );
};

export default Info;
