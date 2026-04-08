import { NextResponse } from "next/server";
export const posts = [
    {
        id: 1,
        title: "Getting Started with Next.js",
        content: "Next.js is a powerful React framework that enables server-side rendering and static site generation for optimized performance."
    },
    {
        id: 2,
        title: "The Power of MERN Stack",
        content: "MERN stack (MongoDB, Express, React, Node.js) remains one of the most popular choices for building full-stack JavaScript applications."
    },
    {
        id: 3,
        title: "Mastering Tailwind CSS",
        content: "Tailwind CSS allows developers to build modern designs directly in their markup using utility-first CSS classes."
    },
    {
        id: 4,
        title: "Understanding API Routes",
        content: "With Next.js Route Handlers, you can easily create backend endpoints to manage data flow between your database and frontend."
    },
    {
        id: 5,
        title: "Deployment with Vercel",
        content: "Deploying your Next.js application to Vercel is seamless, providing automatic SSL, global CDN, and continuous integration."
    }
];
export const GET=()=>{
    return NextResponse.json(posts)
}