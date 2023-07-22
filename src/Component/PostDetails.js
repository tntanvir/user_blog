import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from './Comments';
import ShowPost from './ShowPost';

const PostDetails = () => {
    const { PostDetails } = useParams()
    // console.log(PostDetails);
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments?postId=" + PostDetails)
            .then(res => res.json())
            .then(data => setDetails(data))
    },)
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <ShowPost post={PostDetails}></ShowPost>
            {

                details.map(dtls => <Comments key={dtls.id} Comments={dtls}></Comments>)
            }
        </div>
    );
};

export default PostDetails;