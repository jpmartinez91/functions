# AWS Lambda with pyhon runtime 

To test the functions locally, you have to run 
```
npm install serverless-offline-python --save-dev
```
for this, in the serverless.yml must contains 

```
plugins:
  - serverless-offline-python
```

This permit you that you can run 

```
sls offline start
```
For more information you can go to the [npm official page](https://www.npmjs.com/package/serverless-offline-python)