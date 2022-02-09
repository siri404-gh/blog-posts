# You've heard of PWAs. What about TWAs?

#### 09 Feb 2022, London

&nbsp;

When PWAs were first launched, I was an instant fan. The idea that you can have an app shell that can be cached on the users device and a dynamic data layer instantly sparked my
imagination. One of the biggest pain points in web development is how tightly the view and the data layers are coupled. Decoupling them is a pain in the rear to an extent sometimes
you have to rewrite the whole application. PWAs encourage this decoupling. By separating the view and the data layer, it opens up your application to the world of offline viewing. 
How cool is that. One more step to briding the gap between native and the web. Its the perfect win for web developers IMO.

But what if you were able to release these web apps as native apps? To me, that is exciting. Having a unified UI accross platforms
is a thing of the future and there is no known solution to this problem. Here is where TWA or Trusted Web Activity comes to the picture. 

```
Trusted Web Activity is a new way to open your web-app content such as your Progressive Web App (PWA) 
from your Android app using a protocol based on Custom Tabs.

```

TWAs essentially are Custom Chrome tabs that run a trusted web page fullscreen in the form of a standalone app. I recently deployed my web app as an andoid app 
in the Google Playstore and the results are astonishing. How good the app is depends on how good the web app is. I tried to make my web app super smooth, made it load
fast, behave like an app and it is working wonders.

The other cool thing is over-the-air updates. Instead of relasing a new version of the app, all I need do is release a new version of the web app and the user gets
instant updates (or on the next load depending on how I set the service worker caching).

The drawback is not being able to release in the Apple store. That sucks.

If you want to try it, search for my name in the Google playstore, try the app and let me know your thoughts.

&nbsp;
