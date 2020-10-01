const { Schema, model } = require('mongoose');
const moment = require('moment');

const UserSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            //validate: //insert validaton code here
        },
        thoughts:[
            {
                type: Schema.Types.ObjectId,
                ref: "Thoughts"
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;