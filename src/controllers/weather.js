let axios = require("axios");

let getWeather = async function (req, res) {
  try {
    let city = req.query.q;
    let id = req.query.appid;
    console.log(`query params are: ${city} ${id}`);
    var options = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`,
    };
    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getSortedCities = async function (req, res) {
  try {
    let cities = [
      "Bengaluru",
      "Mumbai",
      "Delhi",
      "Kolkata",
      "Chennai",
      "London",
      "Moscow",
    ];
    let citiesArray = [];
    for (i = 0; i < cities.length; i++) {
      let obj = { city: cities[i] };
      let result = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=b0bea718659ff752f08fae7fbe279347`
      );
      obj.temp = result.data.main.temp;
      citiesArray.push(obj);
    }
    let sort = citiesArray.sort(function (a, b) {
      return a.temp - b.temp;
    });
    res.status(200).send({ status: true, data: sort });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let createMeme = async function (req, res) {
  try {
    let template_id = req.query.template_id;
    let username = req.query.username;
    let password = req.query.password;
    let text0 = req.query.text0;
    let text1 = req.query.text1;

    console.log(
      `body is : ${template_id} ${username} ${password} ${text0} ${text1}`
    );
    var options1 = {
      method: "post",
      url: `https://api.imgflip.com/caption_image?template_id=${template_id}&username=${username}&password=${password}&text0=${text0}&text1=${text1}`,
      data: template_id,
      username,
      password,
      text0,
      text1,
    };

    let result = await axios(options1);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

module.exports.getWeather = getWeather;
module.exports.createMeme = createMeme;
module.exports.getSortedCities = getSortedCities;
