Medicament Search API
=================================================

Table of contents
-----------------
- [Search API](#search-api)
  - [Table of contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Installation](#installation)
    - [Requirements](#requirements)
    - [Local deployment](#local-deployment)
    - [Kubernetes deployment](#kubernetes-deployment)
  - [Usage](#usage)
  - [Known issues and limitations](#known-issues-and-limitations)
  - [Getting help](#getting-help)
  - [Contributing](#contributing)
  - [License](#license)
  - [Authors and history](#authors-and-history)

Introduction
------------
Search API that consumes from [FOSPS epi FHIR server](https://fosps.gravitatehealth.eu/epi/api/fhir/Bundle) 

Installation
------------
### Requirements
To deploy it docker must be installed.

### Local deployment
For deploying it localy first you must build the docker image

```bash
docker build . -t search-api
```
Once this is done, for runing the API on port 3000 run:

```bash
docker run -p 3000:3000 --name search-api search-api
```
This command will respond with the port that its being used to run. In this example [http://localhost:3000](http://localhost:3000)


### Kubernetes deployment

_To be completed_


- Express enviroment variables

| Environment Variable | description                                   | default                         |
|----------------------|-----------------------------------------------|---------------------------------|
| PORT                 | Default port for running the API              | 3000                            |
| FHIR_URL             | FHIR URL with JSON format to consume from     | https://fosps.gravitatehealth.eu/epi/api/fhir/Bundle?_format=json



Usage
-----
There is only one endpoint avaible on [GET] \<base-url>/search that allowes a body x-www-form-encoded the the "medicine" as key and the value being the medicine to search.

The response will be an object with the following structure

```JSON
{
    "resourceType": "Composition",
    "meta": {
        "profile": [
            ...
        ]
    },
    "text": {
        "status": "generated",
        "div": "..."
    },
    "identifier": [
        {
            ...
        }
    ],
    "status": "final",
    "type": {
        "coding": [
            {
                ...
            }
        ],
        "text": "Package Leaflet"
    },
    "subject": [
        {
            ...
        }
    ],
    "date": ... ,
    "author": [
        ...
    ],
    "title": "<medicine title>",
    "section": [
        {
            "title": "B. Package Leaflet",
            "code": {
                "coding": [
                    {
                        ...
                    }
                ],
                "text": "B. PACKAGE LEAFLET"
            },
            "text": {
                ...
            },
            "emptyReason": {
                "coding": [
                    {
                        ...
                    }
                ]
            },
            "section": [
                {
                    "title": "<title >",
                    "code": {
                        "coding": [
                            {
                                "system": "...",
                                "code": "..."
                            }
                        ],
                        "text": "<Leaflet paragraph>"
                    },
                    "text": {
                        "status": "additional",
                        "div": "<div with information about medicine>"
                    }
                },
                    ...
                }
            ]
        }
    ]
}
```


Known issues and limitations
----------------------------

When searching for the medication the name must be as accuraqte as possible, otherwise it may cause errors.


Getting help
------------
In case you find a problem or you need extra help, please use the issues tab to report the issue.

Contributing
------------
To contribute, fork this repository and send a pull request with the changes squashed.

License
------------

This project is distributed under the terms of the [Apache License, Version 2.0 (AL2)](https://www.apache.org/licenses/LICENSE-2.0). The license applies to this file and other files in the [GitHub repository](https://github.com/Gravitate-Health/keycloak) hosting this file.
```
Copyright 2022 Universidad Politécnica de Madrid

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

Authors and history
---------------------------
- Alejo Esteban ([@10alejospain](https://github.com/10alejospain))
