# CSS Position Property

![CSS_Position_Cover_Image](./Asset/Cover%20Image%20(CSS-Positions).png)

In this article we are going to understand about the position in CSS. Position property can help you to manipulate the location.

<br/>

## Table of Content
1. Static Position
2. Fixed Position
3. Sticky Position
4. Sticky Position
5. Absolute Position

****
<br/>

**Static Position** - This is a default property for each and every element that we use. So if any element has Static property that element will stick to the normal page flow. It will not change its position even you add top/right/bottom/left value.

```
CSS

div.warning {
  position: static;
  border: 3px solid #73AD21;
}
```

![Static_Image](./Asset/Static%20Positions.png)

****
<br/>

**Fixed Position** - If any element is positioned with **_position:fixed_** property then that element always stays in the same position even if the page is scrolled. A fixed element does not leave a gap in the page where it would normally have been located. Top/Right/Bottom/Left properties are used to positioned the element.

```
CSS

div.warning {
  position: fixed;
  bottom: 0;
  right: 0;
}
```

![Fixed_Image](./Asset/Fixed%20Position.png)

****
<br/>

**Sticky Position** - The **_position:sticky_** allows you to position an element based on scroll position. If element is positioned to particular place in web page and if element is not at that place then until user scroll the page and that element get its sticky position that element will move, and once the element reached to that position, It will stick to that position

```
CSS

div.warning {
   position: sticky;
   top: 0;
}
```

![Sticky_Image](./Asset/Sticky%20Position.png)

****
<br/>

**Relative Position** - An element with position:relative is positioned relative to its normal/current position. Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.

```
CSS

div.warning {
  position: relative;
  left: 30px;
}
```

![Relative_Image](./Asset/Relative%20Position.png)

****
<br/>

**Absolute Position** - An element with position:absolute is positioned relative to its parent’s position. Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its parent’s position.

```
CSS

div.warning {
  position: absolute;
  top: 80px;
  right: 0;
}
```

![Absolute_Image](./Asset/Absolute%20Position.png)

****
<br/>

These are the positions which we use to position an element. In the next article we will understand the Flex. Stay tuned for such article and share it, like it.