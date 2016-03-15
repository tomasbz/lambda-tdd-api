##required global package

```
npm install claudia -g
```

##create project

```
  create package.json file with properties:

    {
      "name": "lambda-tdd-api",
      "files": [
        "*.js"
      ],
      "dependencies": {
        "claudia-api-builder": "^1.0.2"
      }
    }

  create source file ex: api.js

    var ApiBuilder = require('claudia-api-builder');
    var api = new ApiBuilder();
    module.exports = api;

    api.get('/hello', function (request) {
        return 'Hello world!';
    });

```

##create function and api on aws

```
claudia create --name lambda-tdd-api --region us-west-2 --api-module api
```

##update function and api on aws

```
claudia update
```

## run mocha tests

```
mocha
```

## git hook pre-commit to run mocha test before commit

```
num=`mocha -R json | grep failures -m 1 | awk '{ print $2 }'`

if [ $num != '0,' ]; then
  echo "Tests failed"
  exit 1
fi
```

