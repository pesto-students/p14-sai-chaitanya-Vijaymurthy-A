async function getExchangeRate(currency) {
  try {
    var myHeaders = new Headers();
    myHeaders.append("key", "<key>");
    var requestOptions = {
      headers: myHeaders,
    };
    const responseData = await fetch(
      `https://api.apilayer.com/currency_data/convert?to=EUR&from=${currency}&amount=1`,
      requestOptions
    );
    if (responseData.ok) {
      const responseJson = await responseData.json();

      return Object.hasOwn(responseJson, "result")
        ? responseJson.result.toFixed(4)
        : null;
    } else {
      console.log("Failed Fetching data from the API");
      return null;
    }
  } catch (err) {
    console.log(`Exception Occured : ${err}`);
    throw err;
  }
}

getExchangeRate("KWD")
  .then((res) => {
    console.log(`Exchange Conversion rate to EUR is ${res}`);
  })
  .catch((err) => {
    console.error(`Exception Occured : ${err}`);
  });
