/*******  cajero      ***********/

/***variables***/

let usuario = prompt('ingrese su usuario')
let clave = prompt('ingrese la contrasena')
const saldo = 5000
const usuarioCorrecto = 'feliguti'
const claveCorrecto = '1234'

/*** condicionales y operadores logicos ***/

if (clave === claveCorrecto && usuario === usuarioCorrecto) {
  alert(`su saldo es ${saldo}`)
} else if (clave !== claveCorrecto || usuario !== usuarioCorrecto) {
  alert(` Su usuario  o contrasena son incorrectos le quedan 3 intentos`)
  usuario = prompt('ingrese su usuario')
  clave = prompt('ingrese la contrasena')
  if (clave === claveCorrecto && usuario === usuarioCorrecto) {
    alert(`su saldo es ${saldo}`)
  } else if (clave !== claveCorrecto || usuario !== usuarioCorrecto) {
    alert(` Su usuario  o contrasena son incorrectos le quedan 2 intentos`)
    usuario = prompt('ingrese su usuario')
    clave = prompt('ingrese su clave')
  }
  if (clave === claveCorrecto && usuario === usuarioCorrecto) {
    alert(`su saldo es ${saldo}`)
  } else if (clave !== claveCorrecto || usuario !== usuarioCorrecto) {
    alert(` Su usuario  o contrasena son incorrectos le queda 1 intento`)
    usuario = prompt(`ingrese su usuario`)
    clave = prompt(`ingrese su clave`)
  }
  if (clave === claveCorrecto && usuario === usuarioCorrecto) {
    alert(`su saldo es ${saldo}`)
  } else alert(`cuenta bloqueada `)
}
