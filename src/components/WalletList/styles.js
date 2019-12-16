import styled from 'styled-components'

export const Container = styled.div`
  background: #303956;
  border-radius: 4px;
  padding: 24px;
  width: 56%;

  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 40px;
  }

  @media(max-width: 1100px) {
    width: 100%;
  }
`

export const WalletsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 15px;
  grid-column-gap: 30px;
  height: 56vh;
  overflow: auto;

  @media(max-width: 1100px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`