async function getData() {
  const res = await fetch(process.env.BASE_URL + 'api/BrandList');
  if (!res.ok) {
    throw new Error('BrandList Calling Fail');
  }
  return res.json();
}

const Brands = async () => {
  const data = await getData();
  return (
    <section className='mt-5 w-full bg-white py-10'>
      <div className='container mx-auto p-4 px-4 text-center'>
        <div className=' flex flex-wrap items-center justify-center  '>
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className='mb-10 flex w-full items-center justify-center px-2  md:w-1/2 lg:mb-0 lg:w-1/4'
              >
                <img className='mx-auto h-8' src={item['image']} alt='' />
              </div>
            );
          })}
        </div>
      </div>
      <div className='mt-5 w-full bg-green-100 py-10'></div>
    </section>
  );
};

export default Brands;
