import React from 'react'

import WalletCard from '../WalletCard'

import { Container, WalletsContainer } from './styles'

const WalletList = ({ wallets, ethUSD }) => (
  <Container>
    <h2>Wallets</h2>

    <WalletsContainer>
      {wallets.map(wallet => <WalletCard key={wallet.account_number} wallet={wallet} ethUSD={ethUSD} />)}
    </WalletsContainer>
  </Container>
) 

export default WalletList