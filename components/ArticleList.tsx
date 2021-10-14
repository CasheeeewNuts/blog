import React from "react";
import Article from "~/components/Article";


const ArticleList: React.VFC = () => {
  const articles = [
    {
      title: "TypeScript x gRPC x micro service x DDD",
      createdAt: "2021-01-01 10:00:00"
    }, {
      title: "Kotlin入門",
      createdAt: "2021-01-01"
    }, {
      title: "Rust",
      createdAt: "2021-01-01"
    }, {
      title: "markdownファイルをバンドルするCLIツールを公開しました",
      createdAt: "2021-01-01"
    },
  ]

  return (
      <div className="container mx-auto w-1/2">
        <ul>
          {
            articles.map((article) => (
                <Article blogArticle={article} key={article.title}/>
            ))
          }
        </ul>
      </div>
  )
}

export default ArticleList