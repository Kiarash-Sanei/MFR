import { captureRejectionSymbol } from "events";

type Response = {
  created_at: string;
  updated_at: string;
};
export default async function Profile({
  username,
  searchAgree,
  isExpandable,
}: {
  username: string;
  searchAgree: boolean;
  isExpandable: boolean;
}) {
  var data;
  var error = "";
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      error = "User not found";
    } else {
      data = await response.json();
    }
  } catch (e) {
    error = "Error fetching data";
  }
  if (error === "") {
    if (isExpandable) {
      return (
        <div className="m-11 pt-5 w-full max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-black-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={data.avatar_url}
              alt={`${username}'s avatar`}
            />
            <h5 className="mb-1 text-xl font-medium dark:text-white">
              {data.name ? `${data.name}` : `${username}`}
            </h5>
            <span className="text-sm dark:text-gray-400">
              {`${data.type}${data.company ? ` from ${data.company}` : ""}`}
            </span>
            <div className="m-5 justify-center text-l dark:text-white">
              <p>{data.bio}</p>
              <p>{`This human being joined on ${
                data.created_at
              } and was last seen on ${data.updated_at} and ${
                data.location ? `lives in ${data.location} and ` : ""
              }has ${data.public_repos} public repositories.`}</p>
              <p>
                {`Our friend follows ${data.following} cool dudes and is followed by ${data.followers} fans.`}
              </p>
              <p>
                {`The subject here ${
                  data.hireable ? "is" : "isn't"
                } open for hiring.${
                  data.email
                    ? ` ${data.email} is the email that you can use to reach out.`
                    : ""
                }`}
              </p>
            </div>
            <div className="flex mt-4 md:mt-6">
              {data.twitter_username && (
                <a
                  target="_blank"
                  href={`https://x.com/${data.twitter_username}`}
                  className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Stalk me on twitter!
                </a>
              )}
              <a
                target="_blank"
                href={data.html_url}
                className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Find me on github!
              </a>
              <a
                href={`/more-information/${username}/`}
                className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                More Information!
              </a>
            </div>
            {searchAgree && (
              <div className="m-5 justify-center text-l dark:text-white">
                <p>I like that one too!</p>
              </div>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div className="m-11 pt-5 w-full max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-black-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={data.avatar_url}
              alt={data.gravatar ? `${data.gravatar}` : `${username}'s avatar`}
            />
            <h5 className="mb-1 text-xl font-medium dark:text-white">
              {data.name ? `${data.name}` : `${username}`}
            </h5>
            <span className="text-sm dark:text-gray-400">
              {`${data.type}${data.company ? ` from ${data.company}` : ""}`}
            </span>
            <div className="m-5 justify-center text-l dark:text-white">
              <p>
                I have accessed this data using <a target="_blank" href={data.url}>THIS</a>
              </p>
              <p>{`This human being's ID is ${data.id} and his(her) Node ID is ${data.node_id}.`}</p>
              <p>{`He(she) is ${data.site_admin ? "" : "not "} admin.`}</p>
              <p>
                {`The subject here ${
                  data.email
                    ? `has. The email is ${data.email}.`
                    : "does not have email."
                }`}
              </p>
            </div>
            <div className="flex mt-4 md:mt-6">
              <a
                href="/"
                className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Back
              </a>
            </div>
          </div>
        </div>
      );
    }
  } else {
    username = "Imaginary User!";
    console.log(error);
    return (
      <div className="m-11 pt-5 w-full max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-black-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg bg-white"
            src="https://www.svgrepo.com/show/483912/person.svg"
            alt={`${username}'s avatar`}
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {username}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Imaginary
          </span>
          <div className="m-5 justify-center text-l dark:text-white">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex mt-4 md:mt-6">
            <a className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              No twitter!
            </a>
            <a className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              No github!
            </a>
          </div>
          {searchAgree && (
            <div className="m-5 justify-center text-l dark:text-white">
              <p>I like that one too!</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
