import pinoHttp from "pino-http";

export const httpLogger = pinoHttp({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true
    }
  }
});