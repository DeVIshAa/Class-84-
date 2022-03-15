canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
NasaMarsImagesArray=["NASA Image 1.jpg", "NASA Image 2.jpg", "NASA Image 3.jpg", "NASA Image 4.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
rover_width=100;
rover_height=90;
background_image=NasaMarsImagesArray[random_number];
console.log("background_image = "+background_image);
rover_image="rover.png";
rover_x=10;
rover_y=10;
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=background_image;
    rover_imgTag= new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;
}
function uploadbackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="37")
    {
        left();
        console.log("left");
    }
    if(keyPressed=="38")
    {
        up();
        console.log("up");
    }
    if(keyPressed=="39")
    {
        right();
        console.log("right");
    }
    if(keyPressed=="40")
    {
        down();
        console.log("down");
    }
}
function left()
{
    if(rover_x >= 0)
    {
        rover_x=rover_x-10;
        console.log("When Left Arrow Key is Pressed, X= " +rover_x+" Y = "+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function right()
{
    if(rover_x <= 700)
    {
        rover_x=rover_x+10;
        console.log("When Right Arrow Key is Pressed, X= " +rover_x+" Y = "+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function up()
{
    if(rover_y >= 0)
    {
        rover_y=rover_y-10;
        console.log("When Up Arrow Key is Pressed, X= " +rover_x+" Y = "+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function down()
{
    if(rover_y <= 500)
    {
        rover_y=rover_y+10;
        console.log("When Down Arrow Key is Pressed, X= " +rover_x+" Y = "+rover_y);
        uploadbackground();
        uploadrover();
    }
}