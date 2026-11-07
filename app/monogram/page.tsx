import Image from "next/image";
import React from "react";

export default function monogram() {
  return (
    <div className="bg-white text-violet-950">
      <nav className="flex justify-between p-4 bg-violet-950 text-white">
        <div>
          <h1 className="font-bold">🔳 MONOGRAM</h1>
        </div>

        <div>
          <ul className="flex gap-5 text-xs">
            <li>HOW IT WORKS</li>
            <li>WORKFLOWS</li>
            <li>DOWNLOAD</li>
            <li>BLOG</li>
            <li>SUPPORT</li>
            <li>SHOP</li>
            <li>💼 USD</li>
          </ul>
        </div>
      </nav>

      <div className="relative">
        <Image
          src="/chistmas_rec.png"
          alt="chistmas"
          width={1500}
          height={600}
          className="w-full"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl font-bold">
            A CONSOLE FOR
            <br />
            EVERY WORKFLOW
          </h1>

          <p className="mt-4">Discover the perfect console for yours.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 p-5">
        <div>
          <Image
            src="/leg_up_life.png"
            alt="mini console"
            width={500}
            height={400}
            className="w-full"
          />

          <div className="flex justify-between">
            <h1 className="font-bold">MINI CONSOLE</h1>

            <p>$249</p>
          </div>

          <p className="text-xs">
            Ideal for everyday shortcuts. Adaptable to any workflow.
          </p>
        </div>

        <div>
          <Image
            src="/leg_up_life.png"
            alt="audio console"
            width={500}
            height={400}
            className="w-full"
          />

          <div className="flex justify-between">
            <h1 className="font-bold">AUDIO CONSOLE</h1>

            <p>$499</p>
          </div>

          <p className="text-xs">
            Ideal for music & audio. Adaptable to any workflow.
          </p>
        </div>

        <div>
          <Image
            src="/leg_up_life.png"
            alt="photo console"
            width={500}
            height={400}
            className="w-full"
          />

          <div className="flex justify-between">
            <h1 className="font-bold">PHOTO CONSOLE</h1>

            <p>$599</p>
          </div>

          <p className="text-xs">
            Ideal for photo & video. Adaptable to any workflow.
          </p>
        </div>

        <div>
          <Image
            src="/leg_up_life.png"
            alt="video console"
            width={500}
            height={400}
            className="w-full"
          />

          <div className="flex justify-between">
            <h1 className="font-bold">VIDEO CONSOLE</h1>

            <p>$899</p>
          </div>

          <p className="text-xs">
            Ideal for video & film. Adaptable to any workflow.
          </p>
        </div>
      </div>

      <div className="bg-gray-300 text-center p-10">
        <h1 className="text-3xl font-bold">CREATE YOUR OWN CONSOLE</h1>

        <p className="mt-3">Add-on to make it perfect.</p>

        <Image
          src="/leg_up_life.png"
          alt="create your own console"
          width={1200}
          height={500}
          className="w-full mt-5"
        />
      </div>

      <div className="grid grid-cols-3 gap-5 p-6">
        <div>
          <Image
            src="/leg_up_life.png"
            alt="carrying case"
            width={400}
            height={300}
            className="w-full"
          />

          <div className="flex justify-between">
            <h1 className="font-bold">
              MONOGRAM
              <br />
              CARRYING CASE
            </h1>

            <p>$59</p>
          </div>
        </div>

        <div>
          <Image
            src="/leg_up_life.png"
            alt="monogram core"
            width={400}
            height={300}
            className="w-full"
          />

          <div className="flex justify-between">
            <h1 className="font-bold">
              MONOGRAM
              <br />
              CORE
            </h1>

            <p>$159</p>
          </div>
        </div>

        <div>
          <Image
            src="/leg_up_life.png"
            alt="slider module"
            width={400}
            height={300}
            className="w-full"
          />

          <div className="flex justify-between">
            <h1 className="font-bold">SLIDER MODULE</h1>

            <p>$159</p>
          </div>
        </div>

        <div>
          <Image
            src="/leg_up_life.png"
            alt="essential keys module"
            width={400}
            height={300}
            className="w-full"
          />

          <div className="flex justify-between">
            <h1 className="font-bold">
              ESSENTIAL KEYS
              <br />
              MODULE
            </h1>

            <p>$129</p>
          </div>
        </div>

        <div>
          <Image
            src="/leg_up_life.png"
            alt="orbiter module"
            width={400}
            height={300}
            className="w-full"
          />

          <div className="flex justify-between">
            <h1 className="font-bold">ORBITER MODULE</h1>

            <p>$159</p>
          </div>
        </div>

        <div>
          <Image
            src="/leg_up_life.png"
            alt="dial module"
            width={400}
            height={300}
            className="w-full"
          />

          <div className="flex justify-between">
            <h1 className="font-bold">DIAL MODULE</h1>

            <p>$129</p>
          </div>
        </div>

        <div>
          <Image
            src="/leg_up_life.png"
            alt="audio pack"
            width={400}
            height={300}
            className="w-full"
          />

          <div className="flex justify-between">
            <h1 className="font-bold">
              CONSOLE PACK:
              <br />
              AUDIO
            </h1>

            <p>$29</p>
          </div>
        </div>

        <div>
          <Image
            src="/leg_up_life.png"
            alt="photo pack"
            width={400}
            height={300}
            className="w-full"
          />

          <div className="flex justify-between">
            <h1 className="font-bold">
              CONSOLE PACK:
              <br />
              PHOTO
            </h1>

            <p>$39</p>
          </div>
        </div>

        <div>
          <Image
            src="/leg_up_life.png"
            alt="video pack"
            width={400}
            height={300}
            className="w-full"
          />

          <div className="flex justify-between">
            <h1 className="font-bold">
              CONSOLE PACK:
              <br />
              VIDEO
            </h1>

            <p>$69</p>
          </div>
        </div>

        <div>
          <Image
            src="/leg_up_life.png"
            alt="monogram care"
            width={400}
            height={300}
            className="w-full"
          />

          <div className="flex justify-between">
            <h1 className="font-bold">
              MONOGRAM
              <br />
              CARE
            </h1>

            <p>$19 - $129</p>
          </div>
        </div>
      </div>

      {/* <footer className="bg-violet-950 text-white p-10">
        <div className="grid grid-cols-4 gap-10">
          <div>
            <h1 className="font-bold mb-4">MONOGRAM</h1>

            <p>305 King St. W.</p>
            <p>Suite 502</p>
            <p>Kitchener, ON</p>
            <p>Canada</p>
          </div>

          <div>
            <h1 className="font-bold mb-4">QUICK LINKS</h1>

            <p>Home</p>
            <p>How It Works</p>
            <p>Shop</p>
            <p>Download</p>
          </div>

          <div>
            <h1 className="font-bold mb-4">HELP</h1>

            <p>FAQs</p>
            <p>Support Center</p>
            <p>Shipping and Sales</p>
          </div>

          <div>
            <h1 className="font-bold mb-4">INFORMATION</h1>

            <p>About Us</p>
            <p>Work with us</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Terms of Sale</p>
            <p>Press Kit</p>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="font-bold">SUBSCRIBE TO MONOGRAM</h1>

          <p className="mt-2">
            Master productivity with Creative Console and get
            <br />
            all the latest Monogram news.
          </p>

          <div className="flex mt-4">
            <input
              type="text"
              placeholder="Email Address"
              className="p-2 text-black"
            />

            <button className="bg-gray-400 text-black px-5">SUBMIT</button>
          </div>

          <p className="mt-5">© Monogram 2023</p>
        </div>
      </footer> */}
    </div>
  );
}
