class ParkingLot {
  constructor(numOfSlots) {
    this.parkingSlots = Array.from({ length: numOfSlots }, (v, i) => null);
  }

  park = (carId) => {
    for (let i = 0; i < this.parkingSlots.length; i++) {
      if (this.parkingSlots[i] === null) {
        this.parkingSlots[i] = carId;
        return true;
      }
    }
    return false;
  };

  getSlots = () => {
    return this.parkingSlots;
  };

  remove = (carId) => {
    const index = this.parkingSlots.findIndex((e) => e === carId);
    if (index >= 0) {
      this.parkingSlots[index] = null;
      return true;
    }
    return false;
  };
}

function main() {
  let slots = new ParkingLot(5);
  slots.park("CAR-10");
  slots.park("CAR-20");
  slots.park("CAR-30");
  console.log(slots.getSlots());
  slots.remove("CAR-20");
  console.log(slots.getSlots());
}
main();
