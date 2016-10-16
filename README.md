# ligand-binding-db-ki-database

Downloads and converts the [PDSB Ki database](http://kidbdev.med.unc.edu/databases/kidb.php) to ChEMBL triples.

## Usage

`npm install` downloads and converts the CSV file to N-Triples.
`npm start` starts the Fuseki server and imports the N-Triples on the first start.
The SPARQL endpoint runs at: [http://localhost:3030/ki-database/sparql](http://localhost:3030/ki-database/sparql)
