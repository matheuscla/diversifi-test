import React from 'react'

import addIcon from '../../images/add.svg'
import { 
  Container,
  Form,
  Header,
  Input,
  InputsContainer,
  RemoveBtn,
  Submit
} from './styles'

const AddressForm = ({ accounts, addAccount, onInputChange, removeAccount, searchAccount }) => (
  <Container>
    <Header>
      <h1>Add Address</h1>
      <button type='button' onClick={addAccount}>
        <img src={addIcon} alt='Add address' />
      </button>
    </Header>

    <Form onSubmit={searchAccount}>
      <InputsContainer>
        {accounts.map((account, index) => (
          <div key={index}>
            <Input 
              onChange={e => onInputChange(e.target.value, index)} 
              placeholder='Account address' 
              required
            />

            <RemoveBtn 
              type='button' 
              onClick={() => removeAccount(index)}
            >
              REMOVE
            </RemoveBtn>
          </div>
        ))}
      </InputsContainer>

      <Submit>SEARCH ADDRESS</Submit>
    </Form>

  </Container>
)

export default AddressForm