export const random = (() => {
  type RandomNumber = keyof {
    readonly 'center': 'center',
    readonly 'center-strong': 'center-strong',
    readonly 'edge': 'edge',
  }

  const _get = (type?: RandomNumber) => {
    switch (type) {
      // 中央に配置
      case 'center':
        return (Math.random() + Math.random()) / 2;
      // さらに中央に配置
      case 'center-strong':
        const valueA = (Math.random() + Math.random()) / 2;
        const valueB = (Math.random() + Math.random()) / 2;
        return (valueA + valueB) / 2;
      // 端に偏らせる
      case 'edge':
        const base = Math.random() * Math.random() * Math.random();
        const inverse = 1.0 - base;
        return Math.random() < 0.5 ? base : inverse;
      // 一様分布
      default:
        return Math.random();
    }
  }

  const _range = (min: number, max: number) => {
    const randomNubmer = _get();
    return Math.floor(randomNubmer * (max - min + 1) + min);
  };

  return {
    get: _get,
    range: _range,
  }
})()
