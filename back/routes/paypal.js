import express from "express";
const routerPaypal = express.Router();
import paypal from '@paypal/checkout-server-sdk'    

// Configurar cliente de PayPal
const clientId = 'AYjVpmqiIRrq9iEghiK-PSFVozz7z7Nh1zZMqOfEodlcGy0maZMsJ8ZTkoTexOPyqmIFidEaABpfXRJI';
const clientSecret = 'EIy7LTltbYyTN6qviyGtQ6DjRNYvU-8SjuGZxSnPw2YG0x_TTcS3pA2Sepxu7tlwmsk9R83nnvv1ol-J';

const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);

// Endpoint para crear una orden de pago con PayPal
routerPaypal.post('/paypal/create-order', async (req, res) => {
  const totalAmount = req.body.totalAmount;

  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer('return=representation');
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'USD',
          value: totalAmount.toString(),
        },
      },
    ],
  });

  try {
    const response = await client.execute(request);
    
    res.json({ orderId: response.result.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default routerPaypal;
