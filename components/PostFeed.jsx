import Link from 'next/link';
import React from 'react'

function PostFeed({ posts ,admin}) {
  return posts ? posts.map((post)=><PostItem post =  {post} key = {post.id} admin = {admin}/> ): null ;
}

function PostItem({post ,admin = false}){
   const wordCount = post?.content.trim().split(/\s+/g).length ;
   const minutesToRead  =  (wordCount/100 +1).toFixed(0);

   return (
    <div className="card">
      <Link href={`/${post.username}`}>
        <a>
          <strong>By @{post.username}</strong>
        </a>
      </Link>

      <Link href={`/${post.username}/${post.id}`}>
         <h2>
          <a>{post.title}</a>
         </h2>
      </Link>

      <footer>
        <span>
          {wordCount} words. {minutesToRead} min read
          <span>💓 {post.heartCount} Hearts</span>
        </span>
      </footer>
    </div>
   )
}

export default PostFeed