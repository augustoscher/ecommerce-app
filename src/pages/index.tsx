import Home, { HomeTemplateProps } from 'templates/Home'
import { initializeApollo } from 'utils/apollo'
import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'
import { getImageUrl } from 'utils/getImageUrl'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}
// ATENÇÃO:
// os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES

// getStaticProps => gerar estático em build time (mesmo que o gatsby)
// getServerSideProps => gerar via ssr a cada request (nunca vai para o bundle do client)
// getInitialProps => gerar via ssr a cada request (vai para o client, faz hydrate do lado do client depois do 1 req)
export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  return {
    props: {
      revalidate: 10,
      banners: banners.map((banner) => ({
        img: getImageUrl(banner.image?.url),
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label,
        buttonLink: banner.button?.link,
        ...(banner.ribbon && {
          ribbon: banner.ribbon.text,
          ribbonColor: banner.ribbon.color,
          ribbonSize: banner.ribbon.size
        })
      })),
      newGamesTitle: sections?.newGames?.title,
      newGames: newGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: getImageUrl(game.cover?.url),
        price: game.price
      })),
      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularHighlight: {
        title: sections?.popularGames?.highlight?.title,
        subtitle: sections?.popularGames?.highlight?.subtitle,
        backgroundImage: getImageUrl(
          sections?.popularGames?.highlight?.background?.url
        ),
        buttonLabel: sections?.popularGames?.highlight?.buttonLabel,
        buttonLink: sections?.popularGames?.highlight?.buttonLink
      },
      mostPopularGames: sections!.popularGames!.games.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: getImageUrl(game.cover?.url),
        price: game.price
      })),
      upcomingGamesTitle: sections?.upcomingGames?.title,
      upcomingGames: upcomingGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: getImageUrl(game.cover?.url),
        price: game.price
      })),
      upcomingHighlight: {
        title: sections?.upcomingGames?.highlight?.title,
        subtitle: sections?.upcomingGames?.highlight?.subtitle,
        backgroundImage: getImageUrl(
          sections?.upcomingGames?.highlight?.background?.url
        ),
        buttonLabel: sections?.upcomingGames?.highlight?.buttonLabel,
        buttonLink: sections?.upcomingGames?.highlight?.buttonLink
      },
      freeGamesTitle: sections?.freeGames?.title,
      freeGames: freeGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: getImageUrl(game.cover?.url),
        price: game.price
      })),
      freeHighligth: {
        title: sections?.freeGames?.highlight?.title,
        subtitle: sections?.freeGames?.highlight?.subtitle,
        backgroundImage: getImageUrl(
          sections?.freeGames?.highlight?.background?.url
        ),
        buttonLabel: sections?.freeGames?.highlight?.buttonLabel,
        buttonLink: sections?.freeGames?.highlight?.buttonLink
      }
    }
  }
}
