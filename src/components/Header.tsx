import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Header: React.FC = () => {
  return (
    <HeaderAll>
      <Icon><Link to='/'>プロボー(仮)</Link></Icon>
      <Link to='/new'>新規投稿</Link>
    </HeaderAll>
  )
}

const HeaderAll = styled.header`
  background-color: #a1f0ae;
`

const Icon = styled.h1`
  margin: 0;
`
