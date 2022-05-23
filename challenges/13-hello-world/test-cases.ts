import { Equal, Expect, NotAny } from "@type-challenges/utils";

// type HelloWorld = any;

type HelloWorld = string;
type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];