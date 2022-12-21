/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useState } from "react";
import Header from "../components/header";
import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

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

function SignUp() {
  const [signUp, setSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signUpHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password).then(
        async (userCredential) => {
          await setDoc(doc(db, "u", userCredential.user.uid), {
            name: name,
            email: email,
            firebaseId: userCredential.user.uid,
            discordId: id,
          });
          setEmail("");
          setName("");
          setPassword("");
          setConfirmPassword("");
          setLoading(false);
          window.location.href = "/community";
        }
      );
    }
  };

  const signInHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      setEmail("");
      setName("");
      setPassword("");
      setConfirmPassword("");
      setLoading(false);
      window.location.href = "/community";
    });
  };

  return (
    <>
      <Head>
        <title>Sign Up As A Cobra</title>
        <meta
          name='description'
          content='Only for dedicated Cobras to join the custom underground community of Cobra Tribe.'
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
        <div>
          {signUp ? (
            <>
              <section class='bg-transparent'>
                <div class='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
                  <div
                    class='w-full bg-white rounded-lg shadow dark:border
                    dark:border-stone-700 md:mt-0 sm:max-w-md xl:p-0 dark:bg-stone-800/50 backdrop-filter backdrop-blur-xl'
                  >
                    <div class='p-6 space-y-4 md:space-y-6 sm:p-8'>
                      <h1 class='text-xl font-bold leading-tight tracking-tight text-stone-900 md:text-2xl dark:text-white'>
                        Create an account
                      </h1>
                      <form class='space-y-4 md:space-y-6' action='#'>
                        <div>
                          <label
                            for='email'
                            class='block mb-2 text-sm font-medium text-stone-900 dark:text-white'
                          >
                            Your email
                          </label>
                          <input
                            type='email'
                            name='email'
                            id='email'
                            class='font-sans bg-stone-50 border border-stone-300 text-stone-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500'
                            placeholder='name@company.com'
                            required=''
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                        </div>
                        <div>
                          <label
                            for='email'
                            class='block mb-2 text-sm font-medium text-stone-900 dark:text-white'
                          >
                            Your name
                          </label>
                          <input
                            type='email'
                            name='email'
                            id='email'
                            class='font-sans bg-stone-50 border border-stone-300 text-stone-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500'
                            placeholder='Adonis'
                            required=''
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                          />
                        </div>
                        <div>
                          <label
                            for='email'
                            class='block mb-2 text-sm font-medium text-stone-900 dark:text-white'
                          >
                            Your Discord user id.{" "}
                            <span>
                              <a
                                href='https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-'
                                target='_blank'
                                rel='noreferrer'
                                class='text-green-600 hover:underline'
                              >
                                How to find it?
                              </a>
                            </span>
                          </label>
                          <input
                            type='email'
                            name='email'
                            id='email'
                            class='font-sans bg-stone-50 border border-stone-300 text-stone-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500'
                            placeholder='618114750827462660'
                            required=''
                            onChange={(e) => {
                              setId(e.target.value);
                            }}
                          />
                        </div>
                        <div>
                          <label
                            for='password'
                            class='block mb-2 text-sm font-medium text-stone-900 dark:text-white'
                          >
                            Password
                          </label>
                          <input
                            type='password'
                            name='password'
                            id='password'
                            placeholder='••••••••'
                            class='font-sans bg-stone-50 border border-stone-300 text-stone-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500'
                            required=''
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                          />
                        </div>
                        <div>
                          <label
                            for='confirm-password'
                            class='block mb-2 text-sm font-medium text-stone-900 dark:text-white'
                          >
                            Confirm password
                          </label>
                          <input
                            type='password'
                            name='confirm-password'
                            id='confirm-password'
                            placeholder='••••••••'
                            class='font-sans bg-stone-50 border border-stone-300 text-stone-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500'
                            required=''
                            onChange={(e) => {
                              setConfirmPassword(e.target.value);
                            }}
                          />
                        </div>
                        <button
                          type='submit'
                          class='w-full bg-green-800 text-stone-50 border-green-900 hover:bg-stone-700 hover:border-stone-900 hover:text-green-100 transition duration-200 ease-in-out px-4 py-2 text-sm font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-200'
                          onClick={signUpHandler}
                        >
                          {loading && (
                            <svg
                              class='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                            >
                              <circle
                                class='opacity-25'
                                cx='12'
                                cy='12'
                                r='10'
                                stroke='currentColor'
                                stroke-width='4'
                              ></circle>
                              <path
                                class='opacity-75'
                                fill='currentColor'
                                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                              ></path>
                            </svg>
                          )}
                          Create an account
                        </button>
                        <p class='text-sm font-light text-stone-500 dark:text-stone-400'>
                          Already have an account?{" "}
                          <a
                            onClick={() => setSignUp(false)}
                            class='font-medium text-primary-600 hover:underline dark:text-primary-500'
                          >
                            Login here
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </>
          ) : (
            <section class='bg-transparent'>
              <div class='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
                <div class='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-stone-800/50 backdrop-filter backdrop-blur-xl dark:border-stone-700'>
                  <div class='p-6 space-y-4 md:space-y-6 sm:p-8'>
                    <h1 class='text-xl font-bold leading-tight tracking-tight text-stone-900 md:text-2xl dark:text-white'>
                      Sign in to your account
                    </h1>
                    <form class='space-y-4 md:space-y-6' action='#'>
                      <div>
                        <label
                          for='email'
                          class='block mb-2 text-sm font-medium text-stone-900 dark:text-white'
                        >
                          Your email
                        </label>
                        <input
                          type='email'
                          name='email'
                          id='email'
                          class='font-sans bg-stone-50 border border-stone-300 text-stone-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500'
                          placeholder='name@company.com'
                          required=''
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div>
                        <label
                          for='password'
                          class='block mb-2 text-sm font-medium text-stone-900 dark:text-white'
                        >
                          Password
                        </label>
                        <input
                          type='password'
                          name='password'
                          id='password'
                          placeholder='••••••••'
                          class='font-sans bg-stone-50 border border-stone-300 text-stone-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500'
                          required=''
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <button
                        type='submit'
                        class='w-full bg-green-800 text-stone-50 border-green-900 hover:bg-stone-700 hover:border-stone-900 hover:text-green-100 transition duration-200 ease-in-out px-4 py-2 text-sm font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-200'
                        onClick={signInHandler}
                      >
                        {loading && (
                          <svg
                            class='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                          >
                            <circle
                              class='opacity-25'
                              cx='12'
                              cy='12'
                              r='10'
                              stroke='currentColor'
                              stroke-width='4'
                            ></circle>
                            <path
                              class='opacity-75'
                              fill='currentColor'
                              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                            ></path>
                          </svg>
                        )}
                        Sign in
                      </button>
                      <p class='text-sm font-light text-stone-500 dark:text-stone-400'>
                        Don’t have an account yet?{" "}
                        <a
                          onClick={() => setSignUp(true)}
                          class='font-medium text-primary-600 hover:underline dark:text-primary-500'
                        >
                          Sign up
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}

export default SignUp;
