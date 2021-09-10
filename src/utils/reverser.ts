import { REVERSER_MODES } from "../constants";

const reverser = (text: string, submode: string) => {
  let output: string;

  if (submode === REVERSER_MODES.WORD) {
    const words: string[] = text.trim().split(" ");
    const reversedWords: string[] = [];
    for (const word of words) {
      reversedWords.push(word.trim().split("").reverse().join(""));
    }
    output = reversedWords.join(" ");
  } else {
    output = text.trim().split("").reverse().join("");
  }

  return output;
};

export default reverser;
