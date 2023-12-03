async function getData() {
  const res = await fetch(process.env.BASE_URL + 'api/WorkList');
  if (!res.ok) {
    throw new Error('WorkList List Calling Fail');
  }
  return res.json();
}
const WorkList = async () => {
  const data = await getData();
  return (
    <section className='flex  flex-col justify-center bg-white px-20 py-12 max-md:px-5'>
      <div className=' container mx-auto'>
        <div className='ml-6 mt-4 max-w-[495px] self-start text-xl font-medium uppercase text-green-500 max-md:max-w-full'>
          Work List
        </div>
        <div className='ml-6 mt-4 max-w-[495px] self-start text-3xl font-semibold text-black max-md:max-w-full'>
          We provide the Perfect Solution to your business growth
        </div>
        <div className='mx-6 mb-3.5 mt-10 max-md:mr-2.5 max-md:max-w-full'>
          <div className='gap-5 max-md:flex max-md:flex-col max-md:gap-0'>
            {data.map((item, i) => (
              <div
                key={i}
                className='flex w-full grow flex-col items-start rounded-[30px] bg-white py-12 pl-8 pr-12 max-md:mt-10 max-md:px-5'
              >
                <div className='flex w-[93px] max-w-full flex-col items-center justify-center self-start rounded-3xl bg-emerald-100 px-5 py-8'>
                  {i === 1 ? (
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
                        d='M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9'
                      />
                    </svg>
                  ) : (
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
                        d='M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155'
                      />
                    </svg>
                  )}
                </div>
                <div className='mt-4 text-2xl font-semibold  text-black'>
                  {item['title']}
                </div>
                <div className=' text-md mt-4  text-gray-600'>
                  {item['des']}
                </div>
                <div className='  mb-2 mt-11 flex justify-between gap-2.5 rounded-xl py-4 pl-5 pr-14 max-md:mt-10 max-md:pr-5'>
                  <div className='flex cursor-pointer flex-row items-center rounded-lg px-2 py-3 text-lg font-semibold text-black hover:border hover:border-gray-700'>
                    Learn More
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
                          d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                        />
                      </svg>
                    </span>{' '}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkList;
