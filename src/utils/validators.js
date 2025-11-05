// src/utils/validators.js

/**
 * Valida si un email tiene un formato básico.
 * @param {string} email
 * @returns {boolean}
 */
export function validateEmail(email) {
if (!email) return false;
  // Expresión regular simple para validar email
const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
return re.test(String(email).toLowerCase());
}

/**
 * Valida si un nombre tiene al menos 2 caracteres.
 * @param {string} name
 * @returns {boolean}
 */
export function validateName(name) {
if (!name) return false;
return name.trim().length > 1;
}