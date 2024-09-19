import API from './Rest';
import Chat from './chat';
import PageController from './PageCtrl';

const api = new API('http://localhost:7070/contacts');
const chat = new Chat(document.querySelector('.container'));
const pageCtrl = new PageController(api, chat);
pageCtrl.bindToDOM(document.querySelector('.container'));
pageCtrl.init();
