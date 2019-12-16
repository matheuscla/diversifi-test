import styled from 'styled-components'

export const Container = styled.div`
  background: #303956;
  border-radius: 4px;
  padding: 24px;
  height: 620px;
  width: 42%;

  @media(max-width: 1100px) {
    width: 100%;
    margin-bottom: 40px;
    height: 400px;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
  }

  button {
    background: transparent;
  }
`

export const Form = styled.form`
  position: relative;
`

export const Input = styled.input`
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  border: 1px solid #E4E4E4;
  color: #C1C1C1;
  padding: 12px 16px;
  width: 462px;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 24px;

   @media(max-width: 1100px) {
    width: 70%;
  }
`

export const InputsContainer = styled.div`
  height: 450px;
  overflow-y: auto;
  width: 100%

  @media(max-width: 1100px) {
    height: 230px;
  }
`

export const RemoveBtn = styled.button`
  background: #FF6364;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  padding: 12px 20px;
  color: #fff;
  margin-left: 16px;
`

export const Submit = styled.button`
  width: 100%;
  background: #4AC49F;
  border-radius: 4px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-top: 10px;
`