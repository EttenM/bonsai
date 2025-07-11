"use client";
import React, { ReactNode } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export const Provider = ({ children }: { children: ReactNode }) => {
  const client = new ApolloClient({
    uri: "http://cs63440-wordpress-irqux.tw1.ru/graphql",
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
