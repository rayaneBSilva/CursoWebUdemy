var nota1 = +prompt(" Informe a primeira nota do aluno: ")
var nota2 = +prompt(" Informe a segunda nota: ")

//Calculo da media
var media = ((nota1 + nota2) / 2)
    document.write("a media do aluno é: ", media, "<br>", "<br>")

//Pedido da frequencia
var frequencia = prompt(" informe a frequencia do aluno: ")

//Verifica se está aprovado
if (media >= 7 && frequencia >= 75){
    document.write(" o aluno está aprovado ")
}

else {
    document.write("<br>" , " o aluno está reprovado ")
}