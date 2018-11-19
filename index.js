function lowerCaseDrivers(drivers) {
    const newDrivers = drivers.map(driver => driver.toLowerCase());
    return newDrivers;
}

function nameToAttributes(drivers) {
    let newDrivers = drivers.map(function(driver) {
      let split = driver.split(" ");
      return Object.assign({}, {firstName: split[0]}, {lastName: split[1]})
    } )
    return newDrivers;
  }

  function attributesToPhrase(drivers) {
    let newDrivers = drivers.map(function(driver) {
      return `${driver.name} is from ${driver.hometown}`
    }) 
    return newDrivers;
  }
