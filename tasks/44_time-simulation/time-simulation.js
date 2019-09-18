export function SimTime() {
  this.simTime = 0;
  this.realTime = 0;
  this.speed = 1;
}

SimTime.prototype.get = function() {
  return this.simTime;
};

SimTime.prototype.setSpeed = function(newSpeed) {
  this.speed = newSpeed;
};

SimTime.prototype.update = function(currentRealtime) {
  this.simTime = this.simTime +
    ((currentRealtime - this.realTime) * this.speed);
  this.realTime = currentRealtime;
};
