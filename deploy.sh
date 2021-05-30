#This is an example script of deploying application into AWS S3 bucket.It can be used when we know right AWS account details.
npm run build
aws s3 sync build/ s3:// toy-robot-simulator