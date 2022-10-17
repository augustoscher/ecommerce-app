import {
  QueryHome_banners,
  QueryHome_newGames,
  QueryHome_upcomingGames,
  QueryHome_sections_popularGames_games,
  QueryHome_freeGames,
  QueryHome_sections_popularGames_highlight
} from 'graphql/generated/QueryHome'
import { QueryRecommended_recommended_section_games } from 'graphql/generated/QueryRecommended'
import { getImageUrl } from 'utils/getImageUrl'

export const bannerMapper = (banners: QueryHome_banners[]) =>
  banners.map((banner) => ({
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
  }))

export const gamesMapper = (
  games:
    | QueryHome_sections_popularGames_games[]
    | QueryHome_upcomingGames[]
    | QueryHome_freeGames[]
    | QueryHome_newGames[]
    | QueryRecommended_recommended_section_games[]
    | null
    | undefined
) =>
  games &&
  games.map((game) => ({
    title: game.name,
    slug: game.slug,
    developer: game.developers[0].name,
    img: getImageUrl(game.cover?.url),
    price: game.price
  }))

export const highlightMapper = (
  highlight: QueryHome_sections_popularGames_highlight | null | undefined
) => ({
  title: highlight?.title,
  subtitle: highlight?.subtitle,
  backgroundImage: getImageUrl(highlight?.background?.url),
  buttonLabel: highlight?.buttonLabel,
  buttonLink: highlight?.buttonLink
})
