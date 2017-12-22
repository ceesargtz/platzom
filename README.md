# Platzom

Platzom es un idioma inventado para el [Curso de
fundamentos de JavaScript](https://platzi.com/js)
de platzi

##Descripcion
- Si la palabra termina en "ar" se le quita esos dos caracteres
- Si la palabra empieza con Z se le añade P al final
- Si la palabra traducida tiene 10 o mas letras, se debe partir a la mitad y unir con un guión medio
- Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas

## Instalación

```
npm install platzom
```

##Uso
```
import platzom from 'platzom'

console.log(platzom("Programar"))
console.log(platzom("Zorro"))
console.log(platzom("Zarpar"))
console.log(platzom("abecedario"))
console.log(platzom("sometemos"))
```

## Créditos
- [César Gutierrez](https://twitter.com/CeesarGuti)

##license

[MIT](https://opensource.org/licenses/MIT)
