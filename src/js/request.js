/* eslint-disable class-methods-use-this */
export default class Request {
  allTickets() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://sse-backend-tl9s.onrender.com/?method=allTickets');
      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const data = JSON.parse(xhr.response);
            resolve(data);
          } catch (e) {
            reject(e);
          }
        }
      });
      xhr.send();
    });
  }

  ticketById(id) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const params = new URLSearchParams();
      params.append('id', id);
      xhr.open('GET', `https://sse-backend-tl9s.onrender.com/?method=ticketById&id=${id}`);
      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const data = JSON.parse(xhr.response);
            resolve(data);
          } catch (e) {
            reject(e);
          }
        }
      });
      xhr.send();
    });
  }

  createTicket(name, description) {
    return new Promise((resolve, reject) => {
      const params = new URLSearchParams();
      params.append('name', name);
      params.append('description', description);
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://sse-backend-tl9s.onrender.com/?method=createTicket');
      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const data = JSON.parse(xhr.response);
            resolve(data);
          } catch (e) {
            reject(e);
          }
        }
      });
      xhr.send(params);
    });
  }

  removeById(id) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const params = new URLSearchParams();
      params.append('id', id);
      xhr.open('DELETE', `https://sse-backend-tl9s.onrender.com/?method=removeById&id=${id}`);
      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const data = JSON.parse(xhr.response);
            resolve(data);
          } catch (e) {
            reject(e);
          }
        }
      });
      xhr.send();
    });
  }

  editTicket(id, name, description) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const params = new URLSearchParams();
      params.append('id', id);
      params.append('name', name);
      params.append('description', description);
      xhr.open('POST', `https://sse-backend-tl9s.onrender.com/?method=editTicket&id=${id}`);
      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const data = JSON.parse(xhr.response);
            resolve(data);
          } catch (e) {
            reject(e);
          }
        }
      });
      xhr.send(params);
    });
  }

  checkTicket(id, status) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const params = new URLSearchParams();
      params.append('id', id);
      params.append('status', status);
      xhr.open('POST', `https://sse-backend-tl9s.onrender.com/?method=checkTicket&id=${id}`);
      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const data = JSON.parse(xhr.response);
            resolve(data);
          } catch (e) {
            reject(e);
          }
        }
      });
      xhr.send(params);
    });
  }
}
