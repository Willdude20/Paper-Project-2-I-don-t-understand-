function keyPressed(){
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    }
}