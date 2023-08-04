const card = document.querySelector(".card")
const spaceToCard= document.querySelector('.sidetodo .divFather')

const nextCard = document.querySelector('.nextcard')
const prepareNextCard = document.querySelector(".prepareNextCard");
const prepareInputValor = document.querySelector(".prepareInputValor");
const input = document.querySelector('.inputvalor')
const firstTodo = document.querySelector('.textarea')
const firstDoing = document.querySelector(".textarea2");
const firstDone = document.querySelector(".textarea3");


const cardAndBar = document.querySelector('.card-and-bar')
const doingCarAndBar = document.querySelector('.doingCarAndBar');
const toDoCarAndBar = document.querySelector(".toDoCarAndBar");
const doneCarAndBar = document.querySelector(".doneCarAndBar");


const toDoDivFather = document.querySelector(".toDoDivFather");
const doingDivFather = document.querySelector(".doingDivFather");
const doneDivFather = document.querySelector(".doneDivFather");


const section = document.querySelector('.section')
const edit = document.querySelector('.edit')

const addcard = document.querySelector('.addcard')
const editConfirm = document.querySelector('.editar')
const cancel = document.querySelector('.cancel')
const editCancel = document.querySelector('.editCancel')
const confirm = document.querySelector('.confirm')


const sideToDoArrow = document.querySelector('.sideToDoArrow')
const sideDoingLeftArrow = document.querySelector(".sideDoingLeftArrow");
const sideDoingRighttArrow = document.querySelector(".sideDoingRighttArrow");
const doneSideLeftArrow = document.querySelector(".doneSideLeftArrow");

const nextCardFirstAction = document.querySelector(".nextCardFirstAction");
const confirmFirstAction = document.querySelector(".confirmFirstAction");
const cancelFirstAction = document.querySelector(".cancelFirstAction");
const inputValorFirstAction = document.querySelector(".inputValorFirstAction");

let elementToMove = null
let inputText = '';
let newCard;
let newDoingCard;
let editCard;
let textToMove;
let sideDivFather;


let podeounao = true

firstTodo.addEventListener("click", () => {
  if (firstTodo.innerText === "Clique aqui para começar") {
    podeounao = true
    nextCardFirstAction.style.display = "block";
    input.focus();
    section.style.opacity = "0.5";
  } else {
    podeounao = false
  }
  
});
confirmFirstAction.addEventListener("click", () => {

  inputText = inputValorFirstAction.value.trim();

  if (inputText === "") {
    preventDefault();
  }

  firstTodo.innerText = inputText;
  inputValorFirstAction.value = "";
  nextCardFirstAction.style.display = "none";
  section.style.opacity = "";
});

cancelFirstAction.addEventListener('click', () => {
  inputValorFirstAction.value = '';
  nextCardFirstAction.style.display = 'none'
  section.style.opacity = ""; 
})


addcard.addEventListener('click', () => {
  if(firstTodo.innerText === 'Clique aqui para começar') {
    preventDefault()
  }
    prepareNextCard.style.display = "block";
    section.style.opacity = "0.5";
    prepareInputValor.focus();  
})


confirm.addEventListener('click', (event) => {
    
  
  inputText = prepareInputValor.value.trim();
  
  if (inputText === "") {
      preventDefault();
    }

  newCard = toDoCarAndBar.cloneNode(true);
  newCard.querySelector('.textarea').innerText = inputText;
    
  toDoDivFather.append(newCard)

  prepareInputValor.value = "";
  prepareNextCard.style.display = "none";
  section.style.opacity = ""; 
})


cancel.addEventListener('click', () => {
    prepareInputValor.value = "";
    prepareNextCard.style.display = "none";
    section.style.opacity = "";  
})





document.addEventListener("click", (event) => {

  const elementTarget = event.target;
  const divParent = elementTarget.closest('.card-and-bar');


  if (elementTarget.classList.contains("bi-trash3")) {
    divParent.remove();
  }


  if (elementTarget.classList.contains('bi-pencil')) {
    section.style.opacity = '0.5'
    editCard = divParent
    edit.style.display = 'block'

    let editInput = edit.querySelector('.inputvalor')
    let copiaBoa = divParent.querySelector('p').innerText

    editInput.value = copiaBoa
    editInput.focus()
    
    
    editConfirm.addEventListener('click', () => {
      editCard.querySelector('p').innerText = editInput.value
      edit.style.display = 'none'
      section.style.opacity = ''
    })

    editCancel.addEventListener("click", () => {
      edit.style.display = "none";
      section.style.opacity = "";
    });

  };

  if (elementTarget.classList.contains("bi-arrow-up")) {
    elementToMove = divParent;
    sideDivFather = elementToMove.closest(".divFather");
    sideDivFather.insertBefore(elementToMove, sideDivFather.firstChild);
  }


  if (elementTarget.classList.contains('sideToDoArrow')) {
    
    if(firstTodo.innerText === 'Clique aqui para começar') {
      preventDefault()
    }
    doingDivFather.style.display = 'block'
    textToMove = divParent.querySelector(".textarea").innerText;

    if (firstDoing.innerText.length === 0) {
      firstDoing.innerText = textToMove;
    } else {
      newDoingCard = doingCarAndBar.cloneNode(true);
      newDoingCard.querySelector(".textarea2").innerText = textToMove;

      doingDivFather.appendChild(newDoingCard);
    }
    divParent.remove();

  }

  if (elementTarget.classList.contains("sideDoingLeftArrow")) {
    textToMove = divParent.querySelector(".textarea2").innerText;

    newDoingCard = toDoCarAndBar.cloneNode(true);
    newDoingCard.querySelector(".textarea").innerText = textToMove;

    spaceToCard.appendChild(newDoingCard);
    divParent.remove();
  }

  if (elementTarget.classList.contains("sideDoingRighttArrow")) {
    
    doneDivFather.style.display = 'block'
    textToMove = divParent.querySelector(".textarea2").innerText;

    if (firstDone.innerText.length === 0) {
      firstDone.innerText = textToMove;
    } else {
      newDoingCard = doneCarAndBar.cloneNode(true);
      newDoingCard.querySelector(".textarea3").innerText = textToMove;

      doneDivFather.appendChild(newDoingCard);
    }
    divParent.remove();
  }

  if (elementTarget.classList.contains("doneSideLeftArrow")) {
    textToMove = divParent.querySelector(".textarea3").innerText;

    newDoingCard = doingCarAndBar.cloneNode(true);
    newDoingCard.querySelector(".textarea2").innerText = textToMove;

    doingDivFather.appendChild(newDoingCard);
    divParent.remove();
  }
})


