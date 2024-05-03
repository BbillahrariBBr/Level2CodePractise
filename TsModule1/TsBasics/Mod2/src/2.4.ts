{
  // interface Generic
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  interface EmilabWatch {
    brand: string;
    model: string;
    display: string;
  }

  interface AppleWatch {
    brand: string;
    model: string;
    sleepTrack: boolean;
    heartTrack: boolean;
  }

  interface YamahaBike {
    brand: string;
    model: string;
  }

  const poorDev: Developer<EmilabWatch> = {
    name: "BBillah",
    computer: {
      brand: "Asus",
      model: "X-2560l",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw23",
      display: "OLed",
    },
  };

  const richDev: Developer<AppleWatch, YamahaBike> = {
    name: "MBBillah",
    computer: {
      brand: "Hp",
      model: "X60l",
      releaseYear: 2019,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "i23j",
      sleepTrack: true,
      heartTrack: true,
    },
    bike: {
      brand: "Yamaha",
      model: "100cc",
    },
  };

  //
}
