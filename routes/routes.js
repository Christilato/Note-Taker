const path = require('path');
const fs = require('fs');


module.exports = app => {

    fs.readFile("db/db.json", "utf8", (err, data) => {
        if(err) throw err;
        var notes = JSON.parse(data);

        // GET api notes and return all saved notes as json
        app.get("/api/notes", (req, res) => {
            res.json(notes);
        });

        // POST API notes- recieve a new note to save on the request body, add it to json, & return note 

        app.post("/api/notes", (req, res) => {
            var newNote = req.body;
            notes.push(newNote);
            updatedNotes();
            return console.log("Adeed new note: " + newNote.title);

        });

        // give each note a unique id when its saved 
        app.get("/api/notes/:id", (req, res) => {
            res.json(notes[req.params.id]);
        });

        // delete specific note
        app.delete("/api/notes/:id", (req, res) => {
            notes.splice(req.params.id, 1);
            updatedNotes();
            console.log("Deleted note with id " + req.params.id);
        });

        // GET /notes should return notes.html file
        app.get("/notes", (req, res) =>
            res.sendFile(path.join(__dirname, '../public/notes.html'))
        );
        // GET * should return index.html
        app.get('*', (req, res) =>
            res.sendFile(path.join(__dirname, '../index.html'))
        );
        function updatedNotes () {
            fs.writeFile("db/db.json", JSON.stringify(notes, '/t'), err => {
            if (err) throw err;
            return true;
        });

        }
    });

}