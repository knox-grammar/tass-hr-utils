/**
 * A helper for environment variables & settings
 */

import dotenv from 'dotenv'
import env from 'env-var'
dotenv.config()

export const config = {
  tokenKey: env.get('TASS_TOKEN_KEY').required().asString(),
  baseUrl: env.get('TASS_BASE_URL').required().asString(),
  companyCode: env.get('TASS_COMPANY_CODE').required().asString(),
  appCode: env.get('TASS_APP_CODE').required().asString(),
}
