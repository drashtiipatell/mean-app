export class Service {
    constructor(public _id: string, public name: string, public contact: string,public address: string, public time: string) {}
  }
   
  export class ResponseResult {
    constructor(public status: number, public message: string) {}
  }
  