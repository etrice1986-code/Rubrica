
// PASSO 1 : creare l'oggetto rubrica

// PASSO 2 : catturare la colonna dove andrano a creare tante cards quanti sono i nostri contatti

//PASSO 3 : creare un metodo che mostra tutti i contatti


//wrapper dei conttati
let contactsWrapper = document.querySelector('#contactsWrapper');

//Bottoni
let showContactsBtn = document.querySelector('#showContactsBtn')

const rubrica = {

    lista_contatti : [
        {contact_name : 'Yoda', phone_number : 33333333},

        {contact_name : 'Anskin', phone_number : 364444444},

        {contact_name : 'Obi-man', phone_number : 444444444},
    ],

    showContacts : function(){
        this.lista_contatti.forEach( (contatto)=> {
            let div = document.createElement('div');
            div.classList.add('card-custom')

            div.innerHTML = `
            
            <p class="lead">Nome</p>
            <p>3333333333</p>
            <i class="fa-solid fa-trash-can icon"></i>
            
            
            `;
           
            contactsWrapper.appendChild('div');

        });
    }
       
};

rubrica.showContacts();