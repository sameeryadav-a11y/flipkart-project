import pino from "pino";

const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  transport: {
    target: "pino-pretty", // for dev only
    options: {
      colorize: true
    }
  }
});

export default logger;