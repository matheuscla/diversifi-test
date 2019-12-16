import React, { useState } from 'react'

import Header from './components/Header'
import AddressForm from './components/AddressForm'

function App() {
  const [accounts, setAccounts] = useState([''])

  const handleInputChange = async (value, index) => {
    const updatedAccounts = [ ...accounts]

    updatedAccounts[index] = value
 
    setAccounts(updatedAccounts)
  }

  const handleAddAccount = () => setAccounts([...accounts, ''])
  
  const handleRemoveAccount = (idx) => setAccounts(accounts.filter((value, index) => index !== idx))

  return (
    <>
      <Header />
      <AddressForm 
        accounts={accounts} 
        onInputChange={handleInputChange}
        addAccount={handleAddAccount}
        removeAccount={handleRemoveAccount}
      />
    </>
  )
}

export default App
