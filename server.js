var express = require('express');
var app = express();
app.use(express.static(__dirname+"/public"));
app.get('/contactList',function(req,res){
	console.log("I received a Get request");
		person1= {
			name: 'Tim',
			email: 'tim@tim.com',
			number: '111 111 111',
		};

		person2= {
			name: 'Emily',
			email: 'Emily@email.com',
			number: '222 222 222',
		};

		person3= {
			name: 'John',
			email: 'John@email.com',
			number: '333 333 333',
		};	


		var contactList=[person1,person2,person3];
		res.json(contactList);
});

app.listen(3000);

console.log("server on 3000")