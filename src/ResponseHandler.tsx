class ResponseHandler {
  validate = (response: any, onSuccess: Function) => {
    if (response.errors) {
      let errorMsg = "Validation error detected:\n"
      errorMsg += Object.entries(response.errors).map((e: any) => e.join(": ")).join("\n")
      alert(errorMsg)
    }
    else {
      return onSuccess()
    }
  }
}

let responseHandler = new ResponseHandler()
export default function handleResponse() { return responseHandler }
