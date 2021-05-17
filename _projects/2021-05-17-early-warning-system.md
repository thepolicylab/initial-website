---
layout: project
title: "How can we leverage machine learning to reduce the high school dropout rate?"
date: 2021-05-17
aside:
  partners:
    - name: Rhode Island Department of Education
      link: https://www.ride.ri.gov/
    - name: DataSpark
      link: https://datasparkri.org/
  timeline: "September 2019 - November 2019"
  status: Re-evaluation and re-implementation due to COVID-19
  method: Predictive Modeling based on Machine Learning, simulation, imputation
  links:
    - name: RIDE information on EWS
      link: https://www.ride.ri.gov/StudentsFamilies/EducationPrograms/EarlyWarningSystem.aspx
    - name: Press Release about EWS
      link: https://www.ride.ri.gov/InsideRIDE/AdditionalInformation/News/ViewArticle/tabid/408/ArticleId/662/RIDE-Develops-Early-Warning-System-That-Allows-for-Early-Intervention.aspx
    - name: Press Release about EWS
      link: https://www.ride.ri.gov/InsideRIDE/AdditionalInformation/News/ViewArticle/tabid/408/ArticleId/662/RIDE-Develops-Early-Warning-System-That-Allows-for-Early-Intervention.aspx    
    - name: Early Alert Systems During a Pandemic: A Simulation Study on the Impact of Concept Drift
      link: https://thepolicylab.brown.edu/assets/lak21-51.pdf
---

 The Policy Lab partnered with the RI Department of Education (RIDE) and DataSpark on developing an early warning system (EWS) that can predict which students are most prone to dropping out, allowing educators the time to act upon this information. Using six indicators, the dashboard generates color-coded risk bands to inform a multi-tiered system of support and keep students in school and on track to graduate. We are currently exploring how the changes and challenges of the COVID-19 pandemic is impacting the underlying data and how they might impact model performance.

{: .summary}

## Why is this issue important?
{: .lead}

One of the main goals of a K-12 education is simple: completion. We want students to pass their classes and cross the stage at their high school graduation. Unfortunately, completion of a K-12 education is not a given: 15% of public school students nationwide do not graduate high school within four years[^1]. Early intervention and adequate support are essential for students who are at risk of dropping out.

To address this problem, the Rhode Island Department of Education (RIDE) partnered with The Policy Lab and [DataSpark](https://datasparkri.org/) to develop an Early Warning System (EWS) to help school administrators and teachers connect 9th through 12th grade students who are at risk of dropping out with resources they need to be successful. The system features an educator information portal, which displays the latest available data on six student performance indicators updated monthly:
* Attendance percentages
* Grade retention
* Suspensions
* Math proficiency
* English Language Arts (ELA) proficiency
* A risk indicator of dropping out. The risk indicator is color-coded with red, yellow, or green to indicate high, moderate, and low risk of dropping out at the beginning of each school year.

<figure class="float-right">
  <img class="img--rwd" src="/assets/img/projects/2021-05-17-risk-indicators-ews.JPG" alt="The Early Warning System Risk Indicators">
  <figcaption><b>Figure 1.</b> The Early Warning System Risk Indicators
.</figcaption>
</figure>

## What did we do?
{: .lead}

In order to build a tool that Rhode Island educators would find useful, The Policy Lab and DataSpark conducted interviews and brainstorming sessions with many educators at RIDE and in schools across Rhode Island. After a design was finalized and a prototype built by RIDE’s Office of Data and Technology Services, we conducted a round of user testing and a small-scale pilot.

Additionally, The Policy Lab led the development of the risk prediction model that powers the risk indicators. This machine learning model was trained on historical student outcome data on all public high school students in Rhode Island from between School Years 2007-08 and 2015-16. In building this model, The Policy Lab held several sessions with educators to explain various aspects of the model and incorporate their subject matter expertise into various modeling decisions such as what data to include and how to weight data from different eras of RIDE policy regimes.


## What have we learned (so far)?
{: .lead}

After one month of user testing and small-scale pilot tests, the EWS was successfully released to all teachers and administrators in February 2020, one month before the COVID-19 pandemic closed down schools and instruction started moving online. Due to uncertainty in model performance under changed circumstances, RIDE decided to temporarily disable the predictive model but retain the other performance indicators on their information portal. To relaunch the model, RIDE is working with The Policy Lab and DataSpark to explore how several potential challenges of the pandemic to the EWS's underlying data might impact model performance.


## What happens next?
{: .lead}

Among the issues resulting from the pandemic are increases in unemployment, rises in evictions and food insecurity, and changes to policies around in-person schooling. As a result, many students are being educated within a very different context than they were prior to the pandemic. These contextual differences impact what we can reliably say about which students may be at risk for dropping out, in a phenomenon known as concept drift. Concept drift, in this context, means the massive disruptions to everyday instruction caused by the pandemic have changed the data used for dropout prediction and affected the performance of the predictive model. The Policy Lab will work with RIDE to make a decision on whether and how to relaunch the dropout prediction models for School Year 2020-21 and beyond.



[^1]:  National Center for Education Statistics. (n.d.). NCES Fast Facts: High School Graduate Rates. Retrieved March 10, 2021, from https://nces.ed.gov/fastfacts/display.asp?id=805
