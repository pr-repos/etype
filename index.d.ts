/**
 * 32-bit signed two's complement integer, which has a minimum value of -2^31 and a maximum value of 2^31-1
 * @example 0, 1, 2, -1, -2147483648, 2147483647
 */
export declare type int = number;
/**
 * Single-precision 32-bit IEEE 754 floating point
 * @example 0.1, -1.23
 */
export declare type float = number;
/**
 * Int-like-string
 * @example "100", "-1"
 */
export declare type IntString = string;
/**
 * Float-like-string
 * @example "1.00", "-0.1"
 */
export declare type FloatString = string;
/**
 * Date-like-string which can be converted to Date object by `new Date(foo)`
 * @example "Mon, 19 Oct 2020 13:09:21 GMT", "2020-09-10 17:28:35"
 */
export declare type DateString = string;
/**
 * JSON-string which can be converted to json object by `JSON.parse(foo)`
 * @example "{\"hello\":\"world\"}"
 */
export declare type JSONString = string;
/**
 * Use int to represent a boolean
 * @example 0, 1
 */
export declare type BooleanInt = 0 | 1;
export declare type AnyFunction = (...args: any[]) => any;
