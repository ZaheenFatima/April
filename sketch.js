var paddle,paddle_image;
var ball,ball_image;
function preload() {
  /* preload your images here of the ball and the paddle */
   ball_image = loadImage("ball.png");
  paddle_image = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(50,250,5,5);
  paddle = createSprite(365,265,5,5);
 
  /* assign the images to the sprites */
  ball.addImage("ball", ball_image);
  paddle.addImage("paddle", paddle_image);
  
  /* give the ball an initial velocity of 9 in the X direction */
  
ball.velocityX = 9 ;
ball.velocityY = 3;  
}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  /* Allow the ball to bounceoff from the paddle */
   ball.bounceOff(paddle);
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
paddle.collide(edges);
  /* Prevent the paddle from going out of the edges */ 
  paddle.bounceOff(edges);
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
      paddle.y = paddle.y - 20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.y = paddle.y + 20;
  }
  randomVelocity();
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
 if(ball.bounceOff(paddle)){
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
   ball.velocityY = random(1,5);
 }
}

