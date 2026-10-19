# What Drives Airbnb Prices in Asheville, NC?

I run a short term rental myself, so I wanted to know which things a host can actually control that affect the nightly price, 
like how many guests it sleeps, the number of bedrooms, the room type, and the minimum stay.

I looked at 2,865 Airbnb listings in Asheville, North Carolina.

📄 **[View the full report](https://caguilar6.github.io/airbnb-pricing-analysis/asheville_report.html)**

[D3 page](d3_airbnb/)

## The Data

- **Source:** [Inside Airbnb](https://insideairbnb.com/get-the-data/), Asheville listings from June 25, 2026
- **Size:** 2,865 listings and 90 columns (2,202 listings after cleaning)
- **Cleaning:** I removed listings with missing values and prices above $2,000

The main columns I used were nightly price, number of guests, bedrooms, room type, review score, and minimum nights.

## What I Found

- **Guest capacity matters most.** Each extra guest adds about $50 per night.
- **Entire homes cost about twice as much as private rooms.** The median was $248 vs. $124.
- **Review scores barely affect price.** Higher rated listings don't charge much more.
- **A few luxury listings pull the average up.** The median price is $242, but the average is $303.

## Files

| File | What it is |
|---|---|
| `asheville_report.html` | My full report |
| `asheville_report.Rmd` | The R Markdown code behind the report |
| `data/listings.csv` | The original dataset |
| `data/listings.json` | A smaller JSON version of the data |

## Try the Data Yourself

The JSON file is hosted online, so you can query it with `curl` and `jq`:

```bash
curl -s https://caguilar6.github.io/airbnb-pricing-analysis/data/listings.json | jq 'length'
```

---

**Cesar Aguilar** · B.S. Data Science and Analytics, Georgia Gwinnett College
