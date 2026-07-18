

let nameInput = document.querySelector('#nameInput')

let numberInput = document.querySelector('#numberInput')

btnShow = document.querySelector('#btnShow')

btnAdd = document.querySelector('#btnAdd')

btnEdit = document.querySelector('#btnEdit')

btnRemove = document.querySelector('#btnRemove')

let containerContacts = document.querySelector('.containerContacts')

let check = false

//creare la lista dei contatti
const rubrica = {
    lista_contatti : [

        {contact_name : 'Rebecca', phone_number : 45623894201},
        {contact_name : 'Didie', phone_number : 45623894201},
        {contact_name : 'Alino', phone_number : 746980145520},
        {contact_name : 'Maria', phone_number : 583014656014},

    ],

    showContacts : function(){
        containerContacts.innerHTML =''
        this.lista_contatti.forEach(contatto =>{
            let p = document.createElement('p')
            p.innerHTML = `${contatto.contact_name} 
            : ${contatto.phone_number}`
            containerContacts.appendChild(p)
        })
    },
// aggiungere conttato
    addContacts : function(newName, newNumber){
       this.lista_contatti.push({contact_name: newName, phone_number: newNumber})
       this.showContacts();

       if(check == false){
        check = true;
        btnShow.innerHTML = 'Nascondi contatti'
       }
    },


    // rivuovere contatto
    removeContacts: function(removeName){
       
        let name = this.lista_contatti.map( (contatto)=> contatto.contact_name);
        let index = name.indexOf(removeName);

        if(index >= 0){
            this.lista_contatti.splice(index, 1);
            this.showContacts();

            if(check == false){
                check = true;
                btnShow.innerHTML = 'nascondi contatti'
            }
        }
    },

    editContacts : function(nome, numero){
        this.lista_contatti.forEach(contatto =>{
            
            if(contatto.contact_name == nome){
                contatto.phone_number = numero
            }  
        });

        this.showContacts();
        check = true;
        btnShow.innerHTML = 'Nascondi numero'
    }
};

btnShow.addEventListener('click', ()=>{
    if(check == false){
        rubrica.showContacts();
        check = true;
        btnShow.innerHTML = 'Nascondi contatti';
    }else{
        check = false;
        containerContacts.innerHTML ='';
        btnShow.innerHTML = 'Mostra contatti';
    }
})

btnAdd.addEventListener('click', ()=>{
    if(nameInput.value  !=''){
        rubrica.addContacts(nameInput.value, numberInput.value)
        nameInput.value ='';
        numberInput.value ='';
    }
})

btnRemove.addEventListener('click', ()=>{
    if(nameInput.value !=''){
         rubrica.removeContacts(nameInput.value)

         nameInput.value =''
    }
});

btnEdit.addEventListener('click', ()=>{
    if(nameInput.value != ''){
        rubrica.editContacts(nameInput.value, numberInput.value)

        nameInput.value =''
        numberInput.value =''
    }
});