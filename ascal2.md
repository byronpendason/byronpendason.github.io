---
title: The Reconstructed Anglo-Saxon Calendar
author: Byron Pendason
layout: page
excerpt: "Enter a Common Era year to see the reconstructed calendar dates -OR- enter a specific date, and it will be converted to the Anglo-Saxon date."
permalink: /anglosaxoncalendar_proposed
categories: [anglo-saxon calendar, heathen worship, reconstruction]
---
{% include calendar-display-v2.html %}

<div id="calendar-info" markdown="1">
## Instructions

Enter a Common Era year to see the reconstructed calendar dates -OR- enter a specific date, and it will be converted to the Anglo-Saxon date. 

If you select a date outside the displayed year, the calendar will reload for the appropriate year.

## About the Anglo-Saxon Calendar

<div class="front-image left" style="width: 300px">
    - [ ] <img src="{{ site.baseurl }}/media/170px-Nuremberg_Chronicle_Venerable_Bede.jpg" alt="An illustration of the Venerable Bede." style="width: 100%">
    <p>The Venerable Bede as depecited in the Nuremberg Chronicle.</p>
</div>

Everything we know about the Anglo-Saxon Calendar comes from the Venerable Bede’s On the Reckoning of Time, in which he relates the calendars of many ancient cultures. He gives us quite a bit of information. Unfortunately, as we shall soon see, he doesn’t give us quite enough information to reconstruct the calendar in its entirety. A couple of assumptions have to be made.

So what’s the purpose of learning the Anglo-Saxon Calendar? Heathenry generally recognizes four holy tides- a spring festival (in Anglo-Saxon Heathenry, it’s usually named after the goddess Ēostre), Midsummer (a festival in the middle of summer), a festival for the beginning of winter (which happens in the fall as the ancient Heathens only recognized two seasons, winter and summer), and Yule. Names vary for these holidays, but how they determine the dates generally fall into one of two methods- Solar, and Lunisolar. The solar calendars tend to place them on the appropriate equinox or solstice. The Lunisolar calendars tend to place them on the full moon after the first new moon that follows each solstice and equinox. What I’m offering here is a more authentic way of determining our holy tides, one more in line with how our spiritual predecessors would have done it.

### Days

The Anglo-Saxons began their day with the evening before. This can be surmised from Old English counting by nights (a *fortnight* was 14 *days*, for example, and counting days by nights generally indicates that evening was the beginning of the day). Tacitus also tells us the ancestors of the Anglo-Saxons counted the day as beginning at night (*Germania* 11).

Due to the limitations of JavaScript, this page uses dates that go from midnight to midnight. If it's past sunset where you are, add a day to the day stated on the page.

### Months

In chapter 15 of *The Reckoning of Time* (in which he describes the Anglo-Saxon Calendar), the Venerable Bede tells us that the months were lunar but doesn't explicitly tell us which phase of the moon the Anglo-Saxons began their months on. In chapter 11, though, he says: 

> Note well that those who say that the month ought to be defined, or was defined by the ancients, as the length of time in which the Moon traverses the zodiacal circle, make a serious mistake. As more painstaking inspection of nature has taught, the Moon plainly completes the zodiac in 27 days and 8 hours, but its proper course is 29 days and 12 hours,setting aside the calculation of the ‘‘leap of the Moon’’. Therefore it is more accurate to define a lunar month as the circuit and reintegration of the lunar light from new Moon to new Moon.

Speaking of the lunar light of the new moon would make no sense by our modem definition of new moon. When speaking of lunisolar calendars, though, the new moon refers to what virtually all ancient civilizations referred to as the new moon: the first sliver of the moon visible after the dark moon. The moon is new at this phase because it's the first of the moon that we see. 

This script calculates the beginning of the month as the first day that the moon's illumination is greater than 1% at sunset.

In order to keep the months in line with the seasons, lunisolar calendars add an extra month every 2-3 years. I use the [Metonic Cycle](https://www.minewyrtruman.com/2021/10/21/the-metonic-cycle/) to determine when to add the extra month, except for years prior to the switch to the Gregorian calendar (for some reason, the Metonic Cycle gives incorrect results prior to the switch). In this case, the script falls back to counting lunar months in the year and adds the leap month when necessary to keep Yule in its correct month. Bede tells us that they added this month in between the sixth and seventh month. 

Below are the months of the Anglo-Saxon Calendar. I use the month names given by Bede, though there are alternatives to a couple of the months, such as Hreðmōnaþ.

Month | Equivalent[^equivalent] | Meaning 
-----------|-------------------|-----------------
Æfterra Ġēola | January | After Yule
Solmōnaþ | February | Mud month[^mud]
Hreðmōnaþ | March | Hrethe's month
Ēosturmōnaþ | April | Eostre's month
Þrimilcemōnaþ | May | Three milkings month
Ærra Liða | June | Before Liða
Þriliða | Leap month | Third Liða
Æfterra Liða | July | After Liða
Weodmōnaþ | August | Weeds month
Hāliġmōnaþ | September | Holy month[^holy]
Wintermōnaþ | October | Winter month
Blōtmōnaþ | November | Sacrifice month
Ærra Ġēola | December | Before Yule

### Seasons

Bede tells us that the Anglo-Saxons originally had two seasons in there calendar, summer and winter. He tells us winter began on the full moon of Wintermōnaþ (October) and lasted six months. This places the beginning of summer at the full moon of Ēosturmonaþ (April). He tells us that summer has six months in regular years and seven months in leap years.

### Years

We have absolutely no idea how the Anglo-Saxons would have numbered their years. This calendar numbers years with the Common Era (Gregorian calendar) and the [Human Era](https://www.minewyrtruman.com/2022/08/30/the-human-era/) which adds 10,000 years to the CE year and approximates the beginning of Human Civilization. 

### Methodology for Calculating the Calendar

Using the above info, this calendar takes the first lunar month after the winter solstice as the first month, and assigns the rest of the months as appropriate.

* * *

[^equivalent]: These are rough equivalents, as the lunar months don't generally line up with our modem months exactly.

[^mud]: Bede tells us this was the month of cakes. Many speculate that Bede was referring to a ritual cake that resembled the color and/or texture of mud.

[^holy]: We don't know what made this month holy or what rites they may have engaged in. Given the timing, it was probably related to the harvests.

</div>
