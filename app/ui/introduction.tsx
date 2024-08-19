export default async function Introduction() {
  return (
    <div className="m-11 pt-5 w-full max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-black-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg bg-white"
          src="https://www.svgrepo.com/show/483912/person.svg"
          alt="My avatar"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Kiarash Sanei
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          CE Student at SUT
        </span>
        <div className="m-5 justify-center text-l dark:text-white">
          <p>Hi! I'm Kiarash.</p>
        </div>
        <div className="flex mt-4 md:mt-6">
          <a
            target="_blank"
            href="https://x.com/TheAnchor_0"
            className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Stalk me on twitter!
          </a>
          <a
            target="_blank"
            href="https://github.com/Kiarash-Sanei"
            className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Find me on github!
          </a>
        </div>
        <div className="m-5 justify-center text-l dark:text-white">
          <p>I like me too!</p>
        </div>
      </div>
    </div>
  );
}
