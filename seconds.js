class Seconds{
    constructor(x,y){
        //sc=second();
    }
   
    display(){
        angleMode(DEGREES);
        push();
        rotate(scAngle);
        stroke(255,0,0);
        strokeWeight(10);
        line(0,0,130,0);
        pop();

    }
}