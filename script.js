let paisAno = [
    '1930 - Uruguai',
    '1934 - Itália',
    '1938 - Itália',
    '1950 - Uruguai',
    '1854 - Alemanha',
    '1958 - Brasil',
    '1962 - Brasil',
    '1966 - Inglaterra',
    '1970 - Brasil',
    '1974 - Alemanha',
    '1978 - Argentina',
    '1982 - Itália',
    '1986 - Argentina',
    '1990 - Alemanha',
    '1994 - Brasil',
    '1998 - Argentina',
    '2002 - Brasil',
    '2006 - Itália',
    '2010 - Espanha' ,
    '2014 - Alemanha',
    '2018 - Argentina'

]

let historico = document.getElementById('paises')

for (let index = 0; index < paisAno.length; index +=1){
    let ranking = (paisAno[index])
    
    let listaDePaises = document.createElement('li')
    listaDePaises.innerText = ranking;
    
    historico.appendChild(listaDePaises)
}