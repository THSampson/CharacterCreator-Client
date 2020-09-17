<!-- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify -->

# Character Cache Server

## Landing Page
### The first thing a user sees on the application is the signin. If they already have an account, they can log in. If not, they can create a new account.
![Default SignIn](./src/Assets/ReadmeScreenshots/DefaultLoginScreen.JPG)
![Click SignUp](./src/Assets/ReadmeScreenshots/ClickSignUp.png)
### When signing in, a user's password must be at least five characters, otherwise the Sign In button will be disabled
![Invalid Password Signin](./src/Assets/ReadmeScreenshots/LoginPasswordValidation.JPG)
![Valid Password Signin](./src/Assets/ReadmeScreenshots/SignInButtonAvailable.JPG)

## SignUp
### After clicking the SignUp button, users are greeted by a new screen. They need to input first and last Name, an email, and a password of at least five characters.
![Click SignUp](./src/Assets/ReadmeScreenshots/ClickSignUp.png)
![Default SignUp](./src/Assets/ReadmeScreenshots/DefaultSignUp.JPG)
### Email addresses must include an @ symbol and text after it.
![No At Symbol](./src/Assets/ReadmeScreenshots/EmailValidation1.JPG)
![No Text Following At](./src/Assets/ReadmeScreenshots/EmailValidation2.JPG)
### Users are unable to create an account if the password is less than 5 characters
![Invalid Password SignUp](./src/Assets/ReadmeScreenshots/InvalidPassword.JPG)
### Once all the information is valid, users can click the Create Account button
![Create Account](./src/Assets/ReadmeScreenshots/CreateAccount.png)

## Characters
### Once logged in, a user will be shown the character screen. If they have existing characters, those will show up, otherwise there will be an empty space.
![Existing Characters](./src/Assets/ReadmeScreenshots/Login_ExistingCharacters.JPG)
![No Characters](./src/Assets/ReadmeScreenshots/NoCharacters.JPG)
### To create a character, one must simply click the Create button
![Create Character](./src/Assets/ReadmeScreenshots/ClickCreate.png)
![Create Modal](./src/Assets/ReadmeScreenshots/DefaultCreateModal.JPG)
### Characters must have a name, species, age (a positive integer value), and a description
![Negative Age](./src/Assets/ReadmeScreenshots/AgeValidation1.JPG)
![Cant Go Below Zero](./src/Assets/ReadmeScreenshots/AgeValidation2.JPG)
![Only Integers](./src/Assets/ReadmeScreenshots/AgeValidation3.JPG)
![Create Your Character](./src/Assets/ReadmeScreenshots/FillOutCharacter_ClickCreate.png)
### Characters then show up in the Character List
![New Character](./src/Assets/ReadmeScreenshots/YourNewCharacter.JPG)
### Users can update any part of their character simply by selecting the Update button
![Click Update](./src/Assets/ReadmeScreenshots/ClickUpdate.png)
![Default Edit](./src/Assets/ReadmeScreenshots/DefaultEditModal.JPG)
![Fill Out Update](./src/Assets/ReadmeScreenshots/FillOutModal_ClickUpdate.png)
![Updated Character](./src/Assets/ReadmeScreenshots/UpdatedCharacter.JPG)
### Users are able to remove characters by clicking the Delete button. There is also a check to make sure they truly wish to delete that character
![Click Delete](./src/Assets/ReadmeScreenshots/ClickDelete.png)
![Are You Sure](./src/Assets/ReadmeScreenshots/AreYouSureDelete.JPG)
![Deleted Character](./src/Assets/ReadmeScreenshots/DeletedCharacter.JPG)
### If users decide they don't really want to create or update the character they are currently working on, clicking the x at the top right of either modal will return them to the character page. 
![Close Modal](./src/Assets/ReadmeScreenshots/ClickXToCloseModal.png)

## Resources
### The application also includes helpful resources. Users can find information on name generators and learn about Dungeons and Dragons by clicking one of the links in the Navigation sidebar
![Name Resources](./src/Assets/ReadmeScreenshots/NameResources.png)
![DND Resources](./src/Assets/ReadmeScreenshots/DNDResources.png)

## SignOut
### Users also have the ability to sign out by clicking the button appropriately named Sign Out. Doing so will return them to the login screen.
![Click SignOut](./src/Assets/ReadmeScreenshots/ClickSignOut.png)
![SignIn Screen](./src/Assets/ReadmeScreenshots/DefaultLoginScreen.JPG)
