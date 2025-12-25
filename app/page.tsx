import { Action } from "@/shared/components/Action";
import IconWrapper from "@/shared/components/IconWrapper";
import { Logo } from "@/shared/components/Logo";
import { Clock, Scale, Clipboard, Check, DollarSign } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-gray-500">
      <header className="flex px-3 justify-between py-2 mb-10 max-w-7xl mx-auto mt-5">
        <Logo />

        <nav>
          <Action as="link" href="/login" className="mr-5">Login</Action>
          <Action as="link" href="/register" variant="secondary"> Sign Up</Action>
        </nav>
      </header>

      <main>
        <div className="lg:flex gap-10 lg:ml-20">
          <div className="md:flex items-center justify-center flex-col max-w-130 mx-auto mb-4 md:mb-10 ">
            <h1 className="text-3xl font-bold md:font-extrabold px-4 text-black md:text-5xl lg:text-6xl text-center lg:text-left">Food delivery<br /> <span className="text-brand-primary">in minutes</span></h1>

            <p className="px-4 mt-4 text-lg md:text-center">Order from your favourite local restaurants with the quickes delivery times. QuickBite brings the best food right to your door.</p>
          </div>

          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Assorted fresh food dishes on a table"
            width={1000}
            height={450}
            className="mb-10 lg:h-full object-cover hero-diagonal"
          />
        </div>

        {/* FEATURES */}

        <section className="px-4 mb-10">

          <div className="lg:text-center">
            <h2 className="text-brand-primary font-bold uppercase">Features</h2>
            <h3 className="text-2xl font-bold text-black md:text-3xl mt-2">A better way to order food</h3>

            <p className="md:mt-4 text-xl max-w-2xl lg:mx-auto">QuickBite offers a seamless food delivery experience for customers , restaurants, and drivers.</p>

          </div>

          {/* LIST  */}

          <ul className="px-4 grid gap-14 grid-cols-(--grid-cols-auto-fit-200) max-w-7xl mx-auto lg:px-0 my-7">
            <li>
              <IconWrapper Icon={Clock} className="my-7" />
              <h4 className="font-semibold text-black text-lg" >Fast Delivery</h4>
              <p>Get your food delivered quickly with our optimized routing system and dedicated drivers.</p>
            </li>

            <li>
              <IconWrapper Icon={Scale} className="my-7" />
              <h4 className="font-semibold text-black text-lg" >Local Restaurants</h4>
              <p>Support local businesses by ordering from your favourite neighborhood restaurants.</p>
            </li>

            <li>
              <IconWrapper Icon={DollarSign} className="my-7" />
              <h4 className="font-semibold text-black text-lg" >Best Prices</h4>
              <p>Competitive pricing with no hidden fees.</p>
            </li>

            <li>
              <IconWrapper Icon={Clipboard} className="my-7" />
              <h4 className="font-semibold text-black text-lg" >Real-time Tracking</h4>
              <p>Know exactly where your order is with our real-time delivery tracking system.</p>
            </li>
          </ul>
        </section>

        {/* START ORDERING */}

        <section className="px-4 bg-brand-primary/5 py-10">

          <div className="max-w-7xl mx-auto lg:flex items-center justify-between">
            <h2 className="text-3xl font-bold md:font-extrabold text-black mb-4">Ready to try QuickBite? <br /> <span className="text-brand-primary">Start ordering  today.</span></h2>
            <Action as="link" href="/register" variant="secondary" size="md" aria-label="Start ordering food on QuickBite" className="h-10">Get started</Action>
          </div>
        </section>


      </main>

      <footer className="px-5 mt-10 mb-10">
        <ul className="flex gap-x-12  gap-y-3 flex-wrap justify-center">
          <li>About</li>
          <li>Blog</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Partners</li>
          <li>Privacy</li>
          <li>Terms</li>
        </ul>

        <p className="my-5 text-center text-gray-400">
          © 2026  QuickBite, Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
