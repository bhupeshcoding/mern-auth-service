function login(username: string): string {
    console.log(username);
    const user = {
        name: 'bhupesh',
    };
    const name = user.name;
    return username + name;
}

login('admin');
