import React, { useEffect, useState } from 'react';
import { Container } from '../../components/Container/Container';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../env';
import classes from './CardDetails.module.scss';
import StatusOrders from './components/StatusOrders/StatusOrders';
import Info from './components/Info/Info';
import Items from './components/Items/Items';
import Footer from './components/Footer/Footer';

const CardDetails = () => {
  const { id }: any = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [orders, setOrders] = useState({
    id: Number,
    name: String,
    email: String,
    address: {
      street: String,
      number: String,
      city: String,
      state: String,
      postcode: String,
    },
    total: String,
    status: String,
    payment_method: String,
    items: [
      {
        name: String,
        qty: Number,
        price: String,
      },
      {
        name: String,
        qty: Number,
        price: String,
      },
      {
        name: String,
        qty: Number,
        price: String,
      },
    ],
    freight: {
      price: String,
      from: Number,
      to: Number,
    },
    date: String,
  });
  useEffect(() => {
    fetch(`${API_URL}/${id}.json`)
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setOrders(result);
        },
        // Nota: é importante lidar com errros aqui
        // em vez de um bloco catch() para não receber
        // exceções de erros reais nos componentes.
        error => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }, []);
  const message = 'Não Carregou!!';
  console.log(orders);

  if (error) {
    return <div>Error: {message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container>
        <div className={classes.header}>
          <span>Olá, {orders.name}!</span>
          <a href="/">◄ Voltar</a>
        </div>
        <div className={classes.card}>
          <StatusOrders orders={orders} />
          <Info orders={orders} />
          <Items orders={orders} />
          <Footer orders={orders} />
        </div>
      </Container>
    );
  }
};

export default CardDetails;
