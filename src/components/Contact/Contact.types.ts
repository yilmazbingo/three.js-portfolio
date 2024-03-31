import { FieldValues } from "react-hook-form";

export interface FormFields extends FieldValues {
  name: string;
  email: string;
  message: string;
}

export interface EmailTemplateParams {
  to_name: string;
  from_name: string;
  reply_to: string;
  message: string;
  [key: string]: unknown | string;
}
