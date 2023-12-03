async function getData() {
  const res = await fetch(process.env.BASE_URL + 'api/AllService');
  if (!res.ok) {
    throw new Error('AllService List Calling Fail');
  }
  return res.json();
}
const page = async () => {
  const data = await getData();
  return (
    <section className='container mx-auto py-7'>
      <div className='flex flex-col'>
        <div className='flex flex-col flex-wrap gap-5 pb-7  md:w-1/2'>
          <h3 className=' ml-6 self-start text-xl font-medium uppercase text-green-500 max-md:max-w-full'>
            Service
          </h3>
          <h1 className=' ml-6  self-start text-3xl font-semibold text-black'>
            Lorem ipsum dolor sit amet consectetur.
          </h1>
        </div>
        <div className='grid grid-cols-1 gap-5 px-5 py-5 md:grid-cols-2'>
          {data.map((item, i) => (
            <div
              key={i}
              className='flex flex-col rounded-lg p-5 pb-10 shadow-lg'
            >
              <div className='flex flex-col justify-start gap-4'>
                <h1 className='text-2xl font-semibold text-black'>
                  {item.title}
                </h1>
                <p className='text-md font-light'>{item.des}</p>
              </div>

              <div className='container mx-auto flex flex-col'>
                <div className='flex flex-wrap lg:mb-4 '>
                  <img
                    className='h-64 w-full rounded-xl object-cover p-2 md:w-1/2 lg:w-2/3 lg:rounded-bl-none'
                    src={item['image2']}
                    alt=''
                  />
                  <img
                    className='h-64 w-full rounded-xl object-cover p-2 md:w-1/2 lg:w-1/3 lg:rounded-br-none'
                    src={item['image1']}
                    alt=''
                  />
                </div>
                <div className='flex flex-wrap lg:mb-4 '>
                  <img
                    className='h-64 w-full rounded-xl object-cover p-2 md:w-1/2 lg:w-1/3 lg:rounded-bl-none'
                    src={item['image4']}
                    alt=''
                  />
                  <img
                    className='h-64 w-full rounded-xl object-cover p-2 md:w-1/2 lg:w-2/3 lg:rounded-br-none'
                    src={item['image3']}
                    alt=''
                  />
                </div>
              </div>

              {/* <div className='grid grid-cols-3 grid-rows-4 gap-3'>
                <div className='col-span-2 row-span-2'>
                  <img
                    src={item.image1}
                    alt={item.image1}
                    className='rounded object-cover'
                  />
                </div>
                <div className='col-start-3 row-span-2 object-cover'>
                  <img
                    src={item.image2}
                    alt={item.image2}
                    className='rounded object-cover'
                  />
                </div>
                <div className='row-span-2 row-start-3'>
                  <img
                    src={item.image3}
                    alt={item.image3}
                    className='rounded object-cover'
                  />
                </div>
                <div className='col-span-2 row-span-2 row-start-3'>
                  <img
                    src={item.image4}
                    alt={item.image4}
                    className='rounded object-cover'
                  />
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
