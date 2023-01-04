
```sh
aws sts assume-role --role-arn "arn:aws:iam::048120487275:role/embedding_quicksight_dashboard_role" --role-session-name user9@vyushenko.com
```

```json
{
    "Credentials": {
        "AccessKeyId": "ASIAQWNBULVVZ5GMPTU4",
        "SecretAccessKey": "4USCwFFgyyQPigULzfWMlqzMhYreiqgDlANNoBRz",
        "SessionToken": "IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIAl6APEJqJETrxRFi9tsavWJ/zJ2hH7mTteeW/mCsMhsAiARTI+tjlfsyiC6dMO2XJF9fUOOqHv+GNZ15fw1MIJa8CqgAggcEAAaDDA0ODEyMDQ4NzI3NSIMCrDi25+vTDo6s5GBKv0BuiX1hPzSXnIpcKu1uDCH35DulD5zqRu95f54DdQxzPNn/FLXLuM2G4c4s9ipIWb/oiKg42ZPAuMYpvNTRSO/i0iBsuAa8JAkVp5+hvgfWXsiVSWBp79M4RGb0RSHJW7rECDt5zg+zhcKb5hwdw8Iboxknc/4r3FovAmrqdVqXnTVGkJAxX6BJ+g1x2OV0w0we9GLQvTgF2as9F5E7LKOcW4ZvmRofrWLCmB0TJGliDCEp6SUVIXzBapvn4yvZDj02/6Lt/PeAYrnblEveIlSWUxBmkMJNCDuHgMnFi2QdI8QWc/I68+5ADypFQb9tN9Ih6qh1M52b90ggoIGpjDr3NSbBjqeARvvtt/dWewfCSjO3L+pJdxEHK0whRrUJ34/xHXVFhZloUlAndVYq14Tv6u1krcFmNcEdAOrSc7F/t8SOzwkhkOGHBC8ni2B98+NXSHhiXQS6EnoxGz8IhEzLibcW3WURQ0zvKNOuUwDBxkprMOhPtKu9rGeT2DxV9hJkwiSELg1+6/kLlk6/nsmhc+lWVgEF97er7HLYiXl372HA2sN",
        "Expiration": "2022-11-16T19:39:39+00:00"
    },
    "AssumedRoleUser": {
        "AssumedRoleId": "AROAQWNBULVVZN5CDUMJW:user9@vyushenko.com",
        "Arn": "arn:aws:sts::048120487275:assumed-role/embedding_quicksight_dashboard_role/user9@vyushenko.com"
    }
}
```

```sh
aws quicksight register-user --aws-account-id 048120487275 --namespace default --identity-type IAM --iam-arn "arn:aws:iam::048120487275:role/embedding_quicksight_dashboard_role" --user-role AUTHOR --email user9@vyushenko.com --region us-east-1 --session-name "user9@vyushenko.com"
```

```json
{
    "Status": 201,
    "User": {
        "Arn": "arn:aws:quicksight:us-east-1:048120487275:user/default/embedding_quicksight_dashboard_role/user9@vyushenko.com",
        "UserName": "embedding_quicksight_dashboard_role/user9@vyushenko.com",
        "Email": "user9@vyushenko.com",
        "Role": "AUTHOR",
        "IdentityType": "IAM",
        "Active": false,
        "PrincipalId": "federated/iam/AROAQWNBULVVZN5CDUMJW:user9@vyushenko.com"
    },
    "RequestId": "9f1b170f-54dd-4d33-987a-1fa57d8f0901"
}
```

```sh
aws quicksight list-users --aws-account-id 048120487275 --namespace default --region us-east-1
```

```json
{
    "Status": 200,
    "UserList": [
        {
            "Arn": "arn:aws:quicksight:us-east-1:048120487275:user/default/CognitoQuickSight-AuthRole-1KLIP645W3XOM/user1@vyushenko.com",
            "UserName": "CognitoQuickSight-AuthRole-1KLIP645W3XOM/user1@vyushenko.com",
            "Email": "user1@vyushenko.com",
            "Role": "AUTHOR",
            "IdentityType": "IAM",
            "Active": true,
            "PrincipalId": "federated/iam/AROAQWNBULVVQFUGSM4CU:user1@vyushenko.com"
        },
        {
            "Arn": "arn:aws:quicksight:us-east-1:048120487275:user/default/vyushenko_user",
            "UserName": "vyushenko_user",
            "Email": "misc@vyushenko.com",
            "Role": "ADMIN",
            "IdentityType": "IAM",
            "Active": true,
            "PrincipalId": "federated/iam/AIDAQWNBULVVSSXO7GQIC"
        },
        {
            "Arn": "arn:aws:quicksight:us-east-1:048120487275:user/default/embedding_quicksight_dashboard_role/user9@vyushenko.com",
            "UserName": "embedding_quicksight_dashboard_role/user9@vyushenko.com",
            "Email": "user9@vyushenko.com",
            "Role": "AUTHOR",
            "IdentityType": "IAM",
            "Active": true,
            "PrincipalId": "federated/iam/AROAQWNBULVVZN5CDUMJW:user9@vyushenko.com"
        }
    ],
    "RequestId": "af426d44-d414-45ec-a246-4f4a925ea329"
}
```


