# Quick Guide to Web Server and HTML Elements

![Cover_Image_HTML_Article](./Assets/Cover%20Image%20(HTML).png)

In this article, we are going to learn about the **Web Servers** and we will be discussing about the famous web server named as **Apache2**. After that we will understand how **Live Server** (from VS Code) works in background Then we will see of what is **Emmet** and how they works and in the last we will see some **tags of the HTML**

<br/>

## Table of Contents
1. What is Web Server?
2. BTS of Live Server
3. Emmet in VS Code
4. Basic HTML Tags

****
<br/>

## **What is Web Server?**
To understand the the web server you need to know why web server is required? When user request any web page/site in browser, that web page/site need to stored somewhere and Web Server is the place where it is stored, so the browser request go to the server and take all the required data from it. So for sending request and accepting data both devices need to be connected through the Internet.

<br/>

![Web_Server_Working](./Assets/Web%20Server%20Working.jpg)

<br/>

> Basically the Web Server is the Computer that hosts a website on an internet.

<br/>

**Hardware** — Here a web server is a computer that stores web server software and websites' component files. It supports physical data transfer with other devices connected through internet.

**Software** — Here a web server include several parts that control how web users access hosted file.

<br/>

> Web Server can be refer to Hardware or Software, or both of them working together.

<br/>

**_Apache Web Server_** - Apache is the well-known and widely used web server software. It is open-source software available for free and continuously updating. Apache is versatile enough to run on Windows, Linux and macOS.
Web Server application accept the browser request and do what’s necessary to send the web page data to the browser. Apache also works the same but it does provide some more security and fast accessibility. Apache mainly uses the HTTPS protocol, which is a secure version of standard HTTP.

****
<br/>

## **BTS of Live Server**
If you are a web developer and you are using VS code then you might be familiar with the Live Server extension. Most of the people use it very frequently but I promise many of them not even know how it works and what exactly happens in background when we say “Browser reloaded automatically”. So let’s dive deep and explore about Live Server.

<br/>

![BTS_Live_Server](./Assets/Live%20Server.gif)

When you write a file like HTML, CSS and JavaScript, these are static files which are located in your computer. These file don’t need a server to be opened by your browser. What your extension does is just reloading your browser when it detect changes in these files. Live server is continuously checking the state of these files, if any file is get updated it will refresh the browser and updated change will reflect on web page.

****
<br/>

## **What is Emmet?**
Emmet is a plugin in text editors which helps in writing HTML code. Now a days it is an essential toolkit for web developers. Emmet helps in fast coding. In VS code when you start typing an Emmet abbreviation, you will see the abbreviation displayed in the suggestion list. If you are in a stylesheet file, the expanded abbreviation shows up in the suggestion list sorted among the other CSS suggestions. You can easily and quickly write a bunch of code, wrap a code with new tags, quickly traverse and select important code part.

****
<br/>

## **HTML**
HTML is the language that is used to design a web page and its content. While developing any web site or a web page, its first file should be index.html, because the several servers are design in such a way that they can read this file by default and render it easily.

**Tags** — HTML tags are like keywords which defines that how web browser will format and display the content. All HTML tags must enclosed within < > these brackets.

**Attributes** — All HTML tags can have attributes, it provides additional information about elements. Attributes are always specified in the start tag.

<br/>


```
HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rohan's Document</title>
</head>
<body>
    <h1>Heading of a web page</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa harum fugiat officia eveniet similique magnam eius dolor rem quod maiores, reiciendis iure laboriosam vero nulla. Culpa aliquam incidunt expedita deleniti.</p>
</body>
</html>
```

1. ```<!DOCTYPE html>``` — This line specifies that current file is HTML type
2. ```<html lang="en">``` — This line specifies language in which code is been written
3. ```<head>…</head>``` — It contents the meta information of HTML file. This information is not visible on web page, but it is very useful in SEO of website. In head tag you can add title of your web page.
4. ```<body>…</body>``` — It represent the content of an HTML document. The <body>..</body> tag contains all the contents of an HTML documents, such as headings, paragraphs, images, tables, etc.

<br/>

> There can only be one <body> element in an HTML document.

<br/>

****
<br/>

