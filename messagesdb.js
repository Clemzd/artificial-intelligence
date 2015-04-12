// Create DB and fill it with records
var inputs = TAFFY([
	{"id":1,"input":"Bonjour","responseId":1},
	{"id":2,"input":"Salut","responseId":1},
	{"id":3,"input":"Yo","responseId":1},
	// 
	{"id":4,"input":"Ca va ?","responseId":2},
	{"id":5,"input":"ça va ?","responseId":2},
	{"id":6,"input":"ca va?","responseId":2},
	//
	{"id":7,"input":"bien","responseId":3},
	{"id":8,"input":"ca va","responseId":3},
	{"id":9,"input":"ca passe","responseId":3},
]);

var responses = TAFFY([
	{"id":1,"messages":["Salut","Bonjour","Yo","Bonjour inconnu"]},
	{"id":2,"messages":["Bien et toi ?","Ca va et toi ?","Ca va bien ^^ et toi ?"]},
	{"id":3,"messages":["Cool ! Quoi de neuf ?","Cool ! Tu fais quoi dans la vie ?","C'est bien ça !"]}
]);

var messages = inputs().join(responses, ['responseId', 'id']);
