class NotesStore {
    constructor() {
        this.notes = [];
        console.log('****', this.notes);
    }

    addNote = (state, name) => {
        let note = {
            state: state,
            name: name
        }
        this.notes.push(note);
        console.log('** Add **', this.notes);
    }

    getNotes = (state) => {
        const retStr = [];
        const filteredNotes = this.notes.filter((note) => note.state === state);
        console.log('filteredNotes is ', filteredNotes);
        if (filteredNotes.length <= 0) {
            return 'Error: Invalid state ' + state;
        }
        
        for (let val of filteredNotes.values()) {
            retStr.push(val.name)
        }
        return retStr.join(',');
    }
}

function main() {
    const obj = new NotesStore();
    obj.addNote('active', 'DrinkTea')
    obj.addNote('active', 'DrinkCoffee')
    obj.addNote('completed', 'study')
    console.log(obj.getNotes('active'));
    console.log(obj.getNotes('completed'));
    console.log(obj.getNotes('foo'));
}
main()



