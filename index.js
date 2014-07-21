var request = require('request')
var fs = require('fs')
var baseUrl = 'http://data.chattlibrary.org'
var path = require('path')
var mkdirp = require('mkdirp')

mkdirp(path.join('.', 'data'), function (err) {
  if (err) { return console.log(err)}
  start()
})

function start() {

  request({
    url: baseUrl + '/data.json',
    json: true
  }, function (err, res) {
    if (err) { return console.error(err)}
    if (res.statusCode >= 400) { return console.error(res.statusCode, res.body)}

    downloadAll(res.body)
  })
  
}

function download(set, cb) {
  var outdir = path.join('.','data',set.identifier,set.modified) 
  mkdirp(outdir, function (err) {
    if (err) { return console.error(err) }

    var item
    if (set.format === 'application/json') {
      item = set
    } else {
      item = set.distribution.filter(function (item) {
        return item.format === 'application/json'
      })[0]
    }

    if (!item) {
      return console.error('no json download available for', set.identifier, set.title)
    }

    request(item.accessURL)
    .pipe(fs.createWriteStream(path.join(outdir,set.identifier+'.json')))
    .on('close', function () { cb() })  
  })
}

function downloadAll(data) {
  var left = data.length
  var num = 1
  console.log('Downloading ' + left + ' datasets')

  data.forEach(function (set) {
    set.num = num++ 
    download(set, function () {
        left--
        console.log('done with', set.identifier+'.csv', set.title, '/',left,'remaining')
    })
  })
}