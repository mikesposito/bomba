## **NOTE**: Deprecated in favor of [glue](https://github.com/mikesposito/glue)

# bomba 💣

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mikesposito/bomba/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/bomba.svg?style=flat)](https://www.npmjs.com/package/bomba)
[![npm download💣s](https://img.shields.io/npm/dm/bomba.svg?style=flat-square)](http://npm-stat.com/charts.html?package=bomba)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/mikesposito/bomba/blob/main/CONTRIBUTING.md)

Magnificent, but not existing yet, API client made for Humans

## Table of Contents

- [Features](#features)
- [Install](#install)  
- [Usage](#usage)  
- [Contributing](#contributing)
  - [Code of conduct](#code-of-conduct)
  - [Contributing Guide](#contributing-guide)
  - [Good First Issues](#good-first-issues)
- [License](#license)

## Features

- [x] Create a repository (yeah!)
- [ ] A clockwork-precise HTTP client engine: `bomba` 
- [ ] A fancy UI: `bomba-ui`
- [ ] A magnificent desktop app: `bomba-app`
- [ ] An inevitable terminal CLI : `bomba-cli`

## Install

You can install bomba using NPM:

```bash
npm install -g bomba
```

## Usage

### Cli

```bash
bomba <command> <url> 
```

Example GET Request

```bash
bomba get https://dog.ceo/api/breeds/list/all
```

## Save Requests

```bash
bomba get https://dog.ceo/api/breeds/list/all -n dogs:list
```

Using `-n` flag the request will be saved in the `my_namespace` group, and named as `my_req`.
After that, you will be able to resend the request with the command `req`:

```bash
bomba req dogs:list
```

## Filter Responses

```bash
bomba <command> <url> -f <jsonpath> 
# OR
bomba req <namespace>:<name> -f <filter> 
```

Examples: 

```bash
bomba get https://dog.ceo/api/breeds/list/all -f $.message.terrier 

# OR IF YOU SAVED IT BEFORE
bomba req dogs:list -f $.message.terrier 


# OUTPUT:
#  > Status Code:  200
#  > Response Type:  application/json
#  > Selected:  [
#    [
#      'american',   'australian',
#      'bedlington', 'border',
#      'cairn',      'dandie',
#      'fox',        'irish',
#      'kerryblue',  'lakeland',
#      'norfolk',    'norwich',
#      'patterdale', 'russell',
#      'scottish',   'sealyham',
#      'silky',      'tibetan',
#      'toy',        'westhighland',
#      'wheaten',    'yorkshire'
#    ]
#  ]

```

ATM, `-f` flag supports only JSONPATH filters with json responses. In the future, bomba will also support DOM filters on HTML responses

## Contributing

The main purpose of this repository is to continue evolving bomba core, making it faster and easier to use. Development of bomba happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving bomba.

### [Code of Conduct](CODE_OF_CONDUCT.md)

bomba has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

### [Contributing Guide](CONTRIBUTING.md)

Read our [contributing guide](CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to bomba.

### Good First Issues

To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues](https://github.com/mikesposito/bomba/labels/good%20first%20issue) that contain bugs which have a relatively limited scope. This is a great place to get started.

## License

bomba is [MIT licensed](./LICENSE).
