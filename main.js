canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

background_image = "grasscutter2.png";

player_width = 100;
player_height = 100;
player_x = 20;
player_y = 400;

hurdles_width = 50;
hurdles_height = 41;
hurdles_x = 50;
hurdles_y = -1000;

hurdles_width_2 = 50;
hurdles_height_2 = 41;
hurdles_x_2 = 200;
hurdles_y_2 = -700;

hurdles_width_3 = 50;
hurdles_height_3 = 41;
hurdles_x_3 = 350;
hurdles_y_3 = -900;

hurdles_width_4 = 50;
hurdles_height_4 = 41;
hurdles_x_4 = 520;
hurdles_y_4 = -1200;

hurdles_width_5 = 50;
hurdles_height_5 = 41;
hurdles_x_5 = 650;
hurdles_y_5 = -1100;

player_image = "boy with broom.png";

hurdles_image = "rock.png";
hurdles_image_2 = "rock.png";
hurdles_image_3 = "rock.png";
hurdles_image_4 = "rock.png";
hurdles_image_5 = "rock.png";

garbage_width = 100;
garbage_height = 50;
garbage_x = 1020;
garbage_y = 250;

garbage_width_2 = 100;
garbage_height_2 = 50;
garbage_x_2 = 1160;
garbage_y_2 = 150;

garbage_width_3 = 100;
garbage_height_3 = 50;
garbage_x_3 = 1220;
garbage_y_3 = 490;

garbage_width_4 = 100;
garbage_height_4 = 50;
garbage_x_4 = 1380;
garbage_y_4 = 435;

garbage_width_5 = 100;
garbage_height_5 = 50;
garbage_x_5 = 1540; 
garbage_y_5 = 355;

garbage_width_6 = 100;
garbage_height_6 = 50;
garbage_x_6 = 1800;
garbage_y_6 = 425;

garbage_width_7 = 100;
garbage_height_7 = 50;
garbage_x_7 = 1940;
garbage_y_7 = 230;

garbage_width_8 = 100;
garbage_height_8 = 50;
garbage_x_8 = 1250;
garbage_y_8 = 430;

garbage_width_9 = 100;
garbage_height_9 = 50;
garbage_x_9 = 1390;
garbage_y_9 = 275;

garbage_width_10 = 100;
garbage_height_10 = 50;
garbage_x_10 = 1555;
garbage_y_10 = 490;

garbage_width_11 = 100;
garbage_height_11 = 50;
garbage_x_11 = 1730;
garbage_y_11 = 360;

garbage_width_12 = 100;
garbage_height_12 = 50;
garbage_x_12 = 1590;
garbage_y_12 = 425;

garbage_width_13 = 100;
garbage_height_13 = 50;
garbage_x_13 = 910;
garbage_y_13 = 150;

garbage_width_14 = 100;
garbage_height_14 = 50;
garbage_x_14 = 1180;
garbage_y_14 = 250;

garbage_width_15 = 100;
garbage_height_15 = 50;
garbage_x_15 = 1734;
garbage_y_15 = 250;

garbage_image = 'apply.png';
garbage_image_2 = "bannana.png";
garbage_image_3 = "bottol.png"
garbage_image_4 = "cold drink glass.png"
garbage_image_5 = "raper.png"
garbage_image_6 = "apply.png";
garbage_image_7 = "bannana.png"
garbage_image_8 = "bottol.png"
garbage_image_9 = "cold drink glass.png"
garbage_image_10 = 'raper.png';
garbage_image_11 = 'apply.png';
garbage_image_12 = "bannana.png";
garbage_image_13 = "bottol.png"
garbage_image_14 = "cold drink glass.png"
garbage_image_15 = 'raper.png';


const score = document.querySelector(".score")
const startscreen = document.querySelector('.startscreen')
const gameArea = document.querySelector('.game')
	
				
startscreen.addEventListener('click', start);
	
