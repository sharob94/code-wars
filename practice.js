// let familyMembers = [
//     {
//         name:'Jude', Relationship:'brother'},
//     {name:'Rachel', Relationship:'sister'},
// ]

// console.log(familyMembers)

let user = {
    name: 'shana',
    age: 27,
    location: 'philly',
    occupation: 'software engineer',
    duties: [{
        name: 'Jude', Relationship: 'brother'
    },
    { name: 'Rachel', Relationship: 'sister' }],
    login: function () {
        console.log(this.duties)
    },
    logout: function () {
        console.log('I logged out')
    },
    logduties: function () {
        this.duties.forEach(duty => {
            console.log(duty.name, duty.Relationship)
        })
    }


}
user.login()
user.logduties()

ss