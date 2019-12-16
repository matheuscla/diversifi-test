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

const AddressForm = ({ accounts, onInputChange }) => (
  <Container>
    <Header>
      <h1>Add Address</h1>
      <button>
        <img src={addIcon} alt='Add address' />
      </button>
    </Header>

    <Form>
      <InputsContainer>
        {accounts.map((account, index) => (
          <div key={index}>
            <Input 
              onChange={e => onInputChange(e.target.value, index)} 
              placeholder='Account address' 
            />
            
            <RemoveBtn>REMOVE</RemoveBtn>
          </div>
        ))}
      </InputsContainer>

      <Submit>SEARCH ADDRESS</Submit>
    </Form>

  </Container>
)

export default AddressForm