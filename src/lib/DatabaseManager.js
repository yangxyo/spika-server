var mongoose = require("mongoose")
var _ = require("lodash")
var Const = require("../const.js")

var DatabaseManager = {
  messageModel: null,
  userModel: null,
  fileModel: null,

  init: function (options) {
    var self = this

    // Connection to our chat database
    console.log("Connecting mongoDB " + options.chatDatabaseUrl)

    try {
      mongoose.connect(options.chatDatabaseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      })
      // Defining a schema
      self.setupSchema()
    } catch (ex) {
      console.log("Failed to connect MongoDB!")

      throw ex
    }
  },

  setupSchema: function () {
    this.messageModel = require("../Models/MessageModel").init()
    this.userModel = require("../Models/UserModel").init()
    this.fileModel = require("../Models/FileModel").init()
  },
}

module["exports"] = DatabaseManager
