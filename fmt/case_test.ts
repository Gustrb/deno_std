import * as casing from './case.ts';
import { assertEquals, assertThrows } from "../testing/asserts.ts";

Deno.test("toPascalCase: Throws in invalid inputs", () => {
    assertThrows(() => casing.toPascalCase(undefined as any));
    assertThrows(() => casing.toPascalCase(NaN as any));
    assertThrows(() => casing.toPascalCase(Infinity as any));
    assertThrows(() => casing.toPascalCase(10 as any));
});

Deno.test("toPascalCase: An empty string is already pascal case", () => {
    assertEquals(casing.toPascalCase(''), '');
});

Deno.test("toPascalCase: Convert a single word to pascal case", () => {
    const SINGLE_WORD = "shruberry";
    const EXPECTED = "Shruberry";
    assertEquals(casing.toPascalCase(SINGLE_WORD), EXPECTED);
});

Deno.test("toPascalCase: Convert a sentence into pascal case", () => {
    assertEquals(
        casing.toPascalCase("she turned me into a newt"), 
        "SheTurnedMeIntoANewt"
    );
    assertEquals(
        casing.toPascalCase("tis But a Scratch"), 
        "TisButAScratch"
    );
});

Deno.test("toSnakeCase: Throws in invalid inputs", () => {
    assertThrows(() => casing.toSnakeCase(undefined as any));
    assertThrows(() => casing.toSnakeCase(NaN as any));
    assertThrows(() => casing.toSnakeCase(Infinity as any));
    assertThrows(() => casing.toSnakeCase(10 as any));
});

Deno.test("toSnakeCase: An empty string is already snake case", () => {
    assertEquals(casing.toSnakeCase(''), '');
});

Deno.test("toSnakeCase: Convert a single word to snake case", () => {
    const SINGLE_WORD = "shruberry";
    const EXPECTED = "shruberry";
    assertEquals(casing.toSnakeCase(SINGLE_WORD), EXPECTED);
});

Deno.test("toSnakeCase: Convert a sentence into snake case", () => {
    assertEquals(
        casing.toSnakeCase("she turned me into a newt"), 
        "she_turned_me_into_a_newt"
    );
    assertEquals(
        casing.toSnakeCase("tis But a Scratch"), 
        "tis_but_a_scratch"
    );
});

Deno.test("toScreamingSnakeCase: Throws in invalid inputs", () => {
    assertThrows(() => casing.toScreamingSnakeCase(undefined as any));
    assertThrows(() => casing.toScreamingSnakeCase(NaN as any));
    assertThrows(() => casing.toScreamingSnakeCase(Infinity as any));
    assertThrows(() => casing.toScreamingSnakeCase(10 as any));
});

Deno.test("toScreamingSnakeCase: An empty string is already screaming snake case", () => {
    assertEquals(casing.toScreamingSnakeCase(''), '');
});

Deno.test("toScreamingSnakeCase: Convert a single word to screaming snake case", () => {
    const SINGLE_WORD = "shruberry";
    const EXPECTED = "SHRUBERRY";
    assertEquals(casing.toScreamingSnakeCase(SINGLE_WORD), EXPECTED);
});

Deno.test("toScreamingSnakeCase: Convert a sentence into screaming snake case", () => {
    assertEquals(
        casing.toScreamingSnakeCase("she turned me into a newt"), 
        "SHE_TURNED_ME_INTO_A_NEWT"
    );
    assertEquals(
        casing.toScreamingSnakeCase("tis But a Scratch"), 
        "TIS_BUT_A_SCRATCH"
    );
});

Deno.test("toKebabCase: Throws in invalid inputs", () => {
    assertThrows(() => casing.toKebabCase(undefined as any));
    assertThrows(() => casing.toKebabCase(NaN as any));
    assertThrows(() => casing.toKebabCase(Infinity as any));
    assertThrows(() => casing.toKebabCase(10 as any));
});

Deno.test("toKebabCase: An empty string is already snake case", () => {
    assertEquals(casing.toKebabCase(''), '');
});

Deno.test("toKebabCase: Convert a single word to snake case", () => {
    const SINGLE_WORD = "shruberry";
    const EXPECTED = "shruberry";
    assertEquals(casing.toKebabCase(SINGLE_WORD), EXPECTED);
});

Deno.test("toKebabCase: Convert a sentence into snake case", () => {
    assertEquals(
        casing.toKebabCase("she turned me into a newt"), 
        "she-turned-me-into-a-newt"
    );
    assertEquals(
        casing.toKebabCase("tis But a Scratch"), 
        "tis-but-a-scratch"
    );
});

Deno.test("toCamelCase: Throws in invalid inputs", () => {
    assertThrows(() => casing.toCamelCase(undefined as any));
    assertThrows(() => casing.toCamelCase(NaN as any));
    assertThrows(() => casing.toCamelCase(Infinity as any));
    assertThrows(() => casing.toCamelCase(10 as any));
});

Deno.test("toCamelCase: An empty string is already camel case", () => {
    assertEquals(casing.toCamelCase(''), '');
});

Deno.test("toCamelCase: Convert a single word to camel case", () => {
    const SINGLE_WORD = "shruberry";
    const EXPECTED = "shruberry";
    assertEquals(casing.toCamelCase(SINGLE_WORD), EXPECTED);
});

Deno.test("toCamelCase: Convert a sentence into camel case", () => {
    assertEquals(
        casing.toCamelCase("she turned me into a newt"), 
        "sheTurnedMeIntoANewt"
    );
    assertEquals(
        casing.toCamelCase("tis But a Scratch"), 
        "tisButAScratch"
    );
});
