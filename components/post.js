import { Spoiler } from "@mantine/core";
import { marked } from "marked";
import { useEffect } from "react";

import { initializeApp } from "firebase/app";
import { doc, getFirestore } from "firebase/firestore";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import { Typewriter } from "react-simple-typewriter";
import Replies from "./replies";
import Link from "next/link";

const firebaseConfig = {
  apiKey: "AIzaSyDlM5VUn3VT1y3kYLfCUl2TIoGjRWc59zA",
  authDomain: "the-cobra-tribe.firebaseapp.com",
  projectId: "the-cobra-tribe",
  storageBucket: "the-cobra-tribe.appspot.com",
  messagingSenderId: "553150277393",
  appId: "1:553150277393:web:968f799f4d18a18fc74eb0",
  measurementId: "G-DETKKM1JD8",
};

// Initialie Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

function Post(props) {
  const { id, content, authorId } = props;

  const [author, loading] = useDocumentDataOnce(doc(db, "u", authorId));

  useEffect(() => {
    console.log(author);
  }, [author]);

  useEffect(() => {
    console.log(marked(content));
  }, [content]);

  return (
    <>
      <div
        id={id}
        className='flex flex-col justify-center w-full p-6 bg-neutral-900 shadow-lg'
      >
        {
          // user info
          author && (
            <div className='flex flex-row items-center justify-between'>
              <div className='flex flex-row items-center gap-2'>
                <h6 className='text-md font-bold text-stone-700'>
                  {author.name}
                </h6>
              </div>
              {/*
              <Link href={`/posts/${id}`}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
                  />
                </svg>
          </Link>*/}
            </div>
          )
        }
        {loading && (
          <h1>
            Loading
            <span>
              <Typewriter
                words={[".", "..", "..."]}
                loop={true}
                cursor={false}
              />
            </span>
          </h1>
        )}

        <Spoiler
          maxHeight={200}
          showLabel='Show more'
          hideLabel='Hide'
          className='text-left'
        >
          <article
            className='my-4 w-full prose prose-invert text-lg text-green-200
            prose-headings:text-green-300 prose-p:text-green-200
prose-a:text-green-600
prose-blockquote:text-green-200
prose-strong:text-green-200
prose-em:text-green-200
prose-code:text-emerald-200
prose-pre:text-emerald-200
prose-ol:text-green-200
prose-ul:text-green-200
prose-li:text-green-200
prose-table:text-green-200'
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          />
          <hr className='mt-12 mb-4 border-stone-500' />
          <Replies id={id} />
        </Spoiler>
      </div>
    </>
  );
}

export default Post;
