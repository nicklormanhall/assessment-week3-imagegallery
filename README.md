# assessment-week3-imagegallery

Week 3 Project: Building an accessible image gallery Overview Building on HTML, CSS and JavaScript skills from previous weeks, we'll build an accessible image gallery with keyboard navigation and maybe even voice announcements.

User Stories
As a user...

🐿️ I want to browse a set of thumbnail images that load quickly
🐿️ I want to select a thumbnail and display a larger version of the image, with a description
🐿️ I expect accessible considerations like alternative text for images, and the ability to click next and previous buttons using the keyboard

Requirements

One page, with a set of thumbnail images, and a larger image
Styled appropriately with CSS, and make use of media queries.
Use client-side JavaScript to display the larger image when a thumbnail is selected
Use client-side JavaScript to navigate between images using the keyboard (tab, enter)

PLANNING

My theme will be ski mountain. I will look to find a minimum of 6 HD quality images

Use of unsplash: criteria, Free images and Landscape (need to see how this looks with mobiles)

MUST DO

🎯 Plan out the UI and consider the elements you'll need to include to support the stories. Will thumbnails take up space at the top, side or bottom of the page? Will they float over the image?

    DONE: I completed my initial layout design on figma. I decided to have the thumbnail images centered at the top at the top for desktop there will be a small margin.

🎯 Display the thumbnail images. Will you use a grid, or a list? Will you use CSS Grid or Flexbox?

    IN PROGRESS:  I will be looking to initially display using postion relative and absolute.There will be a maximum of three thumbnail images and if possible I will look for the image to scroll.

🎯 Display the larger image. Will you use an overlay of some kind, or a section on the same page? How would it work on smaller screens?
size set for mobile: XXXX TBC

    IN PROGRESS: Larger screens will have the thumbnails displayed at the top, for mobiles they will display at the bottom. T

🎯 Handle user interaction. Will you use event listeners on the thumbnails, or on the container? How will you know which thumbnail was selected?

    IN PROGRESS:

STRECH GOALS

The stretch goals I wanted to focus on were:

🏹 Handle user interaction with keyboard only (as if they have no mouse). You can use tab and enter/space like for all websites, but will you enable the use of the arrow keys as well?

🏹 Use your operating system's voiceover tools or a Screen Reader to have the computer announce the alt text of the selected image.

✨ Using role="status" like this will cause the voiceover to read out the content inside whenever it changes. Create a div, select it by id, and then try changing it's .textContext property with JS. <div id="announcer" role="status" aria-live="assertive" aria-atomic="true"></div>

https://nicklormanhall.github.io/assessment-week2-cookieclicker/ (live) https://github.com/nicklormanhall/assessment-week3-imagegallery (github repo)

Describing errors or bugs you encountered while completing your assignment.

    I has a problem when I looked to put my thumb-container as below

        <div id="screen-image">
      <div id="thumb-container"></div>

  </div>

I couldn't understand why the thumbnail images were't showing, I realised that as part of the process the
