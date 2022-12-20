// Your prisma instance will be your interface to the database when you want to read and write data in it.
//You can for example create a new User record by calling prisma.user.create()
// or retrieve all the Post records from the database with prisma.post.findMany().
//For an overview of the full Prisma Client API, visit the Prisma docs.
// Now you can replace the hardcoded feed object in getStaticProps inside index.tsx with a proper call to the database:

import Link from "next/link";

function AccountCreationComponent() {
  return (
    <div>
      <div className="text-zinc-600 body-font relative">
        <form
          className="flex flex-col items-center justify-center container px-5 py-24 mx-auto"
          // onSubmit={handleFormSubmit}
        >
          <div className="lg:w-1/2 md:w-2/3 text-center mb-12 rounded-lg bg-teal-100 shadow">
            <h1 className="sm:text-3xl pt-3 text-2xl font-medium title-font mb-4 text-zinc-700">
              Account Creation
            </h1>
            <h2 className="lg:w-2/3 pb-3 mx-auto leading-relaxed text-base">
              Join the community of learners on the Japanese Study Companion.
            </h2>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full ">
                <div className="relative">
                  <label
                    htmlFor="firstName"
                    className="leading-7 text-sm text-zinc-600 dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    // onChange={handleChange}
                    type="firstName"
                    id="firstName"
                    name="firstName"
                    className="w-full bg-opacity-50 rounded border border-zinc-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-zinc-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full ">
                <div className="relative">
                  <label
                    htmlFor="lastName"
                    className="leading-7 text-sm text-zinc-600 dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    // onChange={handleChange}
                    type="lastName"
                    id="lastName"
                    name="lastName"
                    className="w-full bg-opacity-50 rounded border border-zinc-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-zinc-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full ">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-zinc-600 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    // onChange={handleChange}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-opacity-50 rounded border border-zinc-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-zinc-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="leading-7 text-sm text-zinc-600 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    // onChange={handleChange}
                    type="password"
                    id="password"
                    name="password"
                    className="w-full bg-opacity-50 rounded border border-zinc-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-zinc-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-teal-600 transition-all ease-in-out duration-200 border-0 py-2 px-8 focus:outline-none hover:bg-teal-500 rounded text-lg"
                >
                  Sign up
                </button>
                <p className="text-center mt-2 dark:text-dark-500">
                  Already have an account?{" "}
                  <Link
                    className="text-teal-600 transition-all ease-in-out duration-200 hover:text-teal-500 font-bold"
                    href="/login"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AccountCreationComponent;
