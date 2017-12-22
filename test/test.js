
const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function(){
  it('Si la palabra termina en "ar" se le quita esos dos caracteres',function(){
    const translation =platzom("Programar")
    expect(translation).to.equal("Program")
  })
  it('la palabra empieza con Z se le añade P al final',function(){
    const translation = platzom("zorro")
    const translation1 = platzom("zarpar")
    expect(translation).to.equal("zorrope")
    expect(translation1).to.equal("zarppe")
  })
  it('Si la palabra traducida tiene 10 o mas letras, se debe partir a la mitad y unir con un guión medio',function(){
    const translation = platzom("abecedario")
		expect(translation).to.equal("abece-dario")
  })
  it('Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúmayúsculas',function(){
    const translation = platzom("sometemos")
		expect(translation).to.equal("SoMeTeMoS")	
  })
})
