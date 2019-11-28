import { HttpHeaders } from "@angular/common/http";


export const apiConfig =  {
    BASE_URL: "http://localhost:3000",
  };

  export let header = new HttpHeaders({
    'Content-Type': 'application/json',
    'responseType': 'json',
    'x-access-token': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDgyY2U0MmNmNWFkMDE3MmU0NzQ5MSIsImlhdCI6MTU3NDk0NTM3OCwiZXhwIjoxNTc1MDMxNzc4fQ.WMLhXLeqp8cpC4hxpRYSZWhY2oInwVlf_38-1Pi2-lE`,
  });
  