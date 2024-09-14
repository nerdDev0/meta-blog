"use client"
import React, { useState } from "react";
import TextEditor from "./TextEditor";

const PostForm = ({ action }: any) => {
  const [editorContent, setEditorContent] = useState(""); 

  return (
    <div className=" flex flex-col items-center md:items-start">
      <h2 className="text-2xl mb-5">Create Post</h2>
      <form className="w-full space-y-5 flex-col items-center md:items-start" action={action}>
        <input
          type="text"
          placeholder="Title "
          className="input input-bordered w-full max-w-xs"
          id="title"
          name="title"
        />
        <TextEditor onChange={setEditorContent} /> 
        <input type="hidden" name="content" value={editorContent} />
        <div className="flex flex-wrap justify-between content-around items-center w-full  md:w-10/12">
          <button type="submit" className="btn btn-outline btn-success">Send</button>
          <button className="btn btn-outline btn-error">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