let player = {
    score: 0
};

  
function add() {
    background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground(); // setting a function, onloading this variable
    background_imgTag.src = background_image; // load image

    garbage_imgTag = new Image(); //defining a variable with a new image
    //garbage_imgTag.onload = draw(); // setting a function, onloading this variable
    garbage_imgTag.src = garbage_image; // load image

    garbage_imgTag_2 = new Image(); //defining a variable with a new image
    //garbage_imgTag.onload = draw(); // setting a function, onloading this variable
    garbage_imgTag_2.src = garbage_image_2; // load image

    garbage_imgTag_3 = new Image(); //defining a variable with a new image
    //garbage_imgTag.onload = draw(); // setting a function, onloading this variable
    garbage_imgTag_3.src = garbage_image_3; // load image

    garbage_imgTag_4 = new Image(); //defining a variable with a new image
    //garbage_imgTag.onload = draw(); // setting a function, onloading this variable
    garbage_imgTag_4.src = garbage_image_4; // load image

    garbage_imgTag_5 = new Image(); //defining a variable with a new image
    //garbage_imgTag.onload = draw(); // setting a function, onloading this variable
    garbage_imgTag_5.src = garbage_image_5; // load image

    garbage_imgTag_6 = new Image(); //defining a variable with a new image
    //garbage_imgTag.onload = draw(); // setting a function, onloading this variable
    garbage_imgTag_6.src = garbage_image_6; // load image

    garbage_imgTag_7 = new Image(); //defining a variable with a new image
    //garbage_imgTag.onload = draw(); // setting a function, onloading this variable
    garbage_imgTag_7.src = garbage_image_7; // load image

    garbage_imgTag_8 = new Image(); //defining a variable with a new image
    //garbage_imgTag.onload = draw(); // setting a function, onloading this variable
    garbage_imgTag_8.src = garbage_image_8; // load image

    garbage_imgTag_9 = new Image(); //defining a variable with a new image
    //garbage_imgTag.onload = draw(); // setting a function, onloading this variable
    garbage_imgTag_9.src = garbage_image_9; // load image

    garbage_imgTag_10 = new Image(); //defining a variable with a new image
    //garbage_imgTag.onload = draw(); // setting a function, onloading this variable
    garbage_imgTag_10.src = garbage_image_10; // load image

    garbage_imgTag_11 = new Image(); //defining a variable with a new image
    //garbage_imgTag.onload = draw(); // setting a function, onloading this variable
    garbage_imgTag_11.src = garbage_image_11; // load image

    garbage_imgTag_12 = new Image(); //defining a variable with a new image
    //garbage_imgTag.onload = draw(); // setting a function, onloading this variable
    garbage_imgTag_12.src = garbage_image_12; // load image

    garbage_imgTag_13 = new Image(); //defining a variable with a new image
    //garbage_imgTag.onload = draw(); // setting a function, onloading this variable
    garbage_imgTag_13.src = garbage_image_13; // load image

    garbage_imgTag_14 = new Image(); //defining a variable with a new image
    //garbage_imgTag.onload = draw(); // setting a function, onloading this variable
    garbage_imgTag_14.src = garbage_image_14; // load image

    garbage_imgTag_15 = new Image(); //defining a variable with a new image
    //garbage_imgTag.onload = draw(); // setting a function, onloading this variable
    garbage_imgTag_15.src = garbage_image_15; // load image

    player_imgTag = new Image(); //defining a variable with a new image
    //player_imgTag.onload = draw(); // setting a function, onloading this variable
    player_imgTag.src = player_image; // 

    hurdles_imgTag = new Image(); //defining a variable with a new image
    //player_imgTag.onload = draw(); // setting a function, onloading this variable
    hurdles_imgTag.src = hurdles_image; //

    hurdles_imgTag_2 = new Image(); //defining a variable with a new image
    //player_imgTag.onload = draw(); // setting a function, onloading this variable
    hurdles_imgTag_2.src = hurdles_image_2; //

    hurdles_imgTag_3 = new Image(); //defining a variable with a new image
    //player_imgTag.onload = draw(); // setting a function, onloading this variable
    hurdles_imgTag_3.src = hurdles_image_3; //

    hurdles_imgTag_4 = new Image(); //defining a variable with a new image
    //player_imgTag.onload = draw(); // setting a function, onloading this variable
    hurdles_imgTag_4.src = hurdles_image_4; //

    hurdles_imgTag_5 = new Image(); //defining a variable with a new image
    //player_imgTag.onload = draw(); // setting a function, onloading this variable
    hurdles_imgTag_5.src = hurdles_image_5; //

    draw();
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);


}

function uploadgarbage() {
    ctx.drawImage(garbage_imgTag, garbage_x, garbage_y, garbage_width, garbage_height);

}

function uploadgarbage_2() {
    ctx.drawImage(garbage_imgTag_2, garbage_x_2, garbage_y_2, garbage_width_2, garbage_height_2);

}

function uploadgarbage_3() {
    ctx.drawImage(garbage_imgTag_3, garbage_x_3, garbage_y_3, garbage_width_3, garbage_height_3);

}

function uploadgarbage_4() {
    ctx.drawImage(garbage_imgTag_4, garbage_x_4, garbage_y_4, garbage_width_4, garbage_height_4);

}

function uploadgarbage_5() {
    ctx.drawImage(garbage_imgTag_5, garbage_x_5, garbage_y_5, garbage_width_5, garbage_height_5);

}

