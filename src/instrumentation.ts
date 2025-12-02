import { registerOTel } from "@vercel/otel";

export async function register() {
    const { BraintrustExporter } = await import("@braintrust/otel");
    registerOTel({
      serviceName: "my-braintrust-app",
      traceExporter: new BraintrustExporter({
        parent: "project_name:qa-olmo-next-js-otel",
        filterAISpans: true,
      }),
    });
}
