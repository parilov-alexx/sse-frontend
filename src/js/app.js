import API from './Rest';
import Chat from './chat';
import PageController from './PageCtrl';

const api = new API('https://sse-backend-tl9s.onrender.com/contacts');
const chat = new Chat(document.querySelector('.container'));
const pageCtrl = new PageController(api, chat);
pageCtrl.bindToDOM(document.querySelector('.container'));
pageCtrl.init();
