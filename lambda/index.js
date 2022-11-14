const unirest = require('unirest');
const AWS = require('aws-sdk');

let AwsAccountId; // set in handler
const Region = 'us-east-1';
const Namespace = 'default';

const quicksight = new AWS.QuickSight({ region: Region });

const checkUser = (email, username, role, callback) => {
  var params = {
    AwsAccountId: AwsAccountId,
    Namespace: Namespace,
    UserName: username
  };
  quicksight.describeUser(params, function (err, data) {
    if (err) {
      if (err.code === "ResourceNotFoundException") {
        registerUser(email, username, role, callback);
      } else {
        processError(err, 'checkUser', callback);
      }
    } else {
      const userArn = data.User.Arn;
      // const inviteURL = data.UserInvitationUrl;

      generateUrl(userArn, callback);
    }
  });
}

const registerUser = (email, username, role, callback) => {
  var params = {
    AwsAccountId: AwsAccountId,
    Email: email,
    IdentityType: 'QUICKSIGHT',
    Namespace: Namespace,
    UserRole: role,
    UserName: username
  };
  quicksight.registerUser(params, function (err, data) {
    if (err) {
      processError(err, 'registerUser', callback);
    } else {
      const userArn = data.User.Arn;
      // const inviteURL = data.UserInvitationUrl;

      generateUrl(userArn, callback);
    }
  });
}

const generateUrl = (userArn, callback) => {
  // generateSessionUrl(userArn, callback);
  generateEmbedUrl(userArn, callback);
}

const generateSessionUrl = (userArn, callback) => {
  var params = {
    AwsAccountId: AwsAccountId,
    EntryPoint: '/start',
    SessionLifetimeInMinutes: 300,
    UserArn: userArn
  };
  quicksight.getSessionEmbedUrl(params, function (err, data) {
    if (err) {
      processError(err, 'generateSessionUrl', callback);
    } else {
      console.log(JSON.stringify(data, null, 2));           // successful response

      sendResponse("Success - session url", 200, callback);
    }
  });
}

const generateEmbedUrl = (userArn, callback) => {
  var params = {
    AwsAccountId: AwsAccountId,
    ExperienceConfiguration: {
      QuickSightConsole: {
        InitialPath: '/start'
      }
    },
    UserArn: userArn,
    SessionLifetimeInMinutes: 300
  };
  quicksight.generateEmbedUrlForRegisteredUser(params, function (err, data) {
    if (err) {
      processError(err, 'generateEmbedUrl', callback);
    } else {
      console.log(JSON.stringify(data, null, 2));           // successful response

      sendResponse("Success - embed url", 200, callback);
    }
  });
}

const processError = (err, section, callback) => {
  console.error(`Error in ${section}`);
  console.error(JSON.stringify(err, null, 2));
  console.error(err.stack);

  sendResponse("Error", 400, callback);
}

const sendResponse = (message, code, callback) => {
  let getResponse = {
    statusCode: code,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: message
  };
  callback(null, getResponse);
}

const executeUrl = (url, callback) => {
  unirest
    .get(url)
    .end(function (response) {
      sendResponse(JSON.stringify(response.body), 200, callback);
    });
}

exports.handler = (event, context, callback) => {
  AwsAccountId = context.invokedFunctionArn.split(':')[4]

  /* console.log('event');
  console.log(JSON.stringify(event));
  console.log('context');
  console.log(JSON.stringify(context)); */

  if ((event.body !== null) && (typeof event.body) === 'string') {
    executeUrl(event.body, callback);
  } else {
    const email = event.requestContext.authorizer.claims.email;
    const username = email;
    const role = 'AUTHOR';

    checkUser(email, username, role, callback);
  }
};