import Subscribe from '@/components/Subscribe';

async function getData() {
  const res = await fetch(process.env.BASE_URL + 'api/TestimonialList');
  if (!res.ok) {
    throw new Error('Testimonial List Calling Fail');
  }
  return res.json();
}

const page = async () => {
  const data = await getData();
  return (
    <div className='py-7'>
      <section className='w-full   pb-20'>
        <div className='container mx-auto flex flex-col gap-5 '>
          <div className='flex flex-col flex-wrap gap-5 pb-5 md:w-1/2'>
            <h3 className=' ml-6 self-start text-xl font-medium uppercase text-green-500 max-md:max-w-full'>
              Feature
            </h3>
            <h1 className=' ml-6  self-start text-3xl font-semibold text-black'>
              Lorem ipsum dolor sit amet consectetur.
            </h1>
          </div>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2'>
            {data.map((item, i) => (
              <div
                key={i}
                className='mx-5 flex flex-col items-center justify-center gap-5 rounded-xl bg-white px-4 py-10 shadow-md'
              >
                <img
                  src={item['image']}
                  alt={item['image']}
                  className=' my-5 h-24 w-24 rounded-2xl object-cover'
                />
                <p className=' mx-4 text-base font-normal text-gray-500'>
                  {item['msg']}
                </p>
                <div className='flex flex-col items-center justify-center pt-4'>
                  <h1 className='text-2xl font-semibold uppercase'>
                    {item['name']}
                  </h1>
                  <h4>{item['designation']}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Subscribe />
    </div>
  );
};
export default page;
