import { FaGoogle, FaFacebook } from "react-icons/fa";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-center bg-gray-100">
      <div className="bg-white m-auto rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
        <div className="w-3/5 p-5">
          <div className="text-left font-bold">
            <span className="text-sky-700">Air</span>bnb
          </div>
          <div className="py-10">
            <div className="text-2xl mb-2 font-bold text-sky-700">
              Sign in to account?
            </div>
            <div className="border-2 w-10 border-sky-700 inline-block m-3 rounded-md"></div>
            <div className="flex justify-center my-2">
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaGoogle className="text-sm" />
              </a>
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaFacebook className="text-sm" />
              </a>
            </div>
            <p className="m-2 p-2 text-gray-400">Or</p>
            <div className="flex flex-col items-center">
              <input
                type="text"
                className="p-2 w-64 bg-gray-100 rounded-md"
                placeholder="Phone Number"
              />
              <button className="border-2 border-sky-700 p-2 m-4 inline-block rounded-lg font-semibold hover:bg-sky-700 hover:text-white text-sky-700">
                Continue
              </button>{" "}
            </div>
          </div>
        </div>
        <div className="w-2/5 p-5 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 bg-sky-700">
          <h2 className="text-3xl mb-2 font-bold">Hello, friend!</h2>
          <div className="border-2 w-10 border-white inline-block m-3 rounded-md"></div>
          <p className="mb-6">
            Fill up the form, and complete you signup journey.
          </p>
          <button className="border-2 border-white p-2 m-2 inline-block rounded-lg font-semibold hover:bg-white hover:text-sky-700">
            Sign up
          </button>
        </div>
      </div>
    </main>
  );
}
