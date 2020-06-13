class UserTemplate {
    constructor(name, password, age, dateCreat) {
        this.name = name
        this.password = password;
        this.age = age;
        this.dateCreat = dateCreat;
        this.checkstatus = this.checkstatus;
        this.connected = false;
    }
    login() {
        this.connected = true
        console.log('your login status', this.connected)
    }
    logout() {
        this.connected = false
        console.log('your login status', this.connected)
    }
    checkstatus() {
        this.checkstatus = (this.connected)
        console.log('Your is status: ', this.checkstatus)
    }


}

user1 = new UserTemplate('kongphop', 'ABCD', '123456', '28/05/63')
console.log(user1.name)
console.log(user1.password)
console.log(user1.age)
console.log(user1.dateCreat)
user1.login()
// user1.logout()
user1.checkstatus()


