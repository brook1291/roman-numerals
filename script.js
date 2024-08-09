const numInput = document.getElementById('number');
const btn = document.getElementById('convert-btn');
const output = document.getElementById('output');
const outputText = document.getElementById('text');
const ultimo = document.getElementById('ultimo');

const checkNum = (num) => {
  if (num >= 4000) {
    return "f";
  } else if (isNaN(num)) {
    return "nan";
  } else if (num < 1) {
    return "greater";
  } else {
    return true;
  }
}

const numeralConverter = (num) => {
  let finalNum = "";
  const splitNums = num.toString().split("");
  while (splitNums.length < 4) {
    splitNums.unshift("0");
  }
  const fir = parseInt(splitNums[0]);
  const sec = parseInt(splitNums[1]);
  const thi = parseInt(splitNums[2]);
  const fou = parseInt(splitNums[3]);

  if (fir !== 0) {
    finalNum += "M".repeat(fir);
  }

  if (sec !== 0) {
      if (sec === 9) {
        finalNum += "CM";
      } else if (sec >= 5) {
          finalNum += "D" + "C".repeat(sec - 5);
      } else if (sec === 4) {
          finalNum += "CD";
      } else {
          finalNum += "C".repeat(parseInt(sec));
      }
  }

  if (thi !== 0) {
    if (thi === 9) {
        finalNum += "XC";
    } else if (thi >= 5) {
        finalNum += "L" + "X".repeat(thi - 5);
    } else if (thi === 4) {
        finalNum += "XL";
    } else {
        finalNum += "X".repeat(thi);
    }         
  }

  if (fou !== 0) {
    if (fou === 9) {
      finalNum += "IX";
    } else if (fou >= 5) {
        finalNum += "V" + "I".repeat(fou - 5);
    } else if (fou === 4) {
        finalNum += "IV";
    } else {
        finalNum += "I".repeat(fou);
    }   
  }
  return finalNum;
}

const changeOutput = () => {
  const verdict = checkNum(parseInt(numInput.value))
  if (verdict === "f") {
    ultimo.classList.remove("hidden");
    output.classList.remove("grey");
    output.classList.add("red");
    outputText.innerText = "Please enter a number less than or equal to 3999";
  } else if (verdict === "nan") {
    ultimo.classList.remove("hidden");
    output.classList.remove("grey");
    output.classList.add("red");
    outputText.innerText = "Please enter a valid number";
  } else if (verdict === "greater") {
    ultimo.classList.remove("hidden");
    output.classList.remove("grey");
    output.classList.add("red");
    outputText.innerText = "Please enter a number greater than or equal to 1";
  } else {
    ultimo.classList.remove("hidden");
    output.classList.remove("red");
    output.classList.add("grey");
    outputText.innerText = `${numeralConverter(parseInt(numInput.value))}`;
  }
}

btn.addEventListener("click", changeOutput)
numInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    changeOutput();
  }
})
