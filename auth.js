const identityPool = 'us-west-2:e2c366e0-dde2-4b54-a8b5-ee2834c5a0e0'; //Cognito Identity Pool
const region = 'us-west-2';
const poolId = 'us-west-2_tFmpeYqqr'; //Cognito User Pool
const clientId = 'okj50joromt14iprnrmtc2v2p'; //Cognito User Pool App
const appDomain = 'vy-quicksight-test.auth.us-west-2.amazoncognito.com';
const endpoint = "https://vmpkc5pua0.execute-api.us-west-2.amazonaws.com/prod"; //API Endpoint URL
const authData = {
    ClientId : clientId, 
    AppWebDomain : appDomain,
    TokenScopesArray : ['openid'],
    RedirectUriSignIn : 'https://vss-login-test.vyushenko.com', //CloudFront Distribution URL
    RedirectUriSignOut : 'https://vss-login-test.vyushenko.com' //CloudFront Distribution URL
};
const AccountId = "048120487275";
const CognitoQuickSightAuthRoleArn = "arn:aws:iam::048120487275:role/QuickSightSSO"; // from Identity pool
const AWSApiVersion = "2016-04-18";