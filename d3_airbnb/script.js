
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const svg = d3.select("svg")
  .attr("width", 1300)
  .attr("height", 300);

const x = (d, i) => 60 + i * 80;

d3.json("https://caguilar6.github.io/airbnb-pricing-analysis/data/listings.json")
  .then(data => {

    data = data.filter(d => d.price).slice(0, 15);

    svg.append("text")
      .attr("x", 20)
      .attr("y", 40)
      .attr("font-size", 22)
      .text("Asheville Airbnb Listings: Price and Guests");

    svg.append("text")
      .attr("x", 20)
      .attr("y", 65)
      .text("Bigger circle = higher price. Blue = entire home, orange = private room.");

    svg.selectAll("circle")
      .data(data)
      .join("circle")
      .attr("cx", x)
      .attr("cy", 180)
      .attr("r", d => d.price / 10)
      .attr("fill", d => d.room_type === "Entire home/apt" ? "steelblue" : "orange");

    svg.selectAll(".price")
      .data(data)
      .join("text")
      .attr("class", "price")
      .attr("x", x)
      .attr("y", 125)
      .attr("text-anchor", "middle")
      .text(d => "$" + Math.round(d.price));

    svg.selectAll(".guests")
      .data(data)
      .join("text")
      .attr("class", "guests")
      .attr("x", x)
      .attr("y", 250)
      .attr("text-anchor", "middle")
      .text(d => d.accommodates + " guests");
  });
