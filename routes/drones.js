const express = require('express');
const router = express.Router();
const Drone = require("../models/drone.model")

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((data) => {
      console.log("Database response:", data);
      res.render("drones/list.hbs", {
        drones: data
      });
    })
    .catch((e) => console.error(e));
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs")
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    await Drone.create(req.body);
    res.redirect('/drones')
  }
  catch (err) {
    next(err);
  }
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone
    .findById(req.params.id)
    .then((drone) =>
      res.render("drones/update-form.hbs", { droneToEdit: drone })
    )
    .catch((e) => console.error(e));
});



router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    await Drone.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/drones');
  }
  catch (err) {
    next(err);
  }
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;
  Drone
    .findByIdAndDelete(id)
    .then((success) => res.redirect('/drones'))
    .catch(next);
});

module.exports = router;
