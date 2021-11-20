# Tech stack powering my website

#### _07 Jun 2021, Berlin_

&nbsp;

As a web developer, I always resisted the temptation to use the readymade
templates and solutions to build my own website. Afterall, what good is a web
developer who can't build his own website? Hence, every bit of this website was
coded by me in an effort to be the best at what I do. And although this is
simply a blog, I took utmost care in making it sleek, performant and SEO
friendly. You might not notice it. But what if I say that this website is
available as an app in Playstore? And it is.

## Features

I wanted the following features built into it.

**Source Code Management** - I use Github as the source code management tool.
All of the code goes there into a private repository. Github Actions takes it
and runs a bunch of tests.

**Frontend stuff** - I use Next.JS, Typescript, React, Redux Saga and Jest for
writing the frontend.

**Backend stuff** - I use Next.JS APIs (very similar to Express) and
middlewares. This is written in Node.JS.

**Design system** - I created a design system called alpha which is publicly
available in npm as @sreeram.io/alpha. Every time code is pushed into the master
branch, it is tested and then published to npm automatically using Github
actions bot.

**Progressive Web App** - I use a service worker to achieve this and a mixture
of buildtime and runtime caching strategies. I used lighthouse to run the
performance tests. The scores are reasonably good.

**Serverside rendering** - Thanks to Next.JS, the website can be made to be
rendered serverside without having to do all the mad redux stuff in the backend.

**Responsive Design** - Nothing fancy here, just media queries and stuff to make
sure that the website looks good on all form factors.

**SEO Optimization** - I made sure that all pages are serverside rendered and
have the appropriate meta tags. I used Google Search console to have my website
crawled and indexed.

**Microservice** - The application is dockerized into a container. On every push
into the master branch, a set of tests are run. A new docker image is then built
and pushed to Google Container Registry. It is then deployed into a Kubernetes
cluser.

**Google Cloud** - Google Cloud is my favourite cloud provider. I used terraform
for infrastructure as code. In GCP, I used Compute Engine, Kubernetes Cluser
with 3 nodes, exposed a service and created an ingress controller to expose it
to the internet, a HTTP loadbalancer to redirect to HTTPS, a HTTPS loadbalancer
for https access, a Google managed SSL Certificate, static IP address, Container
registry and Cloud build. An "A" record was created in my DNS to point the
domain to this static ip address.

**Heroku** - I then moved away from GCP as the costs were simply huge even for
basic usage. I guess thats what you get for free. Heroku with a paid plan seemed
to have the best of all worlds. But the costs were slightly higher for my
usecase.

**Firebase** - Firebase is simply amazing. But they are opinionated in the way
you deploy. You cant deploy your application as a microservice. This was a
dealbreaker for me.

**Vercel** - I looked at the vercel platform but it was less performant. I ran
some tests and the initial load was super slow which wasn't the case in any of
the other providers.

**Digital Ocean** - I tried digital ocean and the basic plan seemed be
performant, easy and cheap. Although it comes with a fixed cost every month. I
decided to go with it.

**Authentication** - Auth0 is used as the authentication provider. Once the user
successfully logs in using a social service like Google/Facebook, he is sent
back to the website where I authenticate him.

**Database** - Mongo DB is used as the database. Every time the page is
requested, the users details (if he is logged in) are requested from this
database.

**Payment Gateway** - I use Stripe as the payment gateway. A sole proprietary
business was created for this and my Tax details provided.

**Trusted Web Activity** - I use Bubblewrap to convert my PWA into a TWA. It is
available in playstore as
[http://android.sreeram.io](http://android.sreeram.io). If you havent tried TWA,
I suggest you to give it a try. I believe it is the next big step to bridging
the gap between web and native apps.

**Google Tag manager** - I use GTM for tagging.

**Logging** - A Logflare drain was created for this purpose.

&nbsp;
