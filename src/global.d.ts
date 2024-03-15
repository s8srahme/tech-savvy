/**
 * This type declaration file only contains publicly accessible types (which has global scope). Whether or not you
 * include an export statement in this file, the app should compile. However, the export statement will prevent your
 * code linter from finding the type definitions unless you also import them manually.
 *
 * Subtyping (aka subtype polymorphism) is a form of type polymorphism, which is a datatype that is related to another
 * datatype (supertype) by some notion of substitutability, meaning the subtype must satisfy the features (values,
 * methods and properties) of the parent type. The subtyping relation means that in any context where the supertype is
 * expected, it can be substitutable by a subtype, without affecting the behaviour of the execution. The precise
 * semantics of subtyping here crucially depends on the particulars of how "safely be used".
 */

/**
 * NOTE: - Generic type E must be assignable only to enum types
 * 			 - Generic type K represents union type with all enum keys as strings
 */
type EnumObject<E, K extends string> = Record<K, E>;

/**
 * Conditional types are a ternary conditional operator applied at the type level rather than at the value level. They
 * can be recursive, i.e. one (or both) of the branches can themselves be a conditional type. extends keyword here
 * means that any value of type S is also of type T (subtyping).
 */
type AssertionType<S, T> = S extends T ? S : never;

type Environment = "production" | "development" | "test";
