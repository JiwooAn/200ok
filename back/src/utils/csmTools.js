/*
# TODAY_YEAR = datetime.date.today().year
TODAY_YEAR = 2020   # 윤년
TODAY_LEAP = calendar.isleap(TODAY_YEAR)
DAYMOD = 183.0 if TODAY_LEAP else 182.5

def compare_set(a: set, b: set):
  return 1.0 - len(a & b)/max(len(a), len(b))

def to_yday(bdstr: str) -> int:
  m, d = map(int, bdstr.split('-'))
  return datetime.date(TODAY_YEAR, m, d).timetuple().tm_yday

def compare_yday(a: str, b: str):
  a = to_yday(a)
  b = to_yday(b)
  delta = abs(a - b)
  if delta < DAYMOD:
    result = abs(delta)
  else:
    result = DAYMOD*2 - delta
  return result / DAYMOD
*/

class CharacterCategoricalComparison {
  // compareBirthday;

  /**
   * @arg {{
   *  birthday: string,
   *  hobby: string,
   *  personality: string,
   *  colors: string[],
   *  styles: string[],
   * }} kwargs - 사용자 정보 5가지를 입력받습니다.
   */
  constructor({ birthday, hobby, personality, colors, styles }) {
    // Object.assign(this, arguments[0]);
    this.birthday = birthday
    this.hobby = hobby
    this.personality = personality
    this.colors = Set(colors)
    this.styles = Set(styles)
  }

  /** 단순 비교로 같으면 0, 다르면 1입니다. */
  compareHobby(other) {
    return this.hobby === other ? 0 : 1;
  }

  /** 단순 비교로 같으면 0, 다르면 1입니다. */
  comparePersonality(other) {
    return this.personality === other ? 0 : 1;
  }

  /** 중복값이 없으면 1, 전부 중복이면 0, 일부 중복이면 0.5입니다. */
  compareColors(others) {
    let intersect = 0;
    for (const item of this.colors) {
      if ()
    }
  }

  /** 중복값이 없으면 1, 전부 중복이면 0, 일부 중복이면 0.5입니다. */
  compareStyles(others) {}
}
