import validator from '../mod.ts';
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";


console.log(validator.contains('hello world', 'hellos'))
console.log(validator.contains("hello", "hello"));