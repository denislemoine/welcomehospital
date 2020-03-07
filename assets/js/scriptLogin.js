function Init(){
    //Variables Initiales
    var buttonSubmit = document.getElementById('buttonSubmit')

    buttonSubmit.addEventListener('click',function e(){checkLoginInputs()});
}

function checkLoginInputs(){

    //Variables d'éléments HTML
    var inputIdentifiant = document.getElementById('inputIdentifiant')
    var inputPassword = document.getElementById('inputPassword')
    var divError = document.getElementById('divError')

    //Valeur des inputs
    var identifiant = inputIdentifiant.value
    var password = inputPassword.value 

    //contrôle input ['identifiant']
    if(identifiant=="")
    {
        divError.innerHTML=''
        divError.innerHTML='<p class="alert alert-danger" style="margin-bottom: -15%;">Veuillez renseigner un identifiant</p>'
    }
    else
    {
        //Contrôle input ['mot de passe']
        if(password=="")
        {
            divError.innerHTML=''
            divError.innerHTML='<p class="alert alert-danger" style="margin-bottom: -15%;">Veuillez renseigner un mot de passe</p>'

        }
        //si les inputs sont correct
        else
        {
            divError.innerHTML=''
            checkLogin();
        }
    }
}

function checkLogin(){
    //Variables d'éléments HTML
    var inputIdentifiant = document.getElementById('inputIdentifiant')
    var inputPassword = document.getElementById('inputPassword')
    var divError = document.getElementById('divError')

    //Valeur des inputs
    var identifiant = inputIdentifiant.value
    var password = inputPassword.value 
     
    if(identifiant=="admin" && password=="admin")
    {
        var session = sessionStorage
        session.setItem('nom','nom')
        session.setItem('prenom','prenom')
        session.setItem('admin','true')
        document.location.href="home.html"
    }
    else
    {
        if(identifiant=="utilisateur" && password=="utilisateur")
        {
            var session = sessionStorage
            session.setItem('nom','Nom')
            session.setItem('prenom','Prenom')
            session.setItem('admin','false')
            document.location.href="home.html"
        }
        else
        {
            divError.innerHTML=''
            divError.innerHTML='<p class="alert alert-danger" style="margin-bottom: -15%;">Identifiant ou mot de passe incorrect</p>'
        }
    }
}