const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Type of exercise required",
        trim: true
      },
      name: {
        type: String,
        required: "Name of exercise required",
        trim: true
      },
      duration: {
        type: Number,
        required: "Duration of exercise required"
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
  ]
});

// WorkoutSchema.methods.setExercises = function(){
//   console.log(JSON.stringify(this) + " line 43")
//   this.exercises = `${this.exercises}`;
//   return this.exercises;
// }

// WorkoutSchema.methods.setDay = function() {
//   console.log(JSON.stringify(this) + " line 49")
//   this.day = Date.now();
//   return this.day;
// };

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;