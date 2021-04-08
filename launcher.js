class Launcher{

    constructor(bodyA,pointB){

     var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.004,
            length:10
          
          }
              this.launch = Matter.Constraint.create(options)
              this.pointB = pointB
            World.add(world,this.launch)


    }

    fly(){

    this.launch.bodyA = null


    }
     
    display(){
    
    if(this.launch.bodyA){

        var pointA = this.launch.bodyA.position;
        var pointB = this.pointB
        push()
        strokeWeight(5);
        line(pointA.x+20,pointA.y+20,pointB.x,pointB.y+50);
        pop()



    }    
       


    }

}