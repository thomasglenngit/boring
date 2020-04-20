$(document).ready(function() {
  $("p").click(function() {
    // if the paragraphs has the class
    $("p").removeClass();
    // if the paragraph doesn't have the class
      $("p").addClass("accent");
  });
});