# CSRF Attacks

#### _11 Sep 2020, Berlin_

## What are they?

Lets say there is a service in this website which is authenticated with only
cookies. Imagine a fictitious logout endpoint which accepts data like:

```
POST /logout HTTP/1.1
host: sreer.am
Content-Type: application/x-www-form-urlencoded
Cookie: Session=qwerghfbfdsdfasgrdthf1234
```

And clicking on the logout button triggers this call which logs you out.

A CSRF or Cross-site request forgery attack is when the above request is made
from a website different from this host, from your browser which holds the
session cookies to this host.

This could be just a form which submits itself programatically when the page
loads. Because the way cookies work, they always get sent as part of the request
irrespective of which host makes the call. The form can be easily hidden from
your view.

For example, assume you are logged into Gmail. A friend of yours shares you a
normal looking link on facebook. Clicking on it takes you to that website which
shows you a picture of a cat. Unsuspecting, you see it, enjoy it and close it.
But what you didnt see is that it contains a form which posts some data to the
/send-mail endpoint of Gmail. And because cookies get automatically sent to the
endpoint, you will have inadvertently sent a mail unknowingly. This is a CSRF
attack.

This is why you must never click on unknown links shared to you. You might end
up in a page which performs this attack on your behalf. It could log you out,
delete your account in Gmail, send mails on your behalf, or even transfer money
on your behalf.

## How to prevent this?

As a webmaster, you need to send an Anti CSRF token with every request and
validate all requests with it.

As a user, make sure to use only well-known, credible websites. Also, logout of
your account regularly. Especially if you are using a public computer.

# XSS Attacks

#### _11 Sep 2020, Berlin_

## What are they?

Lets say there is an input box in my website where you type in something.
Hackers can use this input box to input malicious code into the website. And
when the webpage renders to you and me, it executes this code which, if is
javascript, can do great things. This is called as an XSS attack or cross-site
scripting attack.

## How to prevent this?

As a webmaster, you need to escape tags and strip slashes.

As a user, make sure to use only well-known, credible websites.

# SQL injection

&nbsp;
