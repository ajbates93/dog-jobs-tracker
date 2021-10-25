const data = {
    posts: [
        {
            id: 'abcd1',
            content: 'Flea Treatment',
            date: '01-10-2021',
            userId: 'user-1'
        },
        {
            id: 'abcd2',
            content: 'Worm Treatment',
            date: '01-10-2021',
            userId: 'user-1'
        },
        {
            id: 'abcd3',
            content: 'Booster Jabs',
            date: '04-10-2021',
            userId: 'user-1'
        },
        {
            id: 'abcd4',
            content: 'Weigh In - 20kg',
            date: '08-10-2021',
            userId: 'user-2'
        },
    ],
    users: [
        {
            id: 'user-1',
            username: 'ajbates93',
            fullName: 'Alex Bates',
            dateOfBirth: '27-05-93'
        },
        {
            id: 'user-2',
            username: 'vllavelle92',
            fullName: 'Vicky Lavelle',
            dateOfBirth: '06-11-92'
        }
    ]
}

const currentUserId = 'user-1'

export { data, currentUserId }