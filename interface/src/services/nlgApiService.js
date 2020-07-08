import axios from "axios";
 
class NlgApiService {
  constructor(nlgApiBaseUrl) {
    this.baseUrl = nlgApiBaseUrl;
    this.headers = {
      'headers': {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Methods': 'GET, POST',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-api-key',
        'Access-Control-Allow-Credentials': 'true'
      }
    }
  }

  async getTurnText(style, context) {
    let reqInstance = axios.create(this.headers);
    console.log(this.baseUrl);
    console.log(style);
    console.log(context);
    let test = await reqInstance.post(this.baseUrl, {style: style, context: context});
    console.log(test);
  }
}

export default NlgApiService;