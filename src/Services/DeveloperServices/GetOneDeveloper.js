import RequestGET from '../RequestServices/WithParameters/RequestGET'

async function GetOneDeveloper(Id_Developer) {
  const GET_ONE_DEVELOPER_URL = 'http://127.0.0.1:8000/Portfolio/Developer/' + Id_Developer
  let Developer = null
  try {
    Developer = await RequestGET(GET_ONE_DEVELOPER_URL)
  } catch {
    Developer = null
  }
  return Developer
}

export default GetOneDeveloper
