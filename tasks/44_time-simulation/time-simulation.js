export function SimTime() {
  let simTime = 0;
  let realTime = 0;
  let speed = 1;

  this.get = function() {
    return simTime;
  };

  this.setSpeed = function(newSpeed) {
    speed = newSpeed;
  };

  this.update = function(currentRealtime) {
    simTime = simTime + ((currentRealtime - realTime) * speed);
    realTime = currentRealtime;
  };
}