function uploadgarbage_6() {
    ctx.drawImage(garbage_imgTag_6, garbage_x_6, garbage_y_6, garbage_width_6, garbage_height_6);

}

function uploadgarbage_7() {
    ctx.drawImage(garbage_imgTag_7, garbage_x_7, garbage_y_7, garbage_width_7, garbage_height_7);

}

function uploadgarbage_8() {
    ctx.drawImage(garbage_imgTag_8, garbage_x_8, garbage_y_8, garbage_width_8, garbage_height_8);

}

function uploadgarbage_9() {
    ctx.drawImage(garbage_imgTag_9, garbage_x_9, garbage_y_9, garbage_width_9, garbage_height_9);

}

function uploadgarbage_10() {
    ctx.drawImage(garbage_imgTag_10, garbage_x_10, garbage_y_10, garbage_width_10, garbage_height_10);

}

function uploadgarbage_11() {
    ctx.drawImage(garbage_imgTag_11, garbage_x_11, garbage_y_11, garbage_width_11, garbage_height_11);

}

function uploadgarbage_12() {
    ctx.drawImage(garbage_imgTag_12, garbage_x_12, garbage_y_12, garbage_width_12, garbage_height_12);

}

function uploadgarbage_13() {
    ctx.drawImage(garbage_imgTag_13, garbage_x_13, garbage_y_13, garbage_width_13, garbage_height_13);

}

function uploadgarbage_14() {
    ctx.drawImage(garbage_imgTag_14, garbage_x_14, garbage_y_14, garbage_width_14, garbage_height_14);

}

function uploadgarbage_15() {
    ctx.drawImage(garbage_imgTag_15, garbage_x_15, garbage_y_15, garbage_width_15, garbage_height_15);

}

function uploadplayer() {
    ctx.drawImage(player_imgTag, player_x, player_y, player_width, player_height);
}

function uploadhurdles() {
    ctx.drawImage(hurdles_imgTag, hurdles_x, hurdles_y, hurdles_height, hurdles_width);
}

function uploadhurdles_2() {
    ctx.drawImage(hurdles_imgTag_2, hurdles_x_2, hurdles_y_2, hurdles_height_2, hurdles_width_2);
}

function uploadhurdles_3() {
    ctx.drawImage(hurdles_imgTag_3, hurdles_x_3, hurdles_y_3, hurdles_height_3, hurdles_width_3);
}

function uploadhurdles_4() {
    ctx.drawImage(hurdles_imgTag_4, hurdles_x_4, hurdles_y_4, hurdles_height_4, hurdles_width_4);
}

function uploadhurdles_5() {
    ctx.drawImage(hurdles_imgTag_5, hurdles_x_5, hurdles_y_5, hurdles_height_5, hurdles_width_5);
}

function start() {
            gameArea.classList.remove('hide');
            startscreen.classList.add('hide');

            gameArea.innerHTML = "";
			player.start = true;
			player.score = 0;
			

}

function draw() {
    uploadBackground();
    uploadgarbage();
    uploadgarbage_2();
    uploadgarbage_3()
    uploadgarbage_4()
    uploadgarbage_5()
    uploadgarbage_6();
    uploadgarbage_7();
    uploadgarbage_8()
    uploadgarbage_9()
    uploadgarbage_10()
    uploadgarbage_11();
    uploadgarbage_12();
    uploadgarbage_13()
    uploadgarbage_14()
    uploadgarbage_15()
     uploadplayer();
    uploadhurdles()
    uploadhurdles_2()
    uploadhurdles_3()
    uploadhurdles_4()
    uploadhurdles_5()
    
    garbage_x += -0.25;
    garbage_x_2 += -0.25;
    garbage_x_3 += -0.25;
    garbage_x_4 += -0.25;
    garbage_x_5 += -0.25;
    garbage_x_6 += -0.25;
    garbage_x_7 += -0.25;
    garbage_x_8 += -0.25;
    garbage_x_9 += -0.25;
    garbage_x_10 += -0.25;
    garbage_x_11 += -0.25;
    garbage_x_12 += -0.25;
    garbage_x_13 += -0.25;
    garbage_x_14 += -0.25;
    garbage_x_15 += -0.25;

    hurdles_y += +0.25;
    hurdles_y_2 += +0.25;
    hurdles_y_3 += +0.25;
    hurdles_y_4 += +0.25;
    hurdles_y_5 += +0.25;
    
    function endGame() {
        player.start = true;
        "Game over"
    }

    
    requestAnimationFrame(draw);
    //ctx.clearRect(0,0,can.width,can.height);
    check();
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}

