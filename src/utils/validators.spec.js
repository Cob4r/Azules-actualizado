// src/utils/validators.spec.js
import { validateEmail, validateName } from './validators';

// describe() agrupa pruebas para el archivo 'validators'
describe("Pruebas de Validadores (validators.js)", function() {

  // Un sub-grupo para la función 'validateEmail'
describe("Función validateEmail", function() {

    // it() es la prueba específica
    it("debería devolver true para un email válido", function() {
    expect(validateEmail("usuario@dominio.com")).toBe(true);
    expect(validateEmail("test.123@google.cl")).toBe(true);
    });

    it("debería devolver false para un email inválido", function() {
      expect(validateEmail("usuario.com")).toBe(false); // Falta @
      expect(validateEmail("usuario@dominio")).toBe(false); // Falta .com
      expect(validateEmail("@dominio.com")).toBe(false); // Falta usuario
    expect(validateEmail("")).toBe(false);
    expect(validateEmail(null)).toBe(false);
    });
});

  // Un sub-grupo para la función 'validateName'
describe("Función validateName", function() {

    it("debería devolver true para un nombre válido (2+ caracteres)", function() {
    expect(validateName("Cobar")).toBe(true);
    expect(validateName("Leo")).toBe(true);
      expect(validateName("  Celis  ")).toBe(true); // Prueba con espacios
    });

    it("debería devolver false para un nombre inválido", function() {
    expect(validateName("A")).toBe(false);
      expect(validateName("  ")).toBe(false); // Solo espacios
    expect(validateName("")).toBe(false);
    expect(validateName(null)).toBe(false);
    });
});

});