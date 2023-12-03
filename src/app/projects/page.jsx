/** @typedef {object} data
 * @property {number} id
 * @property {string} title
 * @property {string} image
 * @property {string} live
 * @property {string} remark
 */

/**
 * Download data from the specified URL.
 *
 * @async
 * @function getData
 * @param {string} process.env.BASE_URL+"api/AllProject"
 * @return {Promise<data>} The data from the URL.
 */
async function getData() {
  const res = await fetch(process.env.BASE_URL + 'api/AllProject');
  if (!res.ok) {
    throw new Error('AllProject Calling Fail');
  }
  return res.json();
}

const page = async () => {
  const data = await getData();
  const newData = data.slice(0, 6);
  return (
    <>
      <section className='container mx-auto mb-10 flex flex-col py-7'>
        <div className='flex flex-col flex-wrap gap-5 pb-7 md:w-1/2 '>
          <h3 className=' ml-6 self-start text-xl font-medium uppercase text-green-500 max-md:max-w-full'>
            Feature
          </h3>
          <h1 className=' ml-6  self-start text-3xl font-semibold text-black'>
            Lorem ipsum dolor sit amet consectetur.
          </h1>
        </div>
        <div className='mx-5 grid grid-cols-1 gap-3 md:grid-cols-2'>
          {newData.map((item, i) => (
            <div
              key={i}
              className='m-5 flex flex-col items-center rounded-xl p-5 shadow-lg'
            >
              <img
                src={item['image']}
                alt={item['title']}
                className=' rounded-lg object-contain'
              />
              <h1 className='py-7 text-xl font-bold'>{item['title']}</h1>
            </div>
          ))}
        </div>
      </section>
      {/* <Subscribe /> */}
    </>
  );
};

export default page;
