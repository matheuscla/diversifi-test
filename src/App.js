import React, { useState } from 'react'
import axios from 'axios'

import Header from './components/Header'
import AddressForm from './components/AddressForm'

function App() {
  const [accounts, setAccounts] = useState([''])
  const [wallets, setWallets] = useState([])

  const handleInputChange = async (value, index) => {
    const updatedAccounts = [ ...accounts]

    updatedAccounts[index] = value
 
    setAccounts(updatedAccounts)
  }

  const handleAddAccount = () => setAccounts([...accounts, ''])
  
  const handleRemoveAccount = (idx) => setAccounts(accounts.filter((value, index) => index !== idx))

  const handleSearch = e => {
    e.preventDefault()

    getAccounts()
  }

  const getAccounts = async () => {
    const { data } = await axios.get(`https://api.etherscan.io/api?module=account&action=balancemulti&address=${accounts.join(',')}&tag=latest&apikey=SYZPKC5JIC5HQWXMWJEN2Y9Z2CAEJRQKID`)

    if (data.status == 1) {
      const newWallets = data.result.map(wallet => ({
        account_number: wallet.account,
        balance: wallet.balance/1000000000000000000
      }))

      setWallets(newWallets)
    }
  }


  return (
    <>
      <Header />
      <AddressForm 
        accounts={accounts} 
        onInputChange={handleInputChange}
        addAccount={handleAddAccount}
        removeAccount={handleRemoveAccount}
        searchAccount={handleSearch}
      />
    </>
  )
}

export default App
