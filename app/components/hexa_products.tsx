import Image from "next/image";
import React from "react";

export default function Hexa_products() {
  return (
    <div className="px-30 py-15 flex space-x-20">
      <div>
        <h1>Explore our products</h1>
        <br />
        <p>
          You are allowed to use this HexaShop HTML CSS template. You can feel{" "}
          <br />
          free to modify or edit this layout. You can convert this template as
          any <br /> kind of ecommerce CMS theme as you wish.
        </p>
        <br />
        <div className="flex flex-row gap-x-1 items-center">
          <p className="font-extrabold text-6xl mb-pb-2">،،</p>
          <h1>
            You are not allowed to redistribute this template ZIP file on any
            <br /> other website.
          </h1>
        </div>
        <br />
        <p>
          There are 5 pages included in this HexaShop Template and we are <br />
          providing it to you for absolutely free of charge at our TemplateMo{" "}
          <br />
          website. There are web development costs for us.
        </p>
        <br />
        <p>
          If this template is beneficial for your website or business, please
          kindly <br /> <span className="text-blue-500">support us</span> a little via PayPal. Please also tell your friends
          about our <br /> great website. Thank you.
        </p>
        <br />
        <button className="px-5 py-3 border">
            Discover more
        </button>
      </div>
      <div className="grid grid-cols-2 space-x-5 ">
        <div>
            <div className="px-10 py-20 bg-gray-200">
                <p>Leather Bags</p>
                <p> Latest collection</p>
            </div>
        </div>
        <div>
            <div>
                <Image
                src={"/explore-image-01.jpg"}
                width={200}
                height={20}
                alt="niga"
                />
            </div>
        </div>
            <div>
                <Image
                    src={"/explore-image-02.jpg"}
                    width={200}
                    height={20}
                    alt="niga"
                    />
            </div>
            <div>
                <div>
                    <div className="px-10 py-20 bg-gray-200">
                <p>Different types</p>
                <p> over 304 products</p>
            </div>
                </div>
            </div>
      </div>
    </div>
  );
}
