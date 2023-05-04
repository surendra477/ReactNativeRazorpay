import React from 'react';
import { Text, Button, StyleSheet, TouchableHighlight } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import axios from "axios";

const App = () => {
  const open = async () => {
    const { data: { order } } = await axios.post("https://rozorpaychinmay.onrender.com/api/checkout", {
      'amount': 80
    })
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: 'INR',
      key: 'rzp_test_7r9VErtGVfeM7n',
      amount: '5000',
      name: 'Surendra Ediga',
      order_id: order.id,//Replace this with an order_id created using Orders API.
      prefill: {
        email: 'surendraediga477@gmail.com',
        contact: '7977318133',
        name: 'Surendra Ediga'
      },
      theme: { color: '#53a20e' }
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    });
  }
  
  return (
    <TouchableHighlight  style={{ marginTop: 100 }}>
      <Button color="#841584" title="Pay Rs 80" onPress={() => open()}></Button>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  top: {
    marginTop: '100px',
  }
})

export default App;
