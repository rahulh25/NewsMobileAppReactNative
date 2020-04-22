# React frontend for our URL Shortner and File uploader

## Goal
<p>The goal of this application is to provide with the latest news and keep them updated with the current affairs. We will be using react native to create the application as React native provides us with the ability to create cross platform mobile apps. The API used is from <a href="https://newsapi.org/">link</a>. You can register here to get an api key that can be used to get the latest news.</p>

## Requirements

<p>This application will require a user authentication to allow the user to have the data specific to only that user. The application will make use of AWS amplify for user authentication.</p>

## Technologies Used

<ol>
<li>React-Native</li>
<li>AWS Amplify (For adding analytics) <a href="https://docs.amplify.aws/lib/analytics/getting-started/q/platform/js">Official Doc</a></li>
<li>AWS Pinpoint <a href="https://aws.amazon.com/pinpoint/">More Info</a></li>
<li>Expo Client- To test our application on our phone <a href="https://docs.expo.io/versions/v34.0.0/introduction/installation/">Installation</a></li>
</ol>


## Steps to Run the application

### Cloning the repository and adding all the node packages
1. Clone the repository on your local machine or download the zip folder.
2. Open the downloaded or cloned repo in your favourite editor and run the below command
    ```js
    npm i
    ```
    This will install all the packages successfully on your machine.
3. Add the api key you got from your the above mentioned website in the following file:<br>
    <a href="https://github.com/rahulh25/NewsMobileAppReactNative/blob/master/src/components/News.js">News.js</a>

### Setting up AWS Amplify for analytics and starting the application
1. Install the aws amplify cli node package using the following command:
    ```js
    npm install -g @aws-amplify/cli
    ```
    ![AWS NODE PACKAGE](https://github.com/rahulh25/screenshots/blob/master/frontend/aws_amplify_package.png)<br>
2. Now we will configure our aws amplify. Run the following command (Make sure you a AWS account setup):
    ```js
    amplify configure
    ```
    ![AMPLIFY CONFIGURE](https://github.com/rahulh25/screenshots/blob/master/frontend/aws_amplify_setup.png)<br>
    This will ask you for a region and whether you want to create a user. You can select your options here. Once you setup a user you will taken to the aws management console IAM where you will add a user and in the end of the step you will be provided with a <i>access_key</i> and <i>secret_access_key</i>. Make sure to save them. In the next step you need to enter the values.<br>
    ![ACCESS KEY](https://github.com/rahulh25/screenshots/blob/master/frontend/access_key.png)<br>
3. Next we will setup AWS amplify for our app. Run the following command to setup amplify for your project(Make sure you have a AWS account)
    ```js
    amplify init
    ```
    <i>This asks you a bunch of options (Fill them as shown below. Although the profile name can be of your choice.)</i><br>
    ![AMPLIFY INIT](https://github.com/rahulh25/screenshots/blob/master/frontend/amplify_init.png)<br>  
4. Now we will setup analytics using AWS Amplify. Run the following command:
    ```js
    amplify add analytics
    ```
    <i>Enter the options as shown below</i><br>
    ![AMPLIFY ADD ANALYTICS](https://github.com/rahulh25/screenshots/blob/master/mobile/add_analytics.png)<br>
5. Push the changes to AWS amplify using the following command:
    ```js
    amplify push
    ```
    ![AMPLIFY PUSH](https://github.com/rahulh25/screenshots/blob/master/mobile/push.png)<br>
6. In the end run the following command to get your application started<br>
    ```
    expo start
    ```
    ![Expo START](https://github.com/rahulh25/screenshots/blob/master/mobile/expo_start.png)<br>
    This should bring up a server on your browser with a QR CODE as shown below:<br>
    ![EXPO BROWSER](https://github.com/rahulh25/screenshots/blob/master/mobile/expo_server.png)<br>
    You can either use LAN (If your system and mobile phone are on the same network) or use Tunnel if you are on different networks<br>
    `Note:` If the above step gives you any error run the following commands:<br>
    ```js
    npm install -g expo-cli
    ```
    ```js
    expo init
    ```
    ```js
    react-native link expo
    ```
7. Scan the QR code from your mobile phone using the camera(for iOS) or using the expo client app(in android):<br>
    ![Code Scanning](https://github.com/rahulh25/screenshots/blob/master/mobile/scanning.png)<br>
8. This will start installing js bundle on your device a shown below in the server:<br>
    ![JS BUNDLE](https://github.com/rahulh25/screenshots/blob/master/mobile/js_bundle.png)<br>
9. This will bring up the application running on your device:<br>
    ![Application running on device](https://github.com/rahulh25/screenshots/blob/master/mobile/mobile_screen.png)<br>
10. You can see the analytics for your application by logging in to your AWS Management Console> Pinpoint<br>
    ![PINPOINT](https://github.com/rahulh25/screenshots/blob/master/mobile/pinpoint.png)<br>