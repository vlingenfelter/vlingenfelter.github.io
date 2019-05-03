---
title: "S. L. I. D. E."
date: "2019-01-21"
author: "Violet Lingenfelter"
tags: ["transit", "leaflet.js", "turf.js", "ArcGIS", "jQuery"]
cover: "./slide.png"
blurb: "S.L.I.D.E., or the Street Level Infrastructure Distribution Engine, is a
project I completed while on my first co-op at the MBTA with the Office
of Performance Management and Innovation. Slide is an equity analysis
tool designed to help policy makers decide which bus stops to prioritize for
infrastructure upgrades."
---


<div class="polariod-container">
<div class="polaroid">
  <img src="https://66.media.tumblr.com/54e109946c13354401b6b69e601591e5/tumblr_plo1ucJxST1scy1sco1_1280.png" alt="Image of SLIDE" />
  <div class="container">
  <p>Screenshot of SLIDE's start screen
  </p>
  </div>
</div>
</div>

## What is it?

SLIDE stands for Street Level Infrastructure Distribution Engine. SLIDE is a prioritization tool designed to rank bus stops in the MBTA’s network in order of how "deserving" they are of new stop amenities. Stop amenities are things that generally improve a riders experience, like a shelter or a bench. SLIDE allows policymakers to systematically compare all bus stops in the network when emphasis is given to different criteria.

SLIDE is a tool that quickly visualizes where to invest in new bus stop infrastructure based on what the user decides is important. SLIDE allows the user to emphasize the weight of the vulnerability of riders, the amount of people who begin their journeys at a stop, and the amount of people who transfer at a stop.

## How does it work?

SLIDE takes whatever subset of stops the user chooses, and how the user weighted vulnerable populations, origin ridership, and transfer ridership, and generates a ranked list using these criteria. SLIDE then displays this on a web map and stores this ranked list in a csv for download.

### Why would someone choose a subset of stops?

<div class="polariod-container">
<div class="polaroid">
  <img src="https://66.media.tumblr.com/9a6e56d6ea4181eda803cb8c285048f0/tumblr_plo3ciZJ8a1scy1sco1_640.png" alt="Anatomy of a trip: Origin, Transfer, Destination" />
  <div class="container">
  <p> Step 1 allows for general categories to be turned on and off or filtered
  </p>
  </div>
</div>
</div>

Street level infrastructure is typically associated with buses, but buses are not the only mode that can benefit from street level infrastructure. The MBTA has surface level light rail (the Green Line and the Mattapan Trolley) that require riders to wait outdoors. These surface level light rail stops might be considered for new infrastructure due to their high ridership.

The MBTA also has different classes of buses. The MBTA has a Bus Rapid Transit (BRT) line called the Silver Line. Because the Silver Line is considered rapid transit, it already has different stop amenities than typical bus stops. Silver Line riders also expect a shorter wait time, given that the line is BRT. The Silver Line stops might be considered for new infrastructure given their high ridership, as well.

Even within normal bus routes, there are different classifications. Bus routes can either be considered "Key" or "Non-Key". Key bus routes are more popular routes. Because the ridership on these routes is high and consistent, the MBTA will schedule buses frequently along these routes. Non-key bus routes, or infrequent bus routes, are less traveled. Non-key buses are scheduled less often, and the MBTA expects fewer riders along these routes. Because riders interact differently with the different types of bus routes, users might want to consider them separately for analysis.

### What are the weights?

The different qualities that the user can weight are origin ridership, transfer ridership, and vulnerable populations. Origin ridership indicates how many people start their journeys at a particular stop. Transfer ridership indicates how many people transfer at a given stop, which is a proxy for estimating how long people are waiting at a given stop.

<div class="polariod-container">
<div class="polaroid">
  <img src="https://66.media.tumblr.com/01800ffe9e2feac116427d36ce3cf2a9/tumblr_plo1ucJxST1scy1sco2_1280.png" alt="Anatomy of a trip: Origin, Transfer, Destination" />
  <div class="container">
  <p> An infographic I designed for SLIDE's info section
  </p>
  </div>
</div>
</div>

Vulnerable populations serviced by a stop is a more complicated metric. To get estimates on this, we looked at where people with senior discounts and TAP discounts are frequently getting on the bus. Because individuals in these groups tend to have mobility impairments that would prevent them from walking to another bus stop nearby with better amenities, these individuals are prioritized.

We also used census data to look at neighborhood demographics around each stop, including the amount of income households earn, the racial demographics, and the amount of households without vehicles in surrounding census tracts. Bus stops with amenities are a neighborhood asset, and when investing in new infrastructure the MBTA has the opportunity to invest in historically underserved communities, like those that are majority of people of color. The MBTA also has an obligation to serve those who are typically transit dependent, low income households and households without vehicles.

### Then what?

<div class="polariod-container">
<div class="polaroid">
  <img src="https://66.media.tumblr.com/0414a52859eb8e1317298e6197862319/tumblr_plo3x8H8501scy1sco1_1280.png" alt="A screenshot of one possible SLIDE output" />
  <div class="container">
  <p> A simple graduated symbol and graduated color map show where the high priority bus stops are located. More data, like the adjusted score for each of the weights, is available in the csv.
  </p>
  </div>
</div>
</div>

The tool is remarkably fast. This allows for stakeholders to play with the data and see how their small decisions dramatically impact where infrastructure gets placed. This tool makes data driven decisions easier, and lets non-technical audiences interact with complex data in a way that is fun and intuitive.


##### Special thanks to:
- **Brittany Meece**, project management
- **Anna Sangree**, data preparation (which is no small feat)
- **Anna Gartsman**, statistical support, project management
