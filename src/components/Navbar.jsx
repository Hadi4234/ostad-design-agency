import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='container z-0 mx-auto flex h-20 items-center justify-between bg-transparent px-10 '>
      <Link href='/' className=' text-xl font-bold '>
        Design<span className=' text-orange-600'>Agency</span>
      </Link>
      <ul className='hidden gap-3 md:flex'>
        <li className=' flex items-center text-center font-medium'>
          <Link href='/'>Home</Link>
        </li>
        <li className=' flex items-center text-center font-medium'>
          <Link href='/team'>Team</Link>
        </li>
        <li className=' flex items-center text-center font-medium'>
          <Link href='/service'>Service</Link>
        </li>
        <li className=' flex items-center text-center font-medium'>
          <Link href='/projects'>Project</Link>
        </li>
        <li className=' flex items-center text-center font-medium'>
          <Link href='/testimonials'>Testimonials</Link>
        </li>
        <li className=' flex items-center text-center font-medium'>
          <button className=' rounded border  border-green-600 px-3 py-2'>
            Login
          </button>
        </li>
        <li className=' flex items-center text-center font-medium'>
          <button className=' rounded bg-green-600 px-3 py-2 text-white'>
            Register
          </button>
        </li>
      </ul>
      <button className=' block md:hidden'>
        <svg
          className='h-6 w-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16m-7 6h7'
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
