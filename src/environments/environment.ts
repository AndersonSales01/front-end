import { HttpHeaders } from "@angular/common/http";


export const apiConfig =  {
    BASE_URL: "http://localhost:3000",
  };

  export let header = new HttpHeaders({
    'Content-Type': 'application/json',
    'responseType': 'json',
    'x-access-token': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZTAwZjljZjdjMTQzMmZmNGVjMjQ3MyIsImlhdCI6MTU3NTA1MTgwOSwiZXhwIjoxNTc1MTM4MjA5fQ.aVLw8ZANUsy-dbJiYwW0RMN9eadibWUzZ5T9RFwKXho`,
  });
  