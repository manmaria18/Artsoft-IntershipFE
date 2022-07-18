import ReloadTable from './ReloadTable'
import FrontPage from './FrontPage';
import { Modal } from 'bootstrap';

const modalNode = document.getElementById('exampleModal');
new Modal(modalNode);


const table = document.getElementById('table');
console.log(table);


const promise = new Promise((resolve, reject) => {
    resolve();
});
promise.then(async() => {
    const new_table = new ReloadTable(document.getElementById('table'));
    await new_table.reloadTable();
}).then(() => {
    const frontPage = new FrontPage(document.getElementById('modalButton'));
    frontPage.registerEvents();

})

// const new_table = new ReloadTable(document.getElementById('table'));
// new_table.reloadTable();

// const frontPage = new FrontPage(document.getElementById('modalButton'));
// frontPage.registerEvents(new_table);



