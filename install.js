#!/usr/bin/env node

/* global exec, mkdir, test */

require('shelljs/global')

var path = require('path')

var databaseFile = path.join(__dirname, 'tmp/ki-database.csv')

if (!test('-f', databaseFile)) {
  mkdir('-p', 'tmp')
  exec('wget http://kidbdev.med.unc.edu/databases/kiDownload/download.php -O "' + databaseFile + '"')
}
