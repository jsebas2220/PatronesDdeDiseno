/* Definicion de ibnterface de observador*/

interface Observer {
    update(): void; /* Metodo update el cual sera llamado para la suscripcion*/
}

/* Metodo subjer para suscribir, desuscribir y notifcar*/
interface Subject { 
    suscribe(observer: Observer): void;
    unsuscribe(observer: Observer): void;
    notify(): void;
}

class Observable implements Subject{ /* Implementacion de la calse observable */
    private observers: Observer[] = [];

    suscribe(observer: Observer): void{ /* Implementacion metodos suscripcion*/
        this.observers.push(observer);
       
    }
    unsuscribe(observer: Observer): void{ /* Implementacion metodos dessuscripcion*/
        this.observers = this.observers.filter(obs => obs !== observer)

    }
    notify(): void{ /* Implementacion metodos notificacion*/
        this.observers.forEach(observer => observer.update());
    }
    
}

class SomeObserver implements Observer{ /* Implementacion de un suscriptor*/
    update(): void{
        console.log('EVENT!!!');
    }
}

class SomeObserver2 implements Observer{ /* Implementacion de un suscriptor2*/
    update(): void{
        console.log('EVENT2!!!');
    }
}

const ob = new Observable(); /* Se crea observable*/
const o = new SomeObserver(); /* Se crea observador*/
const o2 = new SomeObserver2(); /* Se crea otro observador*/

/* Suscripcion de observador*/
ob.suscribe(o);
ob.suscribe(o2);
/* Notificacion*/
ob.notify();
/* desuscribir*/
ob.unsuscribe(o);
/* Ntificacion*/
ob.notify();
