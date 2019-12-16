import React from 'react'

import { 
  Container,
  Brand,
  Badge,
  BadgeContainer,
  EthValue,
  USD
} from './styles'

const WalletCard = ({ wallet, ethUSD }) => (
  <Container>
    <small>{wallet.account_number}</small>

    <BadgeContainer>
      <Brand>ETHERIUM</Brand>
      <Badge>ETH</Badge>
    </BadgeContainer>

    <EthValue>{wallet.balance}</EthValue>
    <USD>{`$ ${(wallet.balance * ethUSD).toFixed(2)} USD`}</USD>
  </Container>
)

export default WalletCard