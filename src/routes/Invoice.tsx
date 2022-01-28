import { Params, useParams } from 'react-router-dom';
import { getInvoice } from '../data';

export default function Invoice() {
  const params: Params<string> = useParams();
  const invoice = params.invoiceId
    ? getInvoice(parseInt(params.invoiceId, 10))
    : null;
  return (
    <main style={{ padding: '1rem' }}>
      <h2>Total Due: {invoice?.amount}</h2>
      <p>
        {invoice?.name}: {invoice?.number}
      </p>
      <p>Due Date: {invoice?.due}</p>
    </main>
  );
}
