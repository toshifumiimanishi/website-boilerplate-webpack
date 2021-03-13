type Pipe = {
  <T>(source: T): T;
  <T, A>(source: T, a: (value: T) => A): A;
  <T, A, B>(source: T, a: (value: T) => A, b: (value: A) => B): B;
  <T, A, B, C>(
    source: T,
    a: (value: T) => A,
    b: (value: A) => B,
    c: (value: B) => C,
  ): C;
  <T, A, B, C, D>(
    source: T,
    a: (value: T) => A,
    b: (value: A) => B,
    c: (value: B) => C,
    d: (value: C) => D,
  ): D;
  <T, A, B, C, D, E>(
    source: T,
    a: (value: T) => A,
    b: (value: A) => B,
    c: (value: B) => C,
    d: (value: C) => D,
    e: (value: D) => E,
  ): E;
  <T, A, B, C, D, E, F>(
    source: T,
    a: (value: T) => A,
    b: (value: A) => B,
    c: (value: B) => C,
    d: (value: C) => D,
    e: (value: D) => E,
    f: (value: E) => F,
  ): F;
  <T, A, B, C, D, E, F, G>(
    source: T,
    a: (value: T) => A,
    b: (value: A) => B,
    c: (value: B) => C,
    d: (value: C) => D,
    e: (value: D) => E,
    f: (value: E) => F,
    g: (value: F) => G,
  ): G;
  <T, A, B, C, D, E, F, G, H>(
    source: T,
    a: (value: T) => A,
    b: (value: A) => B,
    c: (value: B) => C,
    d: (value: C) => D,
    e: (value: D) => E,
    f: (value: E) => F,
    g: (value: F) => G,
    h: (value: G) => H,
  ): H;
  <T, A, B, C, D, E, F, G, H, I>(
    source: T,
    a: (value: T) => A,
    b: (value: A) => B,
    c: (value: B) => C,
    d: (value: C) => D,
    e: (value: D) => E,
    f: (value: E) => F,
    g: (value: F) => G,
    h: (value: G) => H,
    i: (value: H) => I,
  ): I;
  <T, A, B, C, D, E, F, G, H, I, J>(
    source: T,
    a: (value: T) => A,
    b: (value: A) => B,
    c: (value: B) => C,
    d: (value: C) => D,
    e: (value: D) => E,
    f: (value: E) => F,
    g: (value: F) => G,
    h: (value: G) => H,
    i: (value: H) => I,
    j: (value: I) => J,
  ): J;
  <T, A, B, C, D, E, F, G, H, I, J, K>(
    source: T,
    a: (value: T) => A,
    b: (value: A) => B,
    c: (value: B) => C,
    d: (value: C) => D,
    e: (value: D) => E,
    f: (value: E) => F,
    g: (value: F) => G,
    h: (value: G) => H,
    i: (value: H) => I,
    j: (value: I) => J,
    k: (value: J) => K,
  ): K;
};

/**
 * pipe 関数は関数型プログラミングにおける「関数合成」をヒューマンリーダブルにした関数です。
 * @param source - 最初に実行する関数の引数
 * @param fns - 関数、可変長引数（上限 12）
 */
export const pipe: Pipe = (source: unknown, ...fns: ((value: unknown) => unknown)[]) => fns.reduce((accmulator, fn) => fn(accmulator), source);
