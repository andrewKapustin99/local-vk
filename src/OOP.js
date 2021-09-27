let man = {
    name: "Andrew", 
    age: 21, 
    sayName() {
        alert(this.name)
    }
}


let page = {
    title: "Samurai-JS",
    content: ``,
    render() {
        document.write(this.content)
    }
}

let page2 = {
    title = "Samurai-JS",
    _content: ``,
    setContent(value) {
        this._content = value
    },
    getContnent() {
        return this._content
    }, render: function() {
        document.write(this._content)
    }
}




let store = {
    _subscriber() {
        console.log(`no subscrubers (observers)`);
    },
    _state: {
        firstName: 'Andrew',
        lastName: 'Kapustin'
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer
    },
    setFirstName(value) {
        this._state.firstName = value;
        this._subscriber()
    }   
}
let state = store.getState();
state.setFirstName('samurai-JS.com');
state.getState();



// 

