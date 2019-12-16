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

const AddressForm = () => (
  <Container>
    <Header>
      <h1>Add Address</h1>
      <button>
        <img src={addIcon} alt='Add address' />
      </button>
    </Header>

    <Form>
      <InputsContainer>
        <Input placeholder='Account address' />
        <RemoveBtn>REMOVE</RemoveBtn>
        <Input placeholder='Account address' />
        <RemoveBtn>REMOVE</RemoveBtn>
        <Input placeholder='Account address' />
        <RemoveBtn>REMOVE</RemoveBtn>
      </InputsContainer>

      <Submit>SEARCH ADDRESS</Submit>
    </Form>

  </Container>
)

export default AddressForm