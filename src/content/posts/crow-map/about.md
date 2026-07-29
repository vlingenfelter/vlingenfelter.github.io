---
title: "Mapping Oakland's Crows"
publicationDate: 2023-01-24
author: "Violet Lingenfelter"
tags: ["Python", "geopandas", "eBird", "matplotlib"]
image: "./crow_map.png"
description: "An on-going exploration of eBird observation data in the San Francisco Bay Area"
---

Check out the code for this project [here!](https://github.com/vlingenfelter/mapping_crows)

As I age, I feel myself sliding into becoming a bird-watcher. As any budding birder would, I started looking into the data available through [eBird](https://ebird.org/home). As a first test of what it was like to work with the data (accessed through [gbif.org](https://https://www.gbif.org/)), I decided to map the areas in Oakland where there are relatively high observances of crows (which for this analysis, I defined as members of the genus Corvus).

<div class="polariod-container">
<div class="polaroid">
  <img src="https://64.media.tumblr.com/5b86d2e64ce8898dc3d14e2abb50f990/69c20cfb6e54831c-1c/s540x810/a3a3ca9aae29919407cf5d2a860507a2a246f03a.pnj" alt="Areas where crows are more likely to be reported than other birds. This is visualized with hexagons in varying shades of pinks and purples over a dark colored basemap of Oakland, Alameda, and Berkeley. The areas of highest crow sighting appear to be random." />
  <div class="container">
  <p>A heatmap showing areas where there is the highest ratio of crow sightings to all bird sightings. Lighter colors show a higher ratio. Only the top 34% of hexagons by crow sighting ratio are visible.</p>
  </div>
</div>
</div>

I defined areas with lots of crows as areas where there was a high ratio of Corvus observances relative to the total observances in that area. I bucketed the raw data into hexagonal bins using [Uber's H3 library](https://www.uber.com/blog/h3/), and calculated that ratio for each bucket. I took the top 34% of hexagons, and used those to create my maps.

Something I wanted to try out with this project was making maps with artistic, custom markers in Python. To try this out, I thought I would visualize areas with higher than average crow observations with flocks of crows flying over the areas.

<div class="polariod-container">
<div class="polaroid">
  <img src="https://64.media.tumblr.com/5ac6b3c52538e29c1607e0ddab13f2d2/69c20cfb6e54831c-d1/s540x810/8072ab55fb399c3ebfe9e4e581bc2a749365cb46.pnj" alt="Areas where crows are more likely to be reported than other birds. This is visualized with images of crows flying over a light colored basemap of Oakland, Alameda, and Berkeley. There is a high density of crows in North Oakland and Berkeley" />
  <div class="container">
  <p>The final crow flight map</p>
  </div>
</div>
</div>

Data source: GBIF.org (21 January 2023) GBIF Occurrence Download [https://doi.org/10.15468/dl.u59qez](https://doi.org/10.15468/dl.u59qez)