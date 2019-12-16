import styled from 'styled-components'

export const Container = styled.div`
  background: #303956;
  border-radius: 4px;
  padding: 24px;

  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    margin: 40px 0;
  }
`

export const WalletsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`