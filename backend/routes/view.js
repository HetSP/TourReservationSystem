const express = require("express");
const router = express.Router();
const View = require("../models/Viewmodel");

router.get("/", async (req, res) => {
  try {
    const viewList = await View.find();
    res.json(viewList);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const view = new View({
    tname: req.body.tname,
    tdescription: req.body.tdescription,
    price: req.body.price,
    tnumber: req.body.tnumber,
    image: req.body.image,
  });
  try {
    const savedView = await view.save();
    res.json(savedView);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/search", async (req, res) => {
  console.log(req.body);
  try {
    const searchView = await View.find({ tnumber: req.body.tnumber });
    res.json(searchView);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/delete", async (req, res) => {
  console.log(req.body);
  let returnObject = {};
  try {
    const deleteView = await View.deleteOne({ tnumber: req.body.tnumber });
    //res.json(deleteView);
    returnObject = deleteView;
    console.log(searchView);
  } catch (err) {
    //res.json({ message: err });
    returnObject = {message : err};
  }
  return returnObject;
});

router.patch("/update", async (req, res) => {
  console.log(req.body);
  try {
    const updateView = await View.updateOne(
      { tnumber: req.body.tnumber },
      {
        $set: {
          tname: req.body.tname,
          price: req.body.price,
          tdescription: req.body.tdescription,
          tnumber: req.body.tnumber,
          image: req.body.image,
        },
      }
    );
    res.json(updateView);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
