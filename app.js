// console.log("Image Gallery");
const thumbContainer = document.getElementById("thumb-container");
const displayImage = document.getElementById("screen-image");

const images = [
  {
    url: "https://images.unsplash.com/photo-1482867996988-29ec3a0f1aac?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "cable train over snowy field",
    //source: https://unsplash.com/photos/cable-train-over-snowy-field-ZLcZlM0gi_c
  },
  {
    url: "https://images.unsplash.com/photo-1499792476072-fb84838c5f83?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "a ski lift going up a snowy mountai",
    //https://unsplash.com/photos/a-ski-lift-going-up-a-snowy-mountain-QV58wLRuV6I
  },
  {
    url: "https://images.unsplash.com/photo-1516575315500-23490b37e1b2?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "boarder on snow",
    //https://unsplash.com/photos/man-walking-on-snow-FidWUAMGoPg
  },
  {
    url: "https://images.unsplash.com/photo-1516362494095-89c6e27d4428?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "snow field",
    //https://unsplash.com/photos/snow-field-OzV4gww8L68
  },
  {
    url: "https://images.unsplash.com/photo-1532124957326-34c5605398?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "mountain covered with snow",
    //https://unsplash.com/photos/landscape-photo-of-mountain-covered-with-snow-t8p9dbMpAzg
  },
  {
    url: "https://images.unsplash.com/photo-1472209786600-da381f0d171b?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "freestyle skier",
    //https://unsplash.com/photos/blue-helicopter-on-top-of-mountains-with-white-snow-during-daytime-rt0jfUX0T4k
  },
];

function preloadImage(url) {
  const link = document.createElement("link");
  link.rel = "preload";
  link.href = url;
  link.as = "image";
  document.head.appendChild(link);
}

//Creates Thumbnail
function createThumbnail() {
  images.forEach(function (image) {
    const img = document.createElement("img");
    img.src = image.url;
    img.alt = image.alt;
    img.tabIndex = 1; // Add tabindex for accessibility
    thumbContainer.appendChild(img);
    img.addEventListener("click", function () {
      createMainImage(image);
      img.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      }); //scrolls the thumbnail to the centre
    });
    // added for accessibility for the enter key
    img.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        // Check if the pressed key is the return key
        createMainImage(image);
      }
    });

    preloadImage(image.url);
  });
}

//Creates
function createMainImage(image) {
  displayImage.innerHTML = "";
  const mainImg = document.createElement("img");
  mainImg.src = image.url;
  mainImg.alt = image.alt;
  displayImage.appendChild(mainImg);
}
createThumbnail();
createMainImage(images[0]); //sets to first image in the array
