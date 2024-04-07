# assessment-week3-imagegallery

Notes added to Moodle & README.md

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

My theme will be ski mountain. I will look to find a minimum of 6 HD quality images.

Use of unsplash: criteria, Free images and Landscape (need to see how this looks with mobiles)

MUST DO

🎯 Plan out the UI and consider the elements you'll need to include to support the stories. Will thumbnails take up space at the top, side or bottom of the page? Will they float over the image?

    DONE: I completed my initial layout design on figma. I decided to have the thumbnail images centered at the top at the top for desktop, there will be a small margin. I wanted the site to be simple to use and uncluttered. I wanted to keep the focus being on the images with functionality being seemless.

🎯 Display the thumbnail images. Will you use a grid, or a list? Will you use CSS Grid or Flexbox?

    DONE: I will be looking to initially display using flexbox and a combination of position relative and absolute.There will be a maximum of three thumbnail images and if possible I will look for the image to scroll.

    Scroll added on the thumbnails and the thumbnail in centred when clicked on

🎯 Display the larger image. Will you use an overlay of some kind, or a section on the same page? How would it work on smaller screens?

    DONE: Larger screens will have the thumbnails displayed at the top, for screens with of less than 480 the thumbnails will display at the bottom.

    The CSS was problematic to get to work, I ended needing to create a new vscode project to play with just the positioning of the image to get it to resize as I needed

🎯 Handle user interaction. Will you use event listeners on the thumbnails, or on the container? How will you know which thumbnail was selected?

    DONE: Added two event listeners, one for the mouse click and one for the return/enter key

STRECH GOALS

The stretch goals I wanted to focus on were:

🏹 Handle user interaction with keyboard only (as if they have no mouse). You can use tab and enter/space like for all websites, but will you enable the use of the arrow keys as well?

    DONE: The pages opens onto the thumbnail, pressing tab takes the user through each thumbnail, by pressing Return/Enter the large image is then replaces

🏹 Use your operating system's voiceover tools or a Screen Reader to have the computer announce the alt text of the selected image.

    DONE: using the mac voiceover tool I was able to listen to the descriptions.

https://nicklormanhall.github.io/assessment-week3-imagegallery/(live) https://github.com/nicklormanhall/assessment-week3-imagegallery (github repo)

Describing errors or bugs you encountered while completing your assignment.

I initially has a problem when I looked to put my thumb-container as below

<div id="screen-image">
<div id="thumb-container"></div>

</div>

It took me a while to understand why the thumbnail images were't showing, I finally located the problem after running the debug.

The CSS took a good number of hours to correct
