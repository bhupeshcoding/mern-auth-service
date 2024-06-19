function login(username: string): string {
    const user = {
        name: 'bhupesh',
    };
    const name = user.name;

    return username + name;
}
login('admin');
