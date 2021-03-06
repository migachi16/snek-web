v_x = v_y = 0;

snek_x = snek_y = 10;

grid = tile = 25;

dot_x = dot_y = 20;

trail = [];

tail = 3;


window.onload = function() {
    board = document.getElementById("BOARD");
    context = board.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000 / 30);
}

function game() {
    snek_x += v_x;
    snek_y += v_y;
    if(snek_x < 0) {
        snek_x = tile - 1;
    }
    if(snek_x > tile - 1) {
        snek_x = 0;
    }
    if(snek_y < 0) {
        snek_y = tile - 1;
    }
    if(snek_y > tile - 1) {
        snek_y = 0;
    }
    context.fillStyle = "teal";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "red";
    context.fillRect(dot_x * grid, dot_y * grid, grid - 2, grid - 2);

    context.fillStyle = "gold";
    for(var i = 0; i < trail.length; i++) {
        context.fillRect(trail[i].x * grid, trail[i].y * grid, grid - 2, grid - 2);
        if(trail[i].x == snek_x && trail[i].y == snek_y) {
            tail = 3;
        }
    }

    trail.push({x: snek_x, y: snek_y});

    while(trail.length > tail) {
        trail.shift();
    }

    if(dot_x == snek_x && dot_y == snek_y) {
        tail++;
        dot_x = Math.floor(Math.random() * tile);
        dot_y = Math.floor(Math.random() * tile);
    }
        
}

function keyPush(event) {
    switch(event.keyCode) {
        case 37:
            v_x = -1;
            v_y = 0;
            break;
        case 38:
            v_x = 0;
            v_y = -1;
            break;
        case 39:
            v_x = 1;
            v_y = 0;
            break;
        case 40:
            v_x = 0;
            v_y = 1;
            break;
    }
}
