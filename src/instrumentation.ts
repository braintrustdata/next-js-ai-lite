import { registerOTel } from "@vercel/otel";
import { BraintrustExporter } from "@braintrust/otel";

export function register() {
  registerOTel({
    serviceName: "my-braintrust-app",
    traceExporter: new BraintrustExporter({
      parent: "project_name:qa-olmo-next-js-otel",
      filterAISpans: true,
    }) as any,
  });
}
