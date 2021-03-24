const order = {
    name: 'Luiz Silva',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 50,
    },
  };
  
  const customerInfo = (order) => `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;
  
  console.log(customerInfo(order));
  
  const showTwoDecimals = (num) => (Math.round(num * 100) / 100).toFixed(2);
  
  const orderFormater = (orderItems) => {
    let formated = '';
    const last = orderItems.length - 1;
    orderItems.forEach((item, index) => {
      if (index === 0) {
        formated = formated.concat(item)
      } else if (index === last) {
        formated = formated.concat(' e ', item)
      } else {
        formated = formated.concat(', ', item)
      }
    })
  
    return formated;
  }
  
  const orderModifier = (order) => {
    const pizzaObj = order.order.pizza;
    const drinkObj = order.order.drinks;
    let orderItems = [];
    for (let pizza of Object.keys(pizzaObj)) {
      orderItems.push(pizza);
  
    }
    for (let drink of Object.keys(drinkObj)) {
      orderItems.push(drinkObj[drink].type);
    }
  
  
    return `Olá ${order.name}, o total do seu pedido de ${orderFormater(orderItems)} é R$${showTwoDecimals(order.payment.total)} .`
  };
  
  console.log(orderModifier(order));