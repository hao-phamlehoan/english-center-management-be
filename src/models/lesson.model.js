const Model = require('./model')

class Lesson extends Model {
  constructor() {
    super()
  }

  getAll(callback) {
    this.query(
      'SELECT * FROM Buoi_hoc',
    )
      .then(results => callback(results))
      .catch((error) => {
        console.log(error)
        callback(null)
      })
  }

  get(id, callback) {
    this.query(
      'SELECT * FROM Buoi_hoc s WHERE s.ID = ?',
      [id]
    )
      .then(results => {
        if (results.length === 0)
          callback(404, null)
        else
          callback(200, results[0])
      })
      .catch(() => callback(404, null))
  }

  // update(id, newLesson, callback) {
  //   this.query(
  //     `SELECT * FROM Lesson WHERE CID = ?`,
  //     [id]
  //   )
  //   .then(results => {
  //     if (!id || results.length === 0)
  //       throw Error('invalid id')
  //     else {
  //       let query = `UPDATE Lesson SET 
  //                   CID= '${newLesson.CID ? newLesson.CID : results.CID}',
  //                   So_buoi= ${newLesson.So_buoi ? newLesson.So_buoi : results.So_buoi},
  //                   NumStudent= ${newLesson.NumStudent ? newLesson.NumStudent : results.NumStudent},
  //                   DateS= '${newLesson.DateS ? newLesson.DateS : results.DateS}',
  //                   DateE= '${newLesson.DateE ? newLesson.DateE : results.DateE}',
  //                   CType= '${newLesson.CType ? newLesson.CType : results.CType}',
  //                   TID= '${newLesson.TID ? newLesson.TID : results.TID}',
  //                   Des= '${newLesson.Des ? newLesson.Des : results.Des}'
  //                   WHERE CID = ${id}`
  //       console.log(query)
  //       this.query(query)
  //         .then(() => {
  //           callback(200, true, 'update success') 
  //         })
  //         .catch((error) => {
  //           console.log(error)
  //           callback(400, false, 'Something wrong happened, please try again')
  //         })
  //     }
  //   })
  //   .catch(error => {
  //     console.log(error);
  //     if (error.message === 'invalid id')
  //       callback(404, false, error.message)
  //     else
  //       callback(400, false, 'Something wrong happened, please try again')
  //   })
  // }

  // create(newLesson, callback) {
  //     this.query(
  //       'INSERT INTO Lesson SET ?',
  //       {
  //         CID: newLesson.CID,
  //         So_buoi: newLesson.So_buoi,
  //         NumStudent: newLesson.NumStudent,
  //         DateS: newLesson.DateS,
  //         DateE: newLesson.DateE,
  //         CType: newLesson.CType,
  //         TID: newLesson.TID,
  //         Des: newLesson.Des
  //       }
  //     )
  //     .then(() => callback(200, true, 'Create success'))
  //     .catch((error) => {
  //       if (error.includes('Duplicate entry'))
  //         callback(400, false, 'Duplicate entry')
  //       else
  //         callback(400, false, 'something wrong happened, please try again')
  //     })
  // }

  delete(id, callback) {
    this.query(
      `SELECT * FROM Buoi_hoc WHERE ID = ?`,
      [id]
    )
      .then(results => {
        if (results.length === 0)
          throw Error('invalid id')
        else
          return this.query(
            'DELETE FROM Buoi_hoc WHERE ID = ?',
            [id],
          )
      })
      .then(() => {
        callback(200, true, 'delete success')
      })
      .catch(error => {
        console.log(error);
        if (error.message === 'invalid id')
          callback(406, false, error.message)
        else
          callback(400, false, 'something wrong happened, please try again')
      })
  }
}

module.exports = Lesson