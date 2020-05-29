import React, { useEffect } from 'react'
import axios from 'axios'

const Pagination =()=>{

    const [posts,setPost]=useState([]);
    const [loading, setLoading]=useState(false);
    const [currentPage,setCurrentPage]=useState(5);

useEffect(()=>{

    const fetchPosts= async() =>{
        setLoading(true);
        const res=await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPost(res.data);
        setLoading(false);
    }
    fetchPosts();

},[]);import React from 'react'


const Pagination =({postsPerPage,totalPosts})=>{
const pageNumbers=[];
for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++)
{
  pageNumbers.push(i);  
}

return(
    <nav>
        <ul className="pagination">
            {pageNumbers.map(number =>(
                <li key={number} className="page-item">
                    <a href="!#" className="page-link">
                        {number.length}
                    </a>

                </li>
            ))}

        </ul>
    </nav>


)


}
export default Pagination
console.log(posts);

return(
    <div>
        hello
    </div>
)




}
