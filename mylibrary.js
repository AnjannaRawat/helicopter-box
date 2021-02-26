function touching(object1, object2){
  
    if((object1.x-object2.x)<(object2.width+object1.width)/2 
    && (object2.x-object1.x)<(object2.width+object1.width)/2
    &&(object2.y-object1.y)<(object2.height+object1.height)/2 
    &&(object1.y-object2.y)<(object2.height+object1.height)/2)
    {
      
      return true;
    }
    else{
      return false;
      
    }
    
  }

  function bouncingOff(object1, object2){
  
    if((object1.x-object2.x)<(object2.width+object1.width)/2 
    && (object2.x-object1.x)<(object2.width+object1.width)/2)
    {
      
     object1.velocityX=object1.velocityX*(-1)   

    }
    if((object2.y-object1.y)<(object2.height+object1.height)/2 
    &&(object1.y-object2.y)<(object2.height+object1.height)/2){
     
        object1.velocityY=object1.velocityY*(-1)  
        
    }
    
  }
  function colliding(object1,object2){

    if((object1.x-object2.x)<(object2.width+object1.width)/2 
    && (object2.x-object1.x)<(object2.width+object1.width)/2)
    {
      
     object1.velocityX=0

    }
    if((object2.y-object1.y)<(object2.height+object1.height)/2 
    &&(object1.y-object2.y)<(object2.height+object1.height)/2){
     
        object1.velocityY=0
        
    }


  }