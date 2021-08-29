import React from 'react';
import { Container } from '../../../../../src/components/Container/Container';
import classes from '../StatusOrders/StatusOrders.module.scss';
import { ReactComponent as ClockIcon } from '../../../../components/Icons/ClockIcon.svg';
import { ReactComponent as Coins } from '../../../../components/Icons/Coins.svg';
import { ReactComponent as Packing } from '../../../../components/Icons/Packing.svg';
import { ReactComponent as Onitsway } from '../../../../components/Icons/Onitsway.svg';
import { ReactComponent as Delivered } from '../../../../components/Icons/Delivered.svg';

const StatusOrders = (props: any) => {
  const obj: any = {
    'Aguardando pagamento': false,
    'Pagamento aprovado': false,
    'Pedido em separação': false,
  };
  const statusOrder = props.orders.status;
  obj[statusOrder] = true;

  return (
    <Container>
      <header>
        <div className={classes.header}>
          <span>Pedido n°</span>
          <span>{props.orders.id}</span>
        </div>
        <div></div>
      </header>
      <div className={classes.statusOrder}>
        <h3>Acompanhe seu pedido</h3>
        <div className={classes.divContainer}>
          <div
            className={
              obj['Aguardando pagamento']
                ? classes.selectedIcons
                : classes.icons
            }
          >
            <ClockIcon />
          </div>
          <div
            className={
              obj['Pagamento aprovado'] ? classes.selectedIcons : classes.icons
            }
          >
            <Coins />
          </div>
          <div
            className={
              obj['Pedido em separação'] ? classes.selectedIcons : classes.icons
            }
          >
            <Packing />
          </div>
          <div className={obj[''] ? classes.selectedIcons : classes.icons}>
            <Onitsway />
          </div>
          <div className={obj[''] ? classes.selectedIcons : classes.icons}>
            <Delivered />
          </div>
        </div>
        <p>{props.orders.status}</p>
      </div>
    </Container>
  );
};

export default StatusOrders;
