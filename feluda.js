var man
var ground

function preload(){
man_image=loadImage("man.png")
}

function setup(){
createCanvas(600,200)

man=(200,300,50,50)
man.addImage("man_image")
}

function draw(){
background("white")
drawSprites()
}