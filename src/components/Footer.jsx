import Link from 'next/link';

export const Footer = () => {
  return (
    <section className='relative w-full bg-black  px-10 text-white '>
      <div className='container mx-auto  flex  flex-col gap-7 pt-10'>
        <div className='flex flex-col items-center justify-center md:flex-row'>
          <div className='flex w-full flex-col md:ml-7 md:w-1/3'>
            <h1 className='text-2xl font-bold md:text-4xl  '> WEB LOGO </h1>
            <p className='font-light'>
              Some footer text about the Agency. Just a little description to
              help people understand you better
            </p>
            <div className='mt-5 flex flex-row gap-3'>
              {' '}
              <Link
                href=''
                className='flex h-10 w-10 items-center justify-center rounded-full bg-green-600'
              >
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
              </Link>
              <Link
                href=''
                className='flex h-10 w-10 items-center justify-center rounded-full bg-green-600'
              >
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
              </Link>
              <Link
                href=''
                className='flex h-10 w-10 items-center justify-center rounded-full bg-green-600'
              >
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
              </Link>
              <Link
                href='#'
                className='flex h-10 w-10 items-center justify-center rounded-full bg-green-600'
              >
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
                  className='lucide lucide-linkedin'
                >
                  <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
                  <rect width='4' height='12' x='2' y='9' />
                  <circle cx='4' cy='4' r='2' />
                </svg>
              </Link>
            </div>
          </div>
          <div className=' ml-7 hidden flex-col md:flex md:w-1/3'>
            <h3 className='text-xl font-medium'>Usefull Links</h3>
            <Link href='/about'>About</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='/team'>Team</Link>
            <Link href='/service'>Service</Link>
          </div>
          <div className='flex  w-full flex-col md:w-1/3 '>
            <h3 className='text-xl font-medium'>Adress</h3>
            <p className='text-md font-light'>
              Design Agency Head Office. Airport Road United Arab Emirate
            </p>
          </div>
        </div>
        <div className='flex h-[60px] items-start justify-start pl-10'>
          Copyright Design Agency 2022
        </div>
      </div>
    </section>
  );
};
