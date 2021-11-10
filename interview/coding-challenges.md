# Coding challenges

&nbsp;

## Locus 2019

Implement an Autosuggest component

## Delivery Hero 2019

Implement a weather app.

## Fleetstudio 2019

Create a super simple search and display anime database like
https://myanimelist.net/search/ all or https://anilist.co/search/anime using the
APIs available at https://jikan.docs.apiary.io

## Bookmyshow 2019

Recreate our Video section from the API, mocks, and a video of the interaction
provided. Try to design the page to the best of your ability. We intentionally
don't provide pixel perfect designs to see your aptitude for visual design in
Front-end.

The video player you use needs to have custom controls and also captions should
be added using the mentioned SRT file. Use the same SRT file for all videos.

You will be tested mostly on the UI, functionality, and maintainable code. Make
sure you test all possible cases when building this.

No JS framework is required to do this test, and you're free to use whatever you
want. PS. The trailer video is inserted in the row above the selected movie; not
in a modal or top of the page. So you’ll have to figure out how to insert the
trailer in between two rows in certain scenarios

Here’s the API:
https://in.bookmyshow.com/serv/getData?cmd=GETVIDEOS&category=MYTV (This api is
allowed only over secure connection and accepts pageNumber and pageLimit as
queryParams)

Subtitles file: https://www.dropbox.com/s/kdv258750thu05c/subtitles.srt?dl=1
Mocks & Interaction reference of a similar page
https://www.dropbox.com/s/avqmrx17h27e6h6/Trailers-Assignment.zip?dl=1

## CarDekho 2019

Create a demo app/Web App to draw something on the screen with the help of
touch(finger). Host it on Heroku or any website hosting panel.

Features to added -

- Please add 3 kind of pencil options like - thin, thick & large
- Please add undo feature
- Please add eraser option

## Cubereum 2019

Replicate Google Keep.

## Revolut 2019

Open the current Revolut app, on either iOS or Android, and navigate to the
exchange screen.

- If the app is not available in your country you can observe how application
  works in video ​https://youtu.be/c0zPSiKYipc?t=29s​. (Exchange screen is on
  the 29th second of the video). P.s. It is not required to implement rates
  screen (1-05 from the video)

- Implement ​functionality​ of this screen in your own custom web widget using
  FX rates from either source:

a) http://www.ecb.int/stats/exchange/eurofxref/html/index.en.html#dev

b) https://openexchangerates.org/

c) Your preferred source of FX rates

## Bulb 2021

### Background

Meter readings are a major part of Bulb’s business. We use them to measure how
much energy a member has used, so we can bill them correctly.

The difference between two readings tells us the energy used between those two
periods.

### Inputs

For each function we ask you to write below, you should expect an array of meter
reading objects. A meter reading object contains two keys:

- cumulative - the reading as an integer, and,
- readingDate - an ISO 8601 formatted date string, in UTC.

You can refer to this sample dataset to see what this looks like, and use it as
example data for your unit tests. We’ll also test your functions with other sets
of data (but the data structure will always be the same).

For any inputs, you can assume the following:

- Meter readings (cumulative) never go down or reset
- There is at most one meter reading per month
- The reading date will always have the time set to 00:00:00.000
- Meter readings are only ever whole numbers
- The input array/list will always be sorted from oldest to newest

### Question

We would like you to create two functions for us to process a set of meter
readings. Both functions should expect an array of meter readings as their only
parameter.

We want to be able to identify particularly large increases in our members’
energy usage.To help us do this, write a function that returns the reading that
caused the biggest increase in energy usage from the reading before. The
function should return a single meter reading object - the one that caused the
jump in usage. Or if there’s nothing to choose from, it should return null. If
there are two sets of readings with the same increase, return the reading that
caused the earlier of the two increases. For example, if you’re given three
meter readings in chronological order, 1000, 1500, 1750, then your function will
return the object containing the 1500 meter reading (since it increases the
reading by 500).

[{ cumulative, readingDate }, …] => { cumulative, readingDate }

## Nuri 2021

Create a web-based client for http://blockchain.info that allows users to list
the latest blocks and details of each block. A block is just a data structure
which groups transactions. For example:

## Wundertax 2021

https://github.com/sreeramofficial/javascript-kata

## Bumble 2021

Implement a twitter feed.

&nbsp;
