export default class CpfValidator {
  private static pattern = '???.???.???-??';

  static format(value: string): string {
    const nums = CpfValidator.unformat(value).split('');
    return nums
      .reduce((formatted: string, num: string) => {
        return formatted.replace('?', num);
      }, CpfValidator.pattern)
      .split('?')[0]
      .replace(/[-.]$/, '');
  }

  static unformat(value: string): string {
    return value.replace(/[^0-9]+/g, '');
  }
}
