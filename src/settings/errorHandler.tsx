// import StackdriverErrorReporter from 'stackdriver-errors-js'

let errorHandler

// if (process.env.NODE_ENV === 'production') {
// errorHandler = new StackdriverErrorReporter()
// errorHandler.start({
//   key: process.env.GCP_API_KEY,
//   projectId: process.env.GCP_PROJECT_ID,
//   service: `cms_${process.env.NODE_ENV}`,
// })
// } else {
// }

// tslint:disable-next-line:no-console
errorHandler = { report: console.error }

export default errorHandler
