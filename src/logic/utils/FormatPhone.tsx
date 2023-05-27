export default class FormatPhone {
  private static pattern = '(??) ?????-????';

  static format(value: string): string {
    const nums = FormatPhone.unformat(value).split('');
    return nums
      .reduce((formatted: string, num: string) => {
        return formatted.replace('?', num);
      }, FormatPhone.pattern)
      .split('?')[0]
      .trim()
      .replace(/[()-]$/, '');
  }

  static unformat(value: string): string {
    return value.replace(/[^0-9]+/g, '');
  }
}
