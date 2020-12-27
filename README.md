# [Github Action] Deploy a project on AWS Elastic Beanstalk

[![Actions Status](https://github.com/Amraneze/get-ebs-env-variables/workflows/master/badge.svg)](https://github.com/Amraneze/aws-beanstalk-deploy/actions)
[![Actions Status](https://github.com/Amraneze/get-ebs-env-variables/workflows/branch/badge.svg)](https://github.com/Amraneze/aws-beanstalk-deploy/actions)

This Github Action is mainly for creating and deploying an application to [AWS Elastic Beanstalk](https://aws.amazon.com/fr/elasticbeanstalk/) environment using [aws-sdk](https://www.npmjs.com/package/aws-sdk).

## Usage

## Example

```yaml
name: Debloy to AWS EBS
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@master
      - name: Deploy to AWS Elastic Beanstalk
        uses: Amraneze/aws-beanstalk-deploy@master
        with:
          region: AWS_REGION
          environment_name: ELASTIC_BEANSTALK_ENVIRONMENT_NAME
          application_name: ELASTIC_BEANSTALK_APPLICATION_NAME
          aws_access_key: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws_secret_key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          s3_bucket_name: S3_BUCKET_NAME
          s3_file_path: S3_FILE_PATH
          ebs_version_label: ELASTIC_BEANSTALK_VERSION_LABEL
          ebs_description: ELASTIC_BEANSTALK_DESCRIPTION
          ebs_wait_for_env_to_be_green: true
          updated_version_url: YOUR_API_CHECKPOINT
          expected_version: EXPECTED_VERSION_TO_BE_DEPLOYED
          use_same_version: true
          enable_debug: ${{ secrets.ENABLE_AWS_BS_DEPLOY_DEBUG }}
          use_same_version: true
```

## Mandatory Arguments

`aws_access_key` AWS access's key
`aws_secret_key` AWS secret's key
`region` is your AWS region where Elastic Beanstalk is running
`environment_name` AWS Elastic Beanstalk environment's name
`application_name` AWS Elastic Beanstalk application's name in environment
`s3_bucket_name` S3 bucket's name that would be used to pull the image or the project
`s3_file_path` S3 file's path that would be uploaded to the S3 bucket
`ebs_version_label` AWS Elastic Beanstalk version label to add to the build

## Outputs

`ApplicationName` AWS Elastic Beanstalk application's name
`CNAME` AWS Elastic Beanstalk application's CNAME
`EndpointURL` AWS Elastic Beanstalk application's endpoint url
`Health` AWS Elastic Beanstalk application's health
`Status` AWS Elastic Beanstalk application's status
`VersionLabel` AWS Elastic Beanstalk application's version label

```json
{
  "ApplicationName": "my-app",
  "CNAME": "my-env.elasticbeanstalk.com",
  "DateCreated": "2020-10-12T20:30:00.000Z",
  "DateUpdated": "2020-10-26T20:30:00.000Z",
  "EndpointURL": "awseb-e-i-AWSEBLoa-1RDLX6TC9VUAO-0123456789.us-west-2.elb.amazonaws.com",
  "EnvironmentId": "e-szqipays4h",
  "EnvironmentName": "my-env",
  "Health": "Grey",
  "SolutionStackName": "64bit Amazon Linux running Tomcat 7",
  "Status": "Updating",
  "Tier": {
    "Name": "WebServer",
    "Type": "Standard",
    "Version": " "
  },
  "VersionLabel": "v2"
}
```

> Note: Check AWS SDK for more information [updateEnvironment-property](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ElasticBeanstalk.html#updateEnvironment-property)

## Optional Arguments

### registry

`ebs_description` AWS Elastic Beanstalk application's description
`ebs_wait_for_env_to_be_green` true if you want to wait for the application to be green, otherwise false
`updated_version_url` your application endpoint to be checked after finishing deployment
`expected_version` the expected version that should be installed in your AWS Elastic Beanstalk application
`enable_debug` true if you want to see debug logs, otherwise false
`use_same_version` if you want to use the same version when creating an AWS Elastic Beanstalk application

> Note: you should use both arguments `updated_version_url` and `expected_version` if you want to check the version. We are only getting a text not a json and finding if the text includes the version.
