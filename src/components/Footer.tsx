import React from 'react'
import styled from 'styled-components'

export const Footer: React.FC = () => {
  return(
    <FooterAll>
      <div>Copyright &copy; 2021 Suiki Sekiya</div>
    </FooterAll>
  )
}

const FooterAll = styled.footer`
  background-color: #a1f0ae;
`
