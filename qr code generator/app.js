
let  ımgQr = document.getElementById("ımgQr");
let  qrPhoto = document.getElementById("qrPhoto");
let  genQr = document.getElementById("genQr");


function  qrGenerate() {

 if(genQr.value.length > 0 )   {

    qrPhoto.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Hi%20!%20:)" + genQr.value; ımgQr.classList.add("show-img");
}else {
    genQr.classList.add('error');
    setTimeout(() => {
        genQr.classList.remove('error');
    },1000);
}

 }  

   