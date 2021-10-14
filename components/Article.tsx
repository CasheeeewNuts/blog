import React from "react";


export type Article = {
  title: string,
  createdAt: string
}

const Article: React.VFC<{ blogArticle: Article }> = ({blogArticle}) => (
    <article className="pt-2 pb-4 px-4">
        <Title title={blogArticle.title}/>
        <p>{blogArticle.createdAt}</p>
    </article>
)

export default Article

const Title: React.VFC<{ title: string }> = ({title}) => (
    <div>
      <p className="text-3xl">
        <a>
          {title}
        </a>
      </p>
    </div>
)