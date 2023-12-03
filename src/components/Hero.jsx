import Link from 'next/link';
import Brands from './Brands';
import Stats from './Stats';

/** @typedef {object} data
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string} image1
 * @property {string} image2
 * @property {string} image3
 * @property {string} image4
 */

/**
 * Download data from the specified URL.
 *
 * @async
 * @function getData
 * @param {string} url - The URL to download from.
 * @return {Promise<data>} The data from the URL.
 */
async function getData() {
  const res = await fetch(process.env.BASE_URL + 'api/HeroList');
  if (!res.ok) {
    throw new Error('HeroList Calling Fail');
  }
  return res.json();
}

const Hero = async () => {
  const data = await getData();
  console.log(data.id);

  const title = data['title'];
  const words = title.split(' ');

  return (
    <section className='relative  w-full bg-green-100'>
      <div className='container relative z-10 mx-auto  pt-12 lg:pt-20'>
        <div className='mx-5 flex flex-wrap'>
          <div className='mb-12 flex w-full items-center px-4 lg:mb-0 lg:w-1/2'>
            <div className='w-full text-center lg:text-left'>
              <div className='mx-auto max-w-md lg:mx-0'>
                <h2 className='font-heading mb-3 text-4xl font-bold lg:text-5xl'>
                  <span>{words.slice(0, -1).join(' ') + ' '}</span>
                  <span className='text-green-600'>
                    {words[words.length - 1]}
                  </span>
                </h2>
              </div>
              <div className='mx-auto max-w-sm lg:mx-0'>
                <p className='mb-6 leading-loose text-gray-400'>
                  {data['description']}
                </p>
                <div>
                  <Link
                    className='mb-3 inline-block w-full rounded-xl bg-green-600 px-6 py-2 font-semibold leading-loose text-white transition duration-200 hover:bg-green-700 lg:mb-0 lg:mr-3 lg:w-auto'
                    href=''
                  >
                    Get Started
                  </Link>
                  {/* <Link
                                                className='inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200 border border-green-600'
                                                href='#'>How it works</Link> */}
                </div>
              </div>
            </div>
          </div>
          <div className='w-full px-4 lg:w-1/2'>
            <div className='flex flex-wrap lg:mb-4 '>
              <img
                className='h-64 w-full rounded-xl object-cover p-2 md:w-1/2 lg:w-2/3 lg:rounded-bl-none'
                src={data['image2']}
                alt=''
              />
              <img
                className='h-64 w-full rounded-xl object-cover p-2 md:w-1/2 lg:w-1/3 lg:rounded-br-none'
                src={data['image1']}
                alt=''
              />
            </div>
            <div className='flex flex-wrap lg:mb-4 '>
              <img
                className='h-64 w-full rounded-xl object-cover p-2 md:w-1/2 lg:w-1/3 lg:rounded-bl-none'
                src={data['image4']}
                alt=''
              />
              <img
                className='h-64 w-full rounded-xl object-cover p-2 md:w-1/2 lg:w-2/3 lg:rounded-br-none'
                src={data['image3']}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      <Brands />
    </section>
  );
};

export default Hero;
