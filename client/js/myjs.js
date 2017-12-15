$(".carousel").carousel({
  interval: 4000
});

$(document).ready(function () {
  const arrPath = document.getElementsByClassName("path")[0];
  let firstTextList,
    secondTextList;

  $("a").click(e => {
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

  const setText = e => {
    firstTextList = e.target.childNodes[0].nodeValue;
    secondTextList = "";
    arrPath.textContent = secondTextList ? (`${firstTextList}  / ${secondTextList}`) : `${firstTextList}  /`;
  };

  $(".productLink").click(e => {
    secondTextList = e.currentTarget.childNodes[0].data;
    arrPath.textContent = secondTextList ? (`${firstTextList}  / ${secondTextList}`) : `${firstTextList}  /`;
  });

  $(".productLinks").click(e => {
    setText(e);
    $(e.target.nextElementSibling.children).toggle(400);
  });

  $("li:hidden").click(() => {
    $(".toggleLi").hide(400);
  });

  $("a[href^=\"#\"]").click(e => {
    let target = (e.target.hash) || e.target.parentNode;
    $("html, body").animate({scrollTop: $(target).offset().top}, 800);
  });

});
