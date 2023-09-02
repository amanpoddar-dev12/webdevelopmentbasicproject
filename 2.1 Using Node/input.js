
// function add(){
//     let msg=document.querySelector("msg");
//     let h1=document.querySelector("h1");
//     h1.innerText(msg);
//     // $("h1").text(msg)
// }

function add(){
    let msg = document.querySelector("#msg"); // Corrected selector for ID
    let h1 = document.querySelector("h1");
    h1.innerText = msg.value; // Corrected assignment syntax
    // console.log(h1)
    console.log(msg.value)
}
