import ReloadTable from "./ReloadTable";

class FrontPage {

    contactForm = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        status: '',
    }

    contactFormList = new Array();

    table = new ReloadTable(document.getElementById('table'));

    constructor(element) {
        this.element = element;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.reloadTable  = this.reloadTable.bind(this);
        // this.bindTableValuesToModalInputs = this.bindTableValuesToModalInputs.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(e) {
        this.contactForm[e.target.name] = e.target.value;
    }

    async bindTableValuesToModalInputs(e) {
        console.log('BIND ATTEMPTED');
        console.log(e.target.dataset.callId);
        document.getElementById('currentId').value = "";
        document.getElementById('firstName2').value = "";
        document.getElementById('lastName2').value = "";
        document.getElementById('phoneNumber2').value = "";
        document.getElementById('status2').value = "";
        const response = await fetch('http://localhost:3000/calls/' + e.target.dataset.callId, {
            method: 'GET'
        }).then(async (resp) => {
            this.contactForm = await resp.json();
            console.log(this.contactForm);
            document.getElementById('currentId').value = this.contactForm.id;
            document.getElementById('firstName2').value = this.contactForm.firstName;
            document.getElementById('lastName2').value = this.contactForm.lastName;
            document.getElementById('phoneNumber2').value = this.contactForm.phoneNumber;
            document.getElementById('status2').value = this.contactForm.status;
        });




    }

    async handleUpdate(e) {
        //this.reloadTable();
        console.log('UPDATE');
        //console.log(e.target);
        //console.log(e.target.dataset.callId);
        //document.getElementById('currentId').value="";


        this.contactForm.id = document.getElementById('currentId').value;
        this.contactForm.firstName = document.getElementById('firstName2').value;
        this.contactForm.lastName = document.getElementById('lastName2').value;
        this.contactForm.phoneNumber = document.getElementById('phoneNumber2').value;
        this.contactForm.status = document.getElementById('status2').value;

        let errors = "";
        if (document.getElementById('firstName2').value == "" || document.getElementById('firstName2').value == null) {
            errors += "First name cannot be null!\n";
        }
        if (document.getElementById('lastName2').value == "" || document.getElementById('lastName2').value == null) {
            errors += "Last name cannot be null!\n";
        }
        if (document.getElementById('status2').value == "" || document.getElementById('status2').value == null) {
            errors += "Status cannot be null!";

        }
        if (document.getElementById('status2').value != "Called" && document.getElementById('status2').value != "Rejected" && document.getElementById('status2').value != "No answear") {
            errors += "Status must be eather Called, Rejected or No answear!";

        }
        if (document.getElementById('phoneNumber2').value == "" || document.getElementById('phoneNumber2').value == null) {
            errors += "Phone number cannot be null!";

        }
        //let regexp =new RegExp(/([0-9])+/g);
        var regexp = /^(\d)*$/;
        if (document.getElementById('phoneNumber2').value.match(regexp) == null) {
            errors += "Phone number must only contain digits!";
        }
        console.log('hello2')
        if (errors == "" || errors == null) {
            console.log(this.contactForm);
            alert('Your data: \nFirst name: ' + this.contactForm.firstName + "\nLast name: " + this.contactForm.lastName + "\nPhone number: " + this.contactForm.phoneNumber + "\n");
            fetch('http://localhost:3000/calls/' + this.contactForm.id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'firstName': this.contactForm.firstName,
                    'lastName': this.contactForm.lastName,
                    'phoneNumber': this.contactForm.phoneNumber,
                    'status': this.contactForm.status
                }),
            }).then((resp) => {
                console.log(resp);
                this.table.reloadTable();
                //this.bindTableValuesToModalInputs();


            });
        }



    }






    async handleSubmit(_event) {
        this.contactForm.firstName = document.getElementById('firstName').value;
        this.contactForm.lastName = document.getElementById('lastName').value;
        this.contactForm.phoneNumber = document.getElementById('phoneNumber').value;
        this.contactForm.status = document.getElementById('status').value;


        let errors = "";
        if (document.getElementById('firstName').value == "" || document.getElementById('firstName').value == null) {
            errors += "First name cannot be null!\n";
        }
        if (document.getElementById('lastName').value == "" || document.getElementById('lastName').value == null) {
            errors += "Last name cannot be null!\n";
        }
        if (document.getElementById('status').value == "" || document.getElementById('status').value == null) {
            errors += "Status cannot be null!";

        }
        if (document.getElementById('status').value != "Called" && document.getElementById('status').value != "Rejected" && document.getElementById('status').value != "No answear") {
            errors += "Status must be eather Called, Rejected or No answear!";

        }
        if (document.getElementById('phoneNumber').value == "" || document.getElementById('phoneNumber').value == null) {
            errors += "Phone number cannot be null!";

        }
        //let regexp =new RegExp(/([0-9])+/g);
        var regexp = /^(\d)*$/;
        if (document.getElementById('phoneNumber').value.match(regexp) == null) {
            errors += "Phone number must only contain digits!";
        }
        console.log('hello2')
        if (errors == "" || errors == null) {
            console.log(this.contactForm);
            alert('Your data: \nFirst name: ' + this.contactForm.firstName + "\nLast name: " + this.contactForm.lastName + "\nPhone number: " + this.contactForm.phoneNumber + "\n");
            fetch('http://localhost:3000/calls', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'firstName': this.contactForm.firstName,
                    'lastName': this.contactForm.lastName,
                    'phoneNumber': this.contactForm.phoneNumber,
                    'status': this.contactForm.status
                }),
            }).then((resp) => {
                console.log(resp);
                this.table.reloadTable();
                //this.registerEvents();
            });

        }
        else {
            console.log(errors);
            alert(errors);
        }

    }

    async handleDelete(e) {
        console.log('DELETE');
        console.log(e.target.id);

        const response = await fetch('http://localhost:3000/calls/' + e.target.id, {
            method: 'DELETE'
        }).then(async (resp) => {
            this.contactForm = await resp.json();
            console.log(this.contactForm);
            this.table.reloadTable();
        });
    };


    registerEvents() {
        console.log('register');
        //this.table.reloadTable();
        document.querySelector('.submit-button').addEventListener('click', this.handleSubmit);

        let pencils = new Array();
        pencils = document.querySelectorAll('.update-button');
        for (let i = 0; i < pencils.length; i++) {
          
            pencils[i].addEventListener('click', this.bindTableValuesToModalInputs);
        }

        let erasers = new Array();
        erasers = document.querySelectorAll('.delete-button');
        for (let i = 0; i < erasers.length; i++) {
            erasers[i].addEventListener('click', this.handleDelete);
        }
        //document.querySelector('.update-button').addEventListener('click',this.bindTableValuesToModalInputs);
        document.getElementById('firstName').addEventListener('change', this.handleChange);
        document.getElementById('lastName').addEventListener('change', this.handleChange);
        document.getElementById('phoneNumber').addEventListener('change', this.handleChange);
        document.getElementById('status').addEventListener('change', this.handleChange);
        document.getElementById('currentId').addEventListener('change', this.handleChange);
        document.getElementById('firstName2').addEventListener('change', this.handleChange);
        document.getElementById('lastName2').addEventListener('change', this.handleChange);
        document.getElementById('phoneNumber2').addEventListener('change', this.handleChange);
        document.getElementById('status2').addEventListener('change', this.handleChange);
        document.querySelector('.edit-button').addEventListener('click', this.handleUpdate);

        //document.querySelector('table').addEventListener('click',this.reloadTable);
    }
}

export default FrontPage;
