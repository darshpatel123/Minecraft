var canvas = new fabric.Canvas("myCanvas");
block_width= 30;
block_height= 30;
player_x=500;
player_y=400;

var player_object="";
function updateimage(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
    canvas.add(player_object);

});
}
var block_image_object="";

function newimage(get_image){
    fabric.Image.fromURL(get_image,function(Img){
      block_image_object=Img;
      block_image_object.scaleToWidth(block_width);
      block_image_object.scaleToHeight(block_height);
      block_image_object.set({
            top:player_y,
            left:player_x
        });
    canvas.add(block_image_object);

    
});
}
window.addEventListener("keydown",my_keyisdown);

function my_keyisdown(e){
keypressed=e.keyCode;
console.log("key is pressed-"+keypressed);
if(e.shiftKey==true && keypressed=='80'){
    console.log("shiftkeypressed with p");
    block_width=block_width+10;
    block_height=block_height+10;
    document.getElementById("width").innerHTML=block_width;
    document.getElementById("height").innerHTML=block_height;
}
if(e.shiftKey==true && keypressed=='86'){
    console.log("shiftpressedwith v");
    block_height=block_height-10;
    block_width=block_width-10;
    document.getElementById("width").innerHTML=block_width;
    document.getElementById("height").innerHTML=block_height;

}

if(keypressed=='67'){
newimage('cloud.jpg');
console.log("c!!!!!!!");
}
if(keypressed=='68'){
    newimage('dark_green.png');
    console.log("d!!!!!!!");
    }

    if(keypressed=='71'){
        newimage('ground.png');
        console.log("g!!!!!!!");
        }




        if(keypressed=='76'){
            newimage('light_green.png');
            console.log("l!!!!!!!");
            }



            
            if(keypressed=='68'){
                newimage('dark_green.png');
                console.log("d!!!!!!!");
                }

                if(keypressed=='82'){
                    newimage('roof.jpg');
                    console.log("r!!!!!!!");
                    }

                    if(keypressed=='84'){
                        newimage('trunk.jpg');
                        console.log("t!!!!!!!");
                        }
                        if(keypressed=='85'){
                            newimage('unique.png');
                            console.log("u!!!!!!!");
                            }
                            if(keypressed=='87'){
                                newimage('wall.jpg');
                                console.log("w!!!!!!!");
                                }
                                if(keypressed=='89'){
                                    newimage('yellow_wall.png');
                                    console.log("y!!!!!!!");
                                    }

                                    if(keypressed=='38'){
                                        up();
                                        console.log("up");
                                        }
                                        if(keypressed=='40'){
                                            down();
                                            console.log("down");
                                            }
                                            if(keypressed=='37'){
                                                left();
                                                console.log("left");
                                                }
                                                if(keypressed=='39'){
                                                    right();
                                                    console.log("right");
                                                    }
}
function up(){
if(player_y >= 0){
    player_y = player_y-block_height;
    console.log("Player y is"+player_y+"Player x is"+player_x);
    console.log("height of block is "+block_height+"width of block is "+block_width);
    canvas.remove(player_object);
    updateimage();

}    
}
function down(){
    if(player_y<=600){
        player_y= player_y+block_height;
        console.log("Player y is"+player_y+"Player x is"+player_x);
        console.log("height of block is "+block_height+"width of block is "+block_width);
        canvas.remove(player_object);
        updateimage();
}
}
function right(){
    if(player_x>=0){
        player_x=player_x-block_width;
        console.log("Player y is"+player_y+"Player x is"+player_x);
        console.log("height of block is "+block_height+"width of block is "+block_width);
        canvas.remove(player_object);
        updateimage();
    }
}
function left(){
    if(player_x<=1000){
        player_x=player_x+block_width;
        console.log("Player y is"+player_y+"Player x is"+player_x);
        console.log("height of block is "+block_height+"width of block is "+block_width);
        canvas.remove(player_object);
        updateimage();    
    }
}

