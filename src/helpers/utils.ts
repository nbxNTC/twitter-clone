import { Log } from 'helpers/types'

export const printLog = async ({ type, componentName, functionName, message, stackTrace }: Log) => {
  const currentDate = new Date().toISOString()

  const formattedStackTrace = stackTrace ? JSON.stringify(stackTrace) : 'Não informado'

  const content = `[strider-front-assessment] [Tipo: ${type}] [Componente: ${componentName}] [Função: ${functionName}] [Data: ${currentDate}] [Mensagem: ${message}] [Erro: ${formattedStackTrace}]`

  return console[type](content)
}
