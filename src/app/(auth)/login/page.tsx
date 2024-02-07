"use client";
import { useRouter } from "next/navigation";
import "../style.css";

export default function Login() {
  const route = useRouter();
  const handleClick = () => {
    alert("clicked");
    route.replace("/dashboard");
  };
  return (
    <section className="flex flex-col justify-center items-start font-normal  gap-10 mx-auto w-[40%]">
      <h1 className="text-red-300 font-mono font-extrabold text-[3rem]">
        Login here
      </h1>
      <div className="flex flex-col gap-2 w-[100%]  border-sky-500 border-2 p-8">
        <form action="" className="flex flex-col gap-6">
          <div className="flex flex-col items-start">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              className="border-2 border-black p-2 w-full outline-none"
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="name">Email Address</label>
            <input
              type="email"
              placeholder="Email Address"
              className="border-2 border-black p-2 w-full outline-none"
            />
          </div>

          <select
            id="items"
            className="w-[50%] border-2 border-red-300 p-1 outline-none"
          >
            <option value="stack">select stack</option>
            <option value="frontend">Frontend</option>
            <option value="frontend">Backend</option>
            <option value="frontend">Mobile</option>
          </select>
        </form>
        <button onClick={handleClick} className="bg-red-300 px-6 py-1 w-[30%]">
          Login
        </button>
      </div>
    </section>
  );
}
