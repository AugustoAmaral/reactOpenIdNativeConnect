# About me

This is a sample of how to connect to a openID auth provider using only navigator fetch via react.
On auth provider, I am using localstorage to store user data, so if user trigger logout or refresh token, he will have to update localstorage too, or user another way to store user info.
If you have any doubts about that, take a look at [Open ID Specs](https://openid.net/specs/openid-connect-core-1_0.html) and/or open a issue.
This was tested using keycloak auth provider.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
