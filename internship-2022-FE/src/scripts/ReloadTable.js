import FrontPage from './FrontPage'

class ReloadTable {




    constructor(element) {
        this.element = element;


        //this.bindTableValuesToModalInputs = this.bindTableValuesToModalInputs.bind(this);
    }



    async reloadTable(table) {
        const response = await fetch('http://localhost:3000/calls', {
            method: 'GET'
        })

        console.log('reload');
        //console.log(table);

        //new_table.setAttribute("id","table");
        //new_table.setAttribute("class","table table-striped table-bordered table-primary");

        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');

        // table = document.querySelector('.table table-striped table-bordered table-primary');
        let new_table = document.getElementById('table');
        //new_table=table;
        new_table.innerHTML = ('');
        new_table.appendChild(thead);
        new_table.appendChild(tbody);
        let row = document.createElement('tr');
        let heading_0 = document.createElement('th');
        heading_0.innerHTML = "#";
        let heading_1 = document.createElement('th');
        heading_1.innerHTML = "First name";
        let heading_2 = document.createElement('th');
        heading_2.innerHTML = "Last name";
        let heading_3 = document.createElement('th');
        heading_3.innerHTML = "Phone number";
        let heading_4 = document.createElement('th');
        heading_4.innerHTML = "Status";
        let heading_5 = document.createElement('th');
        heading_5.innerHTML = "Update";
        let heading_6 = document.createElement('th');
        heading_6.innerHTML = "Delete";
        row.appendChild(heading_0);
        row.appendChild(heading_1);
        row.appendChild(heading_2);
        row.appendChild(heading_3);
        row.appendChild(heading_4);
        row.appendChild(heading_5);
        row.appendChild(heading_6);
        thead.appendChild(row);
        this.contactFormList = await response.json();
        table = new_table;
        let value=50;
        document.getElementById('body').appendChild(table);
        for (var i = 0; i < this.contactFormList.length; i++) {
            this.contactForm = this.contactFormList[i];
            let new_row = document.createElement('tr');
            let new_row_count = document.createElement('td');
            new_row_count.innerHTML = this.contactForm.id;
            let new_row_fname = document.createElement('td');
            new_row_fname.innerHTML = this.contactForm.firstName;
            let new_row_lname = document.createElement('td');
            new_row_lname.innerHTML = this.contactForm.lastName;
            let new_row_phone = document.createElement('td');
            new_row_phone.innerHTML = this.contactForm.phoneNumber;
            let new_row_status = document.createElement('td');
            new_row_status.innerHTML = this.contactForm.status;
            let new_row_pencil = document.createElement('td');
            let new_button = document.createElement('button');
            //new_button.setAttribute("id","modalPencil");
            let currentId = this.contactForm.id;
            new_button.setAttribute("type", "button");
            //new_button.setAttribute("id", "edit-" + currentId);
            new_button.setAttribute("class", "btn btn-primary update-button");
          
            new_button.setAttribute("data-call-id", currentId);
            new_button.setAttribute("data-bs-toggle", "modal");
            new_button.setAttribute("data-bs-target", "#exampleModal2");
            //new_button.setAttribute("onclick","this.bindTableValuesToModalInputs()");
            new_button.innerHTML += (`
           
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
              </svg>
              <i class="bi bi-pencil"></i>
               
             `);
            new_row_pencil.appendChild(new_button);
            let new_row_eraser = document.createElement('td');
            let new_button_2 = document.createElement('button');
            new_button_2.setAttribute("id", "" + currentId);
            new_button_2.setAttribute("type", "button");
            new_button_2.setAttribute("class", "btn btn-primary delete-button");
            //new_button_2.setAttribute("data-bs-target","#"+currentId);
            //new_button2.setAttribute("data-call-id", currentId+1);
            new_button_2.innerHTML += (`
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eraser" viewBox="0 0 16 16">
                   <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"/>
                  </svg>
                  <i class="bi bi-eraser"></i>
              
             `);
            new_row_eraser.appendChild(new_button_2);
            new_row.appendChild(new_row_count);
            new_row.appendChild(new_row_fname);
            new_row.appendChild(new_row_lname);
            new_row.appendChild(new_row_phone);
            new_row.appendChild(new_row_status);
            new_row.appendChild(new_row_pencil);
            new_row.appendChild(new_row_eraser);
            tbody.appendChild(new_row);
            //console.log('created');
        }
        // .then(() => {
        //   // console.log(resp);

        // });
        // table = document.getElementById('table');
        // let tableBody = document.createElement('tbody');
        // table.appendChild(tableBody);
        // this.contactFormList =  await response.json();
        // console.log('Lista');
        // console.log(this.contactFormList);
        // tableBody.innerHTML=('');
        // for(var i=0; i<this.contactFormList.length;i++){
        //   this.contactForm=this.contactFormList[i];
        //   //console.log(this.contactForm);
        //   tableBody.innerHTML += (`<tr>
        //   <th scope="row">${i+1}</th>
        //   <td>${this.contactForm.firstName}</td>
        //   <td>${this.contactForm.lastName}</td>
        //   <td>${this.contactForm.phoneNumber}</td>
        //   <td>${this.contactForm.status}</td>
        //   <td>
        //       <!--<a class="nav-utem text-decoration-underline btn edit-button" data-bs-toggle="modal"
        //       data-bs-target="#edit-modal">

        //           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
        //               class="bi bi-pencil" viewBox="0 0 16 16">
        //               <path
        //                   d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
        //           </svg>
        //       </a>
        //       <a class="btn delete-button">
        //           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
        //               <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
        //           </svg>
        //       </a>-->

        //   <button id="modalPencil" type="button" class="btn btn-primary update-button" data-call-id="${this.contactForm.id}" data-bs-toggle="modal" data-bs-target="#exampleModal2">
        //       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
        //           <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
        //       </svg>
        //       <i class="bi bi-pencil"></i>
        //   </button>    
        //   </td>
        //   <td>
        //       <button id="modalEraser" type="button" class="btn btn-primary delete-button">
        //           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eraser" viewBox="0 0 16 16">
        //            <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"/>
        //           </svg>
        //           <i class="bi bi-eraser"></i>
        //       </button>
        //   </td>   


        //   </tr>`);
        // } 




        const frontPage = new FrontPage(document.getElementById('modalButton'));
        frontPage.registerEvents();
    }
}

export default ReloadTable;