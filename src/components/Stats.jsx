async function getData() {
  const res = await fetch(process.env.BASE_URL + 'api/StatList');
  if (!res.ok) {
    throw new Error('StatList Calling Fail');
  }
  return res.json();
}

const Stats = async () => {
  const data = await getData();

  return (
    <section className='py-20 md:h-[421px]'>
      <div className='container mx-auto px-4'>
        <div className='mx-5 flex flex-col gap-5 md:flex-row'>
          <div className=' mb-8 w-full rounded-lg   p-10 text-center shadow-lg md:w-1/2  lg:w-1/4'>
            <span className='mb-6 inline-block rounded bg-green-100 p-7 '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-6 w-6 scale-150 text-gray-600'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
                />
              </svg>
            </span>
            <h3 className='text-2xl font-bold'>{data['followers']}</h3>
            <p className=''>Followers</p>
          </div>
          <div className=' mb-8 w-full rounded-lg   p-10 text-center shadow-lg md:w-1/2  lg:w-1/4'>
            <span className='mb-6 inline-block rounded bg-green-100 p-7'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-6 w-6 scale-150 text-gray-600'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z'
                />
              </svg>
            </span>
            <h3 className='text-2xl font-bold'>{data['customers']}</h3>
            <p className=''>Happy Customers</p>
          </div>
          <div className=' mb-8 w-full rounded-lg  p-10 text-center shadow-lg md:w-1/2  lg:w-1/4'>
            <span className='mb-6 inline-block rounded bg-green-100 p-7'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-6 w-6 scale-150 text-gray-600'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z'
                />
              </svg>
            </span>
            <h3 className='text-2xl font-bold'>{data['solved']}</h3>
            <p className=''>Problem Solved</p>
          </div>
          <div className=' mb-8 w-full rounded-lg   p-10 text-center shadow-lg md:w-1/2  lg:w-1/4'>
            <span className='mb-6 inline-block rounded bg-green-100 p-7'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-6 w-6 scale-150 text-gray-600'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                />
              </svg>
            </span>
            <h3 className='text-2xl font-bold'>{data['projects']}</h3>
            <p className=''>Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Stats;
