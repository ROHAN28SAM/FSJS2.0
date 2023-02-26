# All about CSS Selectors

![CSS_Selector_Cover_Image](./Assets/Cover%20Image%20(CSS).png)

In this article we are going to understand what is CSS and how it can be use to design the web pages to look nice and attractive. With this we also going to understand what are different type of CSS Selectors are available and how to use it in proper way to reduce some efforts.

<br/>

## Table of Content
1. What is CSS?
2. Universal Selector
3. Individual Selector
4. Class and ID Selector
5. And Selector (Chained)
6. Combined Selector
7. Inside an element Selector
8. Direct Child Selector
9. Sibling Selector
10. Pseudo Selector

****
<br/>

## **What is CSS??**
CSS (Cascading Style Sheet) is used to create great-looking web pages, The web would be boring place if all website looked in default HTML given format. Using CSS, you can modify the HTML elements, and design your web page as you want.

<br/>

There are three ways to write a CSS for web page

<br/>

1. **_Internal CSS_** - In this we write a css in ```<style>..</style>``` tag inside the ```<head>``` tag in same HTML file. This can be use when you are designing single or smaller web page/site.
2. **_External CSS_** - Here we have a separate CSS file in project folder and it is linked with HTML file using ```<link rel=”stylesheet” href=”style.css”>``` inside the ```<head>``` tag. This can be use when you are working on large project and have multiple web pages. It is easier to handle external CSS in large project.
3. **_Inline CSS_** - The Inline CSS uses the style attribute to apply CSS to a single HTML element. This can be use, when you just want a single or less elements to target.

<br/>

Following code is a example of Internal CSS

```
HTML & CSS

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS</title>
    <style>
        p {
            background-color: #4d4d4d;
            color: white;
        }
    </style>
</head>
<body>
    <h1>This is heading</h1>

    <div>Welcome to live class</div>

    <span>Span is just a span, nothing more</span>

    <p>We all know paragraph</p>

    <ul>
      <li class="bg-black text-white">item1</li>
      <li >item2</li>
      <li >item3</li>
      <li >item4</li>
      <li>item5</li>
    </ul>

    <div>
      <p>lorem</p>
      <li>awesome</li>
      <ul>
        <li>highlight me <a href="#">test</a></li>
        <li>highlight me</li>
      </ul>
    </div>

    <section>
      <p class="sibling">Test 1</p>
      <p >Test 2</p>
      <p>Test 3</p>
      <p >Test 4</p>
      <p>Test 5</p>
    </section>
</body>
</html>
```

![HTML_CSS_Result](./Assets/CSS%20Template.png)

****
<br/>

As I mentioned above that we can modify any HTML element using CSS, for that we need to target that element exactly, and here comes the very important part of CSS which is **CSS SELECTORS**.

<br/>

**Universal Selector** - It select each and every element from the web page and apply all the mentioned properties to entire web page. It is represented by *.

```
CSS

/* Universal Selector */
* {
     background-color: #4d4d4d;
     color: white;
}
```

![Universal_Selector_Result](./Assets/Universal%20Selector.png)

****
<br/>

**Individual Selector** - It can be use when we have to select all the ```<p>``` elements from the page or all the ```<div>``` elements or all the ```<div>``` elements etc. But there is limitation with the specificity with this, e.g. if we target ```<p>``` element, it will target all the ```<p>``` element from the HTML file. With this we cannot target specific element.

```
CSS

/* Individual Selector */
p {
     background-color: #4d4d4d;
     color: white;
}
```
![Individual_Selector_Result](./Assets/Individual%20Selector.png)

****
<br/>

**Class & ID Selector**  <br/>
The limitation of Individual Selector can be handle with the Class & Id Selector as we can target to specific element if it has class or id. e.g. If ```<p>``` tag has class warning so with the class selector we can target only the ```<p>``` element whose class is warning. Class is represented by . for example if we have warning class, it can be written as .warning{..}

Same with the Id, if we have any element with Id, so we can select that element with the corresponding id. For example if ```<ul>``` tag has id item_list so with id selector we can target only the ```<ul>``` element whose id is list_item. Id is represented by # for example if we have id list_item, it can be written as #item_list{..}

<br/>

You must be wondering if both Id and Class works the same then why we need both? The only difference is when you want to uniquely identify any element Id should be used, because 
> ID should be only unique in entire HTML

```
CSS

/* Class Selector */
.warning {
    background-color: #4d4d4d;
    color: white;
}
/* Id Selector */
#list_item {
    background-color: #452466;
    color: #ffffff;
}
```

![Class_ID_Result](./Assets/Class%20%26%20Id%20Selector.png)

****
<br/>

**And Selector (Chained)** - <br/>
This can be used when you have two classes for an element and one of the class is present for another element too, and that time you just want to target the element with both classes. For example I have
```<li class=”bg-black text-white”>item1</li>``` <br/>
```<li class=”bg-black”>item2</li>``` <br/>
and I have to target the item1 then and selector helps us to select that particular element. 

If we write css for .bg-black{..} it will get applied to both elements, but if I write .bg-black.text-white{..} this will get applied only to the element which have bg-black and text-white class. And selector is represented by .

```
CSS

/* and Selector */
.bg-black.text-white {
     background-color: #4d4d4d;
     color: #ffffff;
}
```

