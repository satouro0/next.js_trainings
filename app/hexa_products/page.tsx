import React from "react";
import Hexa_nav from "../components/hexa_nav";
import Hexa_product_banner from "../components/products_banner";
import Hexa_men_latest from "../components/hexa_mens_latest";
import Hexa_women_latest from "../components/hexa_women_latest";
import Hexa_kids_latest from "../components/hexa_kids_latest";
import Hexa_footer from "../components/hexa_footer";

export default function page() {
  return (
    <div>
      <Hexa_nav />
      <br />
      <br />
      <Hexa_product_banner />
      <div className="text-center pt-10">
        <p className="text-3xl font-bold">our latest products</p>
        <p>check out all our products</p>
      </div>
      <Hexa_men_latest />
      <Hexa_women_latest />
      <Hexa_kids_latest />
      <Hexa_footer />
    </div>
  );
}
