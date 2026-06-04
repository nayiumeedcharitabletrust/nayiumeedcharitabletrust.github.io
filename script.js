console.log("Website Loaded");

function setAmount(value){
    document.getElementById("amount").value = value;
}

function generateQR(){
    let amount = document.getElementById("amount").value;

    if(amount === ""){
        alert("Please enter donation amount");
        return;
    }

    let upiID = "47152026022059455@cbin";
    let name = "Nayi Umeed Charitable Trust";

    let upiLink = "upi://pay?pa=" + upiID + "&pn=" + name + "&am=" + amount + "&cu=INR";

    document.getElementById("qrcode").innerHTML = "";

    new QRCode(document.getElementById("qrcode"), {
        text: upiLink,
        width: 220,
        height: 220
    });

    let msg = document.getElementById("successMsg");
    msg.style.display = "block";
    msg.innerHTML = "✅ Thank you for your donation! Please complete the payment by scanning the QR code.";
}

function sendToWhatsApp(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let whatsappNumber = "918957252682"; // apna number

    let text =
`*New Enquiry Received*

👤 Name: ${name}

📱 Mobile: ${mobile}

📧 Email: ${email}

📌 Enquiry Type: ${subject}

📝 Message:
${message}`;

    let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
}