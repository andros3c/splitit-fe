"use client"
import Image from "next/image";
import { useState } from "react";
import useLoginMutation from "../hooks/queries/mutations/loginMutations";


const LoginRegister = () => {
  const initialData = { email: "", password: "" };
  const [data, setData] = useState(initialData);
  const _handleLogin = useLoginMutation
  return (
    <div className=" flex flex-col items-center gap-[4em]">
      <div className="w-full flex justify-center">
        <Image
          src="SPLITIt-logo.svg"
          alt=" split-it-logo"
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col w-full gap-[2em]">
        <div className="flex flex-col w-full">
          <label>email</label>
          <input
            value={data.email}
            onChange={(e) =>
              setData((prev) => ({ ...prev, email: e.target.value }))
            }
            type="email"
            className="bg-transparent py-[0.5em] px-[1em]"
          />
        </div>
        <div className="flex flex-col  w-full">
          <label>password</label>
          <input
            type="password"
            value={data.password}
            onChange={(e) =>
              setData((prev) => ({ ...prev, password: e.target.value }))
            }
            className="bg-transparent py-[0.5em] px-[1em]"
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-[2em]">
        <button onClick={() => _handleLogin({ ...data })}>login</button>
        <button>register</button>
      </div>
    </div>
  );
};

export default LoginRegister;
