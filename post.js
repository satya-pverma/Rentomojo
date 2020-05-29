import React from 'react'
const Post = ({posts,loading})=>{
if(loading){
    return<h2>loading.....</h2>
}

    return(
        <ul className="list-group mb-4">
            {posts.map( post=>(
                    <li style={{listStyleType:'none'}} key={post.id} className="list-group-item">
                        {post.title}
                        <hr></hr>
                    </li>
                  

            ))}
        </ul>

    )
}
export default Post
