# A Quick Guide to CSS Flexbox

![Flex_Cover_Image](./Assets/Cover%20Image%20(CSS-Flex).png)

In this article we are going to understand the Flexbox and how it help us to design a web page more efficiently. Flex gives us ability to align and distribute space among items in a container. A flex container expands items to fill available free space to prevent overflow. Flexbox has some properties and in this article we will understand that one by one.

## Table of Content
1. Flexbox Properties
    - display
    - flex-direction
    - flex-wrap
    - justify-content
    - align-items
    - align-content

****
<br/>

**display** - When you set display:flex on a container element, all flex properties are applied to that container and its direct children. By applying **_display:flex_** all flex elements get align side by side.

```
CSS

.container {
    display: flex;
}
```

![display_flex_result](./Assets/Display%20Flex.png)

****
<br/>

**flex-direction** - Every flex container has a main axis defining the direction of flex items. By default **_flex-direction_** is set as **_row_**, which means that the main axis goes from **_left-to-right_**, and items from the container will display in row.

```
CSS

.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

- **_flex-direction:row_** - left to right in ltr(left-to-right); right to left in rtl(right-to-left)

<br/>

- **_flex-direction:row-reverse_** - right to left in ltr; left to right in rtl

<br/>

- **_flex-direction:column_** - Same as row but top to bottom

<br/>

- **_flex-direction:column-reverse_** - Same as row-reverse but bottom to top

<br/>

![flex_direction_result](./Assets/Flex%20Direction.png)

****
<br/>

**flex-wrap** - By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.

```
CSS

.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- **_nowrap_** - all flex items will be on one line

<br/>

- **_wrap_** - flex items will wrap onto multiple lines, from top to bottom

<br/>

- **_wrap-reverse_** - flex items will wrap onto multiple lines from bottom to top

<br/>

![flex_wrap_result](./Assets/Flex%20Wrap.png)

****
<br/>

**justify-content** - To distribute our flex items along the main axis, we can use justify-content. It also exerts some control over the alignment of items when they overflow the line

```
CSS

.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left;
}
```

- **_flex-start_** - items are packed toward the start of the flex-direction.

<br/>

- **_flex-end_** - items are packed toward the end of the flex-direction.

<br/>

- **_start_** - items are packed toward the start of the _writing-mode_ direction.

<br/>

- **_end_** - items are packed toward the end of the _writing-mode_ direction.

<br/>

- **_left_** - items are packed toward left edge of the container, unless that doesn’t make sense with the _flex-direction_, then it behaves like _start_.

<br/>

- **_right_** - items are packed toward right edge of the container, unless that doesn’t make sense with the _flex-direction_, then it behaves like _end_.

<br/>

- **_center_** - items are centered along the line

<br/>

- **_space-between_** - items are evenly distributed in the line; first item is on the start line, last item on the end line

<br/>

- **_space-around_** - items are evenly distributed in the line with equal space around them. Note that visually the spaces aren’t equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.

<br/>

![justify_content_result](./Assets/Justify%20Content%20-%20Flex.png)

****
<br/>

**align-items** - To center a container we use align-items property to align our items on cross axis. In this case block axis running vertically.

```
CSS

.container {
  align-items: stretch | flex-start | flex-end | center | start | end;
}
```

- **_flex-start / start / self-start_** - items are placed at the start of the cross axis.

<br/>

- **_flex-end / end / self-end_** - items are placed at the end of the cross axis.

<br/>

- **_center_** - items are centered in the cross-axis

<br/>

![align_items_result](./Assets/Align%20Items%20-%20Flex.png)

****
<br/>

**align-content** - This aligns a flex containers' lines when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main asix. **_Note : This property only takes effect on multi-line flexible containers, where flex-wrap is set to either wrap or wrap-reverse). A single-line flexible container will not reflect align-content._**

```
CSS

.container {
  align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end;
}
```

- **_normal (default)_** - items are packed in their default position as if no value was set.

<br/>

- **_flex-start / start_** - items packed to the start of the container. The _flex-start_ honors the _flex-direction_ while _start_ honors the _writing-mode_ direction.

<br/>

- **_flex-end / end_** - items packed to the end of the container. The (more support) _flex-end_ honors the _flex-direction_ while end honors the _writing-mode_ direction.

<br/>

- **_center_** - items centered in the container

<br/>

- **_space-between_** - items evenly distributed; the first line is at the start of the container while the last one is at the end

<br/>

- **_space-around_** - items evenly distributed with equal space around each line

<br/>

![align_content_result](./Assets/Align%20Content%20-%20Flex.png)

<br/>

These are some flex properties that we use to align an element. In the next article we will understand the Grid. Stay tuned for such article and share it, like it.