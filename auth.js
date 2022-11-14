const identityPool = 'us-west-2:f4c47388-2e5a-4be9-88bf-065a21795ac4'; //Cognito Identity Pool
const region = 'us-west-2';
const poolId = 'us-west-2_FiqK7d4CK'; //Cognito User Pool
const clientId = '31a1h2ck4koqs0mb1ttk1v9h99'; //Cognito User Pool App
const appDomain = 'vy-quicksight-test.auth.us-west-2.amazoncognito.com';
const endpoint = "https://ytv717l45g.execute-api.us-west-2.amazonaws.com/prod"; //API Endpoint URL
const authData = {
    ClientId : clientId, 
    AppWebDomain : appDomain,
    TokenScopesArray : ['openid'],
    RedirectUriSignIn : 'https://vss-login-test.vyushenko.com', //CloudFront Distribution URL
    RedirectUriSignOut : 'https://vss-login-test.vyushenko.com' //CloudFront Distribution URL
};
const AccountId = "048120487275";
const CognitoQuickSightAuthRoleArn = "arn:aws:iam::048120487275:role/CognitoQuickSight-AuthRole-CTP2ZHBXZTWA";
const AWSApiVersion = "2016-04-18";