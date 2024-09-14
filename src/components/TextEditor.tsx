"use client";
import { EditorContent, useEditor } from "@tiptap/react";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";

import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import { FaAlignCenter, FaAlignLeft, FaAlignRight, FaBold, FaItalic } from "react-icons/fa";

type Props = {
  onChange: (content: string) => void; 
};

const TextEditor = ({ onChange }: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit, 
      Bold,
      Italic,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: "<p>Hello World!</p>",
    onUpdate: ({ editor }) => {
      const content = editor.getText();
      onChange(content); 
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="md:w-10/12 w-full  border-2 rounded">
      <div className=" bg-gray-200 dark:bg-transparent p-2 shadow-sm flex flex-wrap border-b-2 ">
        <div className="flex gap-2 items-center">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-2 rounded ${
              editor.isActive("bold") ? "text-blue-500" : ""
            }`}
          >
            <FaBold />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-2 rounded ${
              editor.isActive("italic") ? "text-blue-500" : ""
            }`}
          >
            <FaItalic />
          </button>
        </div>

        <div className="dropdown dropdown-right z-50">
          <button tabIndex={0} className="btn btn-ghost">
            <FaAlignLeft />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 6h4M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow  w-max bg-gray-300"
          >
            <li>
              <button
                onClick={() =>
                  editor.chain().focus().setTextAlign("left").run()
                }
                className={`p-2 rounded ${
                  editor.isActive({ textAlign: "left" }) ? "text-blue-500" : ""
                }`}
              >
                <FaAlignLeft />
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  editor.chain().focus().setTextAlign("center").run()
                }
                className={`p-2 rounded ${
                  editor.isActive({ textAlign: "center" })
                    ? "text-blue-500"
                    : ""
                }`}
              >
                <FaAlignCenter />
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  editor.chain().focus().setTextAlign("right").run()
                }
                className={`p-2 rounded ${
                  editor.isActive({ textAlign: "right" }) ? "text-blue-500" : ""
                }`}
              >
                <FaAlignRight />
              </button>
            </li>
          </ul>
        </div>
      </div>

      <EditorContent
      id={editor.getText()}
      name={editor.getText()}
        editor={editor}
      />
    </div>
  );
};

export default TextEditor;
