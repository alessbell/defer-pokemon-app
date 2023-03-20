import { Outlet } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://main--alessia-bellisarios-rfqf1c.apollographos.net/graphql",
  cache: new InMemoryCache(),
});

function Layout() {
  return (
    <ApolloProvider client={client}>
      <Outlet />
    </ApolloProvider>
  );
}

export default Layout;
