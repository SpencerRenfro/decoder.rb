const button = document.getElementById('btn-main');
const paper = document.getElementById('paper');
const btnUpdate = document.getElementById('btn-main');
const listItems = document.querySelectorAll('li');
const hideButton = document.createElement('button'); 
hideButton.innerHTML = "Remove Checked Item";
hideButton.className = 'btn-remove';
const input = document.querySelector('.input-main');
const list = document.querySelector('ul');
const checkedItems = document.getElementsByTagName('li');


    btnUpdate.addEventListener('click', () => {


        if(input.value.length > 0){
        list.insertAdjacentHTML(
          'afterbegin',
          `<li class="to-do-item"><input id="myCheckbox" type="checkbox"> <p class="to-do-text">${input.value}</p></li>`
        );

        
        input.value = '';
        }
        else{
          alert('Please enter a task');
        }
      });


      // if(listItems.length < 0) {
      //   document.body.appendChild(hideButton);
      // }

      // if(document.getElementById('button').clicked = true) {
      //   document.body.appendChild(hideButton);
      //   alert('button was clicked');
      // }

      function addRemoveButton(){
        // does not work 
        //document.body.div[1].appendChild(hideButton);


        // adds multiple remove buttons
        //const list = document.querySelector('ul');
        // list.insertAdjacentHTML(
        //   'afterbegin',
        //   `<button>Remove Last Item</button>`
        // );

        // works
        // document.getElementById('paper').appendChild(hideButton);

        const list = document.querySelector('ul');
        if(input.value.length > 0){
        list.appendChild(hideButton);
        hideButton.classList.add("btn-remove");
        }
      }

    
  
      
       hideButton.addEventListener('click', () => {
        const checkedBox = document.querySelector('#myCheckbox');

        for(let i = 0; i < checkedItems.length; i++){
        if(checkedBox.checked){
          checkedBox.remove();
          const lastItem = document.querySelector('li');
          lastItem.remove();
        }
      }
        
      });

    

