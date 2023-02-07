#!/usr/bin/env tsx

/**
 * This is a quick script to list all employees in the HR system.
 *
 * It's heavily based on the TASS example file for JS at
 * https://github.com/TheAlphaSchoolSystemPTYLTD/api-introduction/blob/master/encryptDecrypt.js
 */

import { config } from './src/config'
import { encryptParams } from './src/encrypt-params'
import got from 'got'
import https from 'https'
import crypto from 'crypto'
import { ListEmployeesResponse } from './src/schemas/list-employees-schema'

export async function main(): Promise<void> {
  const tokenKey = config.tokenKey
  const endPoint = config.baseUrl
  const appCode = config.appCode
  const companyCode = config.companyCode
  const version = '2'
  const method = 'getEmployeesDetails'

  // Target date in YYYY-MM-DD format (or today)
  const employeesAtDate =
    process.argv.slice(2)[0] || new Date().toISOString().split('T')[0]
  console.log('Looking at employee data for date:', employeesAtDate)

  const params = {
    date: employeesAtDate,
  }

  const encryptedParams = encryptParams(params, tokenKey)

  /**
   * Fetch the response
   * NB. the SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION option has to be set due to Knox's Palo Alto firewall
   * see https://live.paloaltonetworks.com/t5/general-topics/ssl-routines-unsafe-legacy-renegotiation-disabled/td-p/520652
   */
  const response = await got
    .get(endPoint, {
      searchParams: {
        appCode,
        company: companyCode,
        v: version,
        method,
        token: encryptedParams,
      },
      agent: {
        https: new https.Agent({
          secureOptions:
            crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION,
        }),
      },
    })
    .json<ListEmployeesResponse>()

  if (response) {
    console.log('Employee count:', response.employees.length)
    console.log('first employee', response.employees[0])
  }
}

main().catch((error) => {
  console.error('An error occurred:', error)
  process.exit(1)
})
