import React from 'react'

import { 
  Container,
  Brand,
  Badge,
  BadgeContainer,
  EthValue,
  USD
} from './styles'

const WalletCard = () => (
  <Container>
    <small>0x32be343b94f860124dc4fee278fdcbd38c102d88</small>

    <BadgeContainer>
      <Brand>ETHERIUM</Brand>
      <Badge>ETH</Badge>
    </BadgeContainer>

    <EthValue>1000.100</EthValue>
    <USD>$ 100.00</USD>
  </Container>
)

export default WalletCard