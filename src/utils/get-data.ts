import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { getLocale } from "next-intl/server";
import { cache } from "react";

export const getItem = cache(async () => {
  const client = new ApolloClient({
    uri: "http://cs63440-wordpress-irqux.tw1.ru/graphql",
    cache: new InMemoryCache(),
  });
  // const locale = useLocale();

  const locale = (await getLocale()).toUpperCase();
  console.log("locale", locale);
  const data = await client.query({
    query: gql`
      query GetPosts($language: LanguageCodeFilterEnum!) {
        landingPages(where: { language: $language }) {
          nodes {
            heroBlock {
              title
              images {
                leftImage {
                  node {
                    sourceUrl
                  }
                }
                rightImage {
                  node {
                    sourceUrl
                  }
                }
              }
              rightText {
                text
                title
              }
            }
          }
        }
      }
    `,
    variables: { language: locale },
  });

  return data;
});
