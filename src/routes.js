const { addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdhandler } = require("./handler");


const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdhandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: () => {}
  }
];


module.exports = routes;