# book-api


## V 0.0.1 features
- create book API implemented. 
- list all books with filters API implemented.
- update book API implemented.
- remove book API implemented.  
- get one book API implemented.
- Error handling implemented.
- seeder for book APIs implemented.

## Prerequisites and usage Deployment


- To clone the task use, `git clone https://github.com/Radwa222/node-book-apis-task.git`
- Move to the cloned folder
- Run `npm install` 
- Run cp .env.example .env
- Open .env file and override the environment variables for that app on that machine
- Check if the desired port it is not busy `lsof -n -i :<port>`
- Run application `npm run start:dev`

## Running the tests

  ### Manage Application
    $ npm run start:dev:seed - to seed the datase tables
    $ npm run start:dev:unseed - to destroy the datase tables

	
   #### For changing any environment variable, go to `.env`:

   ```
    PORT=
    BASE_URL=
    DB_URI=mongodb+srv://radwayasser:90Fj7wZkk9bP6u7S@cluster0.ywuviet.mongodb.net/


   ```

  

  ### Test Application 

    - postman collection will be provided



## Main scope of usage

Three APIs:
	 
 - POST /api/v1/books/
	 - for inserting a new book.

- Get /api/v1/books/
    - for listing all inserted books.

- Get /api/v1/books/{id}
    - for listing a book data related to that id.

- PUT /api/v1/books/{id}
    - for updating a book data related to that id.    


- DELETE /api/v1/books/{id}
    - for deleting a book  related to that id.   
   



## Built With

* [nodejs] -(https://nodejs.org/en/) - Run Time environment
* [npm] -(https://www.npmjs.com/) - Dependency Management
* [javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming Language

## Authors

 [Radwa yasser](https://github.com/Radwa222)