**Heading Tags** — The ```<h1>..</h1>``` to ```<h6>..</h6>``` are used to define HTML headings. Here ```<h1>..</h1>``` defines the most important heading and ```<h6>..</h6>``` defines the least important headings.

<br/>

```
HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Heading level 1</h1>
    <h2>Heading level 2</h2>
    <h3>Heading level 3</h3>
    <h4>heading level 4</h4>
    <h5>Heading level 5</h5>
    <h6>Heading level 6</h6>
</body>
</html>
```
![Heading_Tag_Result](./Assets/Heading%20Tag%20Result.png)

<br/>

**Paragraph Tag** - The ```<p>..</p>``` tag defines a paragraph. Browser automatically add a single blank line before and after each ```<p>``` element.

```
HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rohan's Document</title>
</head>
<body>
    <h1>Paragraph</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate illo repellendus quod dicta, ex perspiciatis ut! Magnam ut aspernatur reiciendis? Dignissimos nihil consequatur dolorum eaque. Deserunt voluptates dolorum dignissimos distinctio blanditiis quia minima consequatur vero, esse cupiditate amet officiis modi? Eum commodi nihil earum veniam voluptas sit dignissimos quam debitis porro, eveniet, quo laboriosam eligendi nemo sint ad obcaecati, odit nisi eaque! In quasi quam officia est eius repudiandae accusamus illo inventore voluptatibus, ipsam enim animi sapiente magni. Excepturi assumenda consequuntur laboriosam consequatur aperiam cumque in labore. Eius, doloremque deleniti laboriosam, cumque vel repudiandae, quos quod aut nam voluptatum doloribus qui dicta sunt consequatur ad fuga illum tempore! Ex sit debitis consectetur, cumque quod accusantium provident in autem possimus id ut consequuntur suscipit exercitationem molestias accusamus impedit, dicta fuga illum distinctio ea at maiores quas laborum? Eius, veniam eveniet in aliquam sed architecto natus, facilis quo omnis, exercitationem ratione tempora non molestiae neque corrupti dolores eligendi nisi itaque. Quod itaque fugit debitis nobis. Ab ipsam dolore dolor consequatur aliquid at distinctio iure. Magni quos obcaecati vero perspiciatis deleniti necessitatibus earum reiciendis voluptate odio quae totam cum, blanditiis, eaque sapiente provident itaque. Esse optio incidunt ea sunt velit temporibus modi qui consequuntur, perferendis doloremque iure. Provident laboriosam tenetur, explicabo molestias at iste! Inventore doloremque nesciunt eius neque, natus recusandae quo sapiente voluptas reiciendis tempora ratione, rem in laborum, tempore voluptatibus perferendis culpa adipisci! Consequatur accusantium adipisci impedit, nobis similique qui alias dicta autem quos tempora cum delectus odit fuga unde nihil recusandae modi a omnis ab veritatis ipsum voluptatibus ratione inventore? Repudiandae cupiditate molestias eum libero mollitia quae similique, perspiciatis quaerat ipsum quo nisi obcaecati aperiam placeat. Assumenda temporibus nostrum rerum perspiciatis? Consectetur reiciendis numquam magni necessitatibus minima. Perferendis saepe ea et illum incidunt, autem aliquid corrupti? Excepturi quae fuga aut?</p>
</body>
</html>
```

![Paragraph_Tag_Result](./Assets/Paragraph%20Tag%20Result.png)

<br/>

**lorem** - Lorem ipsum is a commonly used to generate random text that occupies the space where the real content should be. You can generate specific amount of word by entering the number next to lorem. In above paragraph code lorem is used to generate random words.

<br/>

**```<a>``` tag** - The ```<a>``` tag use to link a page to another page. The most attribute attribute of the ```<a>``` element is href=" ".

<br/>

**```<img>``` tag** - Image tag is used to add an image in an HTML page. The ```<img>``` tag has two most important attribute. First is src and second is alt first one specifies the path of image, second one an alternate text for the image, if the image for some reason cannot be displayed.

```
HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rohan's Document</title>
</head>
<body>
    <h1>Image</h1>
    <img src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGNvZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="code_image">
</body>
</html>
```

![Image_Tag_Result](./Assets/Image%20Tag.png)

