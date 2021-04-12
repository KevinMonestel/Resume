class Contact{
    name: string;
    email: string;
    phone: string;
    subject: string;
    content: string;

    constructor(name: string, email:string, phone: string, subject: string, content: string){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.content = content;
        this.subject = subject;
    }
}

export default Contact;