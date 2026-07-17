
// PASSO 1 : creare l'oggetto rubrica

// PASSO 2 : catturare la colonna dove andrano a creare tante cards quanti sono i nostri contatti

//PASSO 3 : creare un metodo che mostra tutti i contatti

//PASSO 4 : il metodo funziona ma crea delle duplicazioni, devo risolvere il problema e far si che non si duplichi


// PASSO 5 : Abbiamo risolto ma vogliamo che il buttone Mostra Rubrica al secondo click nasconda le Rubrica


//  Aggiungere contatto
// 1. Creare um metodo per aggiungere contatti. questo metodo avra  bisono di un nuovo numero,

// 2. Aggendo sulla lista dei nuovi contatti, pusheremo il nuovo contatto
    

// Rimozione contatto
// 1. Creare un metodo che cancelli un contatto. Sappiamo gia che questo metodo utilizzera  .splice()

// Rimazione contatto con gli Icone
// 1. Utilizzare l'indice delle Icone per effettuare le splice.

// 2. Catturare tutte le Icone

//wrapper dei conttati
let contactsWrapper = document.querySelector('#contactsWrapper');

//Bottoni
let showContactsBtn = document.querySelector('#showContactsBtn');

let addContactBtn = document.querySelector('#addContactBtn');

let removeContactBtn = document.querySelector('#removeContactBtn');

// Input
let nameInput = document.querySelector('#nameInput');
let numberInput = document.querySelector('#numberInput');



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

        // Icone 
         let icons = document.querySelectorAll('.icon')
         icons.forEach( (icons, i)=>{
            icons.addEventListener('click', ()=>{
             
                this.lista_contatti.splice(i, 1);
                this.showContacts();
            });
         });
    },

    //Aggiungere nuovo contatto
    addContact : function(newName, newNumber){
        if(newName && newNumber){
            this.lista_contatti.push({contact_name : newName, phone_number : newNumber});
            this.showContacts();


            if(check == false){
        // rubrica.showContacts();
        check = true;
        showContactsBtn.innerHTML = 'Nascondi contatti';

            }

        }else{
            alert('devi inserire SIA nome SIA numero')
        }

    },

    // Rimuovere contatto
    removeContact : function(removedName){
        
        let names = this.lista_contatti.map( (contatto)=> contatto.contact_name);
        let index = names.indexOf(removedName);
        
        if(index >= 0){
            this.lista_contatti.splice(index, 1);
            this.showContacts();

            
        if(check == false){
        // rubrica.showContacts();
        check = true;
        showContactsBtn.innerHTML = 'Nascondi contatti';
        }

    }
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
    rubrica.addContact(nameInput.value, numberInput.value);
    nameInput.value = '';
    numberInput.value = '';

    // if(check == false){
    //     // rubrica.showContacts();
    //     check = true;
    //     showContactsBtn.innerHTML = 'Nascondi contatti';

    // }
});

removeContactBtn.addEventListener('click', ()=>{
    rubrica.removeContact(nameInput.value)
})

// nameInput = {
//     value : 'Matteo'
// }