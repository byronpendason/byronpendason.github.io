---
title: 'Reconstructing the Anglo-Saxon Calendar: A Tutorial'
author: Byron Pendason
date: 2026-08-19
layout: post
published: false
categories: [Heathenry, anglo-saxon calendar, reconstruction]
---

*Wes Hal!*[^1]

Today's blog post is one that I have been wanting to write for a while. In fact, it's one that was almost finished a while back when an OS update messed my system up so badly that I needed to do a complete reinstall. Using a rolling release of Linux that tries to be bleeding edge ain't always all sunshine and roses, you know. (Still worth it though!)

Anyways, today I want to take you step by step through the process of manually reconstructing a year on the [Anglo-Saxon calendar](https://www.minewyrtruman.com/anglosaxoncalendar). For this process, let's do next year, 2027.

I will not be going through the theory behind the calendar much, because I've discussed it much more in depth in other places on this website.

## The Basics of the Anglo-Saxon Calendar

The Anglo-Saxon Calendar was a lunisolar calendar. This means that it's months followed the lunar calendar, but had a mechanism for keeping the months in their proper place in the solar year. Like most of the ancient lunisolar calendars, it added an extra month every two or three years. For my reconstruction of the calendar, I start the year with the first lunar month after the winter solstice, and I begin the month with the [first visible sliver of the moon](https://www.minewyrtruman.com/2025/08/22/updated-my-new-moon-calculations/) after conjunction. We call the conjunction the new moon today, but to most ancient cultures, the ***new moon*** was the first visible sliver of the new moon.

For days, the Anglo-Saxons used what we call [Florentine reckoning](https://www.minewyrtruman.com/2025/11/25/when-does-the-day-begin/). This means that the day starts the evening before. What we call Wednesday evening would have been called Thursday evening, because it;s the evening of Thursday. This is the origin of the day before Christmas being called Christmas Eve, that is the evening of Christmas.

## Gathering the Astronomical Data

For reconstructing the Anglo-Saxon calendar, all you need is the winter solstices of the previous and current years, the summer solstice of the current year, and the new and full moons between the two winter solstices.

I generally use [AstroPixels](https://astropixels.com/index.html) when I need to get astronomical data. For your convenience:

- [Solstices and Equinoxes: 2001 to 2100](https://www.astropixels.com/ephemeris/soleq2001.html)
- [Phases of the Moon: 2001 to 2100](https://www.astropixels.com/ephemeris/phasescat/phases2001.html)

Note, I use UTC times for all calculations. You need a constant frame of reference for your calculations, and it feels fitting to use the time zone that contains the homeland of our spiritual forebears.

- Winter Solstice 2026: Dec 21  20:50
- Summer Solstice 2027: Jun 21  14:11
- Winter Solstice 2027: Dec 22  02:43
- Lunar Phases:    
    ```
    Year      New Moon       First Quarter       Full Moon       Last Quarter    
    2026    Dec  9  00:52     Dec 17  05:43     Dec 24  01:28     Dec 30  19:00    
    2027    Jan  7  20:24     Jan 15  20:34     Jan 22  12:17     Jan 29  10:56    
            Feb  6  15:56 A   Feb 14  07:58     Feb 20  23:24 n   Feb 28  05:16    
            Mar  8  09:29     Mar 15  16:25     Mar 22  10:44     Mar 30  00:54    
            Apr  6  23:51     Apr 13  22:57     Apr 20  22:27     Apr 28  20:18    
            May  6  10:59     May 13  04:44     May 20  10:59     May 28  13:58    
            Jun  4  19:40     Jun 11  10:56     Jun 19  00:44     Jun 27  04:54    
            Jul  4  03:02     Jul 10  18:39     Jul 18  15:45     Jul 26  16:55    
            Aug  2  10:05 T   Aug  9  04:54     Aug 17  07:29 n   Aug 25  02:27    
            Aug 31  17:41     Sep  7  18:31     Sep 15  23:04     Sep 23  10:20    
            Sep 30  02:36     Oct  7  11:47     Oct 15  13:47     Oct 22  17:29    
            Oct 29  13:36     Nov  6  08:00     Nov 14  03:26     Nov 21  00:48    
            Nov 28  03:24     Dec  6  05:22     Dec 13  16:09     Dec 20  09:11    
        	    Dec 27  20:12
    ```

I included the last lunar cycle of this year so that you can see that it is before the winter solstice of that year, and so not the first month of 2027's calendar. Sometimes, the last new moon of the year is after the winter solstice, and when that's the case, the Anglo-Saxon year actually begins before our common calendar year (the Gregorian calendar begins on January 1 of every year).

## Calculating the Months

The first sliver of the new moon is notoriously difficult to calulate, which means calculating the begining of the months with 100% accuracy is almost impossible. So you have two options. You can either go with a best guess estimate that is accurate enough, or you can go with the visible sightings and not be able to have a calendar before hand for a reference. I go with the first option, and my [current method](https://www.minewyrtruman.com/2025/08/22/updated-my-new-moon-calculations/) of calculating the begining of the months seems to be accurate the vast majority of the time. (If you have another method that you prefer for estimating the begining of the month, feel free to use that instead.)

It's a deceptively simple method. Just look at the time of the new moon (conjunction) in UTC. If it's before noon (12:00 pm), the month begins the following day. Otherwise, it's two days after the new moon. After you calculate each, make sure to eliminate each one that is either before the previous year's winter solstice or after the current year's winter solstice. then count how many months you have. Twelve means it is a common year, whereas thirteen means it's an intercalary (leap) year and you need to add the intercalary month[^2].

So, after doing that, 2027 should have the following months, beginning on the day listed:

- Æfterra Ġēola: Jan 9
- Solmōnaþ: Feb 8
- Hreðmōnaþ: March 9
- Ēosturmōnaþ: April 8
- Þrimilcemōnaþ: May 7
- Ærra Liða: June 6
- Æfterra Liða: July 5
- Weodmōnaþ: Aug 3
- Hāliġmōnaþ: Sept 2
- Wintermōnaþ: Oct 1
- Blōtmōnaþ: Oct 31
- Ærra Ġēola: Nov 29

The final new moon of the year 2027 is after the solstice, so the Anglo-Saxon year for the year 2028 actually begins December 29, 2027.

## Calculating Holidays

Now is the fun part, holidays! What holidays one celebrates is largely personal, but there are four that almost every Fyrnsidere (Anglo-Saxon Heathen) celebrates. Eostre's Feast is generally celebrated on the full moon of the fourth month, Midsummer is on the summer solstice, Winter's Night is the full moon of the third to last month (the tenth month in common years, and the eleventh month in intercalary years), and [Yule is celebrated on the winter solstice](https://www.minewyrtruman.com/2021/12/07/in-defense-of-a-december-yule/) by Anglo-Saxon reckoning[^3]. For our reconstructed year, the holidays would be on:

- Eostre's Feast: April 20
- MidSummer: June 21
- Winter's Night: October 15
- Yule: December 22

Remember that all dates begin the evening before at sunset.

Beyond these four days, the days that one celebrates is up to you. There is a tradition in Heathen circles to celebrate holidays on the full moon, or an equinox or solstice. The reason is mostly practical: these days can be calculated with 100% accuracy, whereas any other date must be either tied to another calendar or be dependant on having the beginning and end of lumar months calculated. If you calculate the months though, this is easy to do. For example, I celebrate the new year on the first day of the first month (January 9th in 2027), and Blostmfreols on the last day of Eosturmonath (May 6th in 2027).

Well, that concludes today's tutorial. If you have any questions, feel free to reach out to me. I always enjoy a good calendar discussion!

*Beo gesund!*[^1]

[^1]: *Wes hāl* and *Beo gesund* are Old English greetings and farewells that literally mean *Be well/whole/healthy*. The first seemed to be more common among the Anglian dialects and the second more common among the Saxon dialects. I prefer to use both though, the first as a greeting and the second as a farewell.

[^2]: An Anglo-Saxon year that begins before the Gregorian year is almost always an intercalary year.

[^3]: Almost all Fyrnsideras also celebrate Modraniht (Mother's Night), but most of us tie it in some way to the solstice. The traditional date is the evening of the solstice (Yule's eve), though I celebrate it on the eve of the third day of Yule. There are some, however, that just celebrate it on Christmas Eve.
