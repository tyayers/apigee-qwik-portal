import { component$ } from "@builder.io/qwik";

const schema = `
asyncapi: '2.0.0'
info:
  title: Example
  version: '0.1.0'
channels:
  example-channel:
    subscribe:
      message:
        payload:
          type: object
          properties:
            exampleField:
              type: string
            exampleNumber:
              type: number
            exampleDate:
              type: string
              format: date-time
`;

const config = {
  schemaID: 'custom-spec',
  show: {
    operations: false,
    errors: false,
  },
};

export default component$(() => {

  // const apiSignal = useAPIs();
  return (
    <section S>
      {/* <div dangerouslySetInnerHTML={asyncClientComponent} /> */}
      <iframe style="width: 100%; height: 900px;" src="/docs/broadcastservice/index.html"></iframe>
    </section>
  );
});
