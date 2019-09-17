export function SimTime() {
  let simTime = 0;
  let realTime = 0;
  let speed = 1;

  SimTime.prototype.get = function() {
    return simTime;
  };

  SimTime.prototype.setSpeed = function(newSpeed) {
    speed = newSpeed;
  };

  SimTime.prototype.update = function(currentRealtime) {
    simTime = simTime + ((currentRealtime - realTime) * speed);
    realTime = currentRealtime;
  };
}
