db = new Mongo().getDB("logicareDB");

db.createCollection('staff');
db.createCollection('patient');
db.createCollection('inventory');


