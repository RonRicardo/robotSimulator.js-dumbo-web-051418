class Robot {
	//your solution here
  constructor(coordinates, bearing = 'north'){
    this.coordinates = [0, 0]
    this.bearing = bearing;
  }
  setCoordinates(a, b){
    this.coordinates[0] = a;
    this.coordinates[1] = b;
  }
  setBearing(bearing){
    const validBearings = ['north', 'east', 'south', 'west']
    if (!validBearings.includes(bearing)){
      throw 'Invalid Robot Bearing';
    }
   this.bearing = bearing;
  }
  place(obj){
    this.setCoordinates(obj.x, obj.y)
    this.setBearing(obj.direction)
  }
  turnRight(){
    if (this.bearing === 'north'){
      this.bearing = 'east'
    } else if (this.bearing === 'east') {
      this.bearing = 'south'
    } else if (this.bearing === 'south'){
      this.bearing = 'west'
    } else if (this.bearing === 'west'){
      this.bearing = 'north'
    }
  }
  turnLeft(){
    if (this.bearing === 'north'){
      this.bearing = 'west'
    } else if (this.bearing === 'east') {
      this.bearing = 'north'
    } else if (this.bearing === 'south'){
      this.bearing = 'east'
    } else if (this.bearing === 'west'){
      this.bearing = 'south'
    }
  }
  advance(){
    if (this.bearing === 'north'){
      this.coordinates[1] += 1 // this.coordinates[1] + whatever?
    } else if (this.bearing === 'east') {
      this.coordinates[0] += 1
    } else if (this.bearing === 'south'){
      this.coordinates[1] -= 1
    } else if (this.bearing === 'west'){
      this.coordinates[0] -= 1
    }
  }
  translateInstructions(string){
    let newStr = string.split("")
    newStr.forEach( (letter) => {
      if (letter === 'L'){
        this.turnLeft();
      } else if (letter === 'R'){
        this.turnRight();
      } else if (letter === 'A'){
        this.advance();
      }
    })
  }
}
