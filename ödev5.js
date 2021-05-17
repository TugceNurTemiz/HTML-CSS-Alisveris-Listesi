var girilen,secilen;
var eklenen,btnSil;

function listeyeEkle()
{
    girilen=document.getElementById("s-input").value;

    if(girilen!="")
    {
        eklenen=document.createElement("li");
        document.getElementById("liste").appendChild(eklenen);
        eklenen.innerHTML=girilen;

        btnSil=document.createElement("img");
        eklenen.appendChild(btnSil);
        btnSil.setAttribute("src","images/sil.png");     
        btnSil.addEventListener("click",sil);
        console.log(btnSil);
    }
}
function sil()
{
    secilen=event.currentTarget.parentNode;
    secilen.remove();   
}

function listeyiTemizle(){

    girilen=document.getElementById("s-input").value;

    if(girilen!=""){
        document.getElementById("liste").innerHTML = "";
    }
    else alert("Liste dolu değil!");
    
}
