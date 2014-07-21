# backup-cha-data

## installation

1. download or clone this repo somehow
2. `$ npm install`

## usage

```console
$ node .
```

## whats it do

downloads a copy of every dataset from data.chattlibrary.org (but easily modifiable to work with any socrata data portal)

saves it to a `data` directory relative to your current path

creates a folder per dataset. inside of that, creates a folder per modified date, so you can keep track of diferent versions of the data over time

sample directory listing:
```console
├───22fj-9uch     
│   └───2014-05-31
├───2ytt-g24i     
│   └───2014-06-18
├───42gc-h8na     
│   └───2014-05-31
├───49pq-4t5w     
│   └───2014-05-30
├───4u6c-h54p     
│   └───2014-05-30
├───54w5-89mf     
│   └───2014-06-25
├───5g6k-u452     
│   └───2014-05-28
├───5na4-ggsr     
│   └───2014-06-27
├───68au-sqwp     
│   └───2014-07-16
├───7bem-dfrw     
│   └───2014-05-30
├───7w46-4gyd     
│   └───2014-07-11
├───8vmy-jxwa     
│   └───2014-05-30
├───8yba-nwv8     
│   └───2014-05-30
├───bgr8-u8k9     
│   └───2014-05-31
├───c67z-dbvm     
│   └───2014-05-30
├───c6ah-5aku     
│   └───2014-07-01
├───cxem-pjvn     
│   └───2014-07-01
├───data.json     
│   └───2014-07-20
├───ebrc-i5v8     
│   └───2014-05-30
├───k92y-mq42     
│   └───2014-07-01
├───kh26-cyeh     
│   └───2014-05-31
├───nyng-nunu     
│   └───2014-07-04
├───pcfa-7s99     
│   └───2014-07-01
├───qpju-4723     
│   └───2014-06-17
├───rapb-hjzf     
│   └───2014-07-04
├───sp42-d42z     
│   └───2014-07-14
├───uv37-em32     
│   └───2014-05-31
├───w9jv-ngfh     
│   └───2014-06-26
├───wnd5-ss2z     
│   └───2014-05-31
├───wpxs-vmht     
│   └───2014-05-31
└───ycd7-6v83     
    └───2014-07-01
```


## contributors

- [jden](http://jden.us)

## license
public domain