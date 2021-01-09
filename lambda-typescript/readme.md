## A template for AWS Lambda with Typescript

This package includes a setup for writing aws lambda functions with Typescript.

### How-to
- clone the template and install modules (`npm install`)
- change package name in `package.json`
- set AWS lambda settings in `aws.dev.env` and `aws.prod.env`. If you do not have
  aws profile, you need to create one as described here https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html you'll need
  separate profiles for development and production environments
- start writing code in `./src/index.ts`

### Requirements
- node v.12
- nvm installed globally

### Unit tests
- place new tests in `/tests` dir
- run via `npm run test` 


### Deploy
- run `deploy:dev` or `deploy:prod`
