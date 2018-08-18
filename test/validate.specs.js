const assert = require('chai').assert;
global.window = global;
require('validate.js'); 

describe('Validar marcadores', () => {
  describe('Debería marcar los restaurantes dentro del radio', () => {
    it('Deberia contener una función específica para esto', () => {
      assert.isFunction(createMarker);
    });  
  });    
});