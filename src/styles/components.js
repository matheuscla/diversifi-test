import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 0 40px;
  display: flex;
  justify-content: space-between;

  @media(max-width: 1100px) {
    flex-direction: column;
  }
`