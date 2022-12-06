function setup() {
    createCanvas(400, 400);
  }
  function draw() {
    var h = hour();
    var min = minute();
    var snd = second();
    if (snd < 10) {
      snd = "0" + snd;
    }
    if (h > 6 && h < 12) {
      background("rgb(10,10,105)");
      noStroke();
      fill("#060684");
      beginShape();
      vertex(0, 100);
      vertex(0, 400);
      vertex(400, 400);
      vertex(400, 100);
      endShape();
      fill("#0B0BB5");
      beginShape();
      vertex(0, 170);
      vertex(400, 180);
      vertex(400, 400);
      vertex(0, 400);
      endShape();
      fill("blue");
      beginShape();
      vertex(0, 300);
      vertex(400, 280);
      vertex(400, 400);
      vertex(0, 400);
      endShape();
      blend(0, 170, 400, 130, 400, 180, 400, 130, BLEND);
      fill("#FF9800");
      beginShape();
      vertex(10, 40);
      vertex(15, 50);
      vertex(25 / 2, 60);
      endShape(CLOSE);
      beginShape();
      vertex(30, 50);
      vertex(40, 45);
      vertex(35, 70);
      endShape(CLOSE);
      beginShape();
      vertex(45, 15);
      vertex(45, 35);
      vertex(60, 20);
      endShape(CLOSE);
      circle(25, 25, 35);
      fill("black");
      beginShape();
      vertex(0, 340);
      vertex(20, 400);
      vertex(0, 400);
      endShape(CLOSE);
      beginShape();
      vertex(400, 340);
      vertex(380, 400);
      vertex(400, 400);
      endShape(CLOSE);
      beginShape();
      vertex(5, 380);
      vertex(400, 370);
      vertex(380, 400);
      vertex(5, 400);
      endShape(CLOSE);
      beginShape();
      vertex(0, 400);
      vertex(20, 300);
      vertex(40, 400);
      endShape();
      beginShape();
      vertex(40, 400);
      vertex(70, 280);
      vertex(90, 400);
      endShape();
      fill("#03071F8C");
      beginShape();
      vertex(200, 60);
      vertex(220, 55);
      vertex(240, 115 / 2);
      endShape();
      fill("black");
      beginShape();
      vertex(240, 60);
      vertex(260, 55);
      vertex(280, 115 / 2);
      endShape();
      circle(240, 60, 7); //suppose to be a bird
      beginShape();
      vertex(20, 400);
      vertex(40, 290);
      vertex(60, 400);
      endShape();
      stroke(0, 0, 0);
      textSize(20);
      stroke("black");
      text("Good Morning", 140, 250);
      text(zero(one(h)) + ":" + zero(min) + ":" + snd + " AM", 150, 200);
    } else if (h >= 12 && h < 18) {
      background("skyblue");
      noStroke();
      fill("orange");
      circle(200, 50, 35);
      strokeWeight(2);
      stroke("green");
      line(0, 350, 0, 400);
      line(5, 350, 5, 400);
      line(10, 350, 10, 400);
      line(15, 350, 15, 400);
      line(20, 350, 20, 400);
      line(25, 350, 25, 400);
      line(30, 350, 30, 400);
      line(35, 350, 35, 400);
      line(40, 350, 40, 400);
      line(45, 350, 45, 400);
      line(50, 350, 50, 400);
      line(55, 350, 55, 400);
      line(60, 350, 60, 400);
      line(65, 350, 65, 400);
      line(70, 350, 70, 400);
      line(75, 350, 75, 400);
      line(80, 350, 80, 400);
      line(85, 350, 85, 400);
      line(90, 350, 90, 400);
      line(95, 350, 95, 400);
      line(100, 350, 100, 400);
      line(105, 350, 105, 400);
      line(110, 350, 110, 400);
      line(115, 350, 115, 400);
      line(120, 350, 120, 400);
      line(125, 350, 125, 400);
      line(130, 350, 130, 400);
      line(135, 350, 135, 400);
      line(140, 350, 140, 400);
      line(145, 350, 145, 400);
      line(150, 350, 150, 400);
      line(155, 350, 155, 400);
      line(160, 350, 160, 400);
      line(165, 350, 165, 400);
      line(165, 350, 165, 400);
      line(170, 350, 170, 400);
      line(175, 350, 175, 400);
      line(180, 350, 180, 400);
      line(185, 350, 185, 400);
      line(190, 350, 190, 400);
      line(195, 350, 195, 400);
      line(200, 350, 200, 400);
      line(205, 350, 205, 400);
      line(210, 350, 210, 400);
      line(215, 350, 215, 400);
      line(220, 350, 220, 400);
      line(225, 350, 225, 400);
      line(230, 350, 230, 400);
      line(235, 350, 235, 400);
      line(240, 350, 240, 400);
      line(245, 350, 245, 400);
      line(250, 350, 250, 400);
      line(255, 350, 255, 400);
      line(260, 350, 260, 400);
      line(265, 350, 265, 400);
      line(270, 350, 270, 400);
      line(275, 350, 275, 400);
      line(280, 350, 280, 400);
      line(285, 350, 285, 400);
      line(290, 350, 290, 400);
      line(295, 350, 295, 400);
      line(300, 350, 300, 400);
      line(305, 350, 305, 400);
      line(310, 350, 310, 400);
      line(315, 350, 315, 400);
      line(320, 350, 320, 400);
      line(325, 350, 325, 400);
      line(330, 350, 330, 400);
      line(335, 350, 335, 400);
      line(340, 350, 340, 400);
      line(345, 350, 345, 400);
      line(350, 350, 350, 400);
      line(355, 350, 355, 400);
      line(360, 350, 360, 400);
      line(365, 350, 365, 400);
      line(370, 350, 370, 400);
      line(375, 350, 375, 400);
      line(380, 350, 380, 400);
      line(385, 350, 385, 400);
      line(390, 350, 390, 400);
      line(395, 350, 395, 400);
      line(400, 350, 400, 400);
      stroke("black");
      strokeWeight(1);
      line(0, 350, 400, 350);
      line(300, 190, 270, 140);
      line(290, 170, 290, 230);
      line(270, 140, 240, 190);
      line(250, 170, 250, 230);
      line(260, 230, 250, 300);
      line(250, 300, 240, 350);
      line(280, 230, 290, 300);
      line(290, 300, 300, 350);
      line(290, 230, 250, 230);
      line(270, 140, 370, 140);
      line(370, 140, 400, 170);
      line(300, 190, 400, 190);
      line(280, 230, 400, 230);
      line(310, 230, 310, 190);
      strokeWeight(0);
      stroke("black");
      fill("black");
      textSize(20);
      text("Good Afternoon", 15, 250);
      text(zero(one(h)) + ":" + zero(min) + ":" + snd + " PM", 30, 200);
    } else if (h >= 18 && h < 21) {
      background("darkblue");
      fill("rgb(12,12,118)");
      noStroke();
      beginShape();
      vertex(0, 0);
      vertex(400, 0);
      vertex(400, 150);
      vertex(0, 150);
      endShape();
      noStroke();
      beginShape();
      fill("black");
      beginShape();
      vertex(0, 350);
      vertex(20, 350);
      vertex(20, 400);
      vertex(0, 400);
      endShape(CLOSE);
      beginShape();
      vertex(20, 350);
      vertex(20, 300);
      vertex(40, 300);
      vertex(40, 400);
      vertex(0, 400);
      endShape(CLOSE);
      beginShape();
      vertex(40, 300);
      vertex(40, 200);
      vertex(60, 200);
      vertex(60, 400);
      vertex(0, 400);
      endShape();
      strokeWeight(6);
      stroke("#03A9F4");
      line(60, 100, 60, 400);
      stroke("red");
      line(60, 100, 60, 150);
      noStroke();
      fill("black");
      beginShape();
      vertex(60, 400);
      vertex(60, 200);
      vertex(87, 200);
      vertex(87, 400);
      vertex(0, 400);
      endShape();
      beginShape();
      vertex(87, 400);
      vertex(87, 170);
      vertex(100, 170);
      vertex(100, 400);
      vertex(0, 400);
      endShape();
      beginShape();
      vertex(120, 400);
      vertex(120, 170);
      vertex(180, 170);
      vertex(180, 400);
      vertex(120, 400);
      endShape();
      strokeWeight(6);
      stroke("#5268E1");
      line(180, 400, 180, 100);
      noStroke();
      beginShape();
      vertex(185, 400);
      vertex(250, 350);
      vertex(250, 150);
      vertex(186, 100);
      endShape();
      strokeWeight(2);
      stroke("black");
      line(250, 350, 400, 350);
      noStroke();
      beginShape();
      vertex(400, 400);
      vertex(400, 70);
      vertex(370, 100);
      vertex(370, 400);
      endShape();
      stroke("white");
      strokeWeight(5);
      point(100, 50);
      point(50, 10);
      point(200, 30);
      point(150, 40);
      point(250, 30);
      point(185, 24);
      point(278, 35);
      point(246, 46);
      point(280, 87 / 2);
      point(300, 46);
      point(385, 96 / 2);
      point(343, 57 / 2);
      // strokeWeight(2)
      // stroke('black')
      // line(350,100,186,100)
      noStroke();
      fill("black");
      stroke("#03A9F4");
      rect(90, 170, 185, 95);
      textSize(25);
      stroke("white");
      fill("white");
      stroke("black");
      text("Good Evening", 100, 250);
      text(zero(one(h)) + ":" + zero(min) + ":" + snd + " PM", 110, 200);
    } else if (h >= 21 && h <= 24) {
      background("#03071F");
      fill("#ECD50B");
      fill("#E9D520");
      noStroke();
      arc(330, 50, 50, 50, 0, PI + QUARTER_PI, OPEN);
      stroke("yellow");
      strokeWeight(3);
      point(20, 100);
      point(30, 50);
      point(50, 100);
      point(300, 90);
      point(200, 50);
      point(50, 250);
      point(60, 300);
      point(140, 50);
      point(280, 100);
      point(150, 30);
      point(150, 200);
      point(130, 130);
      point(210, 150);
      point(100, 80);
      point(50, 300);
      stroke("blue");
      point(100, 250);
      point(200, 300);
      stroke("white");
      point(20, 350);
      fill("black");
      noStroke();
      beginShape();
      vertex(0, 370);
      vertex(400, 370);
      vertex(400, 400);
      vertex(0, 400);
      endShape();
      beginShape();
      vertex(400, 400);
      vertex(400, 80);
      vertex(380, 80);
      vertex(380, 400);
      endShape();
      beginShape();
      vertex(380, 400);
      vertex(360, 400);
      vertex(360, 110);
      vertex(380, 110);
      endShape();
      beginShape();
      vertex(360, 140);
      vertex(300, 140);
      vertex(300, 130);
      vertex(360, 130);
      endShape();
      beginShape();
      vertex(360, 170);
      vertex(300, 170);
      vertex(300, 160);
      vertex(360, 160);
      endShape();
      beginShape();
      vertex(360, 200);
      vertex(300, 200);
      vertex(300, 190);
      vertex(360, 190);
      endShape();
      beginShape();
      vertex(360, 220);
      vertex(300, 220);
      vertex(300, 230);
      vertex(360, 230);
      endShape();
      beginShape();
      vertex(360, 260);
      vertex(300, 260);
      vertex(300, 250);
      vertex(360, 250);
      endShape();
      beginShape();
      vertex(360, 290);
      vertex(300, 290);
      vertex(300, 280);
      vertex(360, 280);
      endShape();
      beginShape();
      vertex(360, 310);
      vertex(270, 310);
      vertex(270, 315);
      vertex(360, 315);
      endShape();
      beginShape();
      vertex(0, 50);
      vertex(10, 50);
      vertex(10, 400);
      vertex(0, 400);
      endShape();
      beginShape();
      vertex(400, 50);
      vertex(395, 50);
      vertex(395, 400);
      vertex(400, 400);
      endShape();
      fill("red");
      beginShape();
      vertex(400, 50);
      vertex(395, 50);
      vertex(395, 40);
      vertex(400, 40);
      endShape();
      stroke("black");
      line(270, 315, 270, 400);
      line(270, 315, 300, 320);
      line(300, 320, 300, 400);
      line(300, 320, 360, 320);
      fill("white");
      stroke("black");
      textSize(20);
      text("Good Night", 140, 250);
      text(zero(one(h)) + ":" + zero(min) + ":" + snd + " PM", 135, 200);
    } else if (h >= 0 && h <= 6) {
      background("grey");
      noStroke();
      fill("rgb(33,33,172)");
      beginShape();
      vertex(0, 100);
      vertex(0, 400);
      vertex(400, 400);
      vertex(400, 100);
      endShape();
      fill("#0B0BB5");
      beginShape();
      vertex(0, 170);
      vertex(400, 180);
      vertex(400, 400);
      vertex(0, 400);
      endShape();
      fill("blue");
      beginShape();
      vertex(0, 300);
      vertex(400, 280);
      vertex(400, 400);
      vertex(0, 400);
      endShape();
      blend(0, 170, 400, 130, 400, 180, 400, 130, BLEND);
      fill("#FF9800");
      beginShape();
      vertex(10, 40);
      vertex(15, 50);
      vertex(25 / 2, 60);
      endShape(CLOSE);
      beginShape();
      vertex(30, 50);
      vertex(40, 45);
      vertex(35, 70);
      endShape(CLOSE);
      beginShape();
      vertex(45, 15);
      vertex(45, 35);
      vertex(60, 20);
      endShape(CLOSE);
      circle(25, 25, 35);
      fill("black");
      beginShape();
      vertex(0, 340);
      vertex(20, 400);
      vertex(0, 400);
      endShape(CLOSE);
      beginShape();
      vertex(400, 340);
      vertex(380, 400);
      vertex(400, 400);
      endShape(CLOSE);
      beginShape();
      vertex(5, 380);
      vertex(400, 370);
      vertex(380, 400);
      vertex(5, 400);
      endShape(CLOSE);
      beginShape();
      vertex(0, 400);
      vertex(20, 300);
      vertex(40, 400);
      endShape();
      beginShape();
      vertex(40, 400);
      vertex(70, 280);
      vertex(90, 400);
      endShape();
      background("rgb(7,7,71)");
      noStroke();
      fill("rgb(17,17,127)");
      beginShape();
      vertex(0, 100);
      vertex(0, 400);
      vertex(400, 400);
      vertex(400, 100);
      endShape();
      fill("#0B0BB5");
      beginShape();
      vertex(0, 170);
      vertex(400, 180);
      vertex(400, 400);
      vertex(0, 400);
      endShape();
      fill("rgb(26,26,255)");
      beginShape();
      vertex(0, 300);
      vertex(400, 280);
      vertex(400, 400);
      vertex(0, 400);
      endShape();
      blend(0, 170, 400, 130, 400, 180, 400, 130, BLEND);
      fill("#FF9800");
      beginShape();
      vertex(10, 40);
      vertex(15, 50);
      vertex(25 / 2, 60);
      endShape(CLOSE);
      beginShape();
      vertex(30, 50);
      vertex(40, 45);
      vertex(35, 70);
      endShape(CLOSE);
      beginShape();
      vertex(45, 15);
      vertex(45, 35);
      vertex(60, 20);
      endShape(CLOSE);
      circle(25, 25, 35);
      fill("black");
      beginShape();
      vertex(0, 340);
      vertex(20, 400);
      vertex(0, 400);
      endShape(CLOSE);
      beginShape();
      vertex(400, 340);
      vertex(380, 400);
      vertex(400, 400);
      endShape(CLOSE);
      beginShape();
      vertex(5, 380);
      vertex(400, 370);
      vertex(380, 400);
      vertex(5, 400);
      endShape(CLOSE);
      beginShape();
      vertex(0, 400);
      vertex(20, 300);
      vertex(40, 400);
      endShape();
      beginShape();
      vertex(40, 400);
      vertex(70, 280);
      vertex(90, 400);
      endShape();
      fill("#03071F8C");
      beginShape();
      vertex(20, 400);
      vertex(40, 290);
      vertex(60, 400);
      endShape();
      stroke(0, 0, 0);
      textSize(20);
      stroke("black");
      text("Good Morning", 140, 250);
      text(zero(one(h)) + ":" + zero(min) + ":" + snd + " AM", 150, 200);
      // beginShape();
      // vertex(20,400);
      // vertex(40,290);
      // vertex(60,400);
      // endShape();
      // stroke(0,0,0);
      // textSize(20);
      // stroke('black');
      //   text('Good Morning',140,250);
      //    text(h + ":" + min + ":" + snd + " AM", 150, 200);
    }
    // else{
    //   print('unknown time')
    // or ll, and 82,not!
  }
  
  function zero(x) {
    if (x < 10) {
      x = "0" + x;
    }
    return x;
  }
  function one(y) {
    if (y > 12) {
      y = y - 12;
    }
    return y;
  }