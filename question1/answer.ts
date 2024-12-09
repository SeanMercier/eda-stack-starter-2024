interface Car {
    make: string;
    color: string;
    registration: string;
    owner: string;
  }
  
  interface Bicycle {
    make: string;
    color: string;
    owner: string;
  }
  
  type Transporter = Car | Bicycle;
  
  const database: Transporter[] = [
    {
      make: "Toyota Yaris",
      color: "Red",
      registration: "231WD1234",
      owner: "Jane Smith",
    },
    {
      make: "Suzuki Swift",
      color: "Blue",
      registration: "241WD4321",
      owner: "Paul O Regan",
    },
    {
      make: "Ford Puma",
      color: "Blue",
      registration: "241WD1212",
      owner: "Eileen Silk",
    },
    {
      make: "Revel Rascal XO",
      color: "Blue",
      owner: "Cindy Tamoka",
    },
    {
      make: "Yeti SB140 LR",
      color: "Red",
      owner: " ",
    },
  ];

  function getMatches(criteria: (t: Transporter) => boolean): Transporter[] {
    return database.filter(criteria);
  }
  
  // Get Blue transporters
  const blueTransporters = getMatches((t) => t.color === "Blue");
  console.log("Blue Transporters:", blueTransporters);
  
  // Get Red cars with a registration
  const redCars = getMatches((t) => t.color === "Red" && "registration" in t);
  console.log("Red Cars:", redCars)



  