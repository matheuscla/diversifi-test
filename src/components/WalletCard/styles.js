import styled from 'styled-components'

export const Container = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 24px;
  color: #000000;

  small {
    font-size: 12px;
    line-height: 12px;
  }
`

export const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`

export const Brand = styled.span`
  letter-spacing: 0.2em;
  color: #000000;
  font-size: 16px;
  line-height: 24px;
`

export const Badge = styled.span`
  color: #fff;
  background: #168AEF;
  border-radius: 8px;
  padding: 6px 9px;
  font-weight: bold;
  display: block;
  margin-left: 24px;
`

export const EthValue = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-top: 16px;
`

export const USD = styled.p`
  color: #0C8AF8;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-top: 8px;
`