# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.


### Links

- Solution URL: [Add solution URL here](https://github.com/Alinist/MSP-session7-task)
- Live Site URL: [Add live site URL here](https://alinist.github.io/MSP-session7-task/)

## My process

### Built with

- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learned in the process of making this project alot of good ideas including inserting an img to a button in a form and how to style input fields of type = number.

I also learned how to make an intervel which counts up numbers separately.

```html
<button><img id="getAge" src="/assets/images/icon-arrow.svg" alt=""></button>
```
```css
.App .inputs div input.input-box,
textarea {
    background: transparent;
}
```
```js
setInterval(function () {
        timer++;
        if (timer <= years) {
            ageYears.innerHTML = timer;
        } else {
            clearInterval();
        }
        if (timer <= months) {
            ageMonths.innerHTML = timer;
        }
        if (timer <= days) {
            ageDays.innerHTML = timer;
        }
    }, 80)
```

### Continued development

I want to focus more on how to make a more efficient responsive design as well as try to be more organized in my thinking process when i implement my ideas in the process of using javascript.

### Useful resources

- [Example resource 1](https://stackoverflow.com/questions/26024771/styling-an-input-type-number) - This helped me for input fields styling in which i removed the upsacling and downscaling arrows. I really liked this pattern and will use it going forward.

## Author

- Frontend Mentor - [Alinist](https://www.frontendmentor.io/profile/Alinist)