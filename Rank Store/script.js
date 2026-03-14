// ===============
//  skeleton loader  
// ===============
function hideSkeleton(){
  document.getElementById("qrSkeleton").classList.add("hidden");
}

function showFallback(){
  document.getElementById("qrSkeleton").classList.add("hidden");
  document.getElementById("qr").src = "/static/default_qr.png";
}
// ===============
// QR CODE SELECTION  
// ===============
function changeRank(){

    var rank = document.getElementById("rank").value;
    var qr = document.getElementById("qr");

    if(rank=="VIP"){
        qr.src="/static/qr_vip.png";
    }
    else if(rank=="MVP"){
        qr.src="/static/qr_mvp.png";
    }
    else if(rank=="MVP+"){
        qr.src="/static/qr_mvp+.png";
    }
    else if(rank=="EPIC"){
        qr.src="/static/qr_epic.png";
    }
    else if(rank=="KINGDOM"){
        qr.src="/static/qr_kingdom.png";
    }
}

// ===============
// FILE CHECKING
// ===============
const fileUpload = document.getElementById("fileUpload");

const fileName = document.getElementById("fileName");
fileUpload.addEventListener("change", function() {
  if(this.files.length > 0) {
    fileName.textContent = "បានអាប់ឡូត";
  }
  else {
    fileName.textContent = "សូមអាប់ឡូតរូបថតបង់ប្រាក់";
  }
});

// ===============
// DATE
// ===============
let today = new Date();

let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

let fullDate = day + "/" + month + "/" + year;

document.getElementById("date").innerHTML = fullDate;

// ============================== //
// AUTO PAYMENT SEND TO TELEGRAM  //
// ============================== //

function sendOrder(){

let username = document.getElementById("username").value;
let rank = document.getElementById("rank").value;
let file = document.getElementById("fileUpload").files[0];

let price="";

if(rank=="VIP"){price="$5";}
if(rank=="MVP"){price="$10";}
if(rank=="MVP+"){price="$15";}
if(rank=="EPIC"){price="$20";}
if(rank=="KINGDOM"){price="$15";}

if(username==""){
    alert("Please fill your minecraft username.");
    return;
}
if(file==undefined){
    alert("Please upload the payment screenshot.");
    return;
}

let now = new Date();

let date = now.toLocaleDateString();
let time = now.toLocaleTimeString();

let invoiceID = Math.floor(Math.random()*100000);

let caption =
"ᯓ»NEW RANK ORDERᯓ»\n"+
"════════════════\n"+
"ᯓ» ᴜѕᴇʀɴᴀᴍᴇ: "+username+"\n"+
"ᯓ» ɪɴᴠᴏɪᴄᴇ: #"+invoiceID+"\n"+
"ᯓ» ʀᴀɴᴋ: "+rank+"\n"+
"ᯓ» ᴘʀɪᴄᴇ: "+price+"\n\n"+
"ᯓ» ᴅᴀᴛᴇ: "+date+"\n"+
"ᯓ» ᴛɪᴍᴇ: "+time;

let token="8761120517:AAE269gLZnLJANYnKdImyBAJR-b34ipq4sk";
let chat_id="-1003699485147";

let formData = new FormData();

formData.append("chat_id", chat_id);
formData.append("photo", file);
formData.append("caption", caption);

fetch(`https://api.telegram.org/bot${token}/sendPhoto`,{
method:"POST",
body:formData
});

window.open(`/Rank Store/Successfully.html`)

}
