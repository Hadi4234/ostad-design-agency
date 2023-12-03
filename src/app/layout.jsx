import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import NextBreadcrumb from '@/components/NextBreadcrumb';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Design Agency',
  description:
    'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <main className=' '>
          <Navbar />
          <NextBreadcrumb
            homeElement={'Home'}
            separator={
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8.25 4.5l7.5 7.5-7.5 7.5'
                  />
                </svg>
              </span>
            }
            activeClasses='text-green-500'
            containerClasses='flex py-5 justify-start ml-5 font-semibold  text-md text-black'
            listClasses='hover:underline mx-2 cursor-pointer '
            capitalizeLinks
          />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
