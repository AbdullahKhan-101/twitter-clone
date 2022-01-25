import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = ({ providers }) => {
  return (
    <div className="flex flex-col items-center space-y-20 pt-48">
      <Image
        src="https://rb.gy/ogau5a"
        width={150}
        height={150}
        objectFit="contain"
      />
      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            {/* https://devdojo.com/tailwindcss/buttons#_ */}
            <a
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white"
            >
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-48 group-hover:h-12 opacity-10"></span>
              <span className="relative">Sign in with {provider.name}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Login;
