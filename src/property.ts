import "reflect-metadata";

const propertyMetadataKey = Symbol("property");

export function property(definition: { required: boolean; type: string }) {
  return Reflect.metadata(propertyMetadataKey, definition);
}
export function getProperty(target: any, propertyKey: string) {
  return Reflect.getMetadata(propertyMetadataKey, target, propertyKey);
}

export function getSchema(target: any) {
  const metadata = Object.keys(target).map((k) =>
    [k,Reflect.getMetadata(propertyMetadataKey, target, k)]
  );
  const properties:{[k: string]: any} = {};
  const required: string[] = [];
  metadata.forEach(([k,metadata]) => {
        properties[k] = {type: metadata.type}
        if(metadata.required){
            required.push(k)
        }
  })
  return {
    type: "object",
    properties,
    required,
  };;
}
