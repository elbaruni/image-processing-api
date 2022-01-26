### Image Processing API

    simple typescript nodejs express api to resize predifned images to any given width and height if the resize image not exist

## Installation

run following command
`npm install`

## Start Local server

`npm run start`

## start build server

`node dist/index`

## Endpoint url and parameters

- local hostname:http://localhost:3000
- api url:/api/images?
- parameters:

  1. filename as string
  2. width and height as numbers

- example of working url :
  1. filename =encenadaport
  2. width= 190 and height =870.
     http://localhost:3000/api/images?filename=encenadaport&width=190&height=870

## typeScript build

`npm run build`

## run tests

`npm run test`
