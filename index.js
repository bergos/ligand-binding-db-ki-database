var csvParser = require('csv-parser')
var toTriple = require('ligand-binding-utils/object-to-triple-stream')
var toTripleConfig = require('./lib/to-triple-config')
var filter = require('ligand-binding-utils/filter-stream')
var NTriplesSerializer = require('ligand-binding-utils/rdf-serializer-ntriples')

function rowFilter (row) {
  return row.SMILES
}

function toChembl (inputStream, outputStream, options) {
  options = options || {}
  var base = options.base || 'http://kidbdev.med.unc.edu/databases/'

  return new Promise(function (resolve, reject) {
    var serializer = NTriplesSerializer()

    serializer.on('error', reject)
    serializer.on('end', resolve)

    inputStream
      .pipe(csvParser({strict: false}))
      .pipe(filter(rowFilter))
      .pipe(toTriple(toTripleConfig(base)))
      .pipe(serializer)
      .pipe(outputStream)
  })
}

module.exports = toChembl
