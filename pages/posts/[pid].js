import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../../components/header";
import Replies from "../../components/replies";
import { marked } from "marked";

import { initializeApp } from "firebase/app";
import { doc, getFirestore } from "firebase/firestore";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import { getAuth } from "firebase/auth";
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

// Initialie Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

const Post = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const { pid } = router.query;

  console.log(pid);

  return (
    <>
      <Head>
        <title>Read</title>
        <meta name='description' content='Cobras Of Action' />
        <link
          rel='icon'
          href='https://media.discordapp.net/attachments/1054436485421604944/1054442438682492998/cobra.png?width=698&height=670'
        />
      </Head>
      <main
        className='min-h-screen bg-main
            flex flex-col
          '
      >
        <Header />
        <section
          className='dark bg-white dark:bg-stone-800/90 backdrop-filter 
        backdrop-blur-lg grow
        '
        >
          <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 grid place-content-center'>
            {user && <Article id={pid} />}
          </div>
        </section>
      </main>
    </>
  );
};

function Article(props) {
  const { id } = props;

  const postRef = doc(db, "p", id);
  const [post, loading] = useDocumentDataOnce(postRef);

  return (
    <>
      {loading && <p>Loading...</p>}
      {post && (
        <>
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
            dangerouslySetInnerHTML={{ __html: marked(post.content) }}
          />
          <Author authorId={post.authorId} />
          <hr className='mt-12 mb-4 border-stone-500' />
          <Replies id={id} />
        </>
      )}
    </>
  );
}

function Author(props) {
  const { authorId } = props;

  const [author] = useDocumentDataOnce(doc(db, "u", authorId));

  return (
    <>
      {
        // user info
        author && (
          <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-col gap-2 pt-12'>
              Author
              <h6 className='text-md font-bold text-green-400'>
                {author.name}
              </h6>
            </div>
          </div>
        )
      }
    </>
  );
}

export default Post;
