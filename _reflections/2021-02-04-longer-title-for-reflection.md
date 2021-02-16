---
layout: reflection
title: "Other longer title for a reflection can go here and span two lines"
img: reflection-example-img.jpg
authors: ['Jake Bowers', 'Edward Huh']
date: 2021-02-04
published: false
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
{: .lead}

This post will cover the background of this project and the decisions The Policy Lab team made on the tech stacks used on this project. Please use the following link to jump to the rest of the story.

- [Part 2. Building the Skeleton of the App with Vue.js]({% link _reflections/2021-02-03-optimize-covid-testing.md %})
- [Part 3. Rendering the Visualizations with d3.js]({% link _reflections/2021-02-04-longer-title-for-reflection.md %})
- [Part 4. UI/UX Refinements from Stakeholder Feedback]({% link _reflections/2021-02-06-additional-article.md %})

## Background of the project
{: .lead}

This project is a first step in the collaboration between The Policy Lab and United Way of Rhode Island to build a better data system that supports better collection, analysis, and reporting of 211 call data. Supported by United Way, 211 is a free and confidential service that helps people across North America find the local resources they need 24 hours a day, 7 days a week. Better understanding 211 data can help United Way and government agencies allocate and dispatch limited resources to those who need them the most, especially in the wake of COVID-19. Building an interactive dashboard caters to the most pressing needs in analytics and provides the easiest and quickest way to reveal trends and patterns in the 211 data.

## First draft of the design
{: .lead}

After communicating with the team at United Way of Rhode Island, Ben Guhin Delphine, Head of Design at The Policy Lab, created the first sketch of the design (see below). This first draft includes a stacked area chart, a choropleth map, and a few dropdowns that allow the users to filter the data. The stacked area chart, compared with line charts, helps user to see trends in call volumes not only across categories and areas.

<figure>
  <img class="img--rwd" src="/assets/img/reflections/reflection-example-img.jpg" alt="The first draft of the United Way 211 dashboard">
  <figcaption>An early visual design mockup of what the dashboard might look like</figcaption>
</figure>

## Decisions on tech stack
{: .lead}

For such a project, just-in-time delivery of analytics is key. Therefore, we decided to make this dashboard light-weight and customizable and maximize interactivity. Therefore, we initially decided to forgo a backend and use d3.js only. However, although d3 provides its own way to manipulate the DOM and handing event, it does not provide a good way to manage states given filters that we are applying five filters to the data. That's why we added Vue.js for state management and for reactively updating the visualizations created by d3. In retrospect, Vuex would have been a great addition to provide even better state management, but a simple SPA like this, it's a better idea to focus on the visualizations rather than state management. Below is all of the libraries we used to create this dashboard:
- Vue.js
- d3.js
- Vue-Formulate (light-weight form library to create the filter dropdowns on-the-fly)
- moment.js (to handle datetime operations, which can be a pain in JavaScript)

<div class="float-right">
  <iframe src="" style="width: 100%; height: 600px; border: 0px none;"></iframe>
</div>

## iframe embed example
{: .lead}

For such a project, just-in-time delivery of analytics is key. Therefore, we decided to make this dashboard light-weight and customizable and maximize interactivity. Therefore, we initially decided to forgo a backend and use d3.js only. However, although d3 provides its own way to manipulate the DOM and handing event, it does not provide a good way to manage states given filters that we are applying five filters to the data. That's why we added Vue.js for state management and for reactively updating the visualizations created by d3. In retrospect, Vuex would have been a great addition to provide even better state management, but a simple SPA like this, it's a better idea to focus on the visualizations rather than state management.

For such a project, just-in-time delivery of analytics is key. Therefore, we decided to make this dashboard light-weight and customizable and maximize interactivity. Therefore, we initially decided to forgo a backend and use d3.js only. However, although d3 provides its own way to manipulate the DOM and handing event, it does not provide a good way to manage states given filters that we are applying five filters to the data. That's why we added Vue.js for state management and for reactively updating the visualizations created by d3. In retrospect, Vuex would have been a great addition to provide even better state management, but a simple SPA like this, it's a better idea to focus on the visualizations rather than state management.

For such a project, just-in-time delivery of analytics is key. Therefore, we decided to make this dashboard light-weight and customizable and maximize interactivity. Therefore, we initially decided to forgo a backend and use d3.js only. However, although d3 provides its own way to manipulate the DOM and handing event, it does not provide a good way to manage states given filters that we are applying five filters to the data. That's why we added Vue.js for state management and for reactively updating the visualizations created by d3. In retrospect, Vuex would have been a great addition to provide even better state management, but a simple SPA like this, it's a better idea to focus on the visualizations rather than state management.
