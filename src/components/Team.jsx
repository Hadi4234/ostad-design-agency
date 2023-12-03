import { Facebook, Instagram, Twitter } from 'lucide-react';

/** @typedef {object} data
 * @property {number} id
 * @property {string} name
 * @property {string} bio
 * @property {string} image
 * @property {string} facebook
 * @property {string} twitter
 * @property {string} instagram
 */

/**
 * Download data from the specified URL.
 *
 * @async
 * @function getData
 * @param {string} process.env.BASE_URL+"api/TeamList"
 * @return {Promise<data>} The data from the URL.
 */
async function getData() {
  const res = await fetch(process.env.BASE_URL + 'api/TeamList');
  if (!res.ok) {
    throw new Error('TeamList Calling Fail');
  }
  return res.json();
}

const Team = async () => {
  const data = await getData();
  const newData = data.slice(0, 3);
  return (
    <section className='w-full'>
      <div className='container mx-auto flex flex-col gap-5'>
        <div className='flex flex-col flex-wrap gap-5 py-7 md:w-1/2 '>
          <h3 className=' ml-6 self-start text-xl font-medium uppercase text-green-500 max-md:max-w-full'>
            Feature
          </h3>
          <h1 className=' ml-6  self-start text-3xl font-semibold text-black'>
            Lorem ipsum dolor sit amet consectetur.
          </h1>
        </div>
        <div className='row-span-3 flex flex-col items-center justify-center gap-5 space-x-4 py-10 md:flex-row'>
          {newData.map((item, i) => (
            <div
              key={i}
              className=' relative flex flex-col items-center rounded-xl shadow-lg'
            >
              <img
                src={item.image}
                alt={item.name}
                className=' block h-auto w-full rounded-t-lg'
              />
              <span className=' absolute bottom-24 flex flex-row items-center justify-center gap-3 rounded-full bg-white px-4 py-2 text-gray-400'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  stroke='none'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-facebook'
                >
                  <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
                </svg>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  stroke='none'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-twitter '
                >
                  <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
                </svg>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-instagram '
                >
                  <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
                  <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                  <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
                </svg>
              </span>
              <h1 className=' py-5 text-xl font-bold text-black'>
                {item.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
