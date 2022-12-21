import { Spoiler } from "@mantine/core";
import { marked } from "marked";
import { useEffect } from "react";

import { initializeApp } from "firebase/app";
import { doc, getFirestore } from "firebase/firestore";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import { Typewriter } from "react-simple-typewriter";

const firebaseConfig = {
  apiKey: "AIzaSyDlM5VUn3VT1y3kYLfCUl2TIoGjRWc59zA",
  authDomain: "the-cobra-tribe.firebaseapp.com",
  projectId: "the-cobra-tribe",
  storageBucket: "the-cobra-tribe.appspot.com",
  messagingSenderId: "553150277393",
  appId: "1:553150277393:web:968f799f4d18a18fc74eb0",
  measurementId: "G-DETKKM1JD8",
};

// Initialize Firebase
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
            className='mt-4 prose prose-invert text-lg text-green-200'
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          />
        </Spoiler>
      </div>
    </>
  );
}

export default Post;
