import React from 'react'
import "@/app/globals.css"
export async function generateMetadata({ params }) {
    const { id } = await params;
    const res = await fetch("api/posts", { cache: "no-store" });
    const posts = await res.json();
    const post = posts.find((p) => p.id === +id);
    return {
        title: post ? post.title : "Post Not Found",
        description: post ? post.content.substring(0, 150) : "Post description",
    };
}
const page = async (props) => {
    const res = await fetch("api/posts", { cache: "no-store" });
    const posts = await res.json();
    const { id } = await props.params;
    const onePost = posts.find((elem) => elem.id === +id);
    if (!onePost) {
        return <div className="posts-wrapper">Post not found!</div>;
    }
    return (
        <div className="posts-wrapper">
            <h2 className="posts-title">Post Details</h2>
            <div className="posts-list">
                <div key={onePost.id} className="post-card">
                    <div className="post-id">#{onePost.id}</div>
                    <div className="post-content">
                        <h3 className="post-heading">{onePost.title}</h3>
                        <p className="post-body">{onePost.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page