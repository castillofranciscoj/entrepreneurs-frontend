import { ApolloProvider } from '@apollo/client';
import client from '../graphql/client';
import ProductTable from './products/ProductTable';


export default function MainDashboard() {
  return (
      <ApolloProvider client={client}>
        <ProductTable/>
      </ApolloProvider>
  );
}
