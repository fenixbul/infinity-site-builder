// components/PostTemplate.js
import React from "react";
import { format } from "date-fns";
import MarkdownLinkRenderer from "./MarkdownLinkRenderer";
import ReactMarkdown from 'react-markdown';

export default function PostTemplate({ post }) {
  return (
    <div className="min-h-screen bg-primary-bg">
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
          {/* Thumbnail Image */}
          {post.thumbnail && (
            <img
              src={post.thumbnail}
              alt={`${post.title} thumbnail`}
              className="w-full max-h-[540px] object-cover rounded-lg mb-6"
            />
          )}
          {/* <div className="text-sm opacity-50 italic mb-6">
            <p>{format(new Date(post.date), "MMMM d, yyyy")}</p>
          </div> */}
          <p className="text-gray-700 mb-4">{post.description}</p>
          <div className="text-gray-800 space-y-4 leading-relaxed markdown">
            <ReactMarkdown components={{ a: MarkdownLinkRenderer }}>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
