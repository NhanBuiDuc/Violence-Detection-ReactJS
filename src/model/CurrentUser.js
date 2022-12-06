import e from "express";

export default class CurrentUser {
    constructor(account_id, email, role, name, phone, address) {
      this.account_id = account_id;
      this.email = email;
      this.role = role;
      this.name = name;
      this.phone = phone;
      this.address = address;
      this.loggedIn = false
      this.parse()
    }

    toString() {
        return (JSON.stringify(this)); 
    }

    parse() {
        object = sessionStorage.getItem("user-info")
        if(object != null){
            this.account_id = object.account_id
            this.email = object.email
            this.role = object.role
            this.name = object.name
            this.phone = object.phone
            this.address = object.address
            this.loggedIn = true
        }
        
    }

}