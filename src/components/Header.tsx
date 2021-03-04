import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Header: React.FC = () => {
  return (
    <header>
      <h1><Link to='/'>プロボー(仮)</Link></h1>
      <Link to='/new'>新規投稿</Link>
    </header>
  )
}
