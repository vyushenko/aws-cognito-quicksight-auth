const identityPool = 'us-west-2:399e8b26-4398-48e2-b90b-88a7d620846e'; //Cognito Identity Pool
const region = 'us-west-2';
// const poolId = 'us-west-2_x0SqgsKiK'; //Cognito User Pool
const clientId = '4qvlvj7rc07mtgqg8vum18c4q2'; //Cognito User Pool App
const appDomain = 'vy-quicksight-test.auth.us-west-2.amazoncognito.com';
const endpoint = "https://seoh0ermek.execute-api.us-west-2.amazonaws.com/prod"; //API Endpoint URL
const authData = {
    ClientId : clientId, 
    AppWebDomain : appDomain,
    TokenScopesArray : ['openid'],
    RedirectUriSignIn : 'https://vss-login-test.vyushenko.com', //CloudFront Distribution URL
    RedirectUriSignOut : 'https://vss-login-test.vyushenko.com' //CloudFront Distribution URL
};
// const AccountId = "048120487275";
// const CognitoQuickSightAuthRoleArn = "arn:aws:iam::048120487275:role/us-west-2QuickSightSSOdev"; // from Identity pool