import React from 'react';
import './Post.css'
import { Avatar } from "@mui/material";
import { getPosts } from "../data";

export default function Post() {
    let post = getPosts();
    return (
        <div className='post'>
            {post.map((post) => (
                <div>
                    <div className="postHeader">
                        <Avatar
                            className="postAvatar"
                            alt={post.username}
                            src={post.avatar}
                        />
                        <h3>{post.username}</h3>
                    </div>
                    {/* header -> avatar + username*/}

                    < img className="postImage" src={post.imageUrl} />
                    {/*image*/}

                    < h4 className="postText" > <strong>{post.username}</strong>{post.caption}</h4>
                    {/* username + caption */}
                    <div />
                </div >
            ))}
        </div>
    );
}