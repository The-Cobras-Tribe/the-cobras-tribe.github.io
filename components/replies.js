import { Button, Input, Spoiler, Stack } from "@mantine/core";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  getFirestore,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { getAuth } from "firebase/auth";
import Reply from "./reply";
import { useAuthState } from "react-firebase-hooks/auth";

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
const auth = getAuth();
const db = getFirestore();

function Replies(props) {
  const { id } = props;

  const [content, setContent] = useState("");
  const [user, loading] = useAuthState(auth);
  const [comments, commentsLoading] = useCollectionData(
    query(collection(db, "p", id, "c"), orderBy("timestamp", "desc")),
    {
      idField: "id",
    }
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (content.trim() === "") {
      return;
    }
    await addDoc(collection(db, "p", id, "c"), {
      content: content,
      authorId: user.uid,
      timestamp: serverTimestamp(),
    });
    setContent("");
  };

  return (
    <>
      <div className='flex flex-col justify-center w-full mb-8 p-2'>
        <div className='flex flex-row items-center justify-between'>
          <div className='flex flex-row items-center gap-2'>
            <h6 className='text-md font-bold text-green-100'>Comments</h6>
          </div>
        </div>
        {user && (
          <div className='flex flex-row gap-2 w-full mb-8'>
            <Input
              className='grow mt-4 bg-stone-700 rounded-md'
              placeholder='Write your comment here...'
              variant='filled'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <Button
              className='mt-4 max-w-sm
            bg-emerald-700 hover:bg-green-800'
              variant='filled'
              size='sm'
              onClick={handleSubmit}
            >
              Comment
            </Button>
          </div>
        )}
        <Spoiler
          maxHeight={80}
          showLabel='Show all comments'
          hideLabel='Hide comments'
        >
          <Stack direction='column' spacing='md' className='w-full'>
            {commentsLoading && <h1>Loading...</h1>}
            {comments &&
              comments.map((comment) => (
                <Reply
                  key={comment.id}
                  id={comment.id}
                  content={comment.content}
                  authorId={comment.authorId}
                />
              ))}
          </Stack>
        </Spoiler>
      </div>
    </>
  );
}

export default Replies;
