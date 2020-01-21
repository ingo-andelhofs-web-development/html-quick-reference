/*-------------- app -------------*/
var app = angular.module("coderef", []);


/*---------- controller ----------*/
app.controller('CodeRefs', ['$scope', function($scope) { 
  $scope.coderefs = [
  	{ 
    	name: '<html>', 
    	content: 'Start en eindigt je HTML-document'
  	}, 
  	{ 
    	name: '<!--...-->', 
    	content: 'Laat je commentaar toevoegen in je html-document'
  	}, 
  	{ 
    	name: '<!DOCTYPE>', 
    	content: 'Geeft het type van het document weer (xml, html, html5, ...)'
  	}, 
  	{ 
    	name: '<a>', 
    	content: 'Verwijst naar een link',
        attributes: [
            ['download', 'verwijzing naar een bestand dat gedownload wordt'],
            ['href', 'verwijzing naar een URL/link'],
            ['hreflang', 'geeft de \'taal\' aan van de link'], 
            ['media', 'geeft aan voor welke media de site geoptimaliseerd is'],
            ['rel', 'geeft de relatie tussen de link en het document weer'],
            ['target', 'geeft aan waar de link geopend wordt'], 
            ['type', 'geeft het type van de media weer']
        ]
  	}, 
  	{ 
    	name: '<abbr>', 
    	content: 'Geeft een afkorting weer'
  	}, 
  	{ 
    	name: '<address>', 
    	content: 'Geeft je contact informatie weer'
  	}, 
  	{ 
    	name: '<area>', 
    	content: 'Geeft een gebied binnen een \'image-map\' weer'
  	}, 
  	{ 
    	name: '<article>', 
    	content: 'Geeft een artikel weer',
        version: 'html5'
  	}, 
  	{ 
    	name: '<aside>', 
    	content: 'Geeft inhoud (aan de zijkant van het scherm) weer',
        version: 'html5'
  	},
    {
        name: '<audio>',
        content: 'Verwijst naar een geluid bestand',
        tags: 'muziek, soundtrack, ...',
        version: 'html5'
    },
    {
        name: '<b>',
        content: 'Maakt je tekst vetgedrukt'
    },
    {
        name: '<base>',
        content: 'Geeft de basis URL/link weer van waar al je bestanden afkomstig zijn'
    },
    {
        name: '<bdi>',
        content: 'Isoleert een deel van de tekst dat in een andere richting kan staan (een andere taal) zodat het de omringende tekst niet in de war brengt',
        version: 'html5'
    },
    {
        name: '<bdo>',
        content: 'Overschrijft de richting van de tekst ( van rechts naar links)'
    },
    {
        name: '<blockquote>',
        content: 'Een gedeelte waar een quote (van een andere bron) in staat'
    },
    {
        name: '<body>',
        content: 'Geeft de zichtbare inhoud van je website weer'
    },
    {
        name: '<br>',
        content: 'Begint een nieuwe lijn (enter)'
    },
    {
        name: '<button>',
        content: 'Verwijst naar een knop waar je op kan klikken'
    }
      
      
    /*,
    {
        name: '',
        content: ''
    }*/
  ];
}]);
