import Cart, { CartProps } from 'templates/Cart'

import itemsMock from 'components/CartList/mock'
import gamesMock from 'components/GameCardSlider/mock'
import higlightMock from 'components/Highlight/mock'
import cardsMock from 'components/PaymentOptions/mock'

export default function getCartPage(props: CartProps) {
  return <Cart {...props} />
}

// this page changes according users manipulation. That's why it will be ServerSide
export async function getServerSideProps() {
  return {
    props: {
      items: itemsMock,
      total: '$ 430,00',
      cards: cardsMock,
      recommendedGames: gamesMock,
      recommendedHighlight: higlightMock
    }
  }
}
