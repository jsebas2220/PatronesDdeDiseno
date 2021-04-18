
/* patron adaptes estructural  para hacer compatibles dos sistemas */


interface Emailer { /*interface  que se llama mailer y tiene un metodo send*/
    send(): void;

}

class EmailProvider implements Emailer { /* Proveedor de correos ya definido que implemente la inteface y el metodo*/
    public send(): void {
        console.log ('Sending mail from EmailProvider');
    }
}

class EmailProvider2 { /* Otro proveedor de correo diferente con otro metodo*/
    public sendMail(): void{
        console.log ('Sending mail from EmailProvider2');
    }
}


/* Creamos Adaptador para trabajar con el nuevo proveedor de correos*/
class EmailProvider2Adapter implements Emailer{
    constructor(
        private emailProvider: EmailProvider2
    ){}
    public send(): void {
        this.emailProvider.sendMail();
    }
}

function sendMail (emailer: Emailer){ /* El sistema envia el correo*/
    emailer.send();
}

const emailer = new EmailProvider2Adapter(new EmailProvider2);
    
    sendMail(emailer);
