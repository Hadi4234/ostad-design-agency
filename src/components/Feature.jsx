import moment from 'moment';
import Link from 'next/link';

async function getData() {
  const res = await fetch(process.env.BASE_URL + 'api/FeaturedProject');
  if (!res.ok) {
    throw new Error('FeaturedProject Calling Fail');
  }
  return res.json();
}

const Feature = async () => {
  const data = await getData();
  const newData = data.slice(0, 5);

  return (
    <section className='w-full bg-green-50 py-10'>
      <div className='container mx-auto flex flex-col'>
        <div className=' flex h-[200px] flex-row'>
          <div className='mx-5 flex flex-col flex-wrap gap-5 md:w-1/2'>
            <h3 className='max-w-[495px] self-start text-xl font-medium uppercase text-green-500 max-md:max-w-full'>
              Feature
            </h3>
            <h1 className=' self-start text-3xl font-semibold text-black'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nesciunt, impedit!
            </h1>
          </div>
        </div>
        <div className=' md:gird-cols-2 mx-5 mb-10 grid grid-cols-1 gap-5 object-contain lg:grid-cols-4 lg:grid-rows-2  lg:[&>*:nth-child(1)]:col-span-2 lg:[&>*:nth-child(1)]:row-span-3'>
          {newData.map((item, i) => (
            <div key={i} className='flex flex-col items-start '>
              <img
                src={item['image']}
                alt={item['title']}
                className=' rounded-lg object-cover'
              />
              <p className='pt-3 text-gray-500'>
                App Design - {moment(item.created_at).format('LL')}
              </p>
              <h1 className='py-3 text-xl font-semibold'>{item['title']}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
