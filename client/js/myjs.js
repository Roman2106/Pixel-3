$(".carousel").carousel({
  interval: 4000
});

$(document).ready(function () {
  $("a").click((e) => {
    e.preventDefault();
  });

  $("a.feedback").click(() => {

    $(".overlay").fadeIn(400,
      () => {
        $("form.feedback").css("display", "block").animate({opacity: 1, top: "15%"}, 200);
      });
  });

  $(".cloze").click(() => {
    $("form.feedback").animate({opacity: 0, top: '45%'}, 200,
      () => {
        $(this).css("display", "none");
        $(".overlay").fadeOut(400);
      }
    );
  });

  const arrPath = document.getElementsByClassName("path")[0];
  let firstTextList;
  let secondTextList;

  const setText = e => {
    firstTextList = e.target.childNodes[0].nodeValue;
    secondTextList = "";
    arrPath.textContent = secondTextList ? (`${firstTextList}  / ${secondTextList}`) : `${firstTextList}  /`;
  };

  $(".productLinks7").click(e => {
    secondTextList = e.currentTarget.childNodes[0].data;
    arrPath.textContent = secondTextList ? (`${firstTextList}  / ${secondTextList}`) : `${firstTextList}  /`;
  });

  $(".productLinks1").click((e) => {
    setText(e);
    $(".toggleLi1").slideToggle(400);
  });

  $(".productLinks2").click((e) => {
    setText(e);
    $(".toggleLi2").slideToggle(400);
  });

  $(".productLinks3").click((e) => {
    setText(e);
    $(".toggleLi3").slideToggle(400);
  });

  $(".productLinks4").click((e) => {
    setText(e);
    $(".toggleLi4").slideToggle(400);
  });

  $(".productLinks5").click((e) => {
    setText(e);
    $(".toggleLi5").slideToggle(400);
  });

  $(".productLinks6").click((e) => {
    setText(e);
    $(".toggleLi6").slideToggle(400);
  });

});
