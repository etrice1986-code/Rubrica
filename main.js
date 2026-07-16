
// PASSO 1 : creare l'oggetto rubrica

// PASSO 2 : catturare la colonna dove andrano a creare tante cards quanti sono i nostri contatti

//PASSO 3 : creare un metodo che mostra tutti i contatti

//PASSO 4 : il metodo funziona ma crea delle duplicazioni, devo risolvere il problema e far si che non si duplichi


// PASSO 5 : Abbiamo risolto ma vogliamo che il buttone Mostra Rubrica al secondo click nasconda le Rubrica


//  Aggiunge contatto
// 1. Creare um metodo per aggiungere contatti. questo metodo avra  bisono di un nuovo numero,

// 2. Aggendo sulla lista dei nuovi contatti, pusheremo il nuovo contatto
    

//wrapper dei conttati
let contactsWrapper = document.querySelector('#contactsWrapper');

//Bottoni
let showContactsBtn = document.querySelector('#showContactsBtn')

let addContactBtn = document.querySelector('#addContactBtn')

//variabile d'appoggio
let check = false;

const rubrica = {

    lista_contatti : [
        {contact_name : 'Yoda', phone_number : 33333333},

        {contact_name : 'Anskin', phone_number : 364444444},

        {contact_name : 'Obi-man', phone_number : 444444444},
    ],

    showContacts : function(){

        contactsWrapper.innerHTML = '';
        this.lista_contatti.forEach( (contatto)=> {
            let div = document.createElement('div');
            div.classList.add('card-custom')

            div.innerHTML = `
            
            <p class="lead"> ${contatto.contact_name} </p>
            <p> ${contatto.phone_number} </p>
            <i class="fa-solid fa-trash-can icon"></i>
            
            
            `;
           
            contactsWrapper.appendChild(div);

        });
    },

    //Aggiungere nuovo contatto
    addContact : function(newName, newNumber){
        this.lista_contatti.push({contact_name : newName, phone_number : newNumber});

    }
       
};

showContactsBtn.addEventListener('click', ()=>{
    if(check == false){
        rubrica.showContacts();
        check = true;
        showContactsBtn.innerHTML = 'Nascondi contatti';

    }else{
        contactsWrapper.innerHTML = '';
        check = false;
        showContactsBtn.innerHTML = 'Mostra contatti';
    }

    //si puo anche fare direttamente cosi:

    /* contactsWrapper.classlist.toggle('d-none')*/ 
    //ma non è molto consigliato
});

// rubrica.showContacts();

addContactBtn.addEventListener('click', ()=>{
    rubrica.addContact('Pippo',  4252212225);
})