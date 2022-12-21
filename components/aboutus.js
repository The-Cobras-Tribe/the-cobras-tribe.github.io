/* eslint-disable @next/next/no-img-element */
function AboutUs() {
  return (
    <>
      <section className='bg-stone-800/90 backdrop-filter backdrop-blur-xl'>
        <div className='gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6'>
          <img
            className='w-full rounded-lg mb-8'
            src='https://media.discordapp.net/attachments/1053706516097683526/1054702567973724170/6658e04cbab82be3799380fdc2649ca8.jpg?width=541&height=535'
            alt='office content 1'
          />
          <div className='font-light text-stone-500 sm:text-lg dark:text-stone-400 text-justify'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-green-200'>
              {"Who Are The Cobras Anyways?"}
            </h2>
            <div className='text-emerald-500'>
              <p className='mb-4'>
                We are a group of individuals who are dedicated to becoming the
                best versions of ourselves. We believe that by supporting each
                other and fostering a sense of community, we can all grow and
                reach our full potential. We work together in groups and draw
                inspiration from the cooperation and resilience of desert
                cobras.
              </p>
              <p className='mb-4'>
                Our tribe values teamwork and the power of community to help us
                achieve our goals. We recognize that we are stronger when we
                work together and support one another. We believe that by
                encouraging and inspiring each other, we can all reach new
                heights and achieve success.
              </p>
            </div>
            <button
              onClick={() => {
                window.location.href = "/contact";
              }}
              className='font-sans my-8 bg-green-200 text-green-900 font-bold py-2 px-4 rounded-lg hover:bg-green-900 hover:text-green-200 transition duration-100 ease-in-out transform'
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
