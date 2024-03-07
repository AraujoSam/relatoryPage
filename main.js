function vName()
{
    let name = document.getElementById("name_input").value

    if(isNaN(name))
    {
        document.getElementById("name_alert").innerHTML="submited"
    } else 
        document.getElementById("name_alert").innerHTML="Only letters are allowed"
        document.getElementById("name_input").value = "";
 }
 
 function vEmail(){
    let email = document.getElementById("email_input").value

    if(isNaN(email)){
        document.getElementById("email_alert").innerHTML="submited"
    } else document.getElementById("email_alert").innerHTML="Only letters are allowed"
            document.getElementById("email_input").value = "";
 }

 function vTelephone(){
    let telephone = document.getElementById("telephone_input").value

    if(isNaN(telephone) || telephone.length!==9){
        document.getElementById("telephone_alert").innerHTML="Only numbers are allowed"
    } else document.getElementById("telephone_alert").innerHTML="submited"
           document.getElementById("telephone_input").value = "";
 }


 function vCpf(){
    let cpf = document.getElementById("cpf_input").value

    if(isNaN(cpf) ||cpf.length!==11){
        document.getElementById("cpf_alert").innerHTML="Only number are allowed"
    } else document.getElementById("cpf_alert").innerHTML="submited"
            document.getElementById("cpf_input").value = "";
 }

 
function final(){
     
    vName();
    vEmail();
    vTelephone();
    vCpf();

     if (document.getElementById("name_alert").innerHTML === "submited" &&
        document.getElementById("email_alert").innerHTML === "submited" &&
        document.getElementById("telephone_alert").innerHTML === "submited" &&
        document.getElementById("cpf_alert").innerHTML === "submited")
        {
            document.getElementById("hiddenMessage").innerHTML = "It worked!";
        }
}
