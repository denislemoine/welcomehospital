function  Init() {
    var message=document.getElementById('inputMessage').value
    document.getElementById('buttonSend').addEventListener('click',function e() {
        document.getElementById('emptyDiv').innerHTML='<div class=\"msg_cotainer_send\">Merci, à vous aussi<span class=\"msg_time_send\">9:10 AM, Today</span></div><div class=\"img_cont_msg\"><img src=\"assets/images/logo-denis-r-s.png\" class=\"rounded-circle user_img_msg\"></div></div>'
    })
}