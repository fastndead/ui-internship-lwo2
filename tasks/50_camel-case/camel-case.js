/* eslint-disable no-extend-native */
String.prototype.camelCase = function() {
  return this.replace(/ +[a-z]|^[a-z]/gi, (item) => {
    return item.split('')[item.length - 1].toLocaleUpperCase();
  });
};
