function changeImage() {
    var image = document.getElementById('image2');
    if (image.src.match("bulbon")) {
      image.src = "./Images/off-bulb.gif";
    } else {
      image.src = "./Images/on-bulb.gif";
    }
  }