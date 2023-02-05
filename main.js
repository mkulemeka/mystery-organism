// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//Returns an object with specimen number and dna
const pAequorFactory = (num, dnaBases) => {
  const obj = {
    specimenNum: num,
    dna: dnaBases,
    mutate() {
      const randomBase = Math.floor(Math.random() * 14);
      console.log(randomBase);
      if (dnaBases[randomBase] === "A") {
        dnaBases[randomBase] = returnRandBase() != "A" && returnRandBase();
      } else if (dnaBases[randomBase] === "T") {
        dnaBases[randomBase] = returnRandBase() != "T" && returnRandBase();
      } else if (dnaBases[randomBase] === "C") {
        dnaBases[randomBase] = returnRandBase() != "C" && returnRandBase();
      } else if (dnaBases[randomBase] === "G") {
        dnaBases[randomBase] = returnRandBase() != "G" && returnRandBase();
      }

      return this.dna;
    },
    compareDNA(pAequorObj) {
      let count = 0;
      let percentage = Math.floor((count / pAequorObj.dna.length) * 100);
      for (let i of this.dna) {
        for (let j of pAequorObj.dna) {
          if (i === j) {
            count++;
          }
        }
      }

      return `specimen #${this.specimenNum} and specimen #${pAequorObj.specimenNum} have %${percentage} DNA in common`;
    },
    willLikelySurvive() {
      let count = 0;
      for (let base of this.dna) {
        if (base === "C" || base === "G") {
          count++;
        }
      }
      let percentage = Math.floor((count / this.dna.length) * 100);
      return percentage >= 60;
    },
  };

  return obj;
};

//Returns an array 30 instances that can survive in their natural environment
const likelyToSurvive = () => {
  const collection = [];
  let specimenNum = 0;
  while (collection.length < 30) {
    let randArr = mockUpStrand();
    if (pAequorFactory(specimenNum, randArr).willLikelySurvive()) {
      collection.push(randArr);
      specimenNum++;
    }
  }
  return collection;
};

console.log(likelyToSurvive().length);
