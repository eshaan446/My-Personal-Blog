---
title: 'Why is React a boon for web-developers'
date: '2022-02-21'
---

If you are anywhere involved in developing the web, you would have come across this term React or React.js. According to The Stack Overflow developer survey - React is the most used and popular web framework. It makes building web applications much easier and faster. But first let's learn what it is.

**React** is JavaScript library for building user interfaces. It lets us compose complex UIs from small and isolated pieces of code called “components”. Components are independent blocks of code that is reusable throughout the development of a web or mobile application. React.js can be used to develop single-page and mobile applications. React is maintained by _Meta_ and it’s open-source community.

Let me explain this with a practical example.

Imagine your favourite celebrity posting a photograph on Instagram or Facebook. Now you go and like the image and then you suddenly see that lets check out the comments too. Now while you are browsing over comments you see that likes count increased by count 100 since you liked the picture. Yes and there was no reload of the page, just somehow magically the count changed. This magic my friend is react.js.

So to explain it better, imagine your web page. Again I will take example of Facebook since many use it . So, billions of posts, so much traffic, millions like count. How do they manage all that at a blazing speed. To do that they came up with a library called react.js

Imagine a post on Instagram. Now this post which is a container consists of multiple small parts like likes, comments, share, called components. So yes with react your page can be broken down into components. Now you must be wondering why do we do this, we already have awesome frameworks on front end? Well if you don't you are certainly going to be amused now.

How it works:-
Entire web is based on html. It all started with a simple HTML code. Next came Javascript in 1996 with ways to interact with the HTML DOM(Document Object Model). After that was established came J-query to change the contents of the HTML DOM. Next after that in 2009 came Angular.js as the daddy of front end frameworks which gave a full fledged option to create a strong frontend. Now if you see all these work on HTML code i.e you change HTML on basis of javascript(jquery, angular etc.). Now Javascript is much more powerful than HTML. Facebook (now Meta) considered this fact and decided to create the HTML itself from Javascript for which they created react.js. So to sum it up react.js creates your html from you javascript .

Now you know about components and how they work. You know react.js creates html from Javascript. But, reactjs itself is not written in vanilla javascript. React.js is written in something **JSX**(Java script XML), which is like 70% of plain HTML. But HTML is created from Javascript right? So how do we get that JS from JSX. For this we use a transpiler called **Babel**. Babel converts your written JSX to JS which you can put in your html to create content dynamically.

What makes React so fast ?
React has a concept of **Virtual DOM**. You might have heard the term "DOM", virtual DOM is kind of similar. It uses a strategy that updates the DOM without having to redraw all the webpage elements. Earlier, every time the DOM changes, the browser needs to recalculate the entire layout and then repaint the web page which makes a web app slow.

To overcome this we have virtual DOM Every time the state of our application changes, the virtual DOM gets updated instead of the real DOM. Whenever the new element is added to the UI, a new virtual DOM associated with that element is created. If state of this element changes, a second new virtual DOM is created which will be compared with the previous virtual DOM. It then updates ONLY the object on the real DOM. Let's understand this with an example:-

So let's say your html has this transpiled generated output javascript which creates your html. Now whenever anything is changed in a particular component that component changes. Now these changes are not pushed to the DOM directly, but instead it is pushed to something called VirtualDOM. Now at this point there is a difference which occurs between VirtualDOM and real HTML DOM and. This is what makes it fast. Now trying linking to example I shared at the beginning of the blog. It should be clear now.

## Conclusion
If you are a front-end developer and you’re willing to take your skills to the next level, you should consider learning React.