# Polly-Audio-Lambda# TikTokBot Polly Audio Lambda

This Lambda function generates an audio file from SSML text and saves it into an S3 bucket.

## Usage

1. Clone the repository.
2. Install the required dependencies.
3. Configure the AWS credentials.
4. Deploy the Lambda function.
5. Invoke the Lambda function with the desired SSML text.

## Prerequisites

- AWS account
- AWS CLI
- Node.js
- Serverless Framework

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/TikTokBot-Polly-Audio-Lambda.git
```

2. Install the required dependencies:

```bash
cd TikTokBot-Polly-Audio-Lambda
npm install
```

3. Configure the AWS credentials:

```bash
aws configure
```

4. Deploy the Lambda function:

```bash
sls deploy
```

5. Invoke the Lambda function with the desired SSML text:

```bash
sls invoke -f generateAudio --data '{"ssml": "<speak>Hello, world!</speak>"}'
```