Now let's try to assume the same Role

```sh
aws sts assume-role --role-arn "arn:aws:iam::048120487275:role/CognitoQuickSight-AuthRole-1KLIP645W3XOM" --role-session-name user7@vyushenko.com
```

```json
{
    "Credentials": {
        "AccessKeyId": "ASIAQWNBULVV3DYWF45V",
        "SecretAccessKey": "TxNR83nLC88v10hYO6GscfrL1SoAKktD5JsVi7Tx",
        "SessionToken": "IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCLF2+C4fP/VZD0zP5YGh1BBd1q2OmGxQjd7EG5DBYqqwIgaHFQpiM9XeAiQMhv+7aic9eJpmBsgXa6R21ZbVIC8+0qoAIIHBAAGgwwNDgxMjA0ODcyNzUiDEluRf5bCW5PHQjYnSr9AUATswaxFIt0z9499FNGrs44IvJvAiAY9xlgQBHQHCQctF/hnuN9Ro39663eHTIji1x75lIzXsLsdduUdGucMcD4GLtlTCE3OW0Z/0rYQmbx7TVjJNz1hy6Ttjz9m+PsVTJ/harZpc8yrCg3mLUGVZ8iwVjNN6wSaTeNMz4swBtxGA3B5r0ANadCXSlhQfX0tfhX95n7Gx+kTXIhpz5aUnfpMtmGid+A6lA/HOyyHILeNmzq+RVaWK1PzEJxbxYwb7100RAkEZZ6nfkUYlV/j+NEt8tDnO+gdjqBz/3p3EP82lVxcYMfgZenpLxARK9b1IHaEDalU/YRBlh5dXMwrePUmwY6nQGu313fCG7oYB7bezZ6F04XK94iPpFq5WoWjhuaalXJ90Q8l79Ou5z0B/Rc+iVCVh5VF7DWm3LjWq3KZ0RGXREZpD2DIdjTS9Vw0yRy3E/RAYKbzSOCn8tzpgek7AUIyPxUT5NtkS+k05mGnRRr6v4ackGtRqPIK5mU72LhjZC8v2J8zIEQY8azZjJW+btcZsmuNYn4iMVzrSo8yHKW",
        "Expiration": "2022-11-16T19:53:33+00:00"
    },
    "AssumedRoleUser": {
        "AssumedRoleId": "AROAQWNBULVVQFUGSM4CU:user7@vyushenko.com",
        "Arn": "arn:aws:sts::048120487275:assumed-role/CognitoQuickSight-AuthRole-1KLIP645W3XOM/user7@vyushenko.com"
    }
}
```

```sh
aws quicksight register-user --aws-account-id 048120487275 --namespace default --identity-type IAM --iam-arn "arn:aws:iam::048120487275:role/CognitoQuickSight-AuthRole-1KLIP645W3XOM" --user-role AUTHOR --email user7@vyushenko.com --region us-east-1 --session-name "user7@vyushenko.com"
```

```json
{
    "Status": 201,
    "User": {
        "Arn": "arn:aws:quicksight:us-east-1:048120487275:user/default/CognitoQuickSight-AuthRole-1KLIP645W3XOM/user7@vyushenko.com",
        "UserName": "CognitoQuickSight-AuthRole-1KLIP645W3XOM/user7@vyushenko.com",
        "Email": "user7@vyushenko.com",
        "Role": "AUTHOR",
        "IdentityType": "IAM",
        "Active": false,
        "PrincipalId": "federated/iam/AROAQWNBULVVQFUGSM4CU:user7@vyushenko.com"
    },
    "RequestId": "2952ef31-6394-4ccd-8ae8-1f67c90a8dbc"
}
```

```sh
aws quicksight list-users --aws-account-id 048120487275 --namespace default --region us-east-1
```

```json
```