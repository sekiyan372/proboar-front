import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
// import styled from 'styled-components'

export const New: React.FC = () => {
  // フォームの値
  const [cArticle, setCArticle] = useState<string>("")
  const [cBand, setCBand] = useState<string>("")

  // ページ遷移用
  const history = useHistory()

  // create
  const createArticle: Post = (event) => {
    axios.post('http://localhost:3001/articles',
      {artist: cArticle, band: cBand}
    ).then(() => {
      history.push('/')   //ページ遷移
    }).catch(error => {
      console.log("registration error", error)
    })
    event.preventDefault()   //自動でレンダリングしないように
  }

  return(
    <div>
      <h2>新規投稿</h2>
      <form onSubmit={createArticle}>
        <label>アーティスト名</label>
        <input
          type="text"
          name="postArticle"
          value={cArticle}
          onChange={event => setCArticle(event.target.value)}
        />
        <label>バンド名</label>
        <input
          type="text"
          name="postBand"
          value={cBand}
          onChange={event => setCBand(event.target.value)}
        />
        <button type="submit">投稿</button>
      </form>
    </div>
  )
}
