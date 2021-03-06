import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import styled from 'styled-components'

export const Top: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    // read
    const fetchData: AsyncFC = async() => {
      const result = await axios.get<Article[]>('http://localhost:3001/articles')
      setArticles(result.data)
    }
    fetchData()
  }, [])

  // delete
  const deleteArticle: Delete = (id) => {
    axios.delete(`http://localhost:3001/articles/${id}`)
    .then(() => {
      setArticles(articles.filter(x => x.id !== id))
    }).catch(error => {
      console.log("delete error", error)
    })
  }

  return(
    <div>
      <h2>新着ボード</h2>
      {articles.map(article => (
        <ul>
          <li key={article.id}>
            {article.id}: {article.artist}
            <button onClick={() => deleteArticle(article.id)}>削除</button>
          </li>
        </ul>
      ))}
    </div>
  )
}
