import { z } from 'zod'

const tokenSchema = z.object({
  date: z.string(),
  timestamp: z.string(),
})

const nextofkinSchema = z.object({
  town_suburb: z.string(),
  address_line_1: z.union([z.number(), z.string()]),
  country: z.string(),
  address_line_2: z.string(),
  state: z.string(),
  post_code: z.union([z.number(), z.string()]),
  home_phone: z.union([z.number(), z.string()]),
  relationship: z.string(),
  work_phone: z.union([z.number(), z.string()]),
  name: z.string(),
})

const generalSchema = z.object({
  initials: z.string(),
  employment_status: z.string(),
  marital_status: z.string(),
  last_update_on: z.string(),
  position_title: z.string(),
  employee_code: z.union([z.number(), z.string()]),
  position_text: z.string(),
  last_update_by: z.string(),
  preferred_name: z.string(),
  name_suffixes: z.string(),
  gender: z.string(),
  date_of_birth: z.string(),
  surname: z.string(),
  supervisor: z.string(),
  ceider: z.string(),
  start_date: z.string(),
  school_email: z.string(),
  teacher_code: z.string(),
  termination_date: z.string(),
  supervisor_2: z.string(),
  title: z.string(),
  driver_licence_no: z.union([z.number(), z.string()]),
  supplier_code: z.string(),
  given_names: z.string(),
})

const addressSchema = z.object({
  town_suburb: z.string(),
  address_line_1: z.string(),
  address_barcode: z.string(),
  address_description: z.string(),
  address_line_2: z.string(),
  state: z.string(),
  employee_name: z.string(),
  email: z.string(),
  work_phone: z.union([z.number(), z.string()]),
  mobile_phone: z.string(),
  country: z.string(),
  sms: z.string(),
  post_code: z.number(),
  home_phone: z.union([z.number(), z.string()]),
})

const employeeSchema = z.object({
  address: addressSchema,
  general: generalSchema,
  next_of_kin: nextofkinSchema,
})

export const listEmployeesSchema = z.object({
  employees: z.array(employeeSchema),
  __tassversion: z.string(),
  token: tokenSchema,
})

export type ListEmployeesResponse = z.infer<typeof listEmployeesSchema>
