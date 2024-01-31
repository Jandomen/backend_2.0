
async function runTests() {
    const mocha = await import('mocha');
    const chai = await import('chai');
    const assert = chai.assert;
    const funciones = require('../funciones');
  
    const { describe, it } = mocha;
  
    describe('Funciones', () => {
      describe('sumar', () => {
        it('debería sumar dos números correctamente', () => {
          assert.equal(funciones.sumar(2, 3), 8);
        });
      });
  
      describe('restar', () => {
        it('debería restar dos números correctamente', () => {
          assert.equal(funciones.restar(5, 3), 2);
        });
      });
    });
  }
  
  runTests().catch(error => {
    console.error('Error al importar módulos:', error);
  });
  