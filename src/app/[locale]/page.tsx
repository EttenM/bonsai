import Hero from "@/components/blocks/hero/Hero";
import Vision from "@/components/blocks/vision/Vision";
import LigthLayout from "@/components/layouts/LigthLayout";
import Service from "@/components/blocks/servicBlock/Service";
import Material from "@/components/blocks/material/Material";
import Product from "@/components/blocks/product/Product";
import Work from "@/components/blocks/Work/Work";
import { getLocale, setRequestLocale } from "next-intl/server";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery,
} from "@apollo/client";
import { cache } from "react";

// export const revalidate = 3600;

// export async function generateStaticParams() {
//   return [{ locale: "en" }, { locale: "ru" }];
// }
const getItem = cache(async (locale: string) => {
  const client = new ApolloClient({
    uri: "http://cs63440-wordpress-irqux.tw1.ru/graphql",
    cache: new InMemoryCache(),
  });
  // const locale = useLocale();

  // const locale = (await getLocale()).toUpperCase();
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
            visionBlock {
              subtitle
              title
            }
            productsBlock {
              productSubtitle
              productText
              productTitle
              productItem {
                productItemQuantity
                productItemTitle
                productItemImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: { language: locale.toUpperCase() },
  });

  return data;
});

export default async function Home({ params }: { params: { locale: string } }) {
  // const {locale} = us(params);

  // Enable static rendering
  setRequestLocale(params.locale);

  const data = await getItem(params.locale);
  console.log("data", data.data.landingPages.nodes[0]);

  return (
    <>
      <Hero data={data.data} />
      <Vision data={data.data} />
      <LigthLayout>
        <Service />
        <Material />
      </LigthLayout>
      <Product data={data.data} />
      <Work />
    </>
  );
}
