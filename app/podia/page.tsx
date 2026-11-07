import Image from "next/image";
import React from "react";

export default function Podia() {
  return (
    <div className="min-h-screen  text-white">
      <nav className="flex justify-between items-center px-16 py-5 border-b">
        <h1 className="text-2xl font-bold text-purple-700">podia</h1>

        <ul className="flex gap-8 text-sm">
          <li>Features⌄</li>
          <li>Examples</li>
          <li>Pricing</li>
          <li>Demo</li>
          <li>Resources⌄</li>
        </ul>

        <div className="flex items-center gap-5">
          <p>Login</p>

          <button className="bg-purple-700 text-white px-5 py-2 rounded-full">
            Sign up free
          </button>
        </div>
      </nav>

      <div className="flex items-center justify-between px-20 py-24 gap-16">
        <div className="w-1/2">
          <p className="text-xs text-gray-500">DIGITAL PRODUCTS</p>

          <h1 className="text-5xl font-bold leading-tight mt-3">
            Sell online courses,
            <br />
            coaching sessions,
            <br />
            webinars, workshops,
            <br />
            ebooks, and anything
            <br />
            you can think of on Podia
          </h1>

          <p className="text-gray-500 text-lg leading-7 mt-6">
            Get everything you need in one place that you own. Podia takes care
            of hosting products, taking payments, and getting products to your
            customers. And you always control your own work.
          </p>

          <button className="bg-purple-700 text-white px-7 py-3 rounded-full mt-6">
            Get your free account
          </button>
        </div>

        <div className="w-1/2">
          <Image
            src="/Podia_product.png"
            alt="Podia product"
            width={700}
            height={550}
            className="w-full"
          />
        </div>
      </div>

      <div className="text-center px-10 py-20">
        <h1 className="text-4xl font-bold">
          All you have to do is make the product.
          <br />
          Podia takes care of the details for you.
        </h1>

        <p className="text-gray-500 mt-5 text-lg">
          Podia lets you make your sales page, take payments, and give your
          customers access all in one place. Host and sell your products without
          needing to figure out a handful of new tools.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-12 px-20 py-16">
        <div className="text-center">
          <div className="text-3xl">🛒</div>

          <h2 className="font-bold text-xl mt-4">
            Checkout and sales are handled for you
          </h2>

          <p className="text-gray-500 mt-4 leading-6">
            You don't have to figure out a bunch of tools or website embeds.
            Just connect a payment provider and your Podia site takes care of
            payments for you.
          </p>
        </div>

        <div className="text-center">
          <div className="text-3xl">👤</div>

          <h2 className="font-bold text-xl mt-4">
            Your customers log in, and your products are there
          </h2>

          <p className="text-gray-500 mt-4 leading-6">
            Your Podia site handles access to products for you. Everything is in
            one place. When your customers buy a product, they get a login.
          </p>
        </div>

        <div className="text-center">
          <div className="text-3xl">☁️</div>

          <h2 className="font-bold text-xl mt-4">
            Upload your product. Make your sales page. Done.
          </h2>

          <p className="text-gray-500 mt-4 leading-6">
            You could sell a digital product this afternoon. Podia handles
            hosting, sales pages, checkout, and delivery.
          </p>
        </div>
      </div>

      <div className="text-center px-10 py-20">
        <h1 className="text-4xl font-bold">
          What kinds of products can you sell with Podia?
        </h1>

        <p className="text-gray-500 text-lg mt-5">
          Podia gives you the flexibility to sell whatever you want. That means
          you have more ways to grow your creator business.
        </p>
      </div>

      <div className="flex items-center px-20 py-20 gap-20">
        <div className="w-1/2">
          <p className="text-xs text-gray-500">ONLINE COURSES</p>

          <h1 className="text-4xl font-bold mt-3">
            Beautiful online courses you can build in moments
          </h1>

          <p className="text-gray-500 text-lg leading-7 mt-5">
            Make a beautiful online course for your customers. Podia hosts your
            course. That means all the lessons, files, and videos you want
            handled for you.
          </p>

          <p className="text-purple-700 font-bold mt-6">
            Learn more about courses →
          </p>
        </div>

        <div className="w-1/2">
          <Image
            src="/Podia_online_courses.png"
            alt="Podia online course"
            width={700}
            height={500}
            className="w-full"
          />
        </div>
      </div>

      <div className="text-center px-20 py-20">
        <p className="text-yellow-500 text-3xl">★★★★★</p>

        <p className="text-lg mt-5">
          I've wanted to offer e-courses for a while but was always overwhelmed
          with how to sell it. Podia has made it super easy.
        </p>

        <p className="text-gray-500 mt-5">— Jay Cho, Oh Joy! Academy</p>
      </div>

      <div className="flex items-center px-20 py-20 gap-20">
        <div className="w-1/2">
          <Image
            src="/podia_digital_downloads.png"
            alt="Podia digital downloads"
            width={700}
            height={500}
            className="w-full"
          />
        </div>

        <div className="w-1/2">
          <p className="text-xs text-gray-500">DIGITAL DOWNLOADS</p>

          <h1 className="text-4xl font-bold mt-3">
            Ebooks, templates, and any file type you can think of
          </h1>

          <p className="text-gray-500 text-lg leading-7 mt-5">
            Have an ebook to sell? Templates you love? Podia makes it easy to
            spin up a sales page and sell ebooks, templates, audio files, video
            files, spreadsheets, and any other file type.
          </p>

          <p className="text-purple-700 font-bold mt-6">
            Learn more about downloads →
          </p>
        </div>
      </div>

      <div className="text-center px-20 py-20">
        <p className="text-yellow-500 text-3xl">★★★★★</p>

        <p className="text-lg mt-5">
          We didn't have to stress about technical details or custom coding.
          Using Podia made selling our first eBook quick, efficient, and fun.
        </p>

        <p className="text-gray-500 mt-5">
          — Matt & Steph, Plant-based food bloggers
        </p>
      </div>

      <div className="mx-20 bg-purple-950 text-white rounded-lg text-center py-16 px-10 my-20">
        <h1 className="text-4xl font-bold">Get your free Podia account</h1>

        <p className="mt-5 text-lg">
          Join the 150,000+ creators who use Podia to create websites, sell
          digital products, and build online communities.
        </p>

        <button className="bg-purple-400 px-7 py-3 rounded-full mt-7">
          Sign up free
        </button>
      </div>

      <footer className="bg-gray-500 px-10 py-16">
        <div className="max-w-5xl mx-auto text-sm text-white-600">
          <div className="flex gap-3 mb-3">
            <b className="text-gray-800">Platform</b>
            <p className="underline">Pricing</p>
            <p className="underline">Sign up free</p>
            <p className="underline">Demo</p>
            <p className="underline">Community</p>
            <p className="underline">Website builder</p>
            <p className="underline">Digital products</p>
          </div>

          <div className="flex gap-3 mb-3">
            <b className="text-gray-800">Support</b>
            <p className="underline">Contact us</p>
            <p className="underline">Help center</p>
            <p className="underline">Hire a Podia pro</p>
            <p className="underline">Creator community</p>
            <p className="underline">Podia 101</p>
          </div>

          <div className="flex gap-3 mb-3">
            <b className="text-gray-800">Features</b>
            <p className="underline">Online courses</p>
            <p className="underline">Downloads</p>
            <p className="underline">Webinars</p>
            <p className="underline">Coaching</p>
            <p className="underline">Email marketing</p>
            <p className="underline">All features</p>
          </div>

          <div className="flex gap-3 mb-3">
            <b className="text-gray-800">Compare</b>
            <p className="underline">Kajabi</p>
            <p className="underline">Teachable</p>
            <p className="underline">Thinkific</p>
            <p className="underline">Patreon</p>
            <p className="underline">Gumroad</p>
            <p className="underline">Podia alternatives</p>
          </div>

          <div className="flex gap-3 mb-3">
            <b className="text-gray-800">Resources</b>
            <p className="underline">Examples</p>
            <p className="underline">Creator stories</p>
            <p className="underline">Blog</p>
            <p className="underline">Free tools</p>
            <p className="underline">All resources</p>
          </div>

          <div className="flex gap-3 mb-3">
            <b className="text-gray-800">Podia</b>
            <p className="underline">Jobs</p>
            <p className="underline">About</p>
            <p className="underline">Branding</p>
            <p className="underline">Reviews</p>
            <p className="underline">Refer-a-creator</p>
            <p className="underline">Affiliates</p>
          </div>

          <div className="flex gap-3 mb-3">
            <b className="text-gray-800">Social</b>
            <p className="underline">Twitter</p>
            <p className="underline">Facebook</p>
            <p className="underline">Instagram</p>
            <p className="underline">YouTube</p>
          </div>

          <div className="mt-8 flex gap-4 text-xs">
            <p>Podia Labs, Inc. © 2023</p>
            <p className="underline">Terms</p>
            <p className="underline">Privacy</p>
          </div>
        </div>

        <div className="fixed bottom-5 right-5">
          <div className="bg-purple-700 text-white w-9 h-9 rounded-full flex items-center justify-center shadow-lg">
            ?
          </div>
        </div>
      </footer>
    </div>
  );
}
