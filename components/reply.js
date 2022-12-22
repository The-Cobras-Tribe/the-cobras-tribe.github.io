import { Spoiler } from "@mantine/core";
import { marked } from "marked";
import { useEffect } from "react";

import { initializeApp } from "firebase/app";
import { doc, getFirestore } from "firebase/firestore";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import { Typewriter } from "react-simple-typewriter";
import Replies from "./replies";
import moment from "moment";

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

function Reply(props) {
  const { id, content, authorId, timestamp } = props;

  const [author, loading] = useDocumentDataOnce(doc(db, "u", authorId));

  return (
    <>
      <div id={id} className='flex flex-col justify-center w-full'>
        {loading && (
          <h7>
            Loading
            <span>
              <Typewriter
                words={[".", "..", "..."]}
                loop={true}
                cursor={false}
              />
            </span>
          </h7>
        )}

        {
          // user info
          author && (
            <div className='flex flex-row items-center justify-between'>
              <div className='flex flex-row items-center gap-2'>
                <p className='text-md font-bold text-stone-600'>
                  {timestamp && (
                    <>
                      {"[ "}
                      {moment(timestamp.toDate()).fromNow()} {" ]  "}{" "}
                    </>
                  )}
                  {author.name} {" : "}{" "}
                  <span className='text-green-200'>{content}</span>
                </p>
              </div>
            </div>
          )
        }
      </div>
    </>
  );
}

export default Reply;
