// Helper functions for Users in Chat
let users = [];

const addUser = ({id, name, room}) => {
    const user = { id, name, room };
    users.push(user);
    return { user };
}

const removeUser = (id, room) => {
    const foundUser = users.find((user) => user.id === id && user.room === room);
    
    if(foundUser) {
        users = users.filter((user) => user.id !== id || user.room !== room)
    }
    
    return foundUser;
    
    // const index = users.findIndex((user) => user.id === id && user.room === room);

    // if(index !== -1) {
    //     return users.splice(index, 1)[0];
    // }
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = {addUser, removeUser, getUser, getUsersInRoom};