function Salvar(){
    localStroage.setItem("nome" ,document.getElementByOd("nome").value);
    localStroage.setItem("cor" ,document.getElementByOd("cor").value);
    localStroage.setItem("idade" ,document.getElementByOd("idade").value);
    localStroage.setItem("cidade" ,document.getElementByOd("cidade").value);
}

window.onload - function(){
  document.getElementByOd("nome").value = localStroage.getItem("nome");
  document.getElementByOd("cor").value = localStroage.getItem("cor");
  document.getElementByOd("body").background = localStroage.getItem("body");
  document.getElementByOd("idade").value = localStroage.getItem("idade");
  document.getElementByOd("cidade").value = localStroage.getItem("cidade");
}