$(document).ready(function () {
  function applyStyles() {
    $("#mypage_header").css({
      "background-color": "#FFFF88",
      color: "#CC0000",
      "border-bottom": "2px solid #FF1A00",
    });
    $("#center_section").css({
      "background-color": "#FFFF88",
      color: "#CC0000",
      "padding-bottom": "30px",
    });
    $("input").css({
      border: "none",
    });
    $("#mypage_centerContent main").css({
      "border-bottom": "2px solid #FF1A00",
    });
    $("#mypage_leftnav aside").css({
      color: "#CC0000",
      "border-right": "2px solid #FF1A00",
    });
    $("#mypage_footer").hide();
    $("#references").remove();
    $("<div>", {
      id: "references",
      html: '<p>Taken inspiration from</p><a href="https://www.google.com/search?sca_esv=3aefff09a9d5a078&q=resume+format&udm=2&fbs=AEQNm0DYVld7NGDZ8Pi819Yg8r6em07j6rW9d2jUMtr8MB7hthlxj_a5JB7GtKl9Rvi8UOrX6vOKeE8ctU8C4v5SDrHEsrgUOOFp5HvlkBZf4yVP83YajKnrlhAJvHG8uQnJWlvuYz8LvE_lwESvEPu-1v94fKd9xhS49UTuNSe7CMY7I5AuGmdDN0lv5iId0gIyD9wyA5aKEve0q31Gi2kwmyWtccpVrQ&sa=X&ved=2ahUKEwjGtY-EiJKIAxUJk68BHbdOI5wQtKgLegQIGRAB&biw=1478&bih=746&dpr=1.25">Resume Templates</a>',
    }).insertBefore("#button_container");
    $("#references").css({
      width: "100%",
      margin: "0 auto",
      "text-align": "center",
      padding: "10px",
      color: "#CC0000",
      "font-size": "18px",
    });
  }

  $("<button>", {
    id: "loadButton",
    text: "Load",
    click: function () {
      applyStyles();
    },
  }).appendTo("#button_container");

  $("#button_container").css({
    width: "100%",
    "text-align": "center",
  });
  $("#loadButton").css({
    padding: "10px",
    margin: "6px",
    "font-weight": "bold",
    "background-color": "#180161",
    color: "white",
    "border-radius": "5px",
  });
});
