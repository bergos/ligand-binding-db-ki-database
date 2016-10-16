#!/usr/bin/env node

var fileStreamOrStream = require('ligand-binding-utils/filestream-or-stream')
var program = require('commander')
var toChembl = require('..')

function processBindings () {
  var options = {
    base: program.base,
    verbose: program.verbose
  }

  return Promise.resolve().then(function () {
    return fileStreamOrStream(program.args.shift(), process.stdin, options.verbose)
  }).then(function (stream) {
    return toChembl(stream, process.stdout, options)
  }).catch(function (error) {
    process.stderr.write('error: ' + (error.stack || error.message) + '\n')
  })
}

program
  .usage('[options] <file>')
  .option('-v, --verbose', 'verbose output')
  .option('-b, --base <baseUrl>', 'base URL')

program.parse(process.argv)

processBindings()
