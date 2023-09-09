---
layout: post
title: "Google Chrome Extension"
description: "A Google Chrome Extension that blocks websites"
categories: envision
thumbnail: "extension.jpg"
year: 2022
---

### Project Guide

- 

### Mentors

- Muthukumar
- Anurag Kumar

### Members

- Gummuluri Venkata Ravi Ram
- Diviz Akkshat
- Harshak Sachdeva
- Jalak Kamdar
- Piyush Kumar Rauniyar
- Shreyas Udaya

## Aim

Create a full fledged Google Chrome Extension, and release it on the chrome extension store.

## Introduction

- A Google chrome extension which helps you stay productive by blocking websites, focus modes and also give you meaningful insights. We will be using HTML, CSS and JavaScript for it. Later we will deploy it in google chrome extension store, will also add payment gateway to it.

- We know that sometimes we get addicted to certain social media websites, like twitter, reddit, and mostly binge-watching
netflix, prime, youtube etc. So, to stop this, one very easy way is to just use a chrome extension that blocks these websites, so
that even if you enter the URL, you won’t be able to access the website. There are a few extensions available on the store, but
the issue is that almost all but one are filled with junk, ads everywhere and are not to the point extensions.

## Methods we employed

- Javascript is the most vital part of any chrome extension. So, we will be using Javascript as well as HTML CSS part for
stylizing the way our extension looks.

- For making the exact extension, we will be referring to the official Google Extension Documentation, which has been
thoroughly maintained by google and has a lot of information on it. Blogs, videos, github repos of google chrome extensions in
general will serve as our resources and materials

- The official documentation of Google helped us in making the extension. No other external documentation was required as it was self sufficient and provided us with enough knowledge to build the extension.

## How did we build up the extension?

- We started with making a very basic version of the extension - that blocks website pre listed in the code. These web pages had to be hard coded, and hence meant that the user couldn't change which websites where to be blocked. But this was a very basic version since it didn't take the user input, meant it was easier to implement as well.

- Once this was implemented, we moved on the tougher part - the user input. We had to take the user input, and also store it somewhere because we can't just unblock a website once the user has gone to another tab/closed the extension. So, memory for the extension was also a requirement. So, we used the Chrome Storage to store which websites were to be blocked by the user. This involved putting good knowledge of javascript into practical use.

### Snippets of code

![image_1](chromeExt1.png)
This is the part where we can see the user input getting stored in chrome's storage.

![image_2](chromeExt2.png)
This is a function from the google chrome extension library that is used for coding the extension.

## Conclusion

- We were able to build a completely working Google Chrome Extension.
- The Extension displays a completely blank page when user is trying to visit a blocked website
- Takes input from the user as to which websites are to be blocked.

## References

1. Google Chrome Extension Docs, [Link](https://developer.chrome.com/docs/extensions/)
