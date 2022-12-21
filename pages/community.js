import { Button, Stack, Textarea } from "@mantine/core";
import Head from "next/head";
import Header from "../components/header";
import Post from "../components/post";

import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  getFirestore,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

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

function Community() {
  const [user, loading] = useAuthState(auth);

  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "p"), {
      content: content,
      authorId: user.uid,
      timestamp: serverTimestamp(),
    });
    setContent("");
  };

  const [posts, postsLoading] = useCollection(
    query(collection(db, "p"), orderBy("timestamp", "desc"))
  );

  return (
    <>
      <Head>
        <title>The Cobras Underground Community</title>
        <meta
          name='description'
          content='Only for dedicated Cobras to access the custom underground community of Cobra Tribe.'
        />
        <link
          rel='icon'
          href='
            https://media.discordapp.net/attachments/1054436485421604944/1054442438682492998/cobra.png?width=698&height=670
        '
        />
      </Head>
      <main className='dark min-h-screen dark:bg-main flex justify-between flex-col'>
        <Header />
        <section
          className='flex flex-col items-center justify-between flex-1 text-center bg-stone-900/90 backdrop-filter backdrop-blur-lg
        '
        >
          {!loading && !user && (
            <div className='text-green-200 text-xl grow flex flex-col items-center justify-center gap-4'>
              <Typewriter
                words={[
                  "You are not authorized to access the underground community of the cobras.",
                  "You are either not a cobra or haven't signed up yet.",
                  "If you are a cobra, please sign up to access the community.",
                  "Mention ACuteWoof#7308 in the cobra Discord channels to sign up.",
                ]}
                loop={false}
                cursor={false}
              />
            </div>
          )}
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

          {user && (
            <div className='w-full grow flex flex-col flex-wrap items-center gap-8 max-w-4xl mt-0 lg:mt-6 md:mt-6 sm:w-full'>
              <div className='flex flex-col justify-center w-full p-6 bg-neutral-900 shadow-lg'>
                <h1 className='text-4xl font-bold text-green-200'>
                  Create a post!
                </h1>
                <Textarea
                  className='mt-4'
                  placeholder='Write your post here...'
                  minRows={3}
                  variant='filled'
                  autosize
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <div className='flex flex-row justify-end w-full'>
                  <Button
                    className='mt-4 bg-green-500 hover:bg-green-600 max-w-sm'
                    color='green'
                    variant='filled'
                    size='sm'
                    onClick={handleSubmit}
                  >
                    Post
                  </Button>
                </div>
              </div>
              <Stack
                sx={(theme) => ({
                  backgroundColor: "transparent",
                  width: "100%",
                  marginBottom: "1rem",
                })}
              >
                {postsLoading && (
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
                {posts &&
                  posts.docs &&
                  posts.docs.map((post) => (
                    <Post
                      key={post.id}
                      id={post.id}
                      content={post.data().content}
                      authorId={post.data().authorId}
                      timestamp={post.data().timestamp}
                    />
                  ))}
              </Stack>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default Community;
