import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      {/* BOX */}
      <div className="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
        {/* IMAGE CONTAINER */}
        <div className="relative w-full h-1/3 md:h-full md:w-1/2">
          <Image
            src="/images/loginBg.png"
            alt="Login Background"
            fill
            className="object-cover rounded-t-md md:rounded-l-md"
            priority // Loads image faster
          />
        </div>
        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl text-center md:text-left">Welcome</h1>
          <p className="text-center md:text-left">
            Log into your account or create a new one using social buttons
          </p>
          <button className="flex items-center gap-4 p-4 ring-1 ring-orange-100 rounded-md hover:bg-orange-50 transition duration-200">
            <Image
              src="/images/google.png"
              alt="Google"
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>
          <button className="flex items-center gap-4 p-4 ring-1 ring-blue-100 rounded-md hover:bg-blue-50 transition duration-200">
            <Image
              src="/images/facebook.png"
              alt="Facebook"
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>
          <p className="text-sm text-center md:text-left">
            Have a problem? <Link className="underline" href="/"> Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
