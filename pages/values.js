/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Header from "../components/header";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Values() {
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const [ref, inView] = useInView();
  const [ref1, inView1] = useInView();

  return (
    <>
      <Head>
        <title>Values Of The Cobras</title>
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
            <motion.div
              ref={ref}
              initial='hidden'
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5 }}
              className='max-w-screen-lg m-0 text-gray-500 text-justify sm:text-lg dark:text-gray-400 mb-12'
            >
              <h2 className='heading mb-4 text-4xl tracking-tight font-bold text-green-900 dark:text-green-300 text-center'>
                The Values Of The Cobras
              </h2>
              <div className='mb-4 text-emerald-300 p1'>
                We all abide by a set of values and rules that we follow. They
                are all from high-value individuals who have proven the values
                in the real world. Most of the values are from Jordan Peterson
                and Andrew Tate.
              </div>
            </motion.div>
            <motion.div
              ref={ref1}
              initial='hidden'
              animate={inView1 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5 }}
              className='max-w-screen-lg m-0 text-gray-500 text-justify sm:text-lg dark:text-gray-400'
            >
              <h3 className='heading mb-4 text-3xl tracking-tight font-bold text-green-900 dark:text-green-400 '>
                41 Tenents Of Life By Andrew Tate
              </h3>
              <div className='mb-8 text-emerald-400 p1'>
                <ol
                  className='
                                    list-decimal
                                    list-outside
                                    list-text-emerald-400
                                    marker:gray-400
                                  '
                >
                  <li>
                    I believe that men have the divine imperative to become as
                    capable, powerful and competent as possible in this life.
                  </li>
                  <li>
                    I reserve my human right to hold my own beliefs and practice
                    them as I see fit and allow other people the same right to
                    believe and act as they wish.
                  </li>
                  <li>
                    I prefer loving rewarding consensual relationships with
                    beautiful positive and virtuous women.
                  </li>
                  <li>
                    I believe men and women are different and that each has
                    their own unique and important strengths and abilities.
                  </li>
                  <li>
                    I believe men have the sacred duty to protect and provide
                    for the important people in their lives.
                  </li>
                  <li>
                    I believe men have the sacred duty to protect the innocence
                    and sanctity of their children and reserve the right and
                    responsibility to raise their children as they see best to
                    ensure their long-term happiness and success.
                  </li>
                  <li>
                    I believe that men have the sacred duty to raise strong
                    capable and honorable sons.
                  </li>
                  <li>
                    I believe that men have the sacred duty to raise kind
                    feminine and virtuous daughters.
                  </li>
                  <li>
                    I utterly disprove of violence within romantic or familiar
                    relationships.
                  </li>
                  <li>
                    I support good and honest governments who will obey their
                    laws.
                  </li>
                  <li>
                    I prefer to only conduct business dealings with trusted and
                    vetted brothers.
                  </li>
                  <li>
                    I believe that a man has a sacred duty to hold true to his
                    word and do exactly what he says he will do.
                  </li>
                  <li>
                    I believe that a man’s life is difficult and that he has a
                    sacred duty to become strong to handle such difficulty.
                  </li>
                  <li>
                    I believe men are personally responsible for their actions
                    and for the results they achieve in their lives.
                  </li>
                  <li>
                    I believe in emotional control and the vital need to become
                    disciplined and professional in all things.
                  </li>
                  <li>
                    I believe that men have the sacred duty to approach
                    everything in life from a position strength.
                  </li>
                  <li>
                    I believe that all men have the sacred duty to become men of
                    upright and virtuous character and live above all possible
                    reproach.
                  </li>
                  <li>
                    I believe it is incumbent upon me to ruthlessly identify my
                    own weaknesses and limitations and I eagerly work to
                    overcome them and become more capable in all realms.
                  </li>
                  <li>
                    I seek to improve my personal freedom to think, act and live
                    to my masculine imperative in all ways.
                  </li>
                  <li>
                    I believe each man has a sacred duty to mold the physical
                    body into the strongest and most resilient and most capable
                    version of itself.
                  </li>
                  <li>
                    I believe that men have the sacred duty to rigorously train
                    themselves both physically and mentally every day.
                  </li>
                  <li>
                    I believe that I have the sacred duty to only eat the
                    highest quality foods possible.
                  </li>
                  <li>
                    I reserve the right to protect the sanctity of my
                    bloodstream and make my own decisions about medical care and
                    procedures.
                  </li>
                  <li>
                    I affirm the importance of endlessly improving my mental
                    faculties through diligent work, study and practice.
                  </li>
                  <li>
                    I believe in acquiring wealth and abundance in order to
                    improve my life and do good for those I care about.
                  </li>
                  <li>
                    I believe in the merits of healthy competition and
                    constantly encourage all men to seek out competition to
                    improve themselves.
                  </li>
                  <li>
                    I believe that masculine brotherhood is essential to men’s
                    mental health, happiness and success. And I relentlessly
                    encourage men to meet together, train together and work
                    together.
                  </li>
                  <li>
                    I maintain the trust of my brothers through reverent
                    silence, regarding our most sacred and shared experiences.
                  </li>
                  <li>
                    I believe in honoring my ancestors and living in a way that
                    would make most of them proud of me today.
                  </li>
                  <li>
                    I reserve the right to administer difficult rites of passage
                    for our young men to allow them to earn the rank of manhood.
                  </li>
                  <li>
                    I affirm the importance and need for travel and adventure as
                    men.
                  </li>
                  <li>
                    I seek to help men overcome poor mental health through
                    embracing hard work, physical improvements and shared
                    masculine brotherhood.
                  </li>
                  <li>
                    I reserve the right to make the best choices I can at the
                    time to protect myself and respect my mental health.
                  </li>
                  <li>
                    I do good in the world and seek to help those less
                    fortunate.
                  </li>
                  <li>
                    I believe all men have the responsibility to lead and guide
                    those they care about for greater health, prosperity and
                    happiness.
                  </li>
                  <li>
                    I choose to only interact with those who are respectful and
                    civil to me in return for my own respectfulness and
                    civility.
                  </li>
                  <li>
                    I reserve the freedom to speak and refer to others as I
                    believe is best and most truthful.
                  </li>
                  <li>
                    I reserve the right to choose my company and include only
                    those whom I believe are best for my health, happiness and
                    success.
                  </li>
                  <li>
                    I believe I have an imperative to only spend my time that I
                    determine is beneficial, uplifting and empowering to myself
                    and others.
                  </li>
                  <li>
                    I choose to only allow myself to be influenced by those who
                    I believe have my best interests in mind.
                  </li>
                  <li>
                    Each day I dedicate myself to create anew the greatest
                    possible positive impact on the world and do the work
                    necessary to achieve a greater masculine excellence across
                    all realms of human endeavor.
                  </li>
                </ol>
              </div>

              <h3 className='heading mb-4 text-3xl tracking-tight font-bold text-green-900 dark:text-green-400 '>
                12 Rules for Life By Jordan B. Peterson
              </h3>
              <div className='mb-4 text-emerald-400 p1'>
                <ol className='list-decimal list-outside'>
                  <li>Stand up straight with your shoulders back</li>
                  <li>
                    Treat yourself like someone you are responsible for helping
                  </li>
                  <li>Make friends with people who want the best for you</li>
                  <li>
                    Compare yourself to who you were yesterday, not to who
                    someone else is today
                  </li>
                  <li>
                    Do not let your children do anything that makes you dislike
                    them
                  </li>
                  <li>
                    Set your house in perfect order before you criticize the
                    world
                  </li>
                  <li>Pursue what is meaningful (not what is expedient)</li>
                  <li>Tell the truth - or, at least, don't lie</li>
                  <li>
                    Assume that the person you are listening to might know
                    something you don't
                  </li>
                  <li>Be precise in your speech</li>
                  <li>Do not bother children when they are skateboarding</li>
                  <li>Pet a cat when you encounter one on the street</li>
                </ol>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Values;
