# ES 스펙 살펴보기

## ES2020

### Nullish Coalescing Operator

a ?? b 로 나타내는 연산자입니다. null이나 undefined일 때만 b를 반환합니다.

0은 false를 의미하기도 합니다. 따라서 0 || 'A' 는 A 가 될겁니다. 하지만 0이 의미있는 값이면 0 또한 사용해야 할 것입니다. 또한 삼항 연산자를 단축시켜 사용할 수 있는 장점도 있습니다.

예제를 통해 살펴봅시다.

```js
0 || 'A'    // A
0 ?? 'A'    // 0

0 ? 0 : 'A' // A
0 ?? 'A'    // 0
```

### Optional Chaining

foo.a.b 에 접근한다고 했을 때, a가 없다면 오류가 발생하게 됩니다.
따라서 오류를 방지하기 위해 `if(foo.a && foo.a.b)` 와 같이 사용하곤 합니다.

하지만 Optional Chaining을 이용하면 오류가 발생하지 않고 undefined를 반환받습니다.
Optional Chaining은 `foo.a?.b` 와 같이 표현합니다.

```js
const foo = {
  a: {
    b: true
  }
};

console.log(foo.a.b); // true
console.log(foo.b?.b); // undefined

console.log(foo.b.aa); // TypeError: Cannot read property 'aa' of undefined
```

### BigInt

BigInt는 2^53 보다 큰 정수를 취급하기 위해 등장했습니다.
숫자 뒤에 n이 붙는 특징을 가지고 있습니다. 예로 10n 은 숫자 10을 뜻한다는 의미입니다.

자세한 예와 설명은 아래 예제로 설명하겠습니다.

```js
const int1 = Number.MAX_SAFE_INTEGER + 1;
// 9007199254740992

const int2 = Number.MAX_SAFE_INTEGER + 2;
// 9007199254740992  <= ~993이 아니다.

const bigInt2 = BigInt(Number.MAX_SAFE_INTEGER) + 2n;
// 9007199254740993n <= ~993이 되었다.

console.log(typeof int1, typeof int2, typeof bigInt2);
// number number bigint

console.log(typeof 9007199254740993n); // bigint
console.log(9007199254740993n === bigInt2); // true
// 일반적인 숫자 뒤에 n을 붙이는 것으로 bitint 타입을 가진다는 것을 알 수 있습니다.

console.log(BigInt(10), BigInt(10n));
// 10n 10n <= BitInt의 인자로는 n의 여부가 중요하지 않다.

console.log(10 === BigInt(10)); // false
console.log(10 == BigInt(10)); // true

// console.log(9007199254740993n + 1);
// 위 코드는 에러가 발생한다. bigint를 연산할때는 number 타입과 섞어쓰는 것이 안된다.
```
