# Frontend PokerScrum

This project has been created with the following technologies

- Angular 

*The backend of this project is located in the following [repository](https://github.com/dalviik/backend-poker-scrum)

After downloading the project, you must install the dependencies with the following command

`npm install`

### Redirection to the backend

To connect the frontend with the backend url you must modify the `URL_SERVICES` variable inside the `config/config.ts` folder.

___

Then to run it in development or packaging mode you need to install the @angular-cli, using the following command

`npm install -g @angular/cli`.

once the installation of the angular cli is finished, inside the project folder you must execute the following command according to what you want.

### Development

This command will raise the application by default on port `4200`.

`ng serve --open `

### Packaging

This command will package the application inside the `dist` folder at the same project level.

`ng build --prod`

You must copy all the files generated inside the dist folder to the server you want to mount it on
