
  var randomNumber1 = Math.random() * 6; // 1 - 6
  randomNumber1 = Math.floor(randomNumber1) + 1; //não pode ser zero e precisa ser inteiro
  //console.log(randomNumber1);
  
  var randomDicee = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

  var randomImageSource = "images/" + randomDicee; //imagems/dice1.png - images/dice6.png

  var image1 = document.querySelectorAll("img")[0];   //duas imagens ao invés de uma


  image1.setAttribute('src', randomImageSource) //1 - atributo
                                                // 2 - paramentro que será mudado



  
  
  var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1 - 6

  var randomDicee2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

  var randomImageSource2 = "images/" + randomDicee2; //imagems/dice1.png - images/dice6.png

  var image2 = document.querySelectorAll("img")[1];   //duas imagens ao invés de uma
  image2.setAttribute('src', randomImageSource2)


                                                
