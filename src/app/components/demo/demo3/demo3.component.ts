import { Component } from '@angular/core';

@Component({
    selector: 'app-demo3',
    templateUrl: './demo3.component.html',
    styleUrls: ['./demo3.component.scss']
  })

export class Demo3Component {
  myString : string = "Salut tous le monde"
  
  myNumber : number = 127.249
  
  myDate : Date = new Date()
  
  myObject : any = {nom : "Arthur", Age : 42}// any de type inconnu equivalent au var en c#
  
  euro : number = 100000
  
  poweredLoulou : number = 42

  secondeConverter : number = 0
 
}
document.addEventListener("DOMContentLoaded", async () => {
  const bitcoinPriceElement = document.getElementById("bitcoinPrice");

  if (bitcoinPriceElement) {
      const apiUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";

      while (true) {
          const response = await fetch(apiUrl);
          if (response.ok) {
              const data = await response.json();
              const bitcoinPrice = data.bitcoin.usd;
              bitcoinPriceElement.textContent = bitcoinPrice;
          }

          await new Promise(resolve => setTimeout(resolve, 10000)); // Delay for 10 seconds
      }
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const euroAmountInput = document.getElementById("euroAmount") as HTMLInputElement;
  const usdEquivalentElement = document.getElementById("usdEquivalent");

  if (euroAmountInput && usdEquivalentElement) {
      euroAmountInput.addEventListener("input", () => {
          const euroAmount = parseFloat(euroAmountInput.value);
          if (!isNaN(euroAmount)) {
              const usdEquivalent = euroAmount * 1.18; // Conversion rate (example)
              usdEquivalentElement.textContent = usdEquivalent.toFixed(2) + " USD";
          } else {
              usdEquivalentElement.textContent = "";
          }
      });
  }
});
document.addEventListener("DOMContentLoaded", async () => {
  const amountInput = document.getElementById("amount") as HTMLInputElement;
  const currencySelect = document.getElementById("currency") as HTMLSelectElement;
  const btcEquivalentElement = document.getElementById("btcEquivalent");

  if (amountInput && currencySelect && btcEquivalentElement) {
      const apiUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,eur";

      amountInput.addEventListener("input", async () => {
          const amount = parseFloat(amountInput.value);
          const selectedCurrency = currencySelect.value;

          if (!isNaN(amount)) {
              const response = await fetch(apiUrl);
              if (response.ok) {
                  const data = await response.json();
                  const btcRate = data.bitcoin[selectedCurrency.toLowerCase()]; // Assuming selectedCurrency is "usd" or "eur"
                  const btcEquivalent = amount / btcRate;
                  btcEquivalentElement.textContent = btcEquivalent.toFixed(8) + " BTC";
              }
          } else {
              btcEquivalentElement.textContent = "";
          }
      });
  }
});
// import * as bitcoin from 'bitcoinjs-lib';

// // Clés privées et adresses de l'expéditeur et du destinataire
// const senderPrivateKey = 'YOUR_SENDER_PRIVATE_KEY';
// const senderAddress = 'SENDER_BITCOIN_ADDRESS';
// const recipientAddress = 'RECIPIENT_BITCOIN_ADDRESS';

// // Montant en satoshis (1 BTC = 100000000 satoshis)
// const amountSatoshis = 10000000; // Exemple : 0.1 BTC

// // Création de la transaction
// const network = bitcoin.networks.bitcoin;
// const tx = new bitcoin.TransactionBuilder(network);
// tx.addInput('PREVIOUS_TX_HASH', 0); // Remplacez par l'index et le hash de l'UTXO source
// tx.addOutput(recipientAddress, amountSatoshis);

// // Importez ECPair et utilisez-le pour signer la transaction
// const keyPair = bitcoin.ECPair.fromPrivateKey(Buffer.from(senderPrivateKey, 'hex'));
// tx.sign(0, keyPair);

// // Sérialisation et affichage de la transaction
// const txHex = tx.build().toHex();
// console.log('Transaction Hex:', txHex);