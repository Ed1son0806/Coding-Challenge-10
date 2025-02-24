//Task 1 - Creating a Product Class
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }

    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }

    updateStock(quantity) {
        this.stock -= quantity;
    }
}


const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 


prod1.updateStock(3);
console.log(prod1.getDetails()); 


//Task 2 - Creating an Order Class
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }

    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }

    updateStock(quantity) {
        this.stock -= quantity;
    }
}

class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        
        this.product.updateStock(quantity);
    }

    getOrderDetails() {
        const totalPrice = this.product.price * this.quantity;
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${totalPrice}`;
    }
}


const prod1 = new Product("Laptop", 101, 1200, 7); 
const order1 = new Order(501, prod1, 2);

console.log(order1.getOrderDetails()); 


console.log(prod1.getDetails()); 


//Task 3 - Creating an Inventory Class
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }

    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }

    updateStock(quantity) {
        this.stock -= quantity;
    }
}

class Inventory {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    listProducts() {
        this.products.forEach(product => {
            console.log(product.getDetails());
        });
    }
}


const prod1 = new Product("Laptop", 101, 1200, 5); 
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();


//Task 4 - Implementing Order Management
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }

    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }

    updateStock(quantity) {
        this.stock -= quantity;
    }
}

class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.product.updateStock(quantity);
    }

    getOrderDetails() {
        const totalPrice = this.product.price * this.quantity;
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${totalPrice}`;
    }
}

class Inventory {
    constructor() {
        this.products = [];
        this.orders = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    listProducts() {
        this.products.forEach(product => {
            console.log(product.getDetails());
        });
    }

    placeOrder(orderId, product, quantity) {
        if (product.stock >= quantity) {
            const order = new Order(orderId, product, quantity);
            this.orders.push(order);
        }
    }

    listOrders() {
        this.orders.forEach(order => {
            console.log(order.getOrderDetails());
        });
    }
}

const prod1 = new Product("Laptop", 101, 1200, 5);
const inventory = new Inventory();
inventory.addProduct(prod1);

inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
console.log(prod1.getDetails());


//Task 5 - Implementing Product Restocking
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }

    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }

    updateStock(quantity) {
        this.stock -= quantity;
    }
}

class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.product.updateStock(quantity);
    }

    getOrderDetails() {
        const totalPrice = this.product.price * this.quantity;
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${totalPrice}`;
    }
}

class Inventory {
    constructor() {
        this.products = [];
        this.orders = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    listProducts() {
        this.products.forEach(product => {
            console.log(product.getDetails());
        });
    }

    placeOrder(orderId, product, quantity) {
        if (product.stock >= quantity) {
            const order = new Order(orderId, product, quantity);
            this.orders.push(order);
        }
    }

    listOrders() {
        this.orders.forEach(order => {
            console.log(order.getOrderDetails());
        });
    }

    restockProduct(productId, quantity) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            product.stock += quantity;
        }
    }
}

const prod1 = new Product("Laptop", 101, 1200, 3);
const inventory = new Inventory();
inventory.addProduct(prod1);

inventory.restockProduct(101, 5);
console.log(prod1.getDetails());