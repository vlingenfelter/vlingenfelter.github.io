---
title: "Bus Crowding: Ridgeline Plot"
publicationDate: 2019-04-30
author: "Violet Lingenfelter"
tags: ["D3.js", "Joy Division", "Textures.js", "data visualization"]
image: "./bus-joy.png"
description: "As a fun extension of the work I did for my capstone, I developed this visualization method inspired by Joy Division's iconic Unknown Pleasures album cover"
---

[Play with the modified visual here](https://www.violetlingenfelter.com/bus-division/)

As a fun extension of the work I did for my capstone at the MBTA, I developed this visualization method inspired by Joy Division's iconic Unknown Pleasures album cover.

## History of the Design

<div class="polariod-container">
<div class="polaroid">
  <img src="https://i.pinimg.com/originals/46/10/fd/4610fd540db675dd83688bf9d1f5a0fa.png" alt="Page from the Cambridge Encyclopedia of Astronomy" />
  <div class="container">
  <p>The inspiration for the Joy Division album cover actually came from a data visualization from the Cambridge Encyclopedia of Astronomy</p>
  </div>
</div>
</div>

The iconic album cover was desinged by Peter Saville in 1978 for Joy Divison's ablum "Unknown Pleasures", but the design was originally a data visualization. The band found the image in a page from the Cambridge Encyclopaedia of Astronomy (1977 edition, Scientific American notes) depicting a series of radio frequency periods from the first pulsar discovered. The diagram they say was created by Harold D. Craft, Jr. for his PhD "Radio Observations of the Pulse Profiles and Dispersion Measures of Twelve Pulsars" (September, 1970).

<div class="polariod-container">
<div class="polaroid">
  <img src="https://upload.wikimedia.org/wikipedia/en/5/5a/UnknownPleasuresVinyl.jpg" alt="Joy Division's Unknown Pleasures album cover" />
  <div class="container">
  <p>The image from Joy Division's Unknown Sources album cover. Source: Wikimedia</p>
  </div>
</div>
</div>

The album cover desing is immensely popular. It has been parodied many times, from artists drawing upon the style of the ridgeline plot to create new designs, to word play on either the band's name or the album's title. 


## Bus Crowding

<div class="polariod-container">
<div class="polaroid">
  <img src="https://66.media.tumblr.com/c0e9ab9e1d920d77f7231dcd62c361ef/tumblr_pr3jsnVUCT1scy1sco1_1280.png" alt="full image of the chart" />
  <div class="container">
  <p>Poster version of the chart</p>
  </div>
</div>
</div>

This chart was designed to give a quick method of overview and comparison for crowding along each route at any given time of day. I chose to use a ridgeline plot because a user can quickly assess how the routes compare to each other by looking at their crowding peaks -- which look sort of like peaks on the ridge of a mountain. This style of chart allows for weird routes to stand out, like routes that have peaks at unusual times or peaks that are dispersed over long periods of time. 


<div class="polariod-container">
<div class="polaroid">
  <img src="https://66.media.tumblr.com/b42b358e9aff98ebc51db493fb7b1c64/tumblr_pr3jtdcNUn1scy1sco1_1280.png" alt="Drilldown showing route 7 and the sources of crowding associated with it" />
  <div class="container">
  <p>When the user hovers over a specific route, the chart drills down to show a pie chart of the sources of crowding for this route</p>
  </div>
</div>
</div>

When the user hovers over a route, the other routes fade to black, and a pie chart showing the sources of crowding for that route appears. This allows the user to take a closer look at a given route without the distraction of the other routes near it. 