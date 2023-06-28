export function useGlobals() {
   function printTest() {
     alert("Hello globals");
   }

   return { printTest }
}