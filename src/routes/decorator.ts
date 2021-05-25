export const baseName = (path: string) =>
  <T extends { new (...args: any[]): Object }> (target: T) => {
    console.log("Insanciou baby");
    return class extends target {
      getBaseRoute() { return path }
  } 
}