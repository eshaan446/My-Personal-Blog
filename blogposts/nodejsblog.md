---
title: 'What is Node.JS in JavaScript ?'
date: '2022-03-06'
---

In your web development journey, whenever you work with JavaScript in making websites interactive or deploying your project or simply working on your side-projects, you would have surely came around this term namely Node.JS. But we never put on efforts to actually understand what exactly does it do or why it has become so vital in current scenario of web. Let's take a deep dive in Node.JS and let's understand it's functionality..

Now first, let's take a look at the definition of Node.JS "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine."

So vague definition, right?

Notice the words "runtime" and JavaScript Engine, we will look into the details of these two.

Let's take an example of a simple JavaScript code to assign a value to a variable:-

var num = 10;

What does the above code do?

It stores 10 at a memory location and assigns that a name 'num', right?

But, It's you who know what that code does. Computers don't, cause they don't recognize it. They only know 0's and 1's, the machine code. So, When a language is created, we also need to create a software that can actually understand the syntax, translate it in 0 and 1 and execute it to perform the actual task.

This is exactly what JS Engine does. It takes the JS code & translates it into machine-readable code and executes it.

This is how JavaScript code is executed and the desired task is performed.

Traditionally, we have been executing JS code inside browsers.

Every browser has a dedicated JS engine to execute JavaScript code inside browsers, For eg. _Chrome has V8, Safari has Chakra, FireFox has SpiderMonkey etc_.

Now you understand the job of a JavaScript Engine. Great 🔥

Now, Let's focus on understanding what actually a Runtime is.

JavaScript is great, indeed, but just declaring objects, arrays, doing the addition of variables is not what we want from JS.

Think about why JavaScript was created. It was created to make the web interactive and dynamic.

Therefore running JavaScript in isolation is not that useful. We need to run it in some context.

Now what is context?? When JavaScript runs in a browser, there are many built-in things like Window object, the document(web page), LocalStorage, etc. which are provided by the browser to work with.

We access and manipulate this built-in stuff using JS to make the web better, more interactive, and dynamic.

For e.g-When a user clicks a button on a web page, we can write JavaScript to access the web page and maybe change the color of the page or maybe, pop up a window.

This way we are actually able to do what JavaScript was originally intended to do.

So, JavaScript works great with browser's context. But, When you are running JavaScript in the context of a browser, you can only access things like DOM(Document Object Model), BOM(Browser Object Model), LocalStorage, Timers, and you can not access Operating System and stuff like File System, memory, CPU, etc.

Thus, we can say that the context is kind of limiting the usefulness of JavaScript.

What If we can access OS stuff somehow using JavaScript then we can do a lot more useful tasks like reading/writing files, creating servers, talking to databases, handling HTTP requests.

This is where Node.JS comes into the picture.

The creator of Node.JS, Ryan Dahl, came up with an idea to take a JS Engine (As we know It is required to run JS) and provide a richer context to it.

So he took Chrome's V8 engine and embedded it in a C++ program and named it Node.JS. So what he did differently was that he provided a different context, i.e. a different runtime, a different set of built-in stuff like FS module, HTTP module, OS module, and many more, giving us ability to use JS at it's full potential.

This new runtime called Node.JS is installable on various machines like Windows, Macs, Linux.

So, now You can run JS code on whatever machine Node.JS can be installed because Node has a V8 engine inside it.

We don't need a browser to run our JavaScript code anymore because Node.JS comes with a richer and different context we can use JavaScript to access those built-in modules and create servers, read/write files, and can do all the stuff that can be done using a programming language like Python or Java.

This made JavaScript not limited to browser only but now we can also run JavaScript on a server. This made JavaScript powerful.

Using this one language we can create Full-Stack applications.

Let's revisit the definition of Node.JS.

Node.js® is a JavaScript runtime built on Chrome's V8 JS engine.

Now you should be able to break down this definition. " Node.JS is a JavaScript runtime that let's us execute JavaScript code outside of a browser, that is on a server, on a local machine. It uses Chrome's V8 engine to actually execute JS".

That's all for it today

