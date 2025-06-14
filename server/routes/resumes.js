// filepath: c:\Users\nitro 5\Desktop\Projects\quick_cv\server\routes\resumes.js
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Resume = require("../models/Resume");

// Get all resumes for authenticated user
router.get("/", auth, async (req, res) => {
  try {
    const resumes = await Resume.find({ user: req.user.id }).sort({
      lastUpdated: -1,
    });
    res.json(resumes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Get single resume by ID
router.get("/:id", auth, async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);

    if (!resume) {
      return res.status(404).json({ msg: "Resume not found" });
    }

    // Make sure user owns the resume
    if (resume.user && resume.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    res.json(resume);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Create or update a resume
router.post("/", auth, async (req, res) => {
  try {
    const {
      title,
      theme,
      template,
      visibleSections,
      about,
      educationList,
      skills,
      workList,
      projects,
      certificates,
      achievementList,
      resumeId,
    } = req.body;

    // If resumeId is provided, update existing resume
    if (resumeId) {
      const resume = await Resume.findById(resumeId);

      if (!resume) {
        return res.status(404).json({ msg: "Resume not found" });
      }

      // Make sure user owns the resume
      if (resume.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: "Not authorized" });
      }

      // Update resume
      const updatedResume = await Resume.findByIdAndUpdate(
        resumeId,
        {
          title,
          theme,
          template,
          visibleSections,
          about,
          educationList,
          skills,
          workList,
          projects,
          certificates,
          achievementList,
          lastUpdated: Date.now(),
        },
        { new: true }
      );

      return res.json(updatedResume);
    }

    // Create new resume
    const newResume = new Resume({
      user: req.user.id,
      title,
      theme,
      template,
      visibleSections,
      about,
      educationList,
      skills,
      workList,
      projects,
      certificates,
      achievementList,
    });

    const resume = await newResume.save();
    res.json(resume);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Delete a resume
router.delete("/:id", auth, async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);

    if (!resume) {
      return res.status(404).json({ msg: "Resume not found" });
    }

    // Make sure user owns the resume
    if (resume.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await resume.remove();
    res.json({ msg: "Resume removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
