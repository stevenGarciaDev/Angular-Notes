import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
})
export class TitleCase implements PipeTransform {
  private commonLowercaseWords = { of: true, the: true };

  transform(sentence: string) {
    if (!this.isValidTitle(sentence)) {
      return '';
    }
    let words: string[] = sentence.split(' ');
    words = this.mapEachWord(words);
    return words.join(' ');
  }

  isValidTitle(input: string) {
    return input.length > 0;
  }

  mapEachWord(words: string[]) {
    return words.map((w, i) => {
      return w in this.commonLowercaseWords && i !== 0
        ? w.toLowerCase()
        : this.performTitleCase(w);
    });
  }

  performTitleCase(word: string) {
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }
}
