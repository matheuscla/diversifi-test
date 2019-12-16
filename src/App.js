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

  return (
    <>
      <Header />
      <AddressForm 
        accounts={accounts} 
        onInputChange={handleInputChange} 
      />
    </>
  )
}

export default App
