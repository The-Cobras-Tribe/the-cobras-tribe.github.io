/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AboutUs from "../components/aboutus";
import Header from "../components/header";
import Quote from "../components/quote";

function App() {
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

  const [logoVariants, setLogoVariants] = useState({
    hidden: { opacity: 0, y: -100, rotate: 180 },
    visible: { opacity: 1, y: 0, rotate: 0 },
  });

  useEffect(() => {
    // disable variants if screen is too small
    if (window.innerWidth < 768) {
      setLogoVariants({
        hidden: { opacity: 1, y: 0, rotate: 0 },
        visible: { opacity: 1, y: 0, rotate: 0 },
      });
    }
  }, []);

  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  return (
    <>
      <Head>
        <title>Cobras Of Action</title>
        <meta name='description' content='Cobras Of Action' />
        <link
          rel='icon'
          href='
            https://media.discordapp.net/attachments/1054436485421604944/1054442438682492998/cobra.png?width=698&height=670
        '
        />
      </Head>

      <main className='bg-main min-h-screen w-full'>
        <Header />
        <section>
          <div className='grid place-items-center max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
            <div className='mr-auto place-self-center lg:col-span-7'>
              <motion.div
                ref={ref}
                initial='hidden'
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.5 }}
              >
                {
                  // animated heading
                }
                <h1
                  className='text-center w-full mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-8xl xl:text-8xl dark:text-green-400
                drop-shadow-sm'
                >
                  Cobras Of Action
                </h1>
              </motion.div>
            </div>
            <motion.div
              ref={ref2}
              initial='hidden'
              animate={inView2 ? "visible" : "hidden"}
              variants={logoVariants}
              transition={{ duration: 1, delay: 0.5 }}
              className='lg:mt-0 lg:col-span-5 lg:flex'
            >
              {
                // the logo
              }
              <img
                src='
            https://media.discordapp.net/attachments/1054436485421604944/1054442438682492998/cobra.png?width=698&height=670
          '
                alt='cobras'
              />
            </motion.div>
          </div>
        </section>
        <Quote />
        <AboutUs />
      </main>
    </>
  );
}

export default App;
