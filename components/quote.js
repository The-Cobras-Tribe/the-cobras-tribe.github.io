import { useEffect, useState } from "react";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
function Quote() {
  const quotes = [
    "We're men of action. We act.",
    "Being a bitch is a mindset.",
    "When we are tired, we are attacked by ideas we conquered long ago.",
    "The happiness of your life depends on the quality of your thoughts.",
    "Success is not final, failure is not fatal - It is the courage to continue that counts.",
    "Everything will be okay in the end, if it's not ok then it's not the end.",
    "Power is influence over external events, peace is influence over internal events.",
    "To stand up straight with your shoulders back is to accept the terrible responsibility of life, with eyes wide open. It means deciding to voluntarily transform the chaos of potential into the realities of habitable order. It means adopting the burden of self-conscious vulnerability, and accepting the end of the unconscious paradise of childhood, where finitude and mortality are only dimly comprehended. It means willingly undertaking the sacrifices necessary to generate a productive and meaningful reality.",
    "You are what you do, not what you say you will do.",
    "Be yourself. Everyone else is taken.",
    "The man who goes to the gym every single day regardless of how he feels will always beat the man who goes to the gym when he feels like going to the gym.",
    "How I feel does not change what I do on a daily basis.",
    "I allow manipulation to find out where my enemy wants me to go, and then I use my mind to break the trap and punish the perpetrators.",
    "If you can be the man you want your son to be, then you can truly be a man.",
    "If I don't feel like working, I'll still work.",
    "You don't get to go through life only doing the things you feel like doing.",
    "It would be disgusting for my ancestors to have fought sabertooth tigers so I can wake my lazy ass up, jerk off all day, and ask on YouTube how I can stop being a fucking loser.",
    "I can wake up sad, I can ache, I can have a busy day, stressed, etc. I will complete the same tasks as if I wake up in a fantastic mode.",
    "I have duty to myself and my bloodline.",
    "Depression isn't real.",
    "You're the average of the five people spend the most time with.",
    "Muddy water is best cleared by leaving it alone.",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "Life without endeavor is like entering a jewel mine and coming out with empty hands.",
  ];

  const [quote, setQuote] = useState(quotes[0]);

  // change quote every 10 seconds
  useEffect(() => {
    // shuffle quotes
    for (let i = quotes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [quotes[i], quotes[j]] = [quotes[j], quotes[i]];
    }

    console.log(quotes);

    let i = 0;
    const interval = setInterval(() => {
      setQuote(quotes[i]);
      i++;
      if (i >= quotes.length) {
        i = 0;
      }
    }, 6000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className='bg-white dark:bg-stone-800/50 backdrop-filter backdrop-blur-lg'>
        <div className='max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6'>
          <h1 className='text-center w-full mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-6xl dark:text-green-300 mb-8'>
            Our values and beliefs
          </h1>

          <figure className='max-w-screen-md mx-auto'>
            <svg
              className='h-12 mx-auto mb-3 text-green-200'
              viewBox='0 0 24 27'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
                fill='currentColor'
              />
            </svg>

            <blockquote>
              <p className='text-2xl font-medium text-green-400'>{`"${quote}"`}</p>
            </blockquote>
          </figure>

          <div className='mt-8'>
            <Link
              className='
                text-green-400
                underline
              '
              href='/values'
            >
              More...
            </Link>
          </div>
        </div>
      </section>
      <section className='bg-white p-12 py-24 dark:bg-stone-900/90 backdrop-filter backdrop-blur-lg'>
        <h1 className='text-center w-full mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-6xl dark:text-green-300 mb-8'>
          Choose your own future. <br /> Take the pill you want.
        </h1>
        <div className='mt-12 flex gap-8 justify-center'>
          <button
            onClick={() => {
              window.open("https://www.netflix.com");
            }}
            className='border-2 border-blue-400 rounded-full bg-blue-900 hover:bg-stone-900 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform'
          >
            Blue Pill
          </button>
          <button
            onClick={() => {
              window.location.href = "/values";
            }}
            className='bg-red-900 border-2 border-red-400 rounded-full
            hover:bg-stone-900 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out all'
          >
            Red Pill
          </button>
        </div>
      </section>
    </>
  );
}

export default Quote;
