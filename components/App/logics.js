import model from './model'
import app from './'

export default {
  onclick() {
    if (model.count < 2) {
      model.count ++
    }
    app()
  }
}
