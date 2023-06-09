export const formRegx = {
  userId: {
    pattern: /^[a-zA-Z][a-zA-Z0-9_]{4,25}$/,
    message: '아이디는 4~25자 이내, 영문 또는 숫자만 가능합니다.'
  },
  username:
    {
      pattern: /^[A-Za-z]{1,30}$/,
      message: '이름은 영문만 가능합니다'
    },
  email:
    {
      // pattern: '/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,6}$/'
      pattern: new RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'),
      message: '이메일 형식을 지켜주세요.'
    },
  password:
    {
      pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,16}$/,
      message: '8~16자 이내, 영문대소문자와 특수문자를 포함시켜주세요.'
    }
}
