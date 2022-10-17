let identityPool = 'us-west-2:bb7d2c64-5e18-430f-b9a3-7979efeaaf40'; //Cognito Identity Pool
let region = 'us-west-2';
let poolId = 'us-west-2_YyTOH75HB'; //Cognito User Pool
let clientId = '1cce3mfb1j661g20f586f1iuaj'; //Cognito User Pool App
let appDomain = 'vy-quicksight-test.auth.us-west-2.amazoncognito.com';
let endpoint = "https://qhewwckhql.execute-api.us-west-2.amazonaws.com/prod"; //API Endpoint URL
let authData = {
    ClientId : clientId, 
    AppWebDomain : appDomain,
    TokenScopesArray : ['openid'],
    RedirectUriSignIn : 'https://d3si7qg9yuc2ot.cloudfront.net', //CloudFront Distribution URL
    RedirectUriSignOut : 'https://d3si7qg9yuc2ot.cloudfront.net' //CloudFront Distribution URL
};

