var ImgRollOver = {

  init: function(){

    // Create a global property of our ImgRollOver object named i
    ImgRollOver.i = 0;


    // Define an array called pics to hold img file names
    pics = new Array("1", "2", "3", "4", "5", "6","7", "8", "9","10"
    , "11", "12");
    // same as...
    // pics = ("1", "2", "3", "4", "5", "6","7", "8", "9","10", "11", "12");

    // create a captions array
    captions = new Array("Split Rock Lighthouse", "Superior Trail", "Beach Rock", "Breakers", "AmericInn Beach",
    "Surf Spray","Superior Red Rock", "Superior Sunset", "Gooseberry Falls","Cascades", "The Temperance", "Fall Trail Colors");

    // Get a reference to the first image on the page
    northShoreImage = document.getElementById('northShorePic');

    // Get a nodelist of references to our <p> tags that have
    // a class of "picCaption"
    picCaptions = Core.getElementsByClass("picCaption");

    // set up a mouseover event handler and a mouseout event handler
    // for this image - old way
    //
    // element.event = eventHandlerFunctionName;


    //northShoreImage.onmouseover = ImgRollOver.overHandler;
    //northShoreImage.onmouseout = ImgRollOver.outHandler;
    //
    // Use the newer event listener way using the core.addEventListener method.
    //
    //Standard W3c way of setting up an event listener
    // northShoreImage.addEventListener("mouseover", ImgRollOver.overHandler);
    //
    // Instead use the addEventListener() method from the core.js library
    Core.addEventListener(northShoreImage, "mouseover", ImgRollOver.overHandler);
    Core.addEventListener(northShoreImage, "mouseout", ImgRollOver.outHandler);

    // Get a reference to the second image on the web page
    ImgRollOver.northShoreAutoImage = document.getElementById('northShoreAutoPic');


    // Call a function (method) to get the automated rollover
    // (slideshow) for our NorthShore images going
    ImgRollOver.slideShow();
  },

  overHandler: function(e) {

    var randomIndex = ImgRollOver.randRange(1, pics.length);

    // perform the image rollover
    //northShoreImage.src = 'images/northShore/pic' + pics[randomIndex]
    + ".jpg";
    this.src = 'images/northShore/pic' + pics[randomIndex]
    + ".jpg";

    // change the caption to correspond with the new image
    picCaptions[0].innerHTML = captions[randomIndex];

  },
  outHandler: function(e){

    //northShoreImage.src = "images/northShore/pic1.jpg";
    this.src = "images/northShore/pic1.jpg";
    picCaptions[0].innerHTML = captions[0];

  },

  slideShow: function(){

    // do the image rollover
    ImgRollOver.northShoreAutoImage.src = "images/northShore/pic" +
    pics[ImgRollOver.i] + ".jpg"

    // get the proper caption for this image
    picCaptions[1].innerHTML = captions[ImgRollOver.i];

    ImgRollOver.i = (++ImgRollOver.i) % pics.length

    /*
    if (ImgRollOver.i < pics.length - 1){
      ImgRollOver.i++;
    }
    else {
      ImgRollOver.i = 0;
    }
    */

    // Keep calling the slideShow() method every 3 seconds for
    // the lifetime of this webpage

    setTimeout(ImgRollOver.slideShow, 3000);

  },

  randRange: function(low, high){

    return Math.floor(Math.random() * (high - low) + low);

  }


};

// don't run our JavaScript code until the web page has
// finsihed loading

Core.start(ImgRollOver);
