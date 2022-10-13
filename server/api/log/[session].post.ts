import { writeLog } from "~~/services/logs.service"

export default defineEventHandler(async (event) => {
  try {
    const body = await useBody(event)
    const message = body.message;
    const dateTime = new Date().toISOString();

    writeLog(event.context.params.session, {
      lastLogContent: message,
      lastLogDateTime: dateTime,
    })
    
    return {
      ok: true,
    }
  } catch (error) {
    return {
      error
    }
  }
})