const { Schema, model } = require("mongoose");

const BansData = new Schema({
  id: String,
  unbanOn: Number | null,
  reason: String | null,
  moderator: String | null,
  active: (Boolean = true),
  guild: String,
});

/**
 * @typedef {Schema<BansData>}
 */
module.exports.BansModel = model("Ban_Data", BansData);
