function newGrid(x,y) {
    var grid = new Array(x);
    for (var i = 0; i < grid.length; i++) {
        grid[i] = new Array(y);
    }
    grid.goodToGo = function (x,y) {
        return !grid[x][y];
    };
    return grid;
}


function Rover(direction, location) {
    var location_arr = location.split(",");
    location_arr[0] = parseInt(location_arr[0]);
    location_arr[1] = parseInt(location_arr[1]);
    
    this.direction = direction;
    this.lastLocation = location_arr.slice(); // slice() returns a shallow copy
    this.move = function (grid, commands) {
        var currentLocation = this.lastLocation.slice();
        var goAhead = true;
        for (var i = 0; i < commands.length; i++) {
            if (goAhead) {
                switch(commands.charAt(i)) {
                    case "f":
                        var moveForward = {
                          "N": [0,1],
                          "S": [0,-1],
                          "E": [1,0],
                          "W": [-1,0]
                        };
                        currentLocation[0] += moveForward[this.direction][0];
                        currentLocation[1] += moveForward[this.direction][1];
                    break;
                    case "b":
                        var moveBackward = {
                          "N": [0,-1],
                          "S": [0,1],
                          "E": [-1,0],
                          "W": [1,0]
                        };
                        currentLocation[0] += moveBackward[this.direction][0];
                        currentLocation[1] += moveBackward[this.direction][1];
                    break;
                    case "l":
                        var turnLeft = {
                          "N": "W",
                          "S": "E",
                          "E": "N",
                          "W": "S"
                        };
                        this.direction = turnLeft[this.direction];
                    break;
                    case "r":
                        var turnRight = {
                          "N": "E",
                          "S": "W",
                          "E": "S",
                          "W": "N"
                        };
                        this.direction = turnRight[this.direction];
                    break;
                }
                // implement spheric wrapping
                if (currentLocation[0] >= grid.length) {
                    currentLocation[0] = currentLocation[0] - grid.length;
                } else if (currentLocation[0] < 0) {
                    currentLocation[0] = currentLocation[0] + grid.length;
                }
                if (currentLocation[1] >= grid[0].length) {
                    currentLocation[1] = currentLocation[1] - grid[0].length;
                } else if (currentLocation[1] < 0) {
                    currentLocation[1] = currentLocation[1] + grid[0].length;
                }
                // check for obstacles
                if (grid.goodToGo(currentLocation[0], currentLocation[1])) {
                    this.lastLocation = currentLocation.slice();
                } else {
                    goAhead = false;
                    console.log("Oops! Somebody got here before you did.");
                }
            } // if goAhead
        }  // for
        grid[this.lastLocation[0]][this.lastLocation[1]] = this;
    }; // this.move
} // function Rover