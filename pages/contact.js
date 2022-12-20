/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Alert, Spinner } from "flowbite-react";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/header";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const [variants, setVariants] = useState({
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  });

  useEffect(() => {
    // disable variants if screen is too small
    if (window.innerWidth < 768) {
      setVariants({
        hidden: { opacity: 1, x: 0 },
        visible: { opacity: 1, x: 0 },
      });
    }
  }, []);

  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();
  const [ref6, inView6] = useInView();

  return (
    <>
      <Head>
        <title>Contact The Cobras Of Action</title>
        <meta name='description' content='Cobras Of Action' />
        <link
          rel='icon'
          href='
            https://media.discordapp.net/attachments/1054436485421604944/1054442438682492998/cobra.png?width=698&height=670
        '
        />
      </Head>
      <main className='dark min-h-screen dark:bg-main flex justify-between flex-col'>
        <section className='dark bg-stone-50 dark:bg-main'>
          <Header />
          {isFailure && (
            <Alert
              color='failure'
              className='fixed bottom-5 right-5 z-50 alert'
              onDismiss={function onDismiss() {
                setIsFailure(false);
              }}
            >
              <span>
                <span
                  className='font-medium 
                
                '
                >
                  Couldn't send message!
                </span>{" "}
                Change a few things up and try submitting again.
              </span>
            </Alert>
          )}
          {isSuccess && (
            <Alert
              color='success'
              className='fixed bottom-5 right-5 z-50 alert'
              onDismiss={function onDismiss() {
                setIsSuccess(false);
              }}
            >
              <span>
                <span className='font-medium'>Successfully sent! </span> Your
                message has been sent successfully. We will get back to you
                soon.
              </span>
            </Alert>
          )}
          <div className=' flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
            <motion.div
              ref={ref}
              variants={variants}
              initial='hidden'
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5 }}
            >
              <Link
                href='#'
                className='heading flex items-center mb-6 text-2xl font-semibold text-green-900 dark:text-green-200'
              >
                <img
                  className='w-8 h-8 mr-2
                
                  rounded-full
                  '
                  src='https://media.discordapp.net/attachments/1054436485421604944/1054442438682492998/cobra.png?width=698&height=670'
                  alt='logo'
                />
                Contact The Cobras
              </Link>
            </motion.div>
            <motion.div
              ref={ref2}
              variants={variants}
              initial='hidden'
              animate={inView2 ? "visible" : "hidden"}
              transition={{ duration: 0.5 }}
              className='formitself w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-stone-800/50 dark:border-gray-700 backdrop-blur-sm'
            >
              <div className=' p-6 space-y-4 md:space-y-6 sm:p-8'>
                <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-green-100'>
                  The Cobras Listen. Whether Or Not We Agree Is Another Story.
                </h1>

                <form className='space-y-4 md:space-y-6' action='#'>
                  <div>
                    <motion.div
                      ref={ref3}
                      variants={variants}
                      initial='hidden'
                      animate={inView3 ? "visible" : "hidden"}
                      transition={{ duration: 0.5 }}
                    >
                      <label
                        for='email'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-green-100'
                      >
                        Your email
                      </label>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        className='bg-stone-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-stone-700/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-green-100 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='
                        username@server.com
                        '
                        required=''
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </motion.div>
                    <motion.div
                      ref={ref4}
                      variants={variants}
                      initial='hidden'
                      animate={inView4 ? "visible" : "hidden"}
                      transition={{ duration: 0.5 }}
                    >
                      <div className='mt-6'>
                        <label
                          for='default-input'
                          className='block mb-2 text-sm font-medium text-gray-900 dark:text-green-100'
                        >
                          Your name
                        </label>
                        <input
                          type='text'
                          id='default-input'
                          className='bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-stone-700/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-green-100 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                          placeholder='What should we call you?'
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      ref={ref5}
                      variants={variants}
                      initial='hidden'
                      animate={inView5 ? "visible" : "hidden"}
                      transition={{ duration: 0.5 }}
                      className='mt-6'
                    >
                      <label
                        for='large-input'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-green-100'
                        onChange={(e) => setName(e.target.value)}
                      >
                        Your message
                      </label>
                      <textarea
                        id='message'
                        rows='4'
                        className='block p-2.5 w-full text-sm text-gray-900 bg-stone-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-stone-700/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-green-100 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='Describe your project in detail and we will get back to you as soon as possible.'
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </motion.div>
                  </div>
                  <motion.div
                    ref={ref6}
                    variants={variants}
                    initial='hidden'
                    animate={inView6 ? "visible" : "hidden"}
                    transition={{ duration: 0.5 }}
                  >
                    <button
                      className='w-full
                        bg-green-800
                        text-stone-50
                        border-green-900
                        hover:bg-stone-700
                        hover:border-stone-900
                        hover:text-green-100
                        transition
                        duration-200
                        ease-in-out
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        rounded-lg
                        shadow-md
                        focus:outline-none
                        focus:ring-2
                        focus:ring-green-500
                        focus:ring-offset-2
                        focus:ring-offset-green-200
                    '
                      onClick={() => {
                        setIsButtonLoading(true);
                        emailjs
                          .send(
                            "service_25h5r2l",
                            "template_68csjxs",
                            {
                              from_name: name,
                              to_name: "Cobra Admins",
                              message: message,
                              reply_to: email,
                            },
                            "z2j_7TMCJIXUMebKV"
                          )
                          .then((result) => {
                            console.log(result.text);
                            setIsButtonLoading(false);
                            setIsSuccess(true);
                            setEmail("");
                            setName("");
                            setMessage("");
                          })
                          .catch((error) => {
                            console.log(error.text);
                            setIsFailure(true);
                          });
                      }}
                    >
                      <Spinner
                        aria-label='Spinner button example'
                        className={
                          isButtonLoading ? "animate-spin mr-4" : "hidden"
                        }
                      />
                      Send Message
                    </button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