![And_Selector_Result](./Assets/And%20Selector.png)

****
<br/>

**Combined Selector** - This is used when we have to select multiple elements e.g. ```<p>```, ```<div>```, ```<span>```, etc. We can write separate CSS for ```<p>``` and ```<div>```, but here we are discussing about combined selector so this can be achieved in single CSS. p, div {…}. Elements that needs to be selected should be written as comma separated, and there can be limitless element we can have in combined selector.

```
CSS

/* combined Selector */
span, li {
   background-color: #4d4d4d;
   color: #ffffff;
}
```

![Combined_Selector_Result](./Assets/Combined%20Selector.png)

***
<br/>

**Inside an element Selector** - This can be use when we have to select element which is inside of particular element. See the following example, here we are selecting ```<li>``` which is inside of ```<ul>``` and ```<div>``` (highlight me) not the ```<li>``` which is inside of ```<div>``` (awesome).

```
HTML

<div>
    <p>lorem</p>
    <li>awesome</li>
    <ul>
       <li>highlight me <a href="#">test</a></li>
       <li>highlight me</li>
    </ul>
</div>
```

```
CSS

/* Inside an element Selector */
div ul li {
   background-color: #1a774c;
   color: #ffffff;
}
```

![Inside_Selector_Result](./Assets/Inside%20an%20element%20Selector.png)

****
<br/>

**Direct Child Selector** - This can be use when we have to select an element which has direct connection with another element. In following example ```<li>awesome</li>``` have direct connection with ```<div>```.

```
HTML

<div>
   <p>lorem</p>
   <li>awesome</li>
   <ul>
       <li>highlight me <a href="#">test</a></li>
       <li>highlight me</li>
   </ul>
</div>
```

```
CSS

/* Direct Child Selector */
div > li {
    background-color: #1a774c;
    color: #ffffff;
}
```

![Direct_Child_Selector_Result](./Assets/Direct%20Child%20Selector.png)

****
<br/>

**Sibling Selector** - This can be use to select a Sibling of targeted element. If we have sibling class for ```<p>``` tag then with this we can select next (sibling) ```<p>``` tag.

```
HTML

<section>
      <p class="sibling">Test 1</p>
      <p>Test 2</p>
      <p>Test 3</p>
      <p>Test 4</p>
      <p>Test 5</p>
</section>
```

```
CSS

/* Sibling (~ or +) Selector */
.sibling + p {
     background-color: #1a774c;
     color: #ffffff;
}
```

![Sibiling_Selector_Result](./Assets/Sibling%20Selector.png)

****
<br/>

Use following HTML & CSS for more practice

```
HTML & CSS

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS</title>
    <link rel="stylesheet" href="style.css">
    <style>
      /* Universal Selector */
      * {
        background-color: #4d4d4d;
      }
      /* Individual Selector */
      p {
        background-color: #524621;
      }
      /* class and id selector */
      .warning {
        background-color: #c9ee0f;
      }
      /* and selector (chained) */
      .bg-black.text-white{
        background-color: #000000;
      }
      /* combined selector */
      h1, div {
        background-color: #ffffff;
        color: #000000;
      }
      /* inside an element */
      div ul li {
        background-color: aqua;
      }
      /* direct child */
      div > li {
        background-color: blueviolet;
      }
      /* Sibling (~ or +) Selector */
        .sibling + p {
          background-color: #1a774c;
          color: #ffffff;
        }
    </style>
</head>
<body>
    <h1>This is heading</h1>

    <div>Welcome to live class</div>

    <span class="warning">Span is just a span, nothing more</span>

    <p>We all know paragraph</p>

    <ul id="list_item">
      <li class="bg-black text-white">item1</li>
      <li >item2</li>
      <li >item3</li>
      <li >item4</li>
      <li>item5</li>
    </ul>

    <div>
      <p>lorem</p>
      <li>awesome</li>
      <ul>
        <li>highlight me <a href="#">test</a></li>
        <li>highlight me</li>
      </ul>
    </div>

    <section>
      <p class="sibling">Test 1</p>
      <p >Test 2</p>
      <p>Test 3</p>
      <p >Test 4</p>
      <p>Test 5</p>
    </section>
</body>
</html>
```

Before starting Pseudo selector we need to understand what are Inline element and what are Block elements.

**_Inline Elements_** :- The elements which do not take their own space on web page are basically Inline elements

**_Block Elements_** :- The elements which take their own space on web page are basically Block elements

<br/>

Pseudo Selector

**CSS pseudo-class** is a keyword added to a selector that specifies a special state of the selected elements. A pseudo class have a colon (:) followed by the class name.

**:hover** - This can be used to add special effect to an element. When user’s pointer hovers over the element then that element can be styled.

```
CSS

button:hover {
  color: red;
}
```

**:focus** - This works when we click on any element (input field from form). It represents an element that has got focus.

```
CSS

input:focus {
    background-color: blue;
}
```

**:first-child** - This is used to select first element among a group of sibling elements <br/>
**:last-child** - This is used to select last element among a group of sibling elements

```
CSS

li:first-child {
    border: 2px solid red;
}

li:last-child {
  border: 2px soil red;
}
```

**::before** - This create a element which could be the first child of the selected elements

```
CSS

.imp-label:hover::before{
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background-color: orange;
      }
```