function up() {
    if (player_y >= 0) {
        player_y = player_y - 10;
        console.log("When up arrow is pressed,  x = " + player_x + " | y = " + player_y);
        uploadBackground();
        uploadgarbage();
        uploadplayer();
        check();
    }
}

function down() {
    if (player_y <= 500) {
        player_y = player_y + 10;

        uploadBackground();
        uploadgarbage();
        uploadplayer();
        check()
    }
}

function left() {
    if (player_x >= 0) {
        player_x = player_x - 10;

        uploadBackground();
        uploadgarbage();
        uploadplayer();

    }
}

function right() {
    if (player_x <= 700) {
        player_x = player_x + 10;

        uploadBackground();
        uploadgarbage();
        uploadplayer();

    }
}

function check() {
    if (garbage_x == player_x + 0) {
        garbage_width = 0;
        garbage_height = 0;
        player.score = player.score + 10;


        score.innerHTML = "score :" + player.score

        draw();

    }
    if (garbage_x_2 == player_x + 0) {
        garbage_width_2 = 0;
        garbage_height_2 = 0;
        player.score = player.score + 10;


        score.innerHTML = "score :" + player.score

        draw();
    }

    if (garbage_x_3 == player_x + 0) {
        garbage_width_3 = 0;
        garbage_height_3 = 0;
        player.score = player.score + 10;


        score.innerHTML = "score :" + player.score


        draw();
    }


    if (garbage_x_4 == player_x + 0) {
        garbage_width_4 = 0;
        garbage_height_4 = 0;
        player.score = player.score + 10;


        score.innerHTML = "score :" + player.score


        draw();
    }


    if (garbage_x_5 == player_x + 0) {
        garbage_width_5 = 0;
        garbage_height_5 = 0;
        player.score = player.score + 10;


        score.innerHTML = "score :" + player.score


        draw();
    }

    if (garbage_x_6 == player_x + 0) {
        garbage_width_6 = 0;
        garbage_height_6 = 0;
        player.score = player.score + 10;


        score.innerHTML = "score :" + player.score

        draw();

    }
    if (garbage_x_7 == player_x + 0) {
        garbage_width_7 = 0;
        garbage_height_7 = 0;
        player.score = player.score + 10;


        score.innerHTML = "score :" + player.score

        draw();
    }

    if (garbage_x_8 == player_x + 0) {
        garbage_width_8 = 0;
        garbage_height_8 = 0;
        player.score = player.score + 10;


        score.innerHTML = "score :" + player.score


        draw();
    }


    if (garbage_x_9 == player_x + 0) {
        garbage_width_9 = 0;
        garbage_height_9 = 0;
        player.score = player.score + 10;


        score.innerHTML = "score :" + player.score


        draw();
    }


    if (garbage_x_10 == player_x + 0) {
        garbage_width_10 = 0;
        garbage_height_10 = 0;
        player.score = player.score + 10;


        score.innerHTML = "score :" + player.score


        draw();
    }

    if (garbage_x_11 == player_x + 0) {
        garbage_width_11 = 0;
        garbage_height_11 = 0;
        player.score = player.score + 10;


        score.innerHTML = "score :" + player.score

        draw();

    }
    if (garbage_x_12 == player_x + 0) {
        garbage_width_12 = 0;
        garbage_height_12 = 0;
        player.score = player.score + 10;


        score.innerHTML = "score :" + player.score

        draw();
    }

    if (garbage_x_13 == player_x + 0) {
        garbage_width_13 = 0;
        garbage_height_13 = 0;
        player.score = player.score + 10;


        score.innerHTML = "score :" + player.score


        draw();
    }


    if (garbage_x_14 == player_x + 0) {
        garbage_width_14 = 0;
        garbage_height_14 = 0;
        player.score = player.score + 10;


        score.innerHTML = "score :" + player.score


        draw();
    }

if (garbage_x_15 == player_x + 0) {
        garbage_width_15 = 0;
        garbage_height_15 = 0;
        player.score = player.score + 10;


        score.innerHTML = "score :" + player.score


        draw();
    }

    function endGame() {
        player.start = false;
        startscreen.classList.remove('hide');
    	startscreen.innerHTML = "Game Over <br> Your final score is " + player.score +
				"<br> Press here to restart the game";
		
       //window.requestAnimationFrame(http://127.0.0.1:5500/);
       
       //window.requestAnimationFrame(gamePlay);
        
        
    }
    
    if (hurdles_y == player_x + 400) {
        player_height = 0;
        player_width = 0;
		
        endGame()

    }

    
    if (player_x == canvas.width) {
        window.location("")
    }
}