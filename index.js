var started = false;
var levelList = [];
var level = 0,
  c = 0;
$(document).keydown(function (event) {
  if (!started) {
    started = true;
    level = 0;
    nextLvel();
  }
});

function startagain() {
  started = false;
}
function sound(val) {
  var t1 = new Audio("sounds/" + val + ".mp3");
  t1.play();
}
function buttonAnimation(key) {
  $("." + key).addClass("pressed");
  setTimeout(function () {
    $("." + key).removeClass("pressed");
  }, 200);
}
function nextLvel() {
  level++;
  c = 0;
  $("h1").text("Level " + level);
  var rnd = Math.random() * 4;
  rnd = Math.ceil(rnd);
  levelList.push(rnd);
  if (rnd == 1) {
    buttonAnimation("green");
    sound("green");
  }
  if (rnd == 2) {
    sound("red");
    buttonAnimation("red");
  }
  if (rnd == 3) {
    sound("blue");
    buttonAnimation("blue");
  }
  if (rnd == 4) {
    sound("yellow");
    buttonAnimation("yellow");
  }
}
$(".btn").on("click", function () {
  if ($(this).hasClass("red")) {
    val = 2;
    sound("red");
    buttonAnimation("red");
  }
  if ($(this).hasClass("green")) {
    val = 1;
    buttonAnimation("green");
    sound("green");
  }
  if ($(this).hasClass("blue")) {
    val = 3;
    sound("blue");
    buttonAnimation("blue");
  }
  if ($(this).hasClass("yellow")) {
    val = 4;
    sound("yellow");
    buttonAnimation("yellow");
  }
  if (val == levelList[c]) {
    c++;
    if (c == level) {
      setTimeout(function () {
        nextLvel();
      }, 1000);
    }
  } else {
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    startagain();
  }
});
