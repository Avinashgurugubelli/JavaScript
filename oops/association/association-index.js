


function Customer(name, age) {

    // Static variable
    Customer.idCounter = ++Customer.idCounter || 1;

    let _name = name;
    let _age = age;
    let _id = getId();



    // getter for _name
    Object.defineProperty(this, "name", {
        get: () => { return _name; }
    });

    // getter for id
    Object.defineProperty(this, "id", {
        get: () => { return getId(); }
    });

    // getter and setter.
    Object.defineProperty(this, "age", {
        get: () => {
            return _age;
        },
        set: (value) => {
            if (value > 120 || value < 0) {
                console.log('invalid age passed: ' + value);
            }
            else {
                _age = value;
            }
        }
    });



    // private function
    function logInfo() {
        console.log("logger: Name: " + name, "age: " + age);
    }

    function getId() {
        return Customer.idCounter;
    }


    /**
     * privileged  function -> it can be accessed out side the function using constructor obj
     * The problem with this approach is that, if you create 100 employee objects there will be 100 copies of getName() function
     */
    this.printInfo = () => {
        logInfo();
    }


    /**
     * Public function
     * attaching using prototype the following are the advantages of using the prototype object to add functions.
     * 1. No matter how many objects you create, functions are loaded only once into memory
     * 2. Allows you to override functions if required.
     */
    Customer.prototype.getCustomerInfo = () => {
        return {
            id: _id,
            name: name,
            age: age
        };
    }

}


function PrimeCustomer(name, age, membershipId) {

    // Association
    let cust = new Customer(name, age);

    let _membershipId = membershipId;

    PrimeCustomer.prototype.getCustomerInfo = () => {
        return {
            id: cust.id,
            name: name,
            age: age,
            membershipId: _membershipId
        };
    }

}




//#region execution block

let customer1 = new Customer("Avinash", 30);
customer1.age = 40; // overwriting age
console.log("Name: " + customer1.name, "age: " + customer1.age);
customer1.printInfo();
console.log("customer info: ");
console.log(customer1.getCustomerInfo());

let customer2 = new Customer("Jack", 30);
console.log(customer2.getCustomerInfo());


// Prime customer invoke
let pc1 = new PrimeCustomer("Martin", 40, 1234);
console.log(pc1.getCustomerInfo());
console.log(pc1 instanceof PrimeCustomer);
//#endregion execution block

