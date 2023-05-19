import "reflect-metadata";

const configMetadataKey = Symbol("config");

export function config(config: object) {
  return function (target: any){
    Reflect.defineMetadata(configMetadataKey, config, target);
  }
}
export function getConfig(target: any) {
  return Reflect.getMetadata(configMetadataKey, target);
}


