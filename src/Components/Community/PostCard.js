import React from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import userEvent from "@testing-library/user-event";
import { UserAuth } from "../../Auth/AuthContext";
import { Menu, MenuItem } from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import { Modal, Button } from "react-daisyui";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

const PostCard = (props) => {
  const postid = props.post.id;
  const postAgo = timeAgo.format(props.post.createdAt, "twitter");

  return (
    <div className="flex flex-col rounded-lg bg-white drop-shadow-lg px-5 py-5 w-[350px] md:w-[600px] hover:-translate-y-2 hover:scale-110 duration-200 hover:drop-shadow-2xl">
      <div
        id="post-meta"
        className="flex flex-row justify-between items-center"
      >
        <div
          id="profileinfo"
          className="flex flex-row justify-start items-center py-1 gap-2"
        >
          <img
            src={
              props.post.author.avatar
                ? props.post.author.avatar
                : "/gdsc-avatar.png"
            }
            alt="avatar"
            width="30"
            height="30"
            className="rounded-full"
          />
          <div className="text-lg">{props.post.author.displayName}</div>
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          {postAgo}
          {props.user ? (
            props.user.uid == props.post.author.uid ? (
              <div className="hover:-translate-y-3 hover:scale-125 duration-500 cursor-pointer">
                <AiOutlineDelete className="hover:text-red-500"
                  onClick={() => {
                    props.setDel(props.post.id);
                  }}
                  size="1.5em"
                />
              </div>
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
        </div>
      </div>

      <div id="post-title" className="text-xl md:text-2xl py-2 font-semibold">
        {props.post.title}
      </div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className="prose prose-a:text-blue-500 prose-a:underline prose-strong:font-semibold prose-h2:text-lg"
      >
        {props.post.content}
      </ReactMarkdown>
    </div>
  );
};

export default PostCard;
