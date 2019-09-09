function golfScore(par, strokes){
    switch(strokes){
        case 1 : return GOLF_SCORES.HOLE_IN_ONE
        case par - 1 : return GOLF_SCORES.BIRDIE
        case par : return GOLF_SCORES.PAR
        case par + 1 : return GOLF_SCORES.BOGEY
        case par + 2: return GOLF_SCORES.DOUBLE_BOGEY
        default: if(strokes <= par - 2) {
                            return GOLF_SCORES.EAGLE 
                        }else{
                            return GOLF_SCORES.GO_HOME
                        }
    }    
};

var GOLF_SCORES = {
    HOLE_IN_ONE: "Hole-in-one",
    EAGLE: "Eagle",
    BIRDIE: "Birdie",
    PAR: "Par",
    BOGEY: "Bogey",
    DOUBLE_BOGEY: "Double Bogey",
    GO_HOME: "Go Home!"
  };

  export {golfScore, GOLF_SCORES};