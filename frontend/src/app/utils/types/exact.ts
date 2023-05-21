export type Exact<T> = Pick<
  T,
  { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]
>;

// function testFunction<T extends keyof CommonType>(
//   outputType: T,
// ): CommonType[T] {
//   //type[T]
//   console.log(outputType);
//   console.log(outputType === CommonDataType.number);
//   console.log(outputType === CommonDataType.string);
//
//   if (outputType === CommonDataType.number) {
//     return 1000 as CommonType[T];
//   }
//
//   if (outputType === CommonDataType.string) {
//     return 'aaaa' as CommonType[T];
//   }
//
//   if (outputType === CommonDataType.date) {
//     return new Date() as CommonType[T];
//   }
//   // type;
//   switch (outputType) {
//     case CommonDataType.number:
//       return 1000 as CommonType[T]; //transform
//     case CommonDataType.string:
//       return 'aaaa' as CommonType[T];
//     // case Type.Date:
//     //   return new Date();
//     default:
//       throw new Error('Unrecognized type.');
//   }
// }
// const aaa = testFunction(CommonDataType.number);
// const aaa1 = testFunction(CommonDataType.string);
// const aaa2 = testFunction(CommonDataType.date);
// console.log(aaa);
