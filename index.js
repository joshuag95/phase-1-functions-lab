function distanceFromHqInBlocks(someValue){
    if (someValue >= 42){
        return (someValue - 42)
    } 
    
    else if (someValue < 42){
        return (42 - someValue)
    }
}

function distanceFromHqInFeet(someValue){
   const blocks = distanceFromHqInBlocks(someValue);
    let feet = 264
    return blocks * feet
  }

  function distanceTravelledInFeet(start, destination){
       if (start > destination){
        return ((start-destination)*264)
    }
    else if (destination >= start){
        return ((destination - start) * 264)
    }
  }
  function calculatesFarePrice(start, destination){
   let distance 
    if ((start-destination)*264 < 400){
        return (0)
    }
     else if ((start-destination)*264 > 400 && (start-destination)*264 < 2000){
        return (((start-destination)*264-400)*.02)
    }
    }