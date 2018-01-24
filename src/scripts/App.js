import SparqlFormatter from '../../dist/js/SparqlFormatter';
import WSparql from '../../dist/js/WSparql';
import SparqlClient from '../../dist/js/SparqlClient';
import LightEditor from '../../dist/js/LightEditor';

let sparqlFormatter = new SparqlFormatter({
    additionalPrefixes: {
        'crm2': 'http://sp7.ru/ontology/',
        'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
        'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
        'owl': 'http://www.w3.org/2002/07/owl#'
    }
});

new LightEditor({
    classesSelectElement: '#leClassesSelect',
    propertyTreeElement: '#lePropertyTree',
    selectedPropertyTreeElement: '#leSelectedPropertyTree',
    queryInputElement: '#leQueryInput',
    buildQueryElement: '#leBuildQuery',
    sparqlFormatter: sparqlFormatter,
    wsparql: new WSparql({
        'sparqlFormatter': sparqlFormatter
    }),
    sparqlClient: new SparqlClient({
        graphIri: 'http://sp7.ru/',
        requestUrl: 'http://draft.adposium.ru:8890/sparql',
        requestType: 'POST',
        requestDataType: 'jsonp',
        responseFormat: 'json',
        debugMode: 'on'
    })
});