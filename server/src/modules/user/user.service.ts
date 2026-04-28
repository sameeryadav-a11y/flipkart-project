import logger from "../../shared/utils/logger";

export const getUser = async () => {
  logger.info("Fetching user information");
  return {
    status: "OK",
    service: "backend-running",
  };
};