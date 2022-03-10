console.log("Hello, cruel world!");
//Single line comment

/*
Multi-line comment
12345
6789
*/

/* Adding a comment to this code*/
(function() {
  var newLink = document.createElement("a");
  var allParagraphs = document.getElementsByTagName("p");
  var firstParagraph = allParagraphs[0];

  function toggleCopy(e) {
    var allParagraphs = document.getElementsByTagName("p");

    for (var i = 0; i < allParagraphs.length; i++) {
      var para = allParagraphs[i];

      if (i === 0) {
        continue;
      }

      if (para.style.display === "none") {
        para.style.display = "block";
      } else {
        para.style.display = "none";
      }
    }

    if (this === newLink) {
      this.remove();
    }

    if (e !== undefined && e.preventDefault !== undefined) {
      e.preventDefault();
    }
  }

  newLink.setAttribute("href", "#");
  newLink.setAttribute("class", "more-link");
  newLink.innerHTML = "Read more";

  newLink.addEventListener("click", toggleCopy);

  toggleCopy();

  firstParagraph.appendChild(newLink);
}());
