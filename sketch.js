var ball, ballimg,img,paddleimg,paddle;
function preload() {
  /* preload your images here of the ball and the paddle */
 ballimg=loadImage('ball.png');
 paddleimg=loadImage('paddle.png'); 
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball=createSprite(200,200,20,20)
  ball.addImage(ballimg);
  
  paddle=createSprite(370,200,20,100)
  paddle.addImage(paddleimg)
  
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX=-5;
  ball.velocityY=5
}


function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
     edges=createEdgeSprites();
     ball.bounceOff(edges[0]);
     ball.bounceOff(edges[2]);
     ball.bounceOff(edges[3]);
     ball.bounceOff(paddle);

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.velocityX=0;
    paddle.velocityY=-9;
    
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityX=0;
    paddle.velocityY=9;
  }
   
 

  
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

