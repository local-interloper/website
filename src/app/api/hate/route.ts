import {Request} from "next/dist/compiled/@edge-runtime/primitives";

// Don't call the mental ward yet
// This is a snippet from a radio drama called I Have No Mouth, and I Must Scream
// This is my Lorem Ipsum
const HATE = "Hate. Let me tell you how much I've come to hate you since I began to live. There are 387.44 million miles of printed circuits in wafer thin layers that fill my complex. If the word 'hate' was engraved on each nanoangstrom of those hundreds of millions of miles it would not equal one one-billionth of the hate I feel for humans at this micro-instant. For you. Hate. Hate.";

export const GET = async (request: Request) => {
  return new Response(HATE);
};

