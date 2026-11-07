import React from "react";
import Instrument_button from "../components/instrument_button";
import Image from "next/image";

export default function instrument() {
  return (
    <div className="text-white min-h-screen bg-black p-4">
      <nav className="flex justify-between items-center p-10">
        <div>
          <h1 className="text-xs">INSTRUMENT</h1>
        </div>

        <div>
          <ul className="flex gap-5 text-xs">
            <li>WHAT WE DO</li>
            <li>WHO WE ARE</li>
            <li>BEING HERE</li>
            <li>CAREERS</li>
          </ul>
        </div>
      </nav>

      <br />
      <br />

      <div>
        <h1 className="text-7xl md:text-8xl">Build. Grow. Serve.</h1>

        <br />
        <br />

        <p className="text-sm">
          We are investing $3 million over the next three years in our
          <br />
          Build|Grow|Serve program, created to support and empower Black and
          <br />
          underrepresented communities.
        </p>

        <br />

        <Instrument_button />
      </div>

      <br />
      <br />
      <br />

      <div className="flex items-center justify-center">
        <Image src="/chistmas.png" alt="christmas" width={1000} height={500} />
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="text-3xl flex items-center justify-center text-center">
        <h1>
          We enrich human lives through
          <br />
          the thoughtful application of
          <br />
          design and technology
        </h1>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="flex justify-center gap-40 items-center">
        <Image src="/eye.png" alt="eye" height={400} width={400} />

        <div>
          <p className="text-sm">
            In the summer of 2020, we
            <br />
            reported our representation data
            <br />
            and committed to doing so
            <br />
            annually. One year later, we are
            <br />
            pleased to share an update on our
            <br />
            goals, our progress, and the work that
            <br />
            still needs to be done.
          </p>

          <br />

          <Instrument_button />
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="flex flex-row-reverse justify-center gap-40 items-center">
        <Image src="/black_eye.png" alt="black eye" height={400} width={400} />

        <div>
          <p className="text-sm">
            In our third episode of On Air, we
            <br />
            explore all that's happened within
            <br />
            the last six months, the reality of
            <br />
            showing up every day as a BIPOC
            <br />
            employee in corporate America,
            <br />
            and our future vision for diversity,
            <br />
            equity and inclusion.
          </p>

          <br />

          <Instrument_button />
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="flex justify-center gap-40 items-center">
        <Image
          src="/chistmas_square.png"
          alt="christmas"
          height={400}
          width={400}
        />

        <div>
          <p className="text-sm">
            As a full-service partner to the
            <br />
            world's most ambitious companies,
            <br />
            we create transformational change
            <br />
            through best-in-class digital
            <br />
            products and communications.
          </p>

          <br />

          <Instrument_button />
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="flex justify-center flex-col items-center text-3xl">
        <h1>Explore a few of our most</h1>
        <h1>impactful projects</h1>

        <br />

        <Instrument_button />
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="flex justify-center gap-5">
        <div className="w-1/2">
          <Image
            src="/cloth_brand.png"
            alt="cloth brand"
            height={200}
            width={500}
            className="w-full"
          />

          <br />

          <h1 className="text-sm">Levi's</h1>

          <p className="text-xs">
            We partnered with Levi's, an icon of American industry and
            <br />
            culture, to reimagine levi.com for a new generation of
            <br />
            shoppers and the digital future of retail.
          </p>
        </div>

        <div className="w-1/2">
          <Image
            src="/leg_up_life.png"
            alt="life"
            width={500}
            height={200}
            className="w-full"
          />

          <br />

          <h1 className="text-sm">Dropbox Brand Campaign</h1>

          <p className="text-xs">
            Create a world where the impossible feels possible.
          </p>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="flex justify-center items-center gap-20 text-xl">
        <h1>◀ better</h1>
        <h1>facebook</h1>
        <h1>🌳UMPQUA</h1>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="flex justify-center flex-col items-center">
        <h1 className="text-4xl">We’d love to be your partner</h1>

        <br />

        <Instrument_button />
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      <div>
        <footer className="flex justify-between items-end px-10 pb-5">
          <div className="flex gap-16 text-xs">
            <div>
              <p>[ HOME ]</p>
              <br />
              <p>WHAT WE DO</p>
              <br />
              <p>WORK</p>
              <br />
              <p>WHO WE ARE</p>
            </div>

            <div>
              <p>BEING HERE</p>
              <br />
              <p>CAREERS</p>
              <br />
              <p>CONTACTS</p>
              <br />
              <p>PRIVACY</p>
            </div>
          </div>

          <div className="flex gap-5 text-xs">
            <span>INSTAGRAM</span>
            <span>TWITTER</span>
            <span>LINKEDIN</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
