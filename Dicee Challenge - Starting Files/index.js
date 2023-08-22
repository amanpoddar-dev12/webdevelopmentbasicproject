let randomNumber1=Math.floor(Math.random() * 5) + 1;
let randomNumber2=Math.floor(Math.random() * 5) + 1;

if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML="Player 1 Win!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector('h1').innerHTML="Player 2 win!";
}
else{
    document.querySelector('h1').innerHTML="Match Drawn!!"
}

// var firstImageSrc="images/dice"+randomNumber1+".png";

// var secondImageSrc="images/dice"+randomNumber2+".png";
// // ///Step 4
// document.querySelector("img.img1").setAttribute("src",firstImageSrc);
// document.querySelector("img.img2").setAttribute("src",secondImageSrc);

// if(randomNumber1==1){
//     document.querySelector('img')[0].in
// }

// var image=document.querySelector('img')[0];
// console.log(image)

if(randomNumber1==1){
    document.querySelector("img.img1").setAttribute("src","images/dice1.png");
    console.log(randomNumber1)
}
if(randomNumber1==2){
    document.querySelector("img.img1").setAttribute("src","images/dice2.png");
    console.log(randomNumber1)
}
if(randomNumber1==3){
    document.querySelector("img.img1").setAttribute("src","images/dice3.png");
    console.log(randomNumber1)
}
if(randomNumber1==4){
    document.querySelector("img.img1").setAttribute("src","images/dice4.png");
    console.log(randomNumber1)
}
if(randomNumber1==5){
    document.querySelector("img.img1").setAttribute("src","images/dice5.png");
    console.log(randomNumber1)
}

if(randomNumber2==1){
    document.querySelector("img.img2").setAttribute("src","images/dice1.png");
    console.log(randomNumber2)
}
if(randomNumber2==2){
    document.querySelector("img.img2").setAttribute("src","images/dice2.png");
    console.log(randomNumber2)
}
if(randomNumber2==3){
    document.querySelector("img.img2").setAttribute("src","images/dice3.png");
    console.log(randomNumber2)
}
if(randomNumber2==4){
    document.querySelector("img.img2").setAttribute("src","images/dice4.png");
    console.log(randomNumber2)
}
if(randomNumber2==5){
    document.querySelector("img.img2").setAttribute("src","images/dice5.png");
    console.log(randomNumber2)
}

