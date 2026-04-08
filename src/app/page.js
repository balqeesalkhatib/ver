import React from 'react'
import Link from "next/link";
const Home = async () => {
  const res = await fetch("http://localhost:3000/api/posts", { cache: "no-store" })
  const posts = await res.json()
  return (
    <div>
      {posts && posts.map((elem) => {
        return (
          <Link href={`/posts/${elem.id}`} key={elem.id} className="post-card">
            <div className="post-id">#{elem.id}</div>
                        <div className="post-content">
                            <h3 className="post-heading">{elem.title}</h3>
                            <p className="post-body">{elem.content.substring(0,50)}</p>
                        </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Home