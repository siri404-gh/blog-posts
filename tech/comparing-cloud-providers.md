# My inference after using various cloud providers for deploying my website

#### _11 Jun 2021, Berlin_

&nbsp;

I tried Firebase, GCP, Heroku, Vercel and Digital Ocean for deploying my
website. My website is a simple tech blog. But I put an emphasis on performance.
Here is the inference of it.

I ruled out Firebase because I couldn't deploy a docker image into it. It was
opinionated in the fact that the backend services had to be in the form of
firebase functions. But because I built my website as a microservice, I had to
rule Firebase out. It has some other cool stuff though. If only they gave me the
ability deploy a microservice rather than serverless functions, I will go back
to Firebase without a second thought.

I then tried GCP. I set up Cloud build to have my docker image built and pushed
to the Google Container Registry. I then setup a Compute Engine instance,
Kubernetes cluster, deployed my image there in 3 nodes, created a service and
exposed it using an ingress controller. Created a https load balancer, a http
load balancer for redirecting traffic to the https version, configured an SSL
Certificate for my domain, reserved a static IP address, enabled logging and
monitoring. But this cost my about 200€ a month. Maybe I could have optimised
the consumption, but I wasn't sure where.

I then moved to Vercel. It was also opinionated in how I wrote the code. But it
was easy to deploy, easy to set up a domain, configure integrations etc. But, it
couldn't pull the source code from my Github organisation's repository and also,
the wake up time for the app seemed to be very slow, and it went down at times.
And I didn't find clear information about the pricing for my purposes.

I then tried Heroku. For Heroku, I needed to have a custom docker image and
scripts because it wouldn't run in the port I wanted it to. Heroku ignores the
EXPORT PORT line in the docker file. Also, in the free version, I couldn't
configure an SSL certificate. And their pricing structure for upgrading was not
very clear.

And then, based on a friend's suggestion, I tried Digital Ocean. It had all the
salient features of all the above cloud providers. I was able to setup the app,
deploy as a microservice, configure a domain, configure a database, have logging
and monitoring, configure SSL etc and the performance seems to be on par and it
came at a flat 10$/month. I will keep monitoring for the next few days. I think
this is very similar to how Google App Engine works, but I am not sure if I can
deploy a docker image in it and also how much it might cost me in the long run.

&nbsp;